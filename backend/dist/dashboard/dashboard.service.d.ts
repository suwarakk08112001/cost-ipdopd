import { SearchDashboardDto } from './dto/search-dashboard.dto.js';
import { DashboardRepositories } from './dashboard.repositories.js';
export declare class DashboardService {
    private readonly dashboardRepositories;
    constructor(dashboardRepositories: DashboardRepositories);
    findDep(dto: SearchDashboardDto): Promise<{
        dep: {
            hnCount: number;
            vnCount: number;
            anCount: number;
            depGroup: string;
            nameTitle: string;
            income: number | null;
            billAmount: number | null;
            ucMoney: number | null;
        }[];
    }>;
    findPttype(dto: SearchDashboardDto): Promise<{
        Pttype: {
            depGroup: string;
            nameTitle: string;
            hnCount: number;
            vnCount: number;
            anCount: number;
            income: number;
            billAmount: number;
            ucMoney: number;
        }[];
    }>;
    findIpdWard(dto: SearchDashboardDto): Promise<{
        IpdWard: {
            depGroup: string;
            nameTitle: string;
            hnCount: number;
            anCount: number;
            income: number;
            billAmount: number;
            ucMoney: number;
        }[];
    }>;
    findIpdPttype(dto: SearchDashboardDto): Promise<{
        IpdPttype: {
            depGroup: string;
            nameTitle: string;
            hnCount: number;
            anCount: number;
            income: number;
            billAmount: number;
            ucMoney: number;
        }[];
    }>;
    findIpdBed(): Promise<{
        IpdBed: {
            wardCode: string;
            wardName: string;
            totalBeds: number;
            currentAdmit: number;
            occupancyRate: number;
            availableBeds: number;
        }[];
    }>;
}
