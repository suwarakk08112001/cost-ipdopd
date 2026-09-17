export declare class ResponsePttypeORDep {
    depGroup: string;
    nameTitle: string;
    hnCount: bigint;
    vnCount: bigint;
    anCount: number;
    income: number | null;
    billAmount: number | null;
    ucMoney: number | null;
}
export declare class ResponseIpdPttypeORIpdWard {
    depGroup: string;
    nameTitle: string;
    hnCount: bigint;
    anCount: bigint;
    income: number | null;
    billAmount: number | null;
    ucMoney: number | null;
}
export declare class ResponseIpdBed {
    wardCode: string;
    wardName: string;
    totalBeds: number;
    currentAdmit: bigint;
    occupancyRate: number;
    availableBeds: number;
}
