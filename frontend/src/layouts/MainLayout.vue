<template>
  <q-layout view="lHh Lpr lFf" class="app-shell">
    <q-header elevated class="app-header">
      <q-toolbar class="app-toolbar">
      

        <div class="brand">
          <span class="brand-icon">
            <q-icon name="local_hospital" size="20px" />
          </span>
          <div class="brand-text">
            <span class="brand-title">ต้นทุน OPD · IPD</span>
            <span class="brand-sub">โรงพยาบาลปะเหลียน</span>
          </div>
        </div>

        <q-space />

     
      </q-toolbar>
    </q-header>

   

    <q-page-container class="app-page-container">
      <router-view />
    </q-page-container>

    <q-footer class="app-footer">
      <div class="footer-accent"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-icon">
            <q-icon name="local_hospital" size="18px" />
          </span>
          <div class="footer-brand-text">
            <span class="footer-title">โรงพยาบาลปะเหลียน</span>
            <span class="footer-sub">ระบบวิเคราะห์ต้นทุน OPD · IPD</span>
          </div>
        </div>

        <div class="footer-contact">
          <a href="tel:075501907" class="footer-link">
            <q-icon name="call" size="14px" />
            075 501 907
          </a>
          <span class="footer-link">
            <q-icon name="place" size="14px" />
            248/2 ท่าข้าม อ.ปะเหลียน จ.ตรัง 92120
          </span>
          <span class="footer-link">
            <q-icon name="schedule" size="14px" />
            อัปเดตข้อมูลแบบเรียลไทม์
          </span>
        </div>

        <div class="footer-meta">
          <span>เวอร์ชันระบบ 1.0</span>
          <span class="footer-dot">•</span>
          <span>© {{ currentYear }} งานเทคโนโลยีสารสนเทศ</span>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear() + 543); // พ.ศ.
</script>

<style scoped>
.app-shell {
  --primary: #0f5c73;
  --primary-strong: #0a3f4f;
  --primary-tint: #e4eef0;
  --bg: #f4f7f8;
  --surface: #ffffff;
  --border: #dce4e8;
  --text: #16242c;
  --text-muted: #5b6b74;
  font-family: 'IBM Plex Sans Thai', -apple-system, 'Segoe UI', sans-serif;
}

.app-page-container {
  background: var(--bg);
}

/* ---------- Header ---------- */
.app-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-strong) 100%);
}
.app-toolbar {
  min-height: 60px;
  padding: 0 10px 0 4px;
  gap: 4px;
}
.menu-btn,
.header-icon-btn {
  color: rgba(255, 255, 255, 0.92);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 4px;
  min-width: 0;
}
.brand-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
  min-width: 0;
}
.brand-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brand-sub {
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.78);
  white-space: nowrap;
}

@media (max-width: 599px) {
  .app-toolbar { min-height: 58px; padding-right: 4px; }
  .brand-icon { width: 30px; height: 30px; }
  .brand-title {
    font-size: 13px;
    font-weight: 700;
    /* wrap onto a 2nd line instead of cutting off with an ellipsis */
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    line-height: 1.2;
    max-width: none;
  }
  .brand-sub { font-size: 10px; }
}

@media (max-width: 360px) {
  .brand-title { font-size: 12px; }
  .brand-sub { font-size: 9.5px; }
}

/* ---------- Drawer ---------- */
.app-drawer {
  background: var(--surface);
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 16px 14px;
  border-bottom: 1px solid var(--border);
}
.drawer-brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-tint);
  color: var(--primary-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.drawer-brand-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}
.drawer-brand-sub {
  font-size: 11.5px;
  color: var(--text-muted);
}

.nav-section { padding: 8px 8px 4px; }
.nav-label {
  font-size: 11.5px;
  color: var(--text-muted);
  padding: 8px 8px 4px;
  font-weight: 600;
}
.nav-label--muted { opacity: 0.8; }

.nav-item {
  border-radius: 10px;
  margin: 2px 0;
  color: var(--text);
  min-height: 42px;
}
.nav-item--primary.nav-item--primary {
  background: var(--primary-tint);
  color: var(--primary-strong);
  font-weight: 600;
}
.nav-item--primary .nav-item-avatar {
  color: var(--primary-strong);
}
.nav-item:hover:not(.nav-item--primary) {
  background: var(--bg);
}

.nav-divider { margin: 6px 12px; }

.drawer-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  margin-top: auto;
  color: var(--text-muted);
  font-size: 11px;
  border-top: 1px solid var(--border);
}

/* ---------- Footer ---------- */
.app-footer {
  position: relative;
  background: var(--surface);
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}
.footer-accent {
  height: 3px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-strong) 55%, var(--primary) 100%);
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding: 14px 20px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.footer-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: var(--primary-tint);
  color: var(--primary-strong);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.footer-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}
.footer-sub {
  font-size: 11px;
  color: var(--text-muted);
}

.footer-contact {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 11.5px;
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s;
}
a.footer-link:hover {
  color: var(--primary);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
}
.footer-dot { opacity: 0.6; }

@media (max-width: 900px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 16px 16px 14px;
  }
  .footer-contact { justify-content: center; }
  .footer-meta { justify-content: center; }
}
</style>