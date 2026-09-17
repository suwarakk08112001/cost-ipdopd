var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import dayjs from 'dayjs';
let DashboardRepositories = class DashboardRepositories {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findDep(dto) {
        const datePicker = dto.datePicker || dayjs().format('YYYY-MM-DD');
        const timeStart = dto.timeStart ?? '00:00:00';
        const isToday = dayjs(datePicker).isSame(dayjs(), 'day');
        const timeEnd = dto.timeEnd ?? (isToday ? dayjs().format('HH:mm:ss') : '23:59:59');
        const result = await this.prisma.$queryRaw `
      WITH base AS (
        SELECT
          CASE WHEN o.main_dep IN ('010','057') THEN '010' ELSE o.main_dep END AS dep_group,
          CASE WHEN o.main_dep IN ('010','057') THEN '010 ทันตกรรม' ELSE k.department END AS department,
          COUNT(DISTINCT CASE WHEN o.an IS NULL THEN o.hn END) AS hn_count,
          COUNT(DISTINCT CASE WHEN o.an IS NULL THEN o.vn END) AS vn_count,
          COUNT(DISTINCT CASE WHEN o.an IS NOT NULL THEN o.an END) AS an_count,
          SUM(CASE WHEN o.an IS NULL THEN v.income END) AS income,
          SUM(CASE WHEN o.an IS NULL THEN v.uc_money END) AS uc_money
        FROM ovst o
        LEFT JOIN kskdepartment k ON o.main_dep = k.depcode
        LEFT JOIN vn_stat v ON o.vn = v.vn
        WHERE o.vstdate = ${datePicker}
          AND o.vsttime BETWEEN ${timeStart} AND ${timeEnd}
        GROUP BY
          CASE WHEN o.main_dep IN ('010','057') THEN '010' ELSE o.main_dep END,
          CASE WHEN o.main_dep IN ('010','057') THEN '010 ทันตกรรม' ELSE k.department END
      ),
      bill AS (
        SELECT
          x.dep_group,
          SUM(x.bill_amount) AS bill_amount
        FROM (
          SELECT DISTINCT
            CASE WHEN o.main_dep IN ('010','057') THEN '010' ELSE o.main_dep END AS dep_group,
            r.rcpno,
            r.bill_amount
          FROM ovst o
          INNER JOIN rcpt_print_detail rp ON o.vn = rp.vn
          INNER JOIN rcpt_print r ON rp.rcpno = r.rcpno
          WHERE o.vstdate = ${datePicker}
            AND o.vsttime BETWEEN ${timeStart} AND ${timeEnd}
            AND o.an IS NULL
        ) x
        GROUP BY x.dep_group
      )
      SELECT
        base.dep_group   AS depGroup,
        base.department  AS nameTitle,
        base.hn_count    AS hnCount,
        base.vn_count    AS vnCount,
        base.an_count    AS anCount,
        base.income      AS income,
        COALESCE(bill.bill_amount, 0) AS billAmount,
        base.uc_money    AS ucMoney
      FROM base
      LEFT JOIN bill ON base.dep_group = bill.dep_group
      ORDER BY base.dep_group
    `;
        return result.map((row) => ({
            ...row,
            hnCount: Number(row.hnCount),
            vnCount: Number(row.vnCount),
            anCount: Number(row.anCount),
        }));
    }
    async findPttype(dto) {
        const datePicker = dto.datePicker || new Date().toISOString().slice(0, 10);
        console.log(datePicker);
        const timeStart = dto.timeStart ?? '00:00:00';
        const isToday = dayjs(datePicker).isSame(dayjs(), 'day');
        const timeEnd = dto.timeEnd ?? (isToday ? dayjs().format('HH:mm:ss') : '23:59:59');
        console.log(timeEnd);
        const pttype = await this.prisma.$queryRaw `
    WITH ovst_stat AS (
      SELECT
        o.pttype,
        p.name,
        COUNT(DISTINCT o.hn) AS hnCount,
        COUNT(DISTINCT o.vn) AS vnCount,
        SUM(v.income) AS income,
        SUM(v.uc_money) AS ucMoney
      FROM ovst o
      LEFT OUTER JOIN pttype p ON o.pttype = p.pttype
      LEFT OUTER JOIN vn_stat v ON o.vn = v.vn
      WHERE o.vstdate = ${datePicker}
        AND o.vsttime BETWEEN ${timeStart} AND ${timeEnd}
        AND o.an IS NULL
      GROUP BY o.pttype, p.name
    ),
    bill_stat AS (
      SELECT
        x.pttype,
        SUM(x.bill_amount) AS bill_amount
      FROM (
        SELECT DISTINCT
          o.pttype,
          r.rcpno,
          r.bill_amount
        FROM ovst o
        INNER JOIN rcpt_print_detail rp ON o.vn = rp.vn
        INNER JOIN rcpt_print r ON rp.rcpno = r.rcpno
        WHERE o.vstdate = ${datePicker}
          AND o.vsttime BETWEEN ${timeStart} AND ${timeEnd}
          AND o.an IS NULL
      ) x
      GROUP BY x.pttype
    )
    SELECT
      a.pttype AS depGroup,
      a.name AS nameTitle,
      a.hnCount AS hnCount,
      a.vnCount AS vnCount,
      0 AS anCount,
      a.income,
      COALESCE(b.bill_amount, 0) AS billAmount,
      a.ucMoney AS ucMoney
    FROM ovst_stat a
    LEFT OUTER JOIN bill_stat b ON a.pttype = b.pttype
    ORDER BY a.pttype;
    `;
        return pttype.map((r) => ({
            depGroup: r.depGroup,
            nameTitle: r.nameTitle,
            hnCount: Number(r.hnCount),
            vnCount: Number(r.vnCount),
            anCount: Number(r.anCount),
            income: Number(r.income ?? 0),
            billAmount: Number(r.billAmount ?? 0),
            ucMoney: Number(r.ucMoney ?? 0),
        }));
    }
    async findIpdWard(dto) {
        const datePicker = dto.datePicker || new Date().toISOString().slice(0, 10);
        const ipdWard = await this.prisma.$queryRaw `
      WITH ward_stat AS (
        SELECT
          i.ward,
          w.name AS ward_name,
          COUNT(DISTINCT i.hn) AS hnCount,
          COUNT(DISTINCT i.an) AS anCount,
          SUM(COALESCE(a.income, 0)) AS income,
          SUM(COALESCE(a.paid_money, 0)) AS billAmount
        FROM ipt i
        LEFT JOIN ward w ON i.ward = w.ward
        LEFT JOIN an_stat a ON i.an = a.an
        WHERE i.dchdate = ${datePicker}
          AND i.dchdate IS NOT NULL
        GROUP BY i.ward, w.name
      )
      SELECT
        ward AS depGroup,
        ward_name AS nameTitle,
        hnCount,
        anCount,
        income,
        billAmount,
        (income - billAmount) AS ucMoney
      FROM ward_stat
      ORDER BY ward
    `;
        return ipdWard.map((r) => ({
            depGroup: r.depGroup,
            nameTitle: r.nameTitle,
            hnCount: Number(r.hnCount),
            anCount: Number(r.anCount),
            income: Number(r.income ?? 0),
            billAmount: Number(r.billAmount ?? 0),
            ucMoney: Number(r.ucMoney ?? 0),
        }));
    }
    async findIpdPttype(dto) {
        const datePicker = dto.datePicker || new Date().toISOString().slice(0, 10);
        console.log(datePicker);
        const IpdPttype = await this.prisma.$queryRaw `
    WITH dept_stat AS (
        SELECT
          i.pttype,
          p.name AS pttype_name,
          COUNT(DISTINCT i.hn) AS hnCount,
          COUNT(DISTINCT i.an) AS anCount,
          SUM(COALESCE(a.income, 0)) AS income,
          SUM(COALESCE(a.paid_money, 0)) AS billAmount
        FROM ipt i
        LEFT JOIN pttype p ON i.pttype = p.pttype
        LEFT JOIN an_stat a ON i.an = a.an
        WHERE i.dchdate = ${datePicker}
          AND i.dchdate IS NOT NULL
        GROUP BY i.pttype, p.name
      )
      SELECT
        pttype AS depGroup,
        pttype_name AS nameTitle,
        hnCount,
        anCount,
        income,
        billAmount,
        (income - billAmount) AS ucMoney
      FROM dept_stat
      ORDER BY pttype;
    `;
        return IpdPttype.map((r) => ({
            depGroup: r.depGroup,
            nameTitle: r.nameTitle,
            hnCount: Number(r.hnCount),
            anCount: Number(r.anCount),
            income: Number(r.income ?? 0),
            billAmount: Number(r.billAmount ?? 0),
            ucMoney: Number(r.ucMoney ?? 0),
        }));
    }
    async findIpdBed() {
        const IpdBed = await this.prisma.$queryRaw `
      WITH admit AS (
        SELECT 
          ward, 
          COUNT(DISTINCT an) AS currentAdmit
        FROM ipt
        WHERE dchdate IS NULL
        GROUP BY ward
      )
      SELECT 
        w.ward AS wardCode,
        w.name AS wardName,
        COALESCE(w.bedcount, 0) AS totalBeds,
        COALESCE(admit.currentAdmit, 0) AS currentAdmit,
        CASE 
          WHEN COALESCE(w.bedcount, 0) > 0 
          THEN ROUND((COALESCE(admit.currentAdmit, 0) / w.bedcount) * 100, 2)
          ELSE 0 
        END AS occupancyRate,
        (COALESCE(w.bedcount, 0) - COALESCE(admit.currentAdmit, 0)) AS availableBeds
      FROM ward w
      LEFT JOIN admit ON w.ward = admit.ward
      WHERE w.bedcount > 0 
      ORDER BY w.ward
    `;
        return IpdBed.map((w) => ({
            wardCode: w.wardCode,
            wardName: w.wardName,
            totalBeds: Number(w.totalBeds),
            currentAdmit: Number(w.currentAdmit),
            occupancyRate: Number(w.occupancyRate),
            availableBeds: Number(w.availableBeds),
        }));
    }
};
DashboardRepositories = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DashboardRepositories);
export { DashboardRepositories };
//# sourceMappingURL=dashboard.repositories.js.map