import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service.js';
import { DashboardController } from './dashboard.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { DashboardRepositories } from './dashboard.repositories.js';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, PrismaService, DashboardRepositories],
})
export class DashboardModule {}
