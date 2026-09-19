<template>
  <q-page class="dash">

    <!-- Header strip -->
    <div class="dash-header">
      <div class="dash-header__bar"></div>
      <div class="dash-header__main">
        <div class="dash-header__id">
          <q-icon name="mdi-hospital-box-outline" size="20px" />
          <span>ระบบวิเคราะห์ข้อมูลโรงพยาบาล</span>
        </div>
        <h1>สถิติผู้ป่วยและรายได้</h1>
        <p>ภาพรวม OPD / IPD แบบเรียลไทม์ เพื่อสนับสนุนการตัดสินใจของทีมบริหาร</p>
      </div>
      <div class="dash-header__status">
        <span class="status-dot" :class="connected === false ? 'is-warn' : connected ? 'is-ok' : 'is-idle'"></span>
        <span class="status-text">
          {{
            connected === null
              ? 'กำลังตรวจสอบการเชื่อมต่อ…'
              : connected
                ? 'เชื่อมต่อ API สำเร็จ'
                : 'โหมดสาธิต (ยังไม่พบ API จริง)'
          }}
        </span>
        <span v-if="lastUpdated" class="status-updated">
          อัปเดต {{ lastUpdated.toLocaleTimeString('th-TH') }}
        </span>
      </div>
    </div>

    <!-- Filter bar -->
    <div class="filter-bar">
      <div class="filter-field" :class="{ disabled: activeView.noDateFilter }">
        <label>วันที่</label>
        <q-input v-model="datePicker" type="date" dense borderless class="filter-input" />
      </div>
      <div class="filter-field" :class="{ disabled: activeView.noDateFilter }">
        <label>เวลาเริ่ม</label>
        <q-input
          v-model="timeStart"
          type="time"
          step="1"
          readonly
          dense
          borderless
          placeholder="--:--:--"
          class="filter-input filter-input--time"
        >
          <template #append>
            <q-btn round dense flat icon="schedule" size="sm" @click.stop>
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
                @before-show="timeStartDraft = timeStart || '00:00:00'"
              >
                <q-time v-model="timeStartDraft" format24h with-seconds>
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="ล้าง" flat dense color="negative" v-close-popup @click="timeStart = ''" />
                    <q-btn label="ตกลง" flat dense color="primary" v-close-popup @click="timeStart = timeStartDraft" />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-btn>
          </template>
        </q-input>
      </div>
      <div class="filter-field" :class="{ disabled: activeView.noDateFilter }">
        <label>เวลาสิ้นสุด</label>
        <q-input
          v-model="timeEnd"
          type="time"
          step="1"
          readonly
          dense
          borderless
          placeholder="--:--:--"
          class="filter-input filter-input--time"
        >
          <template #append>
            <q-btn round dense flat icon="schedule" size="sm" @click.stop>
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
                @before-show="timeEndDraft = timeEnd || nowTimeStr()"
              >
                <q-time v-model="timeEndDraft" format24h with-seconds>
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="ล้าง" flat dense color="negative" v-close-popup @click="timeEnd = ''" />
                    <q-btn label="ตกลง" flat dense color="primary" v-close-popup @click="timeEnd = timeEndDraft" />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-btn>
          </template>
        </q-input>
      </div>
      <div class="filter-divider"></div>
      <div class="preset-group">
        <button class="preset-btn preset-btn--clear" @click="clearFilters">
          <q-icon name="mdi-filter-remove-outline" size="14px" />
          ล้างข้อมูล
        </button>
      </div>
      <q-space />
      <div class="action-group">
        <button class="action-btn" :disabled="loading" @click="loadCurrentView">
          <q-icon name="mdi-refresh" size="16px" :class="{ spin: loading }" />
          รีเฟรช
        </button>

        <q-btn-dropdown
          class="action-btn action-btn--dropdown"
          no-caps
          flat
          dense
          :disable="exporting"
        >
          <template #label>
            <q-icon name="mdi-tray-arrow-down" size="16px" class="q-mr-xs" :class="{ spin: exporting }" />
            CSV
          </template>
          <q-list>
            <q-item clickable v-close-popup @click="exportCsv('current')">
              <q-item-section>เฉพาะหน้านี้</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="exportCsv('all')">
              <q-item-section>ทุกหน้า</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          class="action-btn action-btn--dropdown"
          no-caps
          flat
          dense
          :disable="exporting"
        >
          <template #label>
            <q-icon name="mdi-file-excel-outline" size="16px" class="q-mr-xs" :class="{ spin: exporting }" />
            Excel
          </template>
          <q-list>
            <q-item clickable v-close-popup @click="exportExcel('current')">
              <q-item-section>เฉพาะหน้านี้</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="exportExcel('all')">
              <q-item-section>ทุกหน้า</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          class="action-btn action-btn--dropdown"
          no-caps
          flat
          dense
          :disable="exporting"
        >
          <template #label>
            <q-icon name="mdi-file-pdf-box" size="16px" class="q-mr-xs" :class="{ spin: exporting }" />
            PDF
          </template>
          <q-list>
            <q-item clickable v-close-popup @click="exportPdf('current')">
              <q-item-section>เฉพาะหน้านี้</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="exportPdf('all')">
              <q-item-section>ทุกหน้า</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>

    <!-- Section tabs -->
    <div class="tab-strip">
      <button
        v-for="v in VIEWS"
        :key="v.key"
        class="tab"
        :class="{ active: activeViewKey === v.key }"
        @click="switchView(v.key)"
      >
        <q-icon :name="v.icon" size="16px" />
        <span class="tab__main">{{ v.label }}</span>
        <span class="tab__sub">{{ v.sub }}</span>
      </button>
    </div>

    <!-- KPI strip -->
    <div class="vitals-strip">
      <div v-for="kpi in animatedKpis" :key="kpi.label" class="vital" :style="{ '--vital-accent': kpi.color }">
        <q-icon :name="kpi.icon" size="16px" class="vital__icon" />
        <div class="vital__label">{{ kpi.label }}</div>
        <div class="vital__value">{{ kpi.display }}<span class="vital__unit">{{ kpi.unit }}</span></div>
      </div>
    </div>

    <!-- Chart row: trend line + composition pie -->
    <div class="chart-grid">
      <section class="panel panel--line">
        <div class="panel-head">
          <div>
            <h2>{{ activeView.chartTitle }}</h2>
            <p>
              {{
                activeView.key === 'ipdBed'
                  ? 'เรียงตามอัตราครองเตียงสูงสุด 10 อันดับแรก'
                  : `เรียงตาม${metric === 'income' ? 'รายได้' : 'จำนวนครั้ง'}สูงสุด 10 อันดับแรก`
              }}
            </p>
          </div>
          <div v-if="activeView.key !== 'ipdBed'" class="metric-toggle">
            <button :class="{ active: metric === 'count' }" @click="metric = 'count'">จำนวนครั้ง</button>
            <button :class="{ active: metric === 'income' }" @click="metric = 'income'">รายได้</button>
          </div>
        </div>
        <div class="chart-box">
          <div class="chart-scroll">
            <canvas ref="canvasRef"></canvas>
          </div>
        </div>
      </section>

      <section class="panel panel--pie">
        <div class="panel-head">
          <div>
            <h2>สัดส่วนรวม</h2>
            <p>
              {{
                activeView.key === 'ipdBed'
                  ? 'ครองเตียง เทียบกับ เตียงว่าง'
                  : `แบ่งตาม${metric === 'income' ? 'รายได้' : 'จำนวนครั้ง'} ทั้งหมด`
              }}
            </p>
          </div>
        </div>
        <div class="pie-box">
          <canvas ref="pieCanvasRef"></canvas>
        </div>
      </section>
    </div>

    <!-- Table panel -->
    <section class="panel panel--table">
      <q-table
        :rows="currentRows"
        :columns="columns"
        :loading="loading"
        :row-key="rowKeyFn"
        flat
        :filter="search"
        :pagination="{ rowsPerPage: 8 }"
        class="dash-table"
      >
        <template #top-left>
          <div class="table-search">
            <q-icon name="mdi-magnify" size="16px" />
            <input v-model="search" placeholder="ค้นหาชื่อ…" />
          </div>
        </template>

        <template #body-cell-occupancyRate="props">
          <q-td :props="props" class="text-right">
            <span class="occ-pill" :class="occClass(toNum(props.row.occupancyRate))">
              {{ toNum(props.row.occupancyRate).toFixed(1) }}%
            </span>
          </q-td>
        </template>

        <template #no-data>
          <div class="empty-state">
            <q-icon name="mdi-database-search-outline" size="24px" />
            <span>ไม่พบข้อมูลตรงกับคำค้นหา ลองแก้คำค้นหาหรือช่วงเวลา</span>
          </div>
        </template>
      </q-table>
    </section>


  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';
