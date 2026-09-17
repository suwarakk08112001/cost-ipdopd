import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WardModel = runtime.Types.Result.DefaultSelection<Prisma.$WardPayload>;
export type AggregateWard = {
    _count: WardCountAggregateOutputType | null;
    _avg: WardAvgAggregateOutputType | null;
    _sum: WardSumAggregateOutputType | null;
    _min: WardMinAggregateOutputType | null;
    _max: WardMaxAggregateOutputType | null;
};
export type WardAvgAggregateOutputType = {
    bedcount: number | null;
    ipdRxShiftTypeId: number | null;
    realBedcount: number | null;
};
export type WardSumAggregateOutputType = {
    bedcount: number | null;
    ipdRxShiftTypeId: number | null;
    realBedcount: number | null;
};
export type WardMinAggregateOutputType = {
    ward: string | null;
    name: string | null;
    oldCode: string | null;
    spclty: string | null;
    bedcount: number | null;
    shortname: string | null;
    sssCode: string | null;
    hosGuid: string | null;
    wardExportCode: string | null;
    wardActive: string | null;
    ipdRxShiftTypeId: number | null;
    selectBednoFromLayout: string | null;
    ipKey: string | null;
    strictAccess: string | null;
    lockBedcount: string | null;
    realBedcount: number | null;
};
export type WardMaxAggregateOutputType = {
    ward: string | null;
    name: string | null;
    oldCode: string | null;
    spclty: string | null;
    bedcount: number | null;
    shortname: string | null;
    sssCode: string | null;
    hosGuid: string | null;
    wardExportCode: string | null;
    wardActive: string | null;
    ipdRxShiftTypeId: number | null;
    selectBednoFromLayout: string | null;
    ipKey: string | null;
    strictAccess: string | null;
    lockBedcount: string | null;
    realBedcount: number | null;
};
export type WardCountAggregateOutputType = {
    ward: number;
    name: number;
    oldCode: number;
    spclty: number;
    bedcount: number;
    shortname: number;
    sssCode: number;
    hosGuid: number;
    wardExportCode: number;
    wardActive: number;
    ipdRxShiftTypeId: number;
    selectBednoFromLayout: number;
    ipKey: number;
    strictAccess: number;
    lockBedcount: number;
    realBedcount: number;
    _all: number;
};
export type WardAvgAggregateInputType = {
    bedcount?: true;
    ipdRxShiftTypeId?: true;
    realBedcount?: true;
};
export type WardSumAggregateInputType = {
    bedcount?: true;
    ipdRxShiftTypeId?: true;
    realBedcount?: true;
};
export type WardMinAggregateInputType = {
    ward?: true;
    name?: true;
    oldCode?: true;
    spclty?: true;
    bedcount?: true;
    shortname?: true;
    sssCode?: true;
    hosGuid?: true;
    wardExportCode?: true;
    wardActive?: true;
    ipdRxShiftTypeId?: true;
    selectBednoFromLayout?: true;
    ipKey?: true;
    strictAccess?: true;
    lockBedcount?: true;
    realBedcount?: true;
};
export type WardMaxAggregateInputType = {
    ward?: true;
    name?: true;
    oldCode?: true;
    spclty?: true;
    bedcount?: true;
    shortname?: true;
    sssCode?: true;
    hosGuid?: true;
    wardExportCode?: true;
    wardActive?: true;
    ipdRxShiftTypeId?: true;
    selectBednoFromLayout?: true;
    ipKey?: true;
    strictAccess?: true;
    lockBedcount?: true;
    realBedcount?: true;
};
export type WardCountAggregateInputType = {
    ward?: true;
    name?: true;
    oldCode?: true;
    spclty?: true;
    bedcount?: true;
    shortname?: true;
    sssCode?: true;
    hosGuid?: true;
    wardExportCode?: true;
    wardActive?: true;
    ipdRxShiftTypeId?: true;
    selectBednoFromLayout?: true;
    ipKey?: true;
    strictAccess?: true;
    lockBedcount?: true;
    realBedcount?: true;
    _all?: true;
};
export type WardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardWhereInput;
    orderBy?: Prisma.WardOrderByWithRelationInput | Prisma.WardOrderByWithRelationInput[];
    cursor?: Prisma.WardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WardCountAggregateInputType;
    _avg?: WardAvgAggregateInputType;
    _sum?: WardSumAggregateInputType;
    _min?: WardMinAggregateInputType;
    _max?: WardMaxAggregateInputType;
};
export type GetWardAggregateType<T extends WardAggregateArgs> = {
    [P in keyof T & keyof AggregateWard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWard[P]> : Prisma.GetScalarType<T[P], AggregateWard[P]>;
};
export type WardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardWhereInput;
    orderBy?: Prisma.WardOrderByWithAggregationInput | Prisma.WardOrderByWithAggregationInput[];
    by: Prisma.WardScalarFieldEnum[] | Prisma.WardScalarFieldEnum;
    having?: Prisma.WardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WardCountAggregateInputType | true;
    _avg?: WardAvgAggregateInputType;
    _sum?: WardSumAggregateInputType;
    _min?: WardMinAggregateInputType;
    _max?: WardMaxAggregateInputType;
};
export type WardGroupByOutputType = {
    ward: string;
    name: string | null;
    oldCode: string | null;
    spclty: string | null;
    bedcount: number | null;
    shortname: string | null;
    sssCode: string | null;
    hosGuid: string | null;
    wardExportCode: string | null;
    wardActive: string | null;
    ipdRxShiftTypeId: number | null;
    selectBednoFromLayout: string | null;
    ipKey: string | null;
    strictAccess: string | null;
    lockBedcount: string | null;
    realBedcount: number | null;
    _count: WardCountAggregateOutputType | null;
    _avg: WardAvgAggregateOutputType | null;
    _sum: WardSumAggregateOutputType | null;
    _min: WardMinAggregateOutputType | null;
    _max: WardMaxAggregateOutputType | null;
};
export type GetWardGroupByPayload<T extends WardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WardGroupByOutputType[P]>;
}>>;
export type WardWhereInput = {
    AND?: Prisma.WardWhereInput | Prisma.WardWhereInput[];
    OR?: Prisma.WardWhereInput[];
    NOT?: Prisma.WardWhereInput | Prisma.WardWhereInput[];
    ward?: Prisma.StringFilter<"Ward"> | string;
    name?: Prisma.StringNullableFilter<"Ward"> | string | null;
    oldCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    spclty?: Prisma.StringNullableFilter<"Ward"> | string | null;
    bedcount?: Prisma.IntNullableFilter<"Ward"> | number | null;
    shortname?: Prisma.StringNullableFilter<"Ward"> | string | null;
    sssCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    hosGuid?: Prisma.StringNullableFilter<"Ward"> | string | null;
    wardExportCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    wardActive?: Prisma.StringNullableFilter<"Ward"> | string | null;
    ipdRxShiftTypeId?: Prisma.IntNullableFilter<"Ward"> | number | null;
    selectBednoFromLayout?: Prisma.StringNullableFilter<"Ward"> | string | null;
    ipKey?: Prisma.StringNullableFilter<"Ward"> | string | null;
    strictAccess?: Prisma.StringNullableFilter<"Ward"> | string | null;
    lockBedcount?: Prisma.StringNullableFilter<"Ward"> | string | null;
    realBedcount?: Prisma.IntNullableFilter<"Ward"> | number | null;
    ipts?: Prisma.IptListRelationFilter;
};
export type WardOrderByWithRelationInput = {
    ward?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    oldCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    spclty?: Prisma.SortOrderInput | Prisma.SortOrder;
    bedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    shortname?: Prisma.SortOrderInput | Prisma.SortOrder;
    sssCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardExportCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    selectBednoFromLayout?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    strictAccess?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockBedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    realBedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipts?: Prisma.IptOrderByRelationAggregateInput;
    _relevance?: Prisma.WardOrderByRelevanceInput;
};
export type WardWhereUniqueInput = Prisma.AtLeast<{
    ward?: string;
    AND?: Prisma.WardWhereInput | Prisma.WardWhereInput[];
    OR?: Prisma.WardWhereInput[];
    NOT?: Prisma.WardWhereInput | Prisma.WardWhereInput[];
    name?: Prisma.StringNullableFilter<"Ward"> | string | null;
    oldCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    spclty?: Prisma.StringNullableFilter<"Ward"> | string | null;
    bedcount?: Prisma.IntNullableFilter<"Ward"> | number | null;
    shortname?: Prisma.StringNullableFilter<"Ward"> | string | null;
    sssCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    hosGuid?: Prisma.StringNullableFilter<"Ward"> | string | null;
    wardExportCode?: Prisma.StringNullableFilter<"Ward"> | string | null;
    wardActive?: Prisma.StringNullableFilter<"Ward"> | string | null;
    ipdRxShiftTypeId?: Prisma.IntNullableFilter<"Ward"> | number | null;
    selectBednoFromLayout?: Prisma.StringNullableFilter<"Ward"> | string | null;
    ipKey?: Prisma.StringNullableFilter<"Ward"> | string | null;
    strictAccess?: Prisma.StringNullableFilter<"Ward"> | string | null;
    lockBedcount?: Prisma.StringNullableFilter<"Ward"> | string | null;
    realBedcount?: Prisma.IntNullableFilter<"Ward"> | number | null;
    ipts?: Prisma.IptListRelationFilter;
}, "ward">;
export type WardOrderByWithAggregationInput = {
    ward?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    oldCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    spclty?: Prisma.SortOrderInput | Prisma.SortOrder;
    bedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    shortname?: Prisma.SortOrderInput | Prisma.SortOrder;
    sssCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardExportCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    wardActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    selectBednoFromLayout?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    strictAccess?: Prisma.SortOrderInput | Prisma.SortOrder;
    lockBedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    realBedcount?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WardCountOrderByAggregateInput;
    _avg?: Prisma.WardAvgOrderByAggregateInput;
    _max?: Prisma.WardMaxOrderByAggregateInput;
    _min?: Prisma.WardMinOrderByAggregateInput;
    _sum?: Prisma.WardSumOrderByAggregateInput;
};
export type WardScalarWhereWithAggregatesInput = {
    AND?: Prisma.WardScalarWhereWithAggregatesInput | Prisma.WardScalarWhereWithAggregatesInput[];
    OR?: Prisma.WardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WardScalarWhereWithAggregatesInput | Prisma.WardScalarWhereWithAggregatesInput[];
    ward?: Prisma.StringWithAggregatesFilter<"Ward"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    oldCode?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    spclty?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    bedcount?: Prisma.IntNullableWithAggregatesFilter<"Ward"> | number | null;
    shortname?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    sssCode?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    hosGuid?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    wardExportCode?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    wardActive?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    ipdRxShiftTypeId?: Prisma.IntNullableWithAggregatesFilter<"Ward"> | number | null;
    selectBednoFromLayout?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    ipKey?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    strictAccess?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    lockBedcount?: Prisma.StringNullableWithAggregatesFilter<"Ward"> | string | null;
    realBedcount?: Prisma.IntNullableWithAggregatesFilter<"Ward"> | number | null;
};
export type WardCreateInput = {
    ward: string;
    name?: string | null;
    oldCode?: string | null;
    spclty?: string | null;
    bedcount?: number | null;
    shortname?: string | null;
    sssCode?: string | null;
    hosGuid?: string | null;
    wardExportCode?: string | null;
    wardActive?: string | null;
    ipdRxShiftTypeId?: number | null;
    selectBednoFromLayout?: string | null;
    ipKey?: string | null;
    strictAccess?: string | null;
    lockBedcount?: string | null;
    realBedcount?: number | null;
    ipts?: Prisma.IptCreateNestedManyWithoutWardInfoInput;
};
export type WardUncheckedCreateInput = {
    ward: string;
    name?: string | null;
    oldCode?: string | null;
    spclty?: string | null;
    bedcount?: number | null;
    shortname?: string | null;
    sssCode?: string | null;
    hosGuid?: string | null;
    wardExportCode?: string | null;
    wardActive?: string | null;
    ipdRxShiftTypeId?: number | null;
    selectBednoFromLayout?: string | null;
    ipKey?: string | null;
    strictAccess?: string | null;
    lockBedcount?: string | null;
    realBedcount?: number | null;
    ipts?: Prisma.IptUncheckedCreateNestedManyWithoutWardInfoInput;
};
export type WardUpdateInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ipts?: Prisma.IptUpdateManyWithoutWardInfoNestedInput;
};
export type WardUncheckedUpdateInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ipts?: Prisma.IptUncheckedUpdateManyWithoutWardInfoNestedInput;
};
export type WardCreateManyInput = {
    ward: string;
    name?: string | null;
    oldCode?: string | null;
    spclty?: string | null;
    bedcount?: number | null;
    shortname?: string | null;
    sssCode?: string | null;
    hosGuid?: string | null;
    wardExportCode?: string | null;
    wardActive?: string | null;
    ipdRxShiftTypeId?: number | null;
    selectBednoFromLayout?: string | null;
    ipKey?: string | null;
    strictAccess?: string | null;
    lockBedcount?: string | null;
    realBedcount?: number | null;
};
export type WardUpdateManyMutationInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type WardUncheckedUpdateManyInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type WardNullableScalarRelationFilter = {
    is?: Prisma.WardWhereInput | null;
    isNot?: Prisma.WardWhereInput | null;
};
export type WardOrderByRelevanceInput = {
    fields: Prisma.WardOrderByRelevanceFieldEnum | Prisma.WardOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type WardCountOrderByAggregateInput = {
    ward?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    oldCode?: Prisma.SortOrder;
    spclty?: Prisma.SortOrder;
    bedcount?: Prisma.SortOrder;
    shortname?: Prisma.SortOrder;
    sssCode?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    wardExportCode?: Prisma.SortOrder;
    wardActive?: Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrder;
    selectBednoFromLayout?: Prisma.SortOrder;
    ipKey?: Prisma.SortOrder;
    strictAccess?: Prisma.SortOrder;
    lockBedcount?: Prisma.SortOrder;
    realBedcount?: Prisma.SortOrder;
};
export type WardAvgOrderByAggregateInput = {
    bedcount?: Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrder;
    realBedcount?: Prisma.SortOrder;
};
export type WardMaxOrderByAggregateInput = {
    ward?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    oldCode?: Prisma.SortOrder;
    spclty?: Prisma.SortOrder;
    bedcount?: Prisma.SortOrder;
    shortname?: Prisma.SortOrder;
    sssCode?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    wardExportCode?: Prisma.SortOrder;
    wardActive?: Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrder;
    selectBednoFromLayout?: Prisma.SortOrder;
    ipKey?: Prisma.SortOrder;
    strictAccess?: Prisma.SortOrder;
    lockBedcount?: Prisma.SortOrder;
    realBedcount?: Prisma.SortOrder;
};
export type WardMinOrderByAggregateInput = {
    ward?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    oldCode?: Prisma.SortOrder;
    spclty?: Prisma.SortOrder;
    bedcount?: Prisma.SortOrder;
    shortname?: Prisma.SortOrder;
    sssCode?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    wardExportCode?: Prisma.SortOrder;
    wardActive?: Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrder;
    selectBednoFromLayout?: Prisma.SortOrder;
    ipKey?: Prisma.SortOrder;
    strictAccess?: Prisma.SortOrder;
    lockBedcount?: Prisma.SortOrder;
    realBedcount?: Prisma.SortOrder;
};
export type WardSumOrderByAggregateInput = {
    bedcount?: Prisma.SortOrder;
    ipdRxShiftTypeId?: Prisma.SortOrder;
    realBedcount?: Prisma.SortOrder;
};
export type WardCreateNestedOneWithoutIptsInput = {
    create?: Prisma.XOR<Prisma.WardCreateWithoutIptsInput, Prisma.WardUncheckedCreateWithoutIptsInput>;
    connectOrCreate?: Prisma.WardCreateOrConnectWithoutIptsInput;
    connect?: Prisma.WardWhereUniqueInput;
};
export type WardUpdateOneWithoutIptsNestedInput = {
    create?: Prisma.XOR<Prisma.WardCreateWithoutIptsInput, Prisma.WardUncheckedCreateWithoutIptsInput>;
    connectOrCreate?: Prisma.WardCreateOrConnectWithoutIptsInput;
    upsert?: Prisma.WardUpsertWithoutIptsInput;
    disconnect?: Prisma.WardWhereInput | boolean;
    delete?: Prisma.WardWhereInput | boolean;
    connect?: Prisma.WardWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WardUpdateToOneWithWhereWithoutIptsInput, Prisma.WardUpdateWithoutIptsInput>, Prisma.WardUncheckedUpdateWithoutIptsInput>;
};
export type WardCreateWithoutIptsInput = {
    ward: string;
    name?: string | null;
    oldCode?: string | null;
    spclty?: string | null;
    bedcount?: number | null;
    shortname?: string | null;
    sssCode?: string | null;
    hosGuid?: string | null;
    wardExportCode?: string | null;
    wardActive?: string | null;
    ipdRxShiftTypeId?: number | null;
    selectBednoFromLayout?: string | null;
    ipKey?: string | null;
    strictAccess?: string | null;
    lockBedcount?: string | null;
    realBedcount?: number | null;
};
export type WardUncheckedCreateWithoutIptsInput = {
    ward: string;
    name?: string | null;
    oldCode?: string | null;
    spclty?: string | null;
    bedcount?: number | null;
    shortname?: string | null;
    sssCode?: string | null;
    hosGuid?: string | null;
    wardExportCode?: string | null;
    wardActive?: string | null;
    ipdRxShiftTypeId?: number | null;
    selectBednoFromLayout?: string | null;
    ipKey?: string | null;
    strictAccess?: string | null;
    lockBedcount?: string | null;
    realBedcount?: number | null;
};
export type WardCreateOrConnectWithoutIptsInput = {
    where: Prisma.WardWhereUniqueInput;
    create: Prisma.XOR<Prisma.WardCreateWithoutIptsInput, Prisma.WardUncheckedCreateWithoutIptsInput>;
};
export type WardUpsertWithoutIptsInput = {
    update: Prisma.XOR<Prisma.WardUpdateWithoutIptsInput, Prisma.WardUncheckedUpdateWithoutIptsInput>;
    create: Prisma.XOR<Prisma.WardCreateWithoutIptsInput, Prisma.WardUncheckedCreateWithoutIptsInput>;
    where?: Prisma.WardWhereInput;
};
export type WardUpdateToOneWithWhereWithoutIptsInput = {
    where?: Prisma.WardWhereInput;
    data: Prisma.XOR<Prisma.WardUpdateWithoutIptsInput, Prisma.WardUncheckedUpdateWithoutIptsInput>;
};
export type WardUpdateWithoutIptsInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type WardUncheckedUpdateWithoutIptsInput = {
    ward?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oldCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    spclty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    shortname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sssCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardExportCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wardActive?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipdRxShiftTypeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selectBednoFromLayout?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ipKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strictAccess?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lockBedcount?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    realBedcount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type WardCountOutputType = {
    ipts: number;
};
export type WardCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ipts?: boolean | WardCountOutputTypeCountIptsArgs;
};
export type WardCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardCountOutputTypeSelect<ExtArgs> | null;
};
export type WardCountOutputTypeCountIptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IptWhereInput;
};
export type WardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ward?: boolean;
    name?: boolean;
    oldCode?: boolean;
    spclty?: boolean;
    bedcount?: boolean;
    shortname?: boolean;
    sssCode?: boolean;
    hosGuid?: boolean;
    wardExportCode?: boolean;
    wardActive?: boolean;
    ipdRxShiftTypeId?: boolean;
    selectBednoFromLayout?: boolean;
    ipKey?: boolean;
    strictAccess?: boolean;
    lockBedcount?: boolean;
    realBedcount?: boolean;
    ipts?: boolean | Prisma.Ward$iptsArgs<ExtArgs>;
    _count?: boolean | Prisma.WardCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ward"]>;
export type WardSelectScalar = {
    ward?: boolean;
    name?: boolean;
    oldCode?: boolean;
    spclty?: boolean;
    bedcount?: boolean;
    shortname?: boolean;
    sssCode?: boolean;
    hosGuid?: boolean;
    wardExportCode?: boolean;
    wardActive?: boolean;
    ipdRxShiftTypeId?: boolean;
    selectBednoFromLayout?: boolean;
    ipKey?: boolean;
    strictAccess?: boolean;
    lockBedcount?: boolean;
    realBedcount?: boolean;
};
export type WardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ward" | "name" | "oldCode" | "spclty" | "bedcount" | "shortname" | "sssCode" | "hosGuid" | "wardExportCode" | "wardActive" | "ipdRxShiftTypeId" | "selectBednoFromLayout" | "ipKey" | "strictAccess" | "lockBedcount" | "realBedcount", ExtArgs["result"]["ward"]>;
export type WardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ipts?: boolean | Prisma.Ward$iptsArgs<ExtArgs>;
    _count?: boolean | Prisma.WardCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $WardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ward";
    objects: {
        ipts: Prisma.$IptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ward: string;
        name: string | null;
        oldCode: string | null;
        spclty: string | null;
        bedcount: number | null;
        shortname: string | null;
        sssCode: string | null;
        hosGuid: string | null;
        wardExportCode: string | null;
        wardActive: string | null;
        ipdRxShiftTypeId: number | null;
        selectBednoFromLayout: string | null;
        ipKey: string | null;
        strictAccess: string | null;
        lockBedcount: string | null;
        realBedcount: number | null;
    }, ExtArgs["result"]["ward"]>;
    composites: {};
};
export type WardGetPayload<S extends boolean | null | undefined | WardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WardPayload, S>;
export type WardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WardCountAggregateInputType | true;
};
export interface WardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ward'];
        meta: {
            name: 'Ward';
        };
    };
    findUnique<T extends WardFindUniqueArgs>(args: Prisma.SelectSubset<T, WardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WardFindFirstArgs>(args?: Prisma.SelectSubset<T, WardFindFirstArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WardFindManyArgs>(args?: Prisma.SelectSubset<T, WardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WardCreateArgs>(args: Prisma.SelectSubset<T, WardCreateArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WardCreateManyArgs>(args?: Prisma.SelectSubset<T, WardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends WardDeleteArgs>(args: Prisma.SelectSubset<T, WardDeleteArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WardUpdateArgs>(args: Prisma.SelectSubset<T, WardUpdateArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WardDeleteManyArgs>(args?: Prisma.SelectSubset<T, WardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WardUpdateManyArgs>(args: Prisma.SelectSubset<T, WardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends WardUpsertArgs>(args: Prisma.SelectSubset<T, WardUpsertArgs<ExtArgs>>): Prisma.Prisma__WardClient<runtime.Types.Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WardCountArgs>(args?: Prisma.Subset<T, WardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WardCountAggregateOutputType> : number>;
    aggregate<T extends WardAggregateArgs>(args: Prisma.Subset<T, WardAggregateArgs>): Prisma.PrismaPromise<GetWardAggregateType<T>>;
    groupBy<T extends WardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WardGroupByArgs['orderBy'];
    } : {
        orderBy?: WardGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WardFieldRefs;
}
export interface Prisma__WardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ipts<T extends Prisma.Ward$iptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ward$iptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WardFieldRefs {
    readonly ward: Prisma.FieldRef<"Ward", 'String'>;
    readonly name: Prisma.FieldRef<"Ward", 'String'>;
    readonly oldCode: Prisma.FieldRef<"Ward", 'String'>;
    readonly spclty: Prisma.FieldRef<"Ward", 'String'>;
    readonly bedcount: Prisma.FieldRef<"Ward", 'Int'>;
    readonly shortname: Prisma.FieldRef<"Ward", 'String'>;
    readonly sssCode: Prisma.FieldRef<"Ward", 'String'>;
    readonly hosGuid: Prisma.FieldRef<"Ward", 'String'>;
    readonly wardExportCode: Prisma.FieldRef<"Ward", 'String'>;
    readonly wardActive: Prisma.FieldRef<"Ward", 'String'>;
    readonly ipdRxShiftTypeId: Prisma.FieldRef<"Ward", 'Int'>;
    readonly selectBednoFromLayout: Prisma.FieldRef<"Ward", 'String'>;
    readonly ipKey: Prisma.FieldRef<"Ward", 'String'>;
    readonly strictAccess: Prisma.FieldRef<"Ward", 'String'>;
    readonly lockBedcount: Prisma.FieldRef<"Ward", 'String'>;
    readonly realBedcount: Prisma.FieldRef<"Ward", 'Int'>;
}
export type WardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where: Prisma.WardWhereUniqueInput;
};
export type WardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where: Prisma.WardWhereUniqueInput;
};
export type WardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where?: Prisma.WardWhereInput;
    orderBy?: Prisma.WardOrderByWithRelationInput | Prisma.WardOrderByWithRelationInput[];
    cursor?: Prisma.WardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardScalarFieldEnum | Prisma.WardScalarFieldEnum[];
};
export type WardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where?: Prisma.WardWhereInput;
    orderBy?: Prisma.WardOrderByWithRelationInput | Prisma.WardOrderByWithRelationInput[];
    cursor?: Prisma.WardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardScalarFieldEnum | Prisma.WardScalarFieldEnum[];
};
export type WardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where?: Prisma.WardWhereInput;
    orderBy?: Prisma.WardOrderByWithRelationInput | Prisma.WardOrderByWithRelationInput[];
    cursor?: Prisma.WardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WardScalarFieldEnum | Prisma.WardScalarFieldEnum[];
};
export type WardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WardCreateInput, Prisma.WardUncheckedCreateInput>;
};
export type WardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WardCreateManyInput | Prisma.WardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WardUpdateInput, Prisma.WardUncheckedUpdateInput>;
    where: Prisma.WardWhereUniqueInput;
};
export type WardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WardUpdateManyMutationInput, Prisma.WardUncheckedUpdateManyInput>;
    where?: Prisma.WardWhereInput;
    limit?: number;
};
export type WardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where: Prisma.WardWhereUniqueInput;
    create: Prisma.XOR<Prisma.WardCreateInput, Prisma.WardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WardUpdateInput, Prisma.WardUncheckedUpdateInput>;
};
export type WardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
    where: Prisma.WardWhereUniqueInput;
};
export type WardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WardWhereInput;
    limit?: number;
};
export type Ward$iptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IptSelect<ExtArgs> | null;
    omit?: Prisma.IptOmit<ExtArgs> | null;
    include?: Prisma.IptInclude<ExtArgs> | null;
    where?: Prisma.IptWhereInput;
    orderBy?: Prisma.IptOrderByWithRelationInput | Prisma.IptOrderByWithRelationInput[];
    cursor?: Prisma.IptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IptScalarFieldEnum | Prisma.IptScalarFieldEnum[];
};
export type WardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WardSelect<ExtArgs> | null;
    omit?: Prisma.WardOmit<ExtArgs> | null;
    include?: Prisma.WardInclude<ExtArgs> | null;
};
