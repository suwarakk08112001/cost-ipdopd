import { SearchDashboardDto } from './dto/search-dashboard.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class DashboardRepositories {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findDep(dto: SearchDashboardDto): Promise<{
        hnCount: number;
        vnCount: number;
        anCount: number;
        depGroup: string;
        nameTitle: string;
        income: number | null;
        billAmount: number | null;
        ucMoney: number | null;
    }[]>;
    findPttype(dto: SearchDashboardDto): Promise<{
        depGroup: string;
        nameTitle: string;
        hnCount: number;
        vnCount: number;
        anCount: number;
        income: number;
        billAmount: number;
        ucMoney: number;
    }[]>;
    findIpdWard(dto: SearchDashboardDto): Promise<{
        depGroup: string;
        nameTitle: string;
        hnCount: number;
        anCount: number;
        income: number;
        billAmount: number;
        ucMoney: number;
    }[]>;
    findIpdPttype(dto: SearchDashboardDto): Promise<{
        depGroup: string;
        nameTitle: string;
        hnCount: number;
        anCount: number;
        income: number;
        billAmount: number;
        ucMoney: number;
    }[]>;
    findIpdBed(): Promise<{
        wardCode: string;
        wardName: string;
        totalBeds: number;
        currentAdmit: number;
        occupancyRate: number;
        availableBeds: number;
    }[]>;
}