import * as XLSX from 'xlsx'; // npm install xlsx
import jsPDF from 'jspdf'; // npm install jspdf
import html2canvas from 'html2canvas'; // npm install html2canvas
import { api } from '@/boot/axios';// Quasar's configured axios instance (src/boot/axios.ts)

/* ============================== Types ============================== */
interface DashboardStatRow {
  depGroup: string | number;
  nameTitle: string;
  hnCount: number;
  vnCount?: number;
  anCount: number;
  income: number;
  billAmount: number;
  ucMoney: number;
}
interface IpdBedRow {
  wardCode: string;
  wardName: string;
  totalBeds: number;
  currentAdmit: number;
  occupancyRate: number;
  availableBeds: number;
}
type DashboardRow = DashboardStatRow | IpdBedRow;
type ViewKind = 'opd' | 'ipd' | 'bed';
type ViewKey = 'dep' | 'pttype' | 'ipdWard' | 'ipdPttype' | 'ipdBed';

interface ViewConfig {
  key: ViewKey;
  endpoint: string;
  dataKey: string;
  label: string;
  sub: string;
  chartTitle: string;
  icon: string;
  kind: ViewKind;
  /** Label used for the primary/first column (department, ward, coverage type, …) */
  primaryLabel: string;
  noDateFilter?: boolean;
}

interface ExportColumn {
  name: string;
  label: string;
  field: string;
  /** How to aggregate this column in a totals/summary row. Omit for non-numeric columns. */
  agg?: 'sum' | 'avg';
}

/** Data for the colored summary banner at the top of a PDF export (OPD/IPD sections only). */
interface SummaryHeaderData {
  kindLabel: string;
  totalIncome: number;
  totalCash: number;
  totalReceivable: number;
  totalVisits: number;
  totalAdmit?: number;
}

/* ============================== Small utils ============================== */
function toNum(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function pad2(n: number) { return String(n).padStart(2, '0'); }
function todayStr() { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function nowTimeStr() {
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
}

function seedFromString(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return function rng() {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DEMO_NAMES: Record<string, string[]> = {
  dep: ['010 ทันตกรรม', 'อายุรกรรม', 'ศัลยกรรม', 'สูตินรีเวชกรรม', 'กุมารเวชกรรม', 'จักษุ', 'โสต ศอ นาสิก', 'เวชศาสตร์ฟื้นฟู', 'โรคผิวหนัง', 'จิตเวช'],
  pttype: ['ชำระเงินเอง', 'ประกันสังคม', 'บัตรทอง (UC)', 'ข้าราชการ/รัฐวิสาหกิจ', 'ประกันสุขภาพเอกชน', 'พรบ.ผู้ประสบภัยจากรถ'],
  ipdWard: ['อายุรกรรมชาย', 'อายุรกรรมหญิง', 'ศัลยกรรมชาย', 'ศัลยกรรมหญิง', 'กุมารเวชกรรม', 'สูติ-นรีเวชกรรม', 'ICU อายุรกรรม', 'ICU ศัลยกรรม'],
  ipdPttype: ['ชำระเงินเอง', 'ประกันสังคม', 'บัตรทอง (UC)', 'ข้าราชการ/รัฐวิสาหกิจ', 'ประกันสุขภาพเอกชน'],
};

function buildDemoRows(view: ViewConfig, filterKey: string): DashboardRow[] {
  const rng = seedFromString(`${view.key}|${filterKey}`);
  if (view.key === 'ipdBed') {
    return DEMO_NAMES.ipdWard!.map((name, i) => {
      const totalBeds = 10 + Math.floor(rng() * 20);
      const currentAdmit = Math.min(totalBeds, Math.floor(rng() * totalBeds * 1.05));
      return {
        wardCode: `W${String(i + 1).padStart(2, '0')}`,
        wardName: name,
        totalBeds,
        currentAdmit,
        occupancyRate: totalBeds ? Math.round((currentAdmit / totalBeds) * 10000) / 100 : 0,
        availableBeds: totalBeds - currentAdmit,
      };
    });
  }
  const names = DEMO_NAMES[view.key] ?? DEMO_NAMES.dep!;
  return names.map((name, i) => {
    const hnCount = Math.floor(rng() * 60) + 3;
    const vnCount = view.kind === 'opd' ? hnCount + Math.floor(rng() * 15) : undefined;
    const anCount = view.kind === 'ipd' ? Math.max(1, Math.floor(hnCount * 0.6)) : 0;
    const income = Math.round(rng() * 180000 + 20000);
    const billAmount = Math.round(income * (0.75 + rng() * 0.2));
    const ucMoney = Math.round(income - billAmount);
    return { depGroup: view.key === 'dep' ? String(10 + i).padStart(3, '0') : i + 1, nameTitle: name, hnCount, vnCount, anCount, income, billAmount, ucMoney };
  });
}

/* ============================== View config ============================== */
const VIEWS: ViewConfig[] = [
  { key: 'dep', endpoint: '/dashboard/dep', dataKey: 'dep', label: 'แผนกผู้ป่วยนอก', sub: 'OPD ตามแผนก', chartTitle: 'ภาพรวมรายแผนก (OPD)', icon: 'mdi-hospital-building', kind: 'opd', primaryLabel: 'แผนก' },
  { key: 'pttype', endpoint: '/dashboard/pttype', dataKey: 'Pttype', label: 'สิทธิผู้ป่วยนอก', sub: 'OPD ตามสิทธิการรักษา', chartTitle: 'ภาพรวมตามสิทธิการรักษา (OPD)', icon: 'mdi-card-account-details-outline', kind: 'opd', primaryLabel: 'สิทธิการรักษา' },
  { key: 'ipdWard', endpoint: '/dashboard/ipdWard', dataKey: 'IpdWard', label: 'หอผู้ป่วยใน', sub: 'IPD ตามหอผู้ป่วย', chartTitle: 'ภาพรวมรายหอผู้ป่วย (IPD)', icon: 'mdi-bed-outline', kind: 'ipd', primaryLabel: 'แผนก' },
  { key: 'ipdPttype', endpoint: '/dashboard/ipdPttype', dataKey: 'IpdPttype', label: 'สิทธิผู้ป่วยใน', sub: 'IPD ตามสิทธิการรักษา', chartTitle: 'ภาพรวมตามสิทธิการรักษา (IPD)', icon: 'mdi-card-account-details-outline', kind: 'ipd', primaryLabel: 'สิทธิการรักษา' },
  { key: 'ipdBed', endpoint: '/dashboard/ipdBed', dataKey: 'IpdBed', label: 'เตียงผู้ป่วยใน', sub: 'อัตราครองเตียงปัจจุบัน', chartTitle: 'อัตราครองเตียงรายหอผู้ป่วย', icon: 'mdi-bed', kind: 'bed', primaryLabel: 'แผนก', noDateFilter: true },
];

/* ============================== State ============================== */
const activeViewKey = ref<ViewKey>('dep');
const activeView = computed(() => VIEWS.find((v) => v.key === activeViewKey.value)!);

const datePicker = ref('');
const timeStart = ref('');
const timeEnd = ref('');
const timeStartDraft = ref('00:00:00');
const timeEndDraft = ref(nowTimeStr());

const rowsCache = reactive<Record<string, DashboardRow[]>>({});
const loading = ref(false);
const exporting = ref(false);
const connected = ref<boolean | null>(null);
const lastUpdated = ref<Date | null>(null);
const metric = ref<'count' | 'income'>('count');
const search = ref('');

const currentRows = computed(() => rowsCache[activeViewKey.value] ?? []);

function filterKeyFor(view: ViewConfig) {
  return view.noDateFilter ? 'nofilter' : `${datePicker.value}|${timeStart.value}|${timeEnd.value}`;
}

function extractRows(payload: unknown, dataKey: string): DashboardRow[] | null {
  if (Array.isArray(payload)) return payload as DashboardRow[];
  if (!payload || typeof payload !== 'object') return null;

  const obj = payload as Record<string, unknown>;

  if (Array.isArray(obj[dataKey])) return obj[dataKey] as DashboardRow[];

  const ciKey = Object.keys(obj).find((k) => k.toLowerCase() === dataKey.toLowerCase());
  if (ciKey && Array.isArray(obj[ciKey])) return obj[ciKey] as DashboardRow[];

  for (const wrapperKey of ['data', 'result', 'payload', 'items', 'rows']) {
    const inner = obj[wrapperKey];
    if (Array.isArray(inner)) return inner as DashboardRow[];
    if (inner && typeof inner === 'object') {
      const found = extractRows(inner, dataKey);
      if (found) return found;
    }
  }

  const anyArrayKey = Object.keys(obj).find((k) => Array.isArray(obj[k]));
  if (anyArrayKey) return obj[anyArrayKey] as DashboardRow[];

  return null;
}

async function fetchView(view: ViewConfig): Promise<DashboardRow[]> {
  const params: Record<string, string> = {};
  if (!view.noDateFilter) {
    if (datePicker.value) params.datePicker = datePicker.value;
    params.timeStart = timeStart.value || '00:00:00';
    params.timeEnd = timeEnd.value || '23:59:59';
  }
  try {
    const res = await api.get(view.endpoint, { params, timeout: 4000 });
    const rows = extractRows(res.data, view.dataKey);
    if (!Array.isArray(rows)) throw new Error('unexpected response shape');
    connected.value = true;
    return rows;
  } catch (err) {
    console.error(`[dashboard] ${view.endpoint} failed, showing demo data:`, err);
    connected.value = false;
    return buildDemoRows(view, filterKeyFor(view));
  }
}

async function loadCurrentView() {
  loading.value = true;
  try {
    const rows = await fetchView(activeView.value);
    rowsCache[activeViewKey.value] = rows;
    lastUpdated.value = new Date();
  } finally {
    loading.value = false;
  }
}

async function getRowsForView(view: ViewConfig): Promise<DashboardRow[]> {
  if (rowsCache[view.key]) return rowsCache[view.key]!;
  const rows = await fetchView(view);
  rowsCache[view.key] = rows;
  return rows;
}

function switchView(key: ViewKey) {
  activeViewKey.value = key;
  search.value = '';
  void loadCurrentView();
}

function clearFilters() {
  const wasEmpty = !datePicker.value && !timeStart.value && !timeEnd.value;
  datePicker.value = '';
  timeStart.value = '';
  timeEnd.value = '';
  if (wasEmpty) void loadCurrentView();
}

watch([datePicker, timeStart, timeEnd], () => {
  if (!activeView.value.noDateFilter) void loadCurrentView();
});

/* ============================== KPI cards ============================== */
interface KpiTarget { label: string; value: number; decimals: number; unit: string; icon: string; color: string }

const kpiTargets = computed<KpiTarget[]>(() => {
  const rows = currentRows.value;
  if (activeView.value.key === 'ipdBed') {
    const bedRows = rows as IpdBedRow[];
    const totalBeds = bedRows.reduce((s, r) => s + toNum(r.totalBeds), 0);
    const totalAdmit = bedRows.reduce((s, r) => s + toNum(r.currentAdmit), 0);
    const totalAvail = bedRows.reduce((s, r) => s + toNum(r.availableBeds), 0);
    const avgOcc = totalBeds ? Math.round((totalAdmit / totalBeds) * 10000) / 100 : 0;
    return [
      { label: 'เตียงทั้งหมด', value: totalBeds, decimals: 0, unit: ' เตียง', icon: 'mdi-bed', color: '#1F5D50' },
      { label: 'กำลังครองเตียง', value: totalAdmit, decimals: 0, unit: ' เตียง', icon: 'mdi-account-injury-outline', color: '#C68A2E' },
      { label: 'เตียงว่าง', value: totalAvail, decimals: 0, unit: ' เตียง', icon: 'mdi-bed-empty', color: '#3D7A54' },
      { label: 'อัตราครองเตียงเฉลี่ย', value: avgOcc, decimals: 1, unit: '%', icon: 'mdi-percent-outline', color: '#6B5B95' },
    ];
  }
  const statRows = rows as DashboardStatRow[];
  const totalHn = statRows.reduce((s, r) => s + toNum(r.hnCount), 0);
  const totalIncome = statRows.reduce((s, r) => s + toNum(r.income), 0);
  const totalBill = statRows.reduce((s, r) => s + toNum(r.billAmount), 0);
  if (activeView.value.kind === 'opd') {
    const totalVn = statRows.reduce((s, r) => s + toNum(r.vnCount), 0);
    return [
      { label: 'จำนวนผู้ป่วย (HN)', value: totalHn, decimals: 0, unit: ' คน', icon: 'mdi-account-multiple-outline', color: '#1F5D50' },
      { label: 'จำนวนครั้งที่มา (VN)', value: totalVn, decimals: 0, unit: ' ครั้ง', icon: 'mdi-calendar-check-outline', color: '#3D7A54' },
      { label: 'รายได้รวม', value: totalIncome, decimals: 0, unit: ' บาท', icon: 'mdi-cash-multiple', color: '#C68A2E' },
      { label: 'ยอดเรียกเก็บรวม', value: totalBill, decimals: 0, unit: ' บาท', icon: 'mdi-receipt-text-outline', color: '#6B5B95' },
    ];
  }
  const totalAn = statRows.reduce((s, r) => s + toNum(r.anCount), 0);
  return [
    { label: 'จำนวนผู้ป่วย (HN)', value: totalHn, decimals: 0, unit: ' คน', icon: 'mdi-account-multiple-outline', color: '#1F5D50' },
    { label: 'จำนวนครั้งรับไว้ (AN)', value: totalAn, decimals: 0, unit: ' ครั้ง', icon: 'mdi-hospital-box-outline', color: '#3D7A54' },
    { label: 'รายได้รวม', value: totalIncome, decimals: 0, unit: ' บาท', icon: 'mdi-cash-multiple', color: '#C68A2E' },
    { label: 'ยอดเรียกเก็บรวม', value: totalBill, decimals: 0, unit: ' บาท', icon: 'mdi-receipt-text-outline', color: '#6B5B95' },
  ];
});

interface AnimatedKpi { label: string; display: string; unit: string; icon: string; color: string }
const animatedKpis = ref<AnimatedKpi[]>([]);
let kpiRafId: number | null = null;

function formatKpiValue(raw: number, decimals: number) {
  return raw.toLocaleString('th-TH', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function animateKpis(targets: KpiTarget[]) {
  if (kpiRafId !== null) cancelAnimationFrame(kpiRafId);
  const duration = 700;
  const startTime = performance.now();
  function step(now: number) {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    animatedKpis.value = targets.map((k) => ({
      label: k.label,
      unit: k.unit,
      icon: k.icon,
      color: k.color,
      display: formatKpiValue(k.value * eased, k.decimals),
    }));
    kpiRafId = t < 1 ? requestAnimationFrame(step) : null;
  }
  kpiRafId = requestAnimationFrame(step);
}

watch(kpiTargets, (targets) => animateKpis(targets), { immediate: true });
onBeforeUnmount(() => { if (kpiRafId !== null) cancelAnimationFrame(kpiRafId); });

/* ============================== Table columns ============================== */
const columns = computed(() => {
  if (activeView.value.key === 'ipdBed') {
    return [
      { name: 'wardName', label: activeView.value.primaryLabel, field: 'wardName', align: 'left' as const, sortable: true },
      { name: 'totalBeds', label: 'เตียงทั้งหมด', field: 'totalBeds', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'currentAdmit', label: 'ผู้ป่วยนอนปัจจุบัน', field: 'currentAdmit', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'availableBeds', label: 'เตียงว่างรวม', field: 'availableBeds', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'occupancyRate', label: 'อัตราการครองเตียงรวม', field: 'occupancyRate', align: 'right' as const, sortable: true, sort: (a: unknown, b: unknown) => toNum(a) - toNum(b) },
    ];
  }
  const cols = [
    { name: 'nameTitle', label: activeView.value.primaryLabel, field: 'nameTitle', align: 'left' as const, sortable: true },
    { name: 'hnCount', label: 'คน', field: 'hnCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
  ];
  if (activeView.value.kind === 'opd') {
    cols.push({ name: 'vnCount', label: 'ครั้ง', field: 'vnCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') });
  }
  cols.push(
    { name: 'anCount', label: 'Admit', field: 'anCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'income', label: 'ค่าใช้จ่ายใน HIS', field: 'income', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'billAmount', label: 'ยอดเงินสด', field: 'billAmount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'ucMoney', label: 'ลูกหนี้รอเรียกเก็บ', field: 'ucMoney', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
  );
  return cols;
});

function columnsForView(view: ViewConfig): ExportColumn[] {
  if (view.key === 'ipdBed') {
    return [
      { name: 'wardName', label: view.primaryLabel, field: 'wardName' },
      { name: 'totalBeds', label: 'เตียงทั้งหมด', field: 'totalBeds', agg: 'sum' },
      { name: 'currentAdmit', label: 'ผู้ป่วยนอนปัจจุบัน', field: 'currentAdmit', agg: 'sum' },
      { name: 'availableBeds', label: 'เตียงว่างรวม', field: 'availableBeds', agg: 'sum' },
      { name: 'occupancyRate', label: 'อัตราการครองเตียงรวม', field: 'occupancyRate', agg: 'avg' },
    ];
  }
  const cols: ExportColumn[] = [
    { name: 'nameTitle', label: view.primaryLabel, field: 'nameTitle' },
    { name: 'hnCount', label: 'คน', field: 'hnCount', agg: 'sum' },
  ];
  if (view.kind === 'opd') cols.push({ name: 'vnCount', label: 'ครั้ง', field: 'vnCount', agg: 'sum' });
  cols.push(
    { name: 'anCount', label: 'Admit', field: 'anCount', agg: 'sum' },
    { name: 'income', label: 'ค่าใช้จ่ายใน HIS', field: 'income', agg: 'sum' },
    { name: 'billAmount', label: 'ยอดเงินสด', field: 'billAmount', agg: 'sum' },
    { name: 'ucMoney', label: 'ลูกหนี้รอเรียกเก็บ', field: 'ucMoney', agg: 'sum' },
  );
  return cols;
}

function rowKeyFn(row: DashboardRow) {
  if (activeView.value.key === 'ipdBed') return (row as IpdBedRow).wardCode;
  return (row as DashboardStatRow).nameTitle;
}

function occClass(rate: number) {
  if (rate >= 90) return 'occ-crit';
  if (rate >= 70) return 'occ-warn';
  return 'occ-ok';
}

/* ============================== Chart ============================== */
const canvasRef = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;

const COLOR_MAP: Record<string, string> = { primary: '#1F5D50', ok: '#3D7A54', warn: '#C68A2E', crit: '#B8452F' };

const chartData = computed(() => {
  const rows = currentRows.value;
  if (activeView.value.key === 'ipdBed') {
    const sorted = [...(rows as IpdBedRow[])].sort((a, b) => toNum(b.occupancyRate) - toNum(a.occupancyRate)).slice(0, 10);
    return {
      labels: sorted.map((r) => r.wardName),
      values: sorted.map((r) => toNum(r.occupancyRate)),
      colors: sorted.map((r) => COLOR_MAP[toNum(r.occupancyRate) >= 90 ? 'crit' : toNum(r.occupancyRate) >= 70 ? 'warn' : 'ok']!),
      suffix: '%',
    };
  }
  const metricKey = metric.value === 'income' ? 'income' : 'hnCount';
  const sorted = [...(rows as DashboardStatRow[])].sort((a, b) => toNum(b[metricKey]) - toNum(a[metricKey])).slice(0, 10);
  return {
    labels: sorted.map((r) => r.nameTitle),
    values: sorted.map((r) => toNum(r[metricKey])),
    colors: sorted.map(() => COLOR_MAP.primary!),
    suffix: metric.value === 'income' ? ' บาท' : ' ครั้ง',
  };
});

function buildChart() {
  if (!canvasRef.value) return;
  const ctx = canvasRef.value.getContext('2d');
  if (!ctx) return;
  const d = chartData.value;
  chart?.destroy();

  const lineColor = COLOR_MAP.primary!;

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: d.labels,
      datasets: [
        {
          data: d.values,
          borderColor: lineColor,
          backgroundColor: `${lineColor}22`,
          pointBackgroundColor: d.colors,
          pointBorderColor: d.colors,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
          tension: 0.35,
          fill: true,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#14231F',
          titleFont: { family: "'IBM Plex Sans Thai'" },
          bodyFont: { family: "'IBM Plex Mono'" },
          callbacks: { label: (item) => `${Number(item.raw).toLocaleString('th-TH')}${d.suffix}` },
        },
      },
      scales: {
        x: {
          grid: { color: '#DCE2DE' },
          ticks: { callback: (v) => Number(v).toLocaleString('th-TH'), color: '#5B6B63', font: { family: "'IBM Plex Mono'", size: 11 } },
        },
        y: { grid: { display: false }, ticks: { color: '#14231F', font: { family: "'IBM Plex Sans Thai'", size: 12 } } },
      },
    },
  });
}
watch(chartData, buildChart, { deep: true });

/* ============================== Pie chart (composition) ============================== */
const pieCanvasRef = ref<HTMLCanvasElement | null>(null);
let pieChart: Chart | null = null;

const PIE_PALETTE = ['#1F5D50', '#C68A2E', '#3D7A54', '#6B5B95', '#B8452F', '#2E6E8E', '#8C6239'];
const PIE_OTHER_COLOR = '#9AA79E';

const pieData = computed(() => {
  if (activeView.value.key === 'ipdBed') {
    const bedRows = currentRows.value as IpdBedRow[];
    const totalAdmit = bedRows.reduce((s, r) => s + toNum(r.currentAdmit), 0);
    const totalAvail = bedRows.reduce((s, r) => s + toNum(r.availableBeds), 0);
    return {
      labels: ['ครองเตียง', 'ว่าง'],
      values: [totalAdmit, totalAvail],
      colors: [COLOR_MAP.warn!, COLOR_MAP.ok!],
      suffix: ' เตียง',
    };
  }
  const metricKey = metric.value === 'income' ? 'income' : 'hnCount';
  const statRows = currentRows.value as DashboardStatRow[];
  const sorted = [...statRows].sort((a, b) => toNum(b[metricKey]) - toNum(a[metricKey]));
  const top = sorted.slice(0, 6);
  const rest = sorted.slice(6);
  const restSum = rest.reduce((s, r) => s + toNum(r[metricKey]), 0);

  const labels = top.map((r) => r.nameTitle);
  const values = top.map((r) => toNum(r[metricKey]));
  const colors = top.map((_, i) => PIE_PALETTE[i % PIE_PALETTE.length]!);
  if (restSum > 0) {
    labels.push('อื่นๆ');
    values.push(restSum);
    colors.push(PIE_OTHER_COLOR);
  }
  return { labels, values, colors, suffix: metric.value === 'income' ? ' บาท' : ' ครั้ง' };
});

function buildPieChart() {
  if (!pieCanvasRef.value) return;
  const ctx = pieCanvasRef.value.getContext('2d');
  if (!ctx) return;
  const d = pieData.value;
  pieChart?.destroy();
  pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels: d.labels, datasets: [{ data: d.values, backgroundColor: d.colors, borderColor: '#FFFFFF', borderWidth: 2 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#4C5B54', font: { family: "'IBM Plex Sans Thai'", size: 11 }, boxWidth: 10, padding: 10 },
        },
        tooltip: {
          backgroundColor: '#14231F',
          titleFont: { family: "'IBM Plex Sans Thai'" },
          bodyFont: { family: "'IBM Plex Mono'" },
          callbacks: {
            label: (item) => {
              const total = d.values.reduce((s, v) => s + v, 0);
              const pct = total ? ((toNum(item.raw) / total) * 100).toFixed(1) : '0.0';
              return `${item.label}: ${Number(item.raw).toLocaleString('th-TH')}${d.suffix} (${pct}%)`;
            },
          },
        },
      },
    },
  });
}
watch(pieData, buildPieChart, { deep: true });
onBeforeUnmount(() => pieChart?.destroy());
onBeforeUnmount(() => chart?.destroy());

/* ============================== Export (CSV / Excel) ============================== */
type ExportScope = 'current' | 'all';

const TEXT_FIELDS = new Set(['nameTitle', 'wardName', 'wardCode']);

function csvEscape(v: unknown) {
  const s = String(v ?? '').replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
}

function rowsToCsvBlock(cols: ExportColumn[], rows: DashboardRow[]) {
  const header = cols.map((c) => c.label).join(',');
  const lines = rows.map((r) => cols.map((c) => csvEscape((r as Record<string, unknown>)[c.field])).join(','));
  return [header, ...lines].join('\n');
}

function downloadTextFile(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function exportCsv(scope: ExportScope = 'current') {
  if (scope === 'current') {
    const csv = '﻿' + rowsToCsvBlock(columnsForView(activeView.value), currentRows.value);
    downloadTextFile(csv, `${activeView.value.key}_${datePicker.value || todayStr()}.csv`, 'text/csv;charset=utf-8;');
    return;
  }

  exporting.value = true;
  try {
    const blocks: string[] = [];
    for (const view of VIEWS) {
      const rows = await getRowsForView(view);
      blocks.push(`# ${view.label}`);
      blocks.push(rowsToCsvBlock(columnsForView(view), rows));
      blocks.push('');
    }
    const csv = '﻿' + blocks.join('\n');
    downloadTextFile(csv, `dashboard_all_${datePicker.value || todayStr()}.csv`, 'text/csv;charset=utf-8;');
  } finally {
    exporting.value = false;
  }
}

function sheetDataForView(view: ViewConfig, rows: DashboardRow[]) {
  const cols = columnsForView(view);
  return rows.map((r) => {
    const record = r as Record<string, unknown>;
    const obj: Record<string, string | number> = {};
    cols.forEach((c) => {
      const raw = record[c.field];
      obj[c.label] = TEXT_FIELDS.has(c.name) ? String(raw ?? '') : toNum(raw);
    });
    return obj;
  });
}

async function exportExcel(scope: ExportScope = 'current') {
  if (scope === 'current') {
    const worksheet = XLSX.utils.json_to_sheet(sheetDataForView(activeView.value, currentRows.value));
    worksheet['!cols'] = columnsForView(activeView.value).map((c) => ({ wch: Math.max(c.label.length + 2, 10) }));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, activeView.value.label.slice(0, 31));
    XLSX.writeFile(workbook, `${activeView.value.key}_${datePicker.value || todayStr()}.xlsx`);
    return;
  }

  exporting.value = true;
  try {
    const workbook = XLSX.utils.book_new();
    for (const view of VIEWS) {
      const rows = await getRowsForView(view);
      const worksheet = XLSX.utils.json_to_sheet(sheetDataForView(view, rows));
      worksheet['!cols'] = columnsForView(view).map((c) => ({ wch: Math.max(c.label.length + 2, 10) }));
      XLSX.utils.book_append_sheet(workbook, worksheet, view.label.slice(0, 31));
    }
    XLSX.writeFile(workbook, `dashboard_all_${datePicker.value || todayStr()}.xlsx`);
  } finally {
    exporting.value = false;
  }
}

/* ============================== Export (PDF) ============================== */
function escapeHtml(str: unknown): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const PDF_THEME = {
  ink: '#14231F',
  inkSoft: '#5B6B63',
  inkFaint: '#8B978F',
  primary: '#1F5D50',
  primarySoft: '#E3ECE8',
  line: '#DCE2DE',
  lineSoft: '#EEF1EF',
  zebra: '#F5F7F5',
  font: "'IBM Plex Sans Thai', -apple-system, 'Segoe UI', sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
  // Summary banner
  bannerBarBg: '#EAF2FB',
  badgeBg: '#2F8FD1',
  statIncome: { bg: '#DCEEDF', text: '#1F5D3F' },
  statCash: { bg: '#FBF3D1', text: '#8A6D12' },
  statReceivable: { bg: '#D9F0EC', text: '#1B6E63' },
  statVisits: { bg: '#DCEAF9', text: '#1D5A96' },
};

const HOSPITAL_NAME = 'โรงพยาบาลปะเหลียน';

/** Sums the numbers a PDF summary banner needs. Returns undefined for bed-occupancy views, which don't fit this shape. */
function buildSummaryData(view: ViewConfig, rows: DashboardRow[]): SummaryHeaderData | undefined {
  if (view.key === 'ipdBed') return undefined;
  const statRows = rows as DashboardStatRow[];
  return {
    kindLabel: view.kind === 'opd' ? 'ผู้ป่วยนอก' : 'ผู้ป่วยใน',
    totalIncome: statRows.reduce((s, r) => s + toNum(r.income), 0),
    totalCash: statRows.reduce((s, r) => s + toNum(r.billAmount), 0),
    totalReceivable: statRows.reduce((s, r) => s + toNum(r.ucMoney), 0),
    totalVisits: statRows.reduce((s, r) => s + toNum(r.hnCount), 0),
    totalAdmit: view.kind === 'ipd' ? statRows.reduce((s, r) => s + toNum(r.anCount), 0) : undefined,
  };
}

/** Builds one report section: a title bar + a styled table with a totals row. */
function buildPdfSectionHtml(view: ViewConfig, rows: DashboardRow[]): string {
  const cols = columnsForView(view);
  const t = PDF_THEME;

  const headerCells = cols
    .map(
      (c, i) =>
        `<th style="padding:8px 12px;background:${t.primary};color:#ffffff;font-size:10.5px;font-weight:600;
          text-align:${TEXT_FIELDS.has(c.name) ? 'left' : 'right'};white-space:nowrap;
          ${i === 0 ? `border-top-left-radius:6px;` : ''}${i === cols.length - 1 ? `border-top-right-radius:6px;` : ''}">
          ${escapeHtml(c.label)}
        </th>`,
    )
    .join('');

  const bodyRows = rows
    .map((r, rowIdx) => {
      const record = r as Record<string, unknown>;
      const zebra = rowIdx % 2 === 1 ? `background:${t.zebra};` : '';
      const cells = cols
        .map((c) => {
          const raw = record[c.field];
          const val = TEXT_FIELDS.has(c.name) ? escapeHtml(raw) : toNum(raw).toLocaleString('th-TH');
          return `<td style="padding:6px 12px;border-bottom:1px solid ${t.lineSoft};font-size:11px;color:${t.ink};
            font-family:${TEXT_FIELDS.has(c.name) ? t.font : t.mono};
            text-align:${TEXT_FIELDS.has(c.name) ? 'left' : 'right'};white-space:nowrap;">${val}</td>`;
        })
        .join('');
      return `<tr style="${zebra}">${cells}</tr>`;
    })
    .join('');

  // Totals / summary row — sums numeric columns, averages rate-style ones.
  const hasAgg = cols.some((c) => c.agg);
  const totalCells = hasAgg
    ? cols
        .map((c, i) => {
          if (TEXT_FIELDS.has(c.name)) {
            return `<td style="padding:8px 12px;font-size:11px;font-weight:700;color:${t.primary};
              border-top:1.5px solid ${t.primary};text-align:left;">${i === 0 ? 'รวมทั้งหมด' : ''}</td>`;
          }
          if (!c.agg) {
            return `<td style="padding:8px 12px;border-top:1.5px solid ${t.primary};"></td>`;
          }
          const values = rows.map((r) => toNum((r as Record<string, unknown>)[c.field]));
          const sum = values.reduce((s, v) => s + v, 0);
          const display = c.agg === 'avg'
            ? `${(values.length ? sum / values.length : 0).toFixed(1)}%`
            : sum.toLocaleString('th-TH');
          return `<td style="padding:8px 12px;font-size:11.5px;font-weight:700;color:${t.primary};
            border-top:1.5px solid ${t.primary};text-align:right;font-family:${t.mono};">${display}</td>`;
        })
        .join('')
    : '';

  const summary = buildSummaryData(view, rows);
  const sectionTitleHtml = summary
    ? buildSummaryBannerHtml(view.label, summary)
    : `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;">
        <span style="width:4px;height:16px;background:${t.primary};border-radius:2px;display:inline-block;"></span>
        <span style="font-size:14px;font-weight:700;color:${t.ink};">${escapeHtml(view.label)}</span>
        <span style="font-size:10.5px;color:${t.inkFaint};margin-left:2px;">${rows.length.toLocaleString('th-TH')} รายการ</span>
      </div>
    `;

  return `
    <div class="pdf-block" style="margin-bottom:22px;">
      ${sectionTitleHtml}
      <table style="border-collapse:collapse;width:100%;font-family:${t.font};border:1px solid ${t.line};border-radius:6px;overflow:hidden;">
        <thead><tr>${headerCells}</tr></thead>
        <tbody>${bodyRows}${totalCells ? `<tr>${totalCells}</tr>` : ''}</tbody>
      </table>
    </div>
  `;
}

function toDottedTime(hms: string): string {
  const [h, m] = hms.split(':');
  return `${h}.${m}`;
}

function statRowHtml(label: string, value: number | null, colors: { bg: string; text: string }): string {
  const t = PDF_THEME;
  return `
    <div style="background:${colors.bg};color:${colors.text};font-size:11px;font-weight:700;
      padding:8px 14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex:1;">
      <span>${escapeHtml(label)}</span>
      ${value !== null ? `<span style="font-family:${t.mono};white-space:nowrap;">${value.toLocaleString('th-TH', { maximumFractionDigits: 2 })}</span>` : ''}
    </div>
  `;
}

/** Builds the "ข้อมูล...ของโรงพยาบาลปะเหลียน" summary banner: logo bar + date/time note + colored stat rows. */
function buildSummaryBannerHtml(reportTitle: string, summary: SummaryHeaderData): string {
  const t = PDF_THEME;
  const dateObj = datePicker.value ? new Date(datePicker.value) : new Date();
  const dateLongThai = dateObj.toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })
    + (datePicker.value ? '' : ' (ข้อมูลทั้งหมด)');
  // When no end time is picked: if the selected date is today (or no date
  // filter at all), the day isn't over yet, so show up to *now* rather than
  // a blanket 23.59. A past date, though, is a day that's already complete.
  const isToday = !datePicker.value || datePicker.value === todayStr();
  const effectiveTimeEnd = timeEnd.value || (isToday ? nowTimeStr() : '23:59:59');
  const timeRangeDotted = `${toDottedTime(timeStart.value || '00:00:00')} - ${toDottedTime(effectiveTimeEnd)} น.`;
  const noteLine = `*หมายเหตุ ข้อมูลหลังเวลา ${toDottedTime(effectiveTimeEnd)} น. อยู่ในระหว่างการให้บริการ`;
  const visitsLabel = summary.totalAdmit != null
    ? `ผู้รับบริการรวมทั้งสิ้น ${summary.totalVisits.toLocaleString('th-TH')} ราย  ·  ADMIT ${summary.totalAdmit.toLocaleString('th-TH')} ราย`
    : `ผู้รับบริการรวมทั้งสิ้น ${summary.totalVisits.toLocaleString('th-TH')} ราย`;

  return `
    <div class="pdf-block" style="margin-bottom:18px;border:1px solid ${t.line};border-radius:10px;overflow:hidden;">
      <div style="display:flex;align-items:center;gap:10px;background:${t.bannerBarBg};padding:10px 16px;">
        <div style="width:34px;height:34px;border-radius:50%;background:#ffffff;border:1.5px solid ${t.primary};
          display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="color:${t.primary};font-size:16px;line-height:1;">✚</span>
        </div>
        <div style="flex:1;font-size:13px;font-weight:700;color:${t.ink};">
          ข้อมูล${escapeHtml(reportTitle)}ของ${escapeHtml(HOSPITAL_NAME)}
        </div>
        <span style="background:${t.badgeBg};color:#ffffff;font-size:10.5px;font-weight:600;padding:4px 12px;
          border-radius:14px;white-space:nowrap;">${escapeHtml(summary.kindLabel)}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;">
        <div style="flex:1;min-width:200px;padding:12px 16px;font-size:10.5px;color:${t.inkSoft};line-height:1.9;">
          <div>ประจำวันที่ ${escapeHtml(dateLongThai)}</div>
          <div>ช่วงเวลา ${escapeHtml(timeRangeDotted)}</div>
          ${noteLine ? `<div style="font-style:italic;color:${t.inkFaint};margin-top:2px;">${escapeHtml(noteLine)}</div>` : ''}
        </div>
        <div style="width:280px;display:flex;flex-direction:column;">
          ${statRowHtml('ค่าใช้จ่ายใน HIS', summary.totalIncome, t.statIncome)}
          ${statRowHtml('ยอดเงินสดรวม', summary.totalCash, t.statCash)}
          ${statRowHtml('ลูกหนี้รอเรียกเก็บ', summary.totalReceivable, t.statReceivable)}
          ${statRowHtml(visitsLabel, null, t.statVisits)}
        </div>
      </div>
    </div>
  `;
}

async function renderHtmlToPdf(html: string, filename: string, reportTitle: string): Promise<void> {
  const t = PDF_THEME;
  const generatedAt = new Date();

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-99999px';
  container.style.top = '0';
  container.style.width = '780px';
  container.style.padding = '0';
  container.style.background = '#ffffff';
  const DOM_WIDTH = 780;

  container.innerHTML = `
    <div style="font-family:${t.font};width:${DOM_WIDTH}px;padding:30px 34px 26px;box-sizing:border-box;background:#ffffff;">

      ${html}

      <!-- Report footer note -->
      <div class="pdf-block" style="margin-top:8px;padding-top:12px;border-top:1px solid ${t.lineSoft};display:flex;justify-content:space-between;">
        <span style="font-size:9.5px;color:${t.inkFaint};">
          สร้างเมื่อ ${generatedAt.toLocaleDateString('th-TH', { day: '2-digit', month: 'long', year: 'numeric' })}
          เวลา ${generatedAt.toLocaleTimeString('th-TH')}
        </span>
        <span style="font-size:9.5px;color:${t.inkFaint};">ระบบวิเคราะห์ข้อมูลโรงพยาบาล</span>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  try {
    // รอให้ฟอนต์โหลดเสร็จก่อน capture กันปัญหาฟอนต์ไทยไม่ขึ้นในรอบแรก
    await document.fonts.ready;

    const canvas = await html2canvas(container, { scale: 2, backgroundColor: '#ffffff' });
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 22;
    const footerZone = 26; // reserved space at the bottom of every page for the page-number bar

    const usableWidth = pageWidth - margin * 2;
    const usablePageHeightPt = pageHeight - margin * 2 - footerZone;

    // DOM px → PDF pt conversion, and the matching canvas-pixel scale factor.
    const ptPerDomPx = usableWidth / DOM_WIDTH;
    const domTotalHeight = container.scrollHeight;
    const canvasScale = canvas.height / domTotalHeight;
    const usablePageHeightDomPx = usablePageHeightPt / ptPerDomPx;

    // Collect safe break points (in DOM px) so pages never cut a table row —
    // or the header/footer block — in half. A candidate is the *top* of a
    // row/block: cutting exactly there means nothing of it renders on the
    // current page, so the whole row/block starts fresh on the next one.
    const containerTop = container.getBoundingClientRect().top;
    const breakCandidates = Array.from(container.querySelectorAll('tr, .pdf-block'))
      .map((el) => el.getBoundingClientRect().top - containerTop)
      .filter((y) => y > 0.5);
    breakCandidates.push(domTotalHeight);
    breakCandidates.sort((a, b) => a - b);

    // Each data section (.pdf-block that wraps a <table>) — used so a page
    // that starts mid-table can repeat that section's title + column header.
    const sections = Array.from(container.querySelectorAll('.pdf-block'))
      .filter((el) => el.querySelector('table'))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const theadRect = el.querySelector('thead')!.getBoundingClientRect();
        return {
          top: rect.top - containerTop,
          theadBottom: theadRect.bottom - containerTop,
          bottom: rect.bottom - containerTop,
        };
      });

    interface PageSlice { start: number; end: number; repeatHeader?: { top: number; theadBottom: number } }
    const pageSlices: PageSlice[] = [];
    let cursor = 0;
    while (cursor < domTotalHeight - 0.5) {
      // Is this page starting partway through a table body? If so, reserve
      // room at the top of the page to repeat that section's title + header row.
      const midSection = sections.find((s) => cursor > s.theadBottom + 0.5 && cursor < s.bottom - 0.5);
      const repeatHeaderHeight = midSection ? midSection.theadBottom - midSection.top : 0;
      const availableDomPx = usablePageHeightDomPx - repeatHeaderHeight;

      const idealEnd = cursor + availableDomPx;
      let cut = 0;
      for (const c of breakCandidates) {
        if (c > cursor + 0.5 && c <= idealEnd) cut = c;
      }
      if (!cut) {
        // No safe break point fits on this page (e.g. one giant row) — fall
        // back to the next candidate past idealEnd, or the hard limit.
        const next = breakCandidates.find((c) => c > cursor + 0.5);
        cut = Math.min(next ?? domTotalHeight, domTotalHeight);
      }
      pageSlices.push({
        start: cursor,
        end: cut,
        repeatHeader: midSection ? { top: midSection.top, theadBottom: midSection.theadBottom } : undefined,
      });
      cursor = cut;
    }

    const totalPages = pageSlices.length;
    const sliceCanvas = document.createElement('canvas');
    const sliceCtx = sliceCanvas.getContext('2d')!;

    // Crops [domFrom, domTo) out of the master canvas and draws it at (x, yPt)
    // on the current PDF page, returning the drawn height in pt.
    function drawCrop(domFrom: number, domTo: number, x: number, yPt: number): number {
      const sy = domFrom * canvasScale;
      const sHeight = (domTo - domFrom) * canvasScale;
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = Math.max(1, sHeight);
      sliceCtx.clearRect(0, 0, sliceCanvas.width, sliceCanvas.height);
      sliceCtx.drawImage(canvas, 0, sy, canvas.width, sHeight, 0, 0, canvas.width, sHeight);
      const heightPt = (domTo - domFrom) * ptPerDomPx;
      pdf.addImage(sliceCanvas.toDataURL('image/png'), 'PNG', x, yPt, usableWidth, heightPt);
      return heightPt;
    }

    pageSlices.forEach((slice, i) => {
      if (i > 0) pdf.addPage();
      let y = margin;
      if (slice.repeatHeader) {
        y += drawCrop(slice.repeatHeader.top, slice.repeatHeader.theadBottom, margin, y);
      }
      drawCrop(slice.start, slice.end, margin, y);
    });

    // Footer bar on every page: thin rule + page number + report name.
    // Rendered as a small image (not pdf.text) because jsPDF's built-in
    // fonts have no Thai glyphs — native text would come out as garbage.
    const footerDiv = document.createElement('div');
    footerDiv.style.position = 'fixed';
    footerDiv.style.left = '-99999px';
    footerDiv.style.top = '0';
    footerDiv.style.width = `${DOM_WIDTH}px`;
    footerDiv.style.boxSizing = 'border-box';
    footerDiv.style.padding = '6px 0 0';
    footerDiv.style.background = '#ffffff';
    footerDiv.style.fontFamily = t.font;
    document.body.appendChild(footerDiv);

    try {
      for (let page = 1; page <= totalPages; page++) {
        footerDiv.innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:9px;color:${t.inkFaint};">${escapeHtml(reportTitle)}</span>
            <span style="font-size:9px;color:${t.inkFaint};font-family:${t.mono};">หน้า ${page} / ${totalPages}</span>
          </div>
        `;
        // eslint-disable-next-line no-await-in-loop
        const footerCanvas = await html2canvas(footerDiv, { scale: 2, backgroundColor: '#ffffff' });
        const footerDomHeight = footerCanvas.height / 2;
        const footerHeightPt = footerDomHeight * ptPerDomPx;

        pdf.setPage(page);
        pdf.setDrawColor(220, 226, 222);
        pdf.setLineWidth(0.75);
        pdf.line(margin, pageHeight - footerZone + 4, pageWidth - margin, pageHeight - footerZone + 4);
        pdf.addImage(footerCanvas.toDataURL('image/png'), 'PNG', margin, pageHeight - footerZone + 8, usableWidth, footerHeightPt);
      }
    } finally {
      document.body.removeChild(footerDiv);
    }

    pdf.save(filename);
  } finally {
    document.body.removeChild(container);
  }
}

async function exportPdf(scope: ExportScope = 'current') {
  exporting.value = true;
  try {
    if (scope === 'current') {
      const html = buildPdfSectionHtml(activeView.value, currentRows.value);
      await renderHtmlToPdf(html, `${activeView.value.key}_${datePicker.value || todayStr()}.pdf`, activeView.value.label);
      return;
    }

    let html = '';
    for (const view of VIEWS) {
      const rows = await getRowsForView(view);
      html += buildPdfSectionHtml(view, rows);
    }
    await renderHtmlToPdf(html, `dashboard_all_${datePicker.value || todayStr()}.pdf`, 'ภาพรวมทุกหน้า');
  } catch (err) {
    console.error('[dashboard] export pdf failed:', err);
  } finally {
    exporting.value = false;
  }
}

onMounted(async () => {
  await loadCurrentView();
  buildChart();
  buildPieChart();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap');

.dash {
  --paper: #F2F4F2;
  --surface: #FFFFFF;
  --ink: #14231F;
  --ink-soft: #4C5B54;
  --line: #DCE2DE;
  --line-soft: #E9EDEA;

  --primary: #1F5D50;
  --primary-soft: #E3ECE8;
  --green: #3D7A54;
  --green-soft: #E6EFE8;
  --amber: #C68A2E;
  --amber-soft: #F6EBDA;
  --red: #B8452F;
  --red-soft: #F5E4DF;
  --violet: #6B5B95;

  background: var(--paper);
  color: var(--ink);
  font-family: 'IBM Plex Sans Thai', -apple-system, 'Segoe UI', sans-serif;
  padding: 22px 24px 44px;
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
.dash *, .dash *::before, .dash *::after { box-sizing: border-box; }
@media (max-width: 900px) {
  .dash { padding: 18px 16px 36px; }
}
@media (max-width: 640px) {
  .dash { padding: 14px 12px 32px; }
}
@media (max-width: 360px) {
  .dash { padding: 12px 8px 28px; }
}
.dash :deep(.q-field__control), .dash :deep(input) { font-family: inherit; }
.mono, .vital__value, .status-updated, .filter-input :deep(input) {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
}

.dash-header {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 20px 24px 20px 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.dash-header__bar {
  position: absolute;
  left: 0; top: 10px; bottom: 10px;
  width: 4px;
  background: var(--primary);
  border-radius: 2px;
}
.dash-header__main { flex: 1 1 260px; min-width: 0; }
.dash-header__id {
  display: flex; align-items: center; gap: 7px; flex-wrap: wrap;
  font-size: 12.5px; color: var(--ink-soft); margin-bottom: 8px;
}
.dash-header h1 { margin: 0 0 5px; font-size: 23px; font-weight: 700; color: var(--ink); }
.dash-header p { margin: 0; font-size: 13px; color: var(--ink-soft); max-width: 52ch; }
.dash-header__status {
  display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
  font-size: 12px;
  flex: 0 1 auto;
  max-width: 100%;
  word-break: break-word;
}
.status-dot { display: none; }
.status-text { display: inline-flex; align-items: center; gap: 6px; color: var(--ink-soft); }
.status-text::before {
  content: ''; width: 7px; height: 7px; border-radius: 50%; background: #9FB0A6; flex-shrink: 0;
}
.dash-header__status:has(.status-text) .status-dot { display: none; }
.status-dot.is-ok + .status-text::before { background: var(--green); }
.status-dot.is-warn + .status-text::before { background: var(--amber); }
.status-updated { color: var(--ink-soft); opacity: 0.75; font-size: 11px; }
@media (max-width: 900px) {
  .dash-header { padding: 18px 20px 18px 24px; }
}
@media (max-width: 640px) {
  .dash-header { padding: 18px 16px 16px 20px; align-items: flex-start; }
  .dash-header__status { align-items: flex-start; }
  .dash-header h1 { font-size: 19px; }
}
@media (max-width: 360px) {
  .dash-header h1 { font-size: 17px; }
  .dash-header p { font-size: 12px; }
}

.filter-bar {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}
.filter-field { display: flex; flex-direction: column; gap: 2px; transition: opacity 0.2s; }
.filter-field label { font-size: 11px; color: var(--ink-soft); }
.filter-field.disabled { opacity: 0.35; pointer-events: none; }
.filter-input { width: 138px; }
.filter-input--time { width: 128px; }
.filter-input :deep(.q-field__append) { flex-shrink: 0; padding-left: 2px; }
.filter-input :deep(.q-field__native) { white-space: nowrap; }
.filter-input--time :deep(.q-btn) { min-height: 24px; min-width: 24px; padding: 0; }
.filter-input--time :deep(.q-btn .q-icon) { font-size: 16px; }
.filter-input :deep(.q-field__control) {
  border-bottom: 1px solid var(--line); padding: 0;
}
.filter-input :deep(.q-field__control):before,
.filter-input :deep(.q-field__control):after { display: none; }
.filter-divider { width: 1px; align-self: stretch; background: var(--line); }
.preset-group, .action-group { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
.preset-btn, .action-btn {
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  border-radius: 6px;
  padding: 7px 12px;
  font-size: 12.5px;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: border-color 0.15s, color 0.15s;
}
.preset-btn:hover, .action-btn:hover { border-color: var(--primary); color: var(--primary); }
.preset-btn--clear { color: var(--ink-soft); }
.preset-btn--clear:hover { border-color: var(--red); color: var(--red); }
.action-btn:disabled { opacity: 0.5; cursor: default; }
.action-btn--dropdown { padding: 0; }
.action-btn--dropdown :deep(.q-btn__content) { padding: 7px 12px; font-size: 12.5px; color: var(--ink); }
.action-btn--dropdown:hover :deep(.q-btn__content) { color: var(--primary); }
.spin { animation: spin 0.9s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 900px) {
  .filter-bar { gap: 12px 14px; }
}
@media (max-width: 640px) {
  .filter-bar { gap: 10px 12px; }
  .filter-divider { display: none; }
  .filter-input { width: 128px; }
  .filter-input--time { width: 108px; }
  .preset-group { width: 100%; justify-content: flex-start; }
  .preset-btn, .action-btn { padding: 9px 14px; font-size: 13px; }
  .filter-input--time :deep(.q-btn) { min-height: 34px; min-width: 34px; }
  .filter-input--time :deep(.q-btn .q-icon) { font-size: 18px; }

  /* Refresh + CSV/Excel/PDF exports: an even 2x2 grid reads far better on a
     narrow screen than four unevenly-sized buttons wrapping mid-row. */
  .action-group {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .action-group .action-btn { width: 100%; justify-content: center; }
  .action-group .action-btn--dropdown { width: 100%; }
  .action-group .action-btn--dropdown :deep(.q-btn__content) {
    justify-content: center; width: 100%;
  }
}
@media (max-width: 480px) {
  .filter-field { flex: 1 1 calc(50% - 8px); min-width: 0; }
  .filter-input, .filter-input--time { width: 100%; }
  .action-group { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 360px) {
  .action-group { grid-template-columns: 1fr; }
}

.tab-strip {
  display: flex; gap: 4px; overflow-x: auto; margin-bottom: 14px;
  border-bottom: 1px solid var(--line);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}
.tab {
  flex-shrink: 0;
  display: flex; align-items: baseline; gap: 7px;
  border: none; background: transparent;
  padding: 10px 14px 12px;
  cursor: pointer; color: var(--ink-soft);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  font-family: inherit;
}
.tab .q-icon { align-self: center; }
.tab:hover { color: var(--ink); }
.tab.active { color: var(--primary); border-bottom-color: var(--primary); }
.tab__main { font-size: 13px; font-weight: 600; }
.tab__sub { font-size: 11px; color: inherit; opacity: 0.65; }
@media (max-width: 640px) { .tab__sub { display: none; } }

.vitals-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 14px;
}
@media (max-width: 900px) { .vitals-strip { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 420px) { .vitals-strip { grid-template-columns: 1fr; } }

.vital {
  background: var(--surface);
  padding: 13px 16px 13px 18px;
  position: relative;
}
.vital::before {
  content: '';
  position: absolute; left: 0; top: 10px; bottom: 10px; width: 3px;
  background: var(--vital-accent);
  border-radius: 2px;
}
.vital__icon { color: var(--vital-accent); opacity: 0.85; margin-bottom: 6px; display: block; }
.vital__label { font-size: 11.5px; color: var(--ink-soft); margin-bottom: 3px; }
.vital__value { font-size: 20px; font-weight: 600; letter-spacing: -0.01em; word-break: break-word; }
.vital__unit { font-size: 11.5px; color: var(--ink-soft); font-weight: 500; margin-left: 2px; }
@media (max-width: 420px) { .vital__value { font-size: 18px; } }

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}
.panel-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 15px 18px; border-bottom: 1px solid var(--line-soft); gap: 12px; flex-wrap: wrap;
}
.panel-head h2 { margin: 0; font-size: 14px; font-weight: 700; color: var(--ink); }
.panel-head p { margin: 3px 0 0; font-size: 11.5px; color: var(--ink-soft); }

.metric-toggle { display: flex; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; flex-shrink: 0; }
.metric-toggle button {
  border: none; background: var(--surface); color: var(--ink-soft); font-family: inherit;
  padding: 6px 12px; font-size: 12px; cursor: pointer;
  white-space: nowrap;
}
.metric-toggle button.active { background: var(--primary); color: #fff; }
@media (max-width: 640px) {
  .panel-head { padding: 12px 14px; }
  .panel-head > div:first-child { flex: 1 1 100%; }
  .metric-toggle { width: 100%; }
  .metric-toggle button { flex: 1; }
}

.chart-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
@media (max-width: 900px) { .chart-grid { grid-template-columns: 1fr; } }
.panel--line, .panel--pie { margin-bottom: 0; }
.pie-box { position: relative; height: 320px; padding: 12px 18px 18px; }
@media (max-width: 900px) { .pie-box { height: 260px; } }
@media (max-width: 640px) { .pie-box { height: 240px; padding: 8px 8px 12px; } }

.chart-box {
  position: relative;
  height: 320px;
  padding: 16px 18px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
/* Long Thai category labels on the y-axis need real room to draw without
   overlapping or getting clipped; below that width the chart keeps its
   natural size and the box scrolls horizontally instead of squeezing it. */
.chart-scroll { position: relative; height: 100%; min-width: 100%; }
@media (max-width: 640px) {
  .chart-box { height: 280px; padding: 10px 8px; }
  .chart-scroll { min-width: 560px; }
}
@media (max-width: 360px) {
  .chart-box { height: 240px; }
  .chart-scroll { min-width: 520px; }
  .pie-box { height: 220px; }
}

.panel--table :deep(.q-table__container) { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.panel--table :deep(table) { min-width: 560px; }
@media (max-width: 640px) {
  .panel--table :deep(table) { min-width: 480px; }
}
.panel--table :deep(.q-table__top) { padding: 12px 18px; border-bottom: 1px solid var(--line-soft); }
.panel--table :deep(thead th) {
  background: var(--paper); color: var(--ink-soft); font-size: 11px;
  font-weight: 600; text-transform: none; border-bottom: 1px solid var(--line);
}
.panel--table :deep(tbody td) { font-size: 13px; }
.panel--table :deep(tbody td.text-right),
.panel--table :deep(td[class*="hnCount"]),
.panel--table :deep(.q-table td) { font-variant-numeric: tabular-nums; }
.panel--table :deep(tbody tr:hover) { background: var(--paper); }
.panel--table :deep(.q-table__bottom) { border-top: 1px solid var(--line-soft); }

.table-search {
  display: flex; align-items: center; gap: 7px; border: 1px solid var(--line);
  border-radius: 6px; padding: 6px 10px; background: var(--paper); width: 210px; max-width: 100%; color: var(--ink-soft);
}
.table-search input { border: none; background: transparent; outline: none; font-size: 13px; color: var(--ink); width: 100%; font-family: inherit; }
@media (max-width: 480px) {
  .panel--table :deep(.q-table__top) { padding: 12px; }
  .table-search { width: 100%; }
}

.occ-pill {
  display: inline-flex; padding: 3px 10px; border-radius: 4px; font-weight: 600; font-size: 12px;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
}
.occ-ok { background: var(--green-soft); color: var(--green); }
.occ-warn { background: var(--amber-soft); color: var(--amber); }
.occ-crit { background: var(--red-soft); color: var(--red); }

.empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 40px 20px; color: var(--ink-soft); font-size: 13px;
}

</style>