import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service.js';
import { SearchDashboardDto } from './dto/search-dashboard.dto.js';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('dep')
  findDep(@Query() dto: SearchDashboardDto) {
    return this.dashboardService.findDep(dto);
  }

  @Get('pttype')
  findPttype(@Query() dto: SearchDashboardDto) {
    return this.dashboardService.findPttype(dto);
  }

  @Get('ipdWard')
  findIpdWard(@Query() dto: SearchDashboardDto) {
    return this.dashboardService.findIpdWard(dto);
  }

  @Get('ipdPttype')
  findIpdPttype(@Query() dto: SearchDashboardDto) {
    return this.dashboardService.findIpdPttype(dto);
  }

  @Get('ipdBed')
  findIpdBed() {
    return this.dashboardService.findIpdBed();
  }
}
