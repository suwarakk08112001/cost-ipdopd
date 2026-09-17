import { Injectable } from '@nestjs/common';
import { SearchDashboardDto } from './dto/search-dashboard.dto.js';
import { DashboardRepositories } from './dashboard.repositories.js';

@Injectable()
export class DashboardService {
  constructor(private readonly dashboardRepositories: DashboardRepositories) {}

  async findDep(dto: SearchDashboardDto) {
    const data = await this.dashboardRepositories.findDep(dto);
    return {
      dep: data,
    };
  }

  async findPttype(dto: SearchDashboardDto) {
    const data = await this.dashboardRepositories.findPttype(dto);
    return {
      Pttype: data,
    };
  }

  async findIpdWard(dto: SearchDashboardDto) {
    const data = await this.dashboardRepositories.findIpdWard(dto);
    return {
      IpdWard: data,
    };
  }

  async findIpdPttype(dto: SearchDashboardDto) {
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
}
