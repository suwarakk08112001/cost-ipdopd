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
        <q-input v-model="timeStart" type="time" step="1" dense borderless class="filter-input filter-input--time" />
      </div>
      <div class="filter-field" :class="{ disabled: activeView.noDateFilter }">
        <label>เวลาสิ้นสุด</label>
        <q-input v-model="timeEnd" type="time" step="1" dense borderless class="filter-input filter-input--time" />
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
        <button class="action-btn" @click="exportCsv">
          <q-icon name="mdi-tray-arrow-down" size="16px" />
          CSV
        </button>
        <button class="action-btn" @click="exportExcel">
          <q-icon name="mdi-file-excel-outline" size="16px" />
          Excel
        </button>
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
          <canvas ref="canvasRef"></canvas>
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
  noDateFilter?: boolean;
}

/* ============================== Small utils ============================== */
// Real API responses sometimes serialize numeric fields as strings
// (e.g. occupancyRate: "88.64"). Every place that does math, sorting or
// .toFixed() on a numeric field now goes through this first so it never
// throws or silently misbehaves regardless of whether the API sends a
// number or a numeric string.
function toNum(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function pad2(n: number) { return String(n).padStart(2, '0'); }
function todayStr() { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }

// seeded PRNG so demo numbers stay stable per view + filter combo
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
  { key: 'dep', endpoint: '/dashboard/dep', dataKey: 'dep', label: 'แผนกผู้ป่วยนอก', sub: 'OPD ตามแผนก', chartTitle: 'ภาพรวมรายแผนก (OPD)', icon: 'mdi-hospital-building', kind: 'opd' },
  { key: 'pttype', endpoint: '/dashboard/pttype', dataKey: 'Pttype', label: 'สิทธิผู้ป่วยนอก', sub: 'OPD ตามสิทธิการรักษา', chartTitle: 'ภาพรวมตามสิทธิการรักษา (OPD)', icon: 'mdi-card-account-details-outline', kind: 'opd' },
  { key: 'ipdWard', endpoint: '/dashboard/ipdWard', dataKey: 'IpdWard', label: 'หอผู้ป่วยใน', sub: 'IPD ตามหอผู้ป่วย', chartTitle: 'ภาพรวมรายหอผู้ป่วย (IPD)', icon: 'mdi-bed-outline', kind: 'ipd' },
  { key: 'ipdPttype', endpoint: '/dashboard/ipdPttype', dataKey: 'IpdPttype', label: 'สิทธิผู้ป่วยใน', sub: 'IPD ตามสิทธิการรักษา', chartTitle: 'ภาพรวมตามสิทธิการรักษา (IPD)', icon: 'mdi-card-account-details-outline', kind: 'ipd' },
  { key: 'ipdBed', endpoint: '/dashboard/ipdBed', dataKey: 'IpdBed', label: 'เตียงผู้ป่วยใน', sub: 'อัตราครองเตียงปัจจุบัน', chartTitle: 'อัตราครองเตียงรายหอผู้ป่วย', icon: 'mdi-bed', kind: 'bed', noDateFilter: true },
];

/* ============================== State ============================== */
const activeViewKey = ref<ViewKey>('dep');
const activeView = computed(() => VIEWS.find((v) => v.key === activeViewKey.value)!);

const datePicker = ref('');
const timeStart = ref('');
const timeEnd = ref('');

const rowsCache = reactive<Record<string, DashboardRow[]>>({});
const loading = ref(false);
const connected = ref<boolean | null>(null);
const lastUpdated = ref<Date | null>(null);
const metric = ref<'count' | 'income'>('count');
const search = ref('');

const currentRows = computed(() => rowsCache[activeViewKey.value] ?? []);

function filterKeyFor(view: ViewConfig) {
  return view.noDateFilter ? 'nofilter' : `${datePicker.value}|${timeStart.value}|${timeEnd.value}`;
}

// Backends often wrap the array in an extra envelope that doesn't match
// what we originally assumed (e.g. { data: { IpdBed: [...] } }, a
// differently-cased key, or the array sent directly with no wrapper at
// all). Rather than hard-failing on one exact shape, walk the likely
// spots and return the first array we find.
function extractRows(payload: unknown, dataKey: string): DashboardRow[] | null {
  if (Array.isArray(payload)) return payload as DashboardRow[];
  if (!payload || typeof payload !== 'object') return null;

  const obj = payload as Record<string, unknown>;

  // exact key match
  if (Array.isArray(obj[dataKey])) return obj[dataKey] as DashboardRow[];

  // case-insensitive key match at this level
  const ciKey = Object.keys(obj).find((k) => k.toLowerCase() === dataKey.toLowerCase());
  if (ciKey && Array.isArray(obj[ciKey])) return obj[ciKey] as DashboardRow[];

  // common one-level wrappers: { data: {...} }, { result: {...} }, { payload: {...} }
  for (const wrapperKey of ['data', 'result', 'payload', 'items', 'rows']) {
    const inner = obj[wrapperKey];
    if (Array.isArray(inner)) return inner as DashboardRow[];
    if (inner && typeof inner === 'object') {
      const found = extractRows(inner, dataKey);
      if (found) return found;
    }
  }

  // last resort: the first array value found anywhere on this object
  const anyArrayKey = Object.keys(obj).find((k) => Array.isArray(obj[k]));
  if (anyArrayKey) return obj[anyArrayKey] as DashboardRow[];

  return null;
}

async function fetchView(view: ViewConfig): Promise<DashboardRow[]> {
  const params: Record<string, string> = {};
  if (!view.noDateFilter) {
    if (datePicker.value) params.datePicker = datePicker.value;
    if (timeStart.value) params.timeStart = timeStart.value;
    if (timeEnd.value) params.timeEnd = timeEnd.value;
  }
  try {
    const res = await api.get(view.endpoint, { params, timeout: 4000 });
    console.log(`[dashboard] ${view.endpoint} raw response (copy this line):`, JSON.stringify(res.data));
    console.log(`[dashboard] ${view.endpoint} typeof res.data:`, typeof res.data, Array.isArray(res.data));
    const rows = extractRows(res.data, view.dataKey);
    console.log(`[dashboard] ${view.endpoint} extracted rows:`, rows);
    if (!Array.isArray(rows)) throw new Error('unexpected response shape');
    connected.value = true;
    return rows;
  } catch (err) {
    // Surface the real reason instead of silently falling back to demo
    // data — otherwise a failing request looks identical to "no API yet".
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
  // the watcher below only fires on an actual change — if the fields were
  // already empty, force a reload so "clear" still refreshes the view.
  if (wasEmpty) void loadCurrentView();
}

watch([datePicker, timeStart, timeEnd], () => {
  if (!activeView.value.noDateFilter) void loadCurrentView();
});

/* ============================== KPI cards ============================== */
// Raw numeric targets — kept separate from display formatting so the
// animation below can tween from 0 up to each value instead of the UI
// just popping in a pre-formatted string.
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

// Animated display values: every time the targets change (new data loads
// or the view is switched), each number counts up from 0 to its target
// instead of just appearing.
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
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
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
      { name: 'wardName', label: 'หอผู้ป่วย', field: 'wardName', align: 'left' as const, sortable: true },
      { name: 'totalBeds', label: 'เตียงทั้งหมด', field: 'totalBeds', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'currentAdmit', label: 'ครองเตียง', field: 'currentAdmit', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'availableBeds', label: 'ว่าง', field: 'availableBeds', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
      { name: 'occupancyRate', label: 'อัตราครองเตียง', field: 'occupancyRate', align: 'right' as const, sortable: true, sort: (a: unknown, b: unknown) => toNum(a) - toNum(b) },
    ];
  }
  const cols = [
    { name: 'nameTitle', label: 'ชื่อ', field: 'nameTitle', align: 'left' as const, sortable: true },
    { name: 'hnCount', label: 'HN', field: 'hnCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
  ];
  if (activeView.value.kind === 'opd') {
    cols.push({ name: 'vnCount', label: 'VN', field: 'vnCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') });
  }
  cols.push(
    { name: 'anCount', label: 'AN', field: 'anCount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'income', label: 'รายได้ (บาท)', field: 'income', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'billAmount', label: 'ยอดเรียกเก็บ (บาท)', field: 'billAmount', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
    { name: 'ucMoney', label: 'ส่วนต่าง/UC (บาท)', field: 'ucMoney', align: 'right' as const, sortable: true, format: (v: unknown) => toNum(v).toLocaleString('th-TH') },
  );
  return cols;
});

// q-table needs a unique key per row. IpdBedRow has no `nameTitle` field
// (it has wardCode/wardName instead), so a single hardcoded key name breaks
// row identity for that view — every row resolves to the same undefined
// key, and Vue ends up reusing/mixing up rendered rows. Pick the field that
// actually exists for the active view instead.
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

// A distinct categorical palette for pie slices, separate from the
// severity-driven COLOR_MAP used elsewhere (ok/warn/crit/primary).
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

/* ============================== CSV export ============================== */
function exportCsv() {
  const cols = columns.value;
  const rows = currentRows.value;
  const header = cols.map((c) => c.label).join(',');
  const lines = rows.map((r) =>
    cols
      .map((c) => {
        const v = (r as Record<string, unknown>)[c.field as string] ?? '';
        const s = String(v).replace(/"/g, '""');
        return /[",\n]/.test(s) ? `"${s}"` : s;
      })
      .join(','),
  );
  const csv = '\uFEFF' + [header, ...lines].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${activeView.value.key}_${datePicker.value || todayStr()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Field names that hold text, not numbers — everything else in a row gets
// written to the sheet as a real number so totals/sorting/filtering work
// natively in Excel instead of landing as text.
const TEXT_FIELDS = new Set(['nameTitle', 'wardName', 'wardCode']);

function exportExcel() {
  const cols = columns.value;
  const rows = currentRows.value;

  const data = rows.map((r) => {
    const record = r as Record<string, unknown>;
    const obj: Record<string, string | number> = {};
    cols.forEach((c) => {
      const field = c.field as string;
      const raw = record[field];
      obj[c.label] = TEXT_FIELDS.has(c.name) ? String(raw ?? '') : toNum(raw);
    });
    return obj;
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  // give each column a sane width instead of Excel's cramped default
  worksheet['!cols'] = cols.map((c) => ({ wch: Math.max(c.label.length + 2, 10) }));

  const workbook = XLSX.utils.book_new();
  const sheetName = activeView.value.label.slice(0, 31); // Excel sheet-name limit
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  XLSX.writeFile(workbook, `${activeView.value.key}_${datePicker.value || todayStr()}.xlsx`);
}

onMounted(async () => {
  console.log('[dashboard] import.meta.env.VITE_API_URL:', import.meta.env.VITE_API_URL);
  console.log('[dashboard] api.defaults.baseURL:', api.defaults.baseURL);
  await loadCurrentView();
  buildChart();
  buildPieChart();
});
</script>

<style scoped>
/*
  Design direction: an "instrument panel" reading, not a SaaS card kit.
  No shadows, no gradients — flat surfaces separated by hairline rules and a
  single recurring structural device (a left accent bar) instead of icon
  chips in colored boxes. All reported numbers render in a monospace face
  so they read like data read-outs rather than typeset copy; Thai and UI
  text stay in the humanist sans. Import IBM Plex Mono alongside the Thai
  sans already used by the table/chart.
*/
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
}
@media (max-width: 640px) {
  .dash { padding: 14px 12px 32px; }
}
.dash :deep(.q-field__control), .dash :deep(input) { font-family: inherit; }
.mono, .vital__value, .status-updated, .filter-input :deep(input) {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
}

/* ---------- Header ---------- */
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
.dash-header__id {
  display: flex; align-items: center; gap: 7px;
  font-size: 12.5px; color: var(--ink-soft); margin-bottom: 8px;
}
.dash-header h1 { margin: 0 0 5px; font-size: 23px; font-weight: 700; color: var(--ink); }
.dash-header p { margin: 0; font-size: 13px; color: var(--ink-soft); max-width: 52ch; }
.dash-header__status {
  display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
  font-size: 12px;
}
.status-dot { display: none; }
.status-text { display: inline-flex; align-items: center; gap: 6px; color: var(--ink-soft); }
.status-text::before {
  content: ''; width: 7px; height: 7px; border-radius: 50%; background: #9FB0A6; flex-shrink: 0;
}
.dash-header__status:has(.status-text) .status-dot { display: none; }
.status-text:has(+ .status-updated) { }
/* dot color driven by the status modifier on the wrapping dot span kept for API parity */
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

/* ---------- Filter bar ---------- */
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
.filter-input--time { width: 108px; }
.filter-input :deep(.q-field__control) {
  border-bottom: 1px solid var(--line); padding: 0;
}
.filter-input :deep(.q-field__control):before,
.filter-input :deep(.q-field__control):after { display: none; }
.filter-divider { width: 1px; align-self: stretch; background: var(--line); }
.preset-group, .action-group { display: flex; gap: 6px; flex-wrap: wrap; }
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
.spin { animation: spin 0.9s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 640px) {
  .filter-bar { gap: 10px 12px; }
  .filter-divider { display: none; }
  .filter-input { width: 128px; }
  .filter-input--time { width: 92px; }
  .action-group, .preset-group { width: 100%; justify-content: flex-start; }
}
@media (max-width: 400px) {
  .filter-input { width: 118px; }
  .filter-input--time { width: 84px; }
}

/* ---------- Tab strip ---------- */
.tab-strip {
  display: flex; gap: 4px; overflow-x: auto; margin-bottom: 14px;
  border-bottom: 1px solid var(--line);
  scrollbar-width: thin;
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

/* ---------- Vitals strip (KPIs) ---------- */
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

/* ---------- Panels ---------- */
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

.metric-toggle { display: flex; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; }
.metric-toggle button {
  border: none; background: var(--surface); color: var(--ink-soft); font-family: inherit;
  padding: 6px 12px; font-size: 12px; cursor: pointer;
}
.metric-toggle button.active { background: var(--primary); color: #fff; }

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

.chart-box { position: relative; height: 320px; padding: 16px 18px; }
@media (max-width: 640px) { .chart-box { height: 280px; padding: 10px 8px; } }

/* ---------- Table ---------- */
.panel--table :deep(.q-table__container) { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.panel--table :deep(table) { min-width: 560px; }
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