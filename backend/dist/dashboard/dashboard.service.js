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
import { DashboardRepositories } from './dashboard.repositories.js';
let DashboardService = class DashboardService {
    dashboardRepositories;
    constructor(dashboardRepositories) {
        this.dashboardRepositories = dashboardRepositories;
    }
    async findDep(dto) {
        const data = await this.dashboardRepositories.findDep(dto);
        return {
            dep: data,
        };
    }
    async findPttype(dto) {
        const data = await this.dashboardRepositories.findPttype(dto);
        return {
            Pttype: data,
        };
    }
    async findIpdWard(dto) {
        const data = await this.dashboardRepositories.findIpdWard(dto);
        return {
            IpdWard: data,
        };
    }
    async findIpdPttype(dto) {
        const data = await this.dashboardRepositories.findIpdPttype(dto);
        return {
            IpdPttype: data,
        };
    }
    async findIpdBed() {
        const data = await this.dashboardRepositories.findIpdBed();
        return {
            IpdBed: data,
        };
    }
};
DashboardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DashboardRepositories])
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map