import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RcptPrintDetailModel = runtime.Types.Result.DefaultSelection<Prisma.$RcptPrintDetailPayload>;
export type AggregateRcptPrintDetail = {
    _count: RcptPrintDetailCountAggregateOutputType | null;
    _avg: RcptPrintDetailAvgAggregateOutputType | null;
    _sum: RcptPrintDetailSumAggregateOutputType | null;
    _min: RcptPrintDetailMinAggregateOutputType | null;
    _max: RcptPrintDetailMaxAggregateOutputType | null;
};
export type RcptPrintDetailAvgAggregateOutputType = {
    rcptamt: number | null;
    discount: number | null;
    totalAmount: number | null;
    specialDiscount: number | null;
};
export type RcptPrintDetailSumAggregateOutputType = {
    rcptamt: number | null;
    discount: number | null;
    totalAmount: number | null;
    specialDiscount: number | null;
};
export type RcptPrintDetailMinAggregateOutputType = {
    financeNumber: string | null;
    rcpno: string | null;
    vn: string | null;
    income: string | null;
    paidst: string | null;
    rcptamt: number | null;
    discount: number | null;
    totalAmount: number | null;
    hosGuid: string | null;
    hosGuidExt: string | null;
    specialDiscount: number | null;
};
export type RcptPrintDetailMaxAggregateOutputType = {
    financeNumber: string | null;
    rcpno: string | null;
    vn: string | null;
    income: string | null;
    paidst: string | null;
    rcptamt: number | null;
    discount: number | null;
    totalAmount: number | null;
    hosGuid: string | null;
    hosGuidExt: string | null;
    specialDiscount: number | null;
};
export type RcptPrintDetailCountAggregateOutputType = {
    financeNumber: number;
    rcpno: number;
    vn: number;
    income: number;
    paidst: number;
    rcptamt: number;
    discount: number;
    totalAmount: number;
    hosGuid: number;
    hosGuidExt: number;
    specialDiscount: number;
    _all: number;
};
export type RcptPrintDetailAvgAggregateInputType = {
    rcptamt?: true;
    discount?: true;
    totalAmount?: true;
    specialDiscount?: true;
};
export type RcptPrintDetailSumAggregateInputType = {
    rcptamt?: true;
    discount?: true;
    totalAmount?: true;
    specialDiscount?: true;
};
export type RcptPrintDetailMinAggregateInputType = {
    financeNumber?: true;
    rcpno?: true;
    vn?: true;
    income?: true;
    paidst?: true;
    rcptamt?: true;
    discount?: true;
    totalAmount?: true;
    hosGuid?: true;
    hosGuidExt?: true;
    specialDiscount?: true;
};
export type RcptPrintDetailMaxAggregateInputType = {
    financeNumber?: true;
    rcpno?: true;
    vn?: true;
    income?: true;
    paidst?: true;
    rcptamt?: true;
    discount?: true;
    totalAmount?: true;
    hosGuid?: true;
    hosGuidExt?: true;
    specialDiscount?: true;
};
export type RcptPrintDetailCountAggregateInputType = {
    financeNumber?: true;
    rcpno?: true;
    vn?: true;
    income?: true;
    paidst?: true;
    rcptamt?: true;
    discount?: true;
    totalAmount?: true;
    hosGuid?: true;
    hosGuidExt?: true;
    specialDiscount?: true;
    _all?: true;
};
export type RcptPrintDetailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RcptPrintDetailWhereInput;
    orderBy?: Prisma.RcptPrintDetailOrderByWithRelationInput | Prisma.RcptPrintDetailOrderByWithRelationInput[];
    cursor?: Prisma.RcptPrintDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RcptPrintDetailCountAggregateInputType;
    _avg?: RcptPrintDetailAvgAggregateInputType;
    _sum?: RcptPrintDetailSumAggregateInputType;
    _min?: RcptPrintDetailMinAggregateInputType;
    _max?: RcptPrintDetailMaxAggregateInputType;
};
export type GetRcptPrintDetailAggregateType<T extends RcptPrintDetailAggregateArgs> = {
    [P in keyof T & keyof AggregateRcptPrintDetail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRcptPrintDetail[P]> : Prisma.GetScalarType<T[P], AggregateRcptPrintDetail[P]>;
};
export type RcptPrintDetailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RcptPrintDetailWhereInput;
    orderBy?: Prisma.RcptPrintDetailOrderByWithAggregationInput | Prisma.RcptPrintDetailOrderByWithAggregationInput[];
    by: Prisma.RcptPrintDetailScalarFieldEnum[] | Prisma.RcptPrintDetailScalarFieldEnum;
    having?: Prisma.RcptPrintDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RcptPrintDetailCountAggregateInputType | true;
    _avg?: RcptPrintDetailAvgAggregateInputType;
    _sum?: RcptPrintDetailSumAggregateInputType;
    _min?: RcptPrintDetailMinAggregateInputType;
    _max?: RcptPrintDetailMaxAggregateInputType;
};
export type RcptPrintDetailGroupByOutputType = {
    financeNumber: string;
    rcpno: string | null;
    vn: string | null;
    income: string;
    paidst: string;
    rcptamt: number | null;
    discount: number | null;
    totalAmount: number | null;
    hosGuid: string | null;
    hosGuidExt: string | null;
    specialDiscount: number | null;
    _count: RcptPrintDetailCountAggregateOutputType | null;
    _avg: RcptPrintDetailAvgAggregateOutputType | null;
    _sum: RcptPrintDetailSumAggregateOutputType | null;
    _min: RcptPrintDetailMinAggregateOutputType | null;
    _max: RcptPrintDetailMaxAggregateOutputType | null;
};
export type GetRcptPrintDetailGroupByPayload<T extends RcptPrintDetailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RcptPrintDetailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RcptPrintDetailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RcptPrintDetailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RcptPrintDetailGroupByOutputType[P]>;
}>>;
export type RcptPrintDetailWhereInput = {
    AND?: Prisma.RcptPrintDetailWhereInput | Prisma.RcptPrintDetailWhereInput[];
    OR?: Prisma.RcptPrintDetailWhereInput[];
    NOT?: Prisma.RcptPrintDetailWhereInput | Prisma.RcptPrintDetailWhereInput[];
    financeNumber?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcpno?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    vn?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    income?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    paidst?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcptamt?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    discount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    totalAmount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    hosGuid?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    hosGuidExt?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    specialDiscount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    ovst?: Prisma.XOR<Prisma.OvstNullableScalarRelationFilter, Prisma.OvstWhereInput> | null;
    rcptPrint?: Prisma.XOR<Prisma.RcptPrintNullableScalarRelationFilter, Prisma.RcptPrintWhereInput> | null;
};
export type RcptPrintDetailOrderByWithRelationInput = {
    financeNumber?: Prisma.SortOrder;
    rcpno?: Prisma.SortOrderInput | Prisma.SortOrder;
    vn?: Prisma.SortOrderInput | Prisma.SortOrder;
    income?: Prisma.SortOrder;
    paidst?: Prisma.SortOrder;
    rcptamt?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuidExt?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrderInput | Prisma.SortOrder;
    ovst?: Prisma.OvstOrderByWithRelationInput;
    rcptPrint?: Prisma.RcptPrintOrderByWithRelationInput;
    _relevance?: Prisma.RcptPrintDetailOrderByRelevanceInput;
};
export type RcptPrintDetailWhereUniqueInput = Prisma.AtLeast<{
    financeNumber_income_paidst?: Prisma.RcptPrintDetailFinanceNumberIncomePaidstCompoundUniqueInput;
    AND?: Prisma.RcptPrintDetailWhereInput | Prisma.RcptPrintDetailWhereInput[];
    OR?: Prisma.RcptPrintDetailWhereInput[];
    NOT?: Prisma.RcptPrintDetailWhereInput | Prisma.RcptPrintDetailWhereInput[];
    financeNumber?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcpno?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    vn?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    income?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    paidst?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcptamt?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    discount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    totalAmount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    hosGuid?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    hosGuidExt?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    specialDiscount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    ovst?: Prisma.XOR<Prisma.OvstNullableScalarRelationFilter, Prisma.OvstWhereInput> | null;
    rcptPrint?: Prisma.XOR<Prisma.RcptPrintNullableScalarRelationFilter, Prisma.RcptPrintWhereInput> | null;
}, "financeNumber_income_paidst">;
export type RcptPrintDetailOrderByWithAggregationInput = {
    financeNumber?: Prisma.SortOrder;
    rcpno?: Prisma.SortOrderInput | Prisma.SortOrder;
    vn?: Prisma.SortOrderInput | Prisma.SortOrder;
    income?: Prisma.SortOrder;
    paidst?: Prisma.SortOrder;
    rcptamt?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuid?: Prisma.SortOrderInput | Prisma.SortOrder;
    hosGuidExt?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RcptPrintDetailCountOrderByAggregateInput;
    _avg?: Prisma.RcptPrintDetailAvgOrderByAggregateInput;
    _max?: Prisma.RcptPrintDetailMaxOrderByAggregateInput;
    _min?: Prisma.RcptPrintDetailMinOrderByAggregateInput;
    _sum?: Prisma.RcptPrintDetailSumOrderByAggregateInput;
};
export type RcptPrintDetailScalarWhereWithAggregatesInput = {
    AND?: Prisma.RcptPrintDetailScalarWhereWithAggregatesInput | Prisma.RcptPrintDetailScalarWhereWithAggregatesInput[];
    OR?: Prisma.RcptPrintDetailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RcptPrintDetailScalarWhereWithAggregatesInput | Prisma.RcptPrintDetailScalarWhereWithAggregatesInput[];
    financeNumber?: Prisma.StringWithAggregatesFilter<"RcptPrintDetail"> | string;
    rcpno?: Prisma.StringNullableWithAggregatesFilter<"RcptPrintDetail"> | string | null;
    vn?: Prisma.StringNullableWithAggregatesFilter<"RcptPrintDetail"> | string | null;
    income?: Prisma.StringWithAggregatesFilter<"RcptPrintDetail"> | string;
    paidst?: Prisma.StringWithAggregatesFilter<"RcptPrintDetail"> | string;
    rcptamt?: Prisma.FloatNullableWithAggregatesFilter<"RcptPrintDetail"> | number | null;
    discount?: Prisma.FloatNullableWithAggregatesFilter<"RcptPrintDetail"> | number | null;
    totalAmount?: Prisma.FloatNullableWithAggregatesFilter<"RcptPrintDetail"> | number | null;
    hosGuid?: Prisma.StringNullableWithAggregatesFilter<"RcptPrintDetail"> | string | null;
    hosGuidExt?: Prisma.StringNullableWithAggregatesFilter<"RcptPrintDetail"> | string | null;
    specialDiscount?: Prisma.FloatNullableWithAggregatesFilter<"RcptPrintDetail"> | number | null;
};
export type RcptPrintDetailCreateInput = {
    financeNumber: string;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
    ovst?: Prisma.OvstCreateNestedOneWithoutRcptPrintDetailsInput;
    rcptPrint?: Prisma.RcptPrintCreateNestedOneWithoutDetailsInput;
};
export type RcptPrintDetailUncheckedCreateInput = {
    financeNumber: string;
    rcpno?: string | null;
    vn?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailUpdateInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ovst?: Prisma.OvstUpdateOneWithoutRcptPrintDetailsNestedInput;
    rcptPrint?: Prisma.RcptPrintUpdateOneWithoutDetailsNestedInput;
};
export type RcptPrintDetailUncheckedUpdateInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    rcpno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailCreateManyInput = {
    financeNumber: string;
    rcpno?: string | null;
    vn?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailUpdateManyMutationInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailUncheckedUpdateManyInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    rcpno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailListRelationFilter = {
    every?: Prisma.RcptPrintDetailWhereInput;
    some?: Prisma.RcptPrintDetailWhereInput;
    none?: Prisma.RcptPrintDetailWhereInput;
};
export type RcptPrintDetailOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RcptPrintDetailOrderByRelevanceInput = {
    fields: Prisma.RcptPrintDetailOrderByRelevanceFieldEnum | Prisma.RcptPrintDetailOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RcptPrintDetailFinanceNumberIncomePaidstCompoundUniqueInput = {
    financeNumber: string;
    income: string;
    paidst: string;
};
export type RcptPrintDetailCountOrderByAggregateInput = {
    financeNumber?: Prisma.SortOrder;
    rcpno?: Prisma.SortOrder;
    vn?: Prisma.SortOrder;
    income?: Prisma.SortOrder;
    paidst?: Prisma.SortOrder;
    rcptamt?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    hosGuidExt?: Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrder;
};
export type RcptPrintDetailAvgOrderByAggregateInput = {
    rcptamt?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrder;
};
export type RcptPrintDetailMaxOrderByAggregateInput = {
    financeNumber?: Prisma.SortOrder;
    rcpno?: Prisma.SortOrder;
    vn?: Prisma.SortOrder;
    income?: Prisma.SortOrder;
    paidst?: Prisma.SortOrder;
    rcptamt?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    hosGuidExt?: Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrder;
};
export type RcptPrintDetailMinOrderByAggregateInput = {
    financeNumber?: Prisma.SortOrder;
    rcpno?: Prisma.SortOrder;
    vn?: Prisma.SortOrder;
    income?: Prisma.SortOrder;
    paidst?: Prisma.SortOrder;
    rcptamt?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    hosGuid?: Prisma.SortOrder;
    hosGuidExt?: Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrder;
};
export type RcptPrintDetailSumOrderByAggregateInput = {
    rcptamt?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    specialDiscount?: Prisma.SortOrder;
};
export type RcptPrintDetailCreateNestedManyWithoutOvstInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput> | Prisma.RcptPrintDetailCreateWithoutOvstInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput | Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyOvstInputEnvelope;
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
};
export type RcptPrintDetailUncheckedCreateNestedManyWithoutOvstInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput> | Prisma.RcptPrintDetailCreateWithoutOvstInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput | Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyOvstInputEnvelope;
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
};
export type RcptPrintDetailUpdateManyWithoutOvstNestedInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput> | Prisma.RcptPrintDetailCreateWithoutOvstInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput | Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput[];
    upsert?: Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutOvstInput | Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutOvstInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyOvstInputEnvelope;
    set?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    disconnect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    delete?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    update?: Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutOvstInput | Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutOvstInput[];
    updateMany?: Prisma.RcptPrintDetailUpdateManyWithWhereWithoutOvstInput | Prisma.RcptPrintDetailUpdateManyWithWhereWithoutOvstInput[];
    deleteMany?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
};
export type RcptPrintDetailUncheckedUpdateManyWithoutOvstNestedInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput> | Prisma.RcptPrintDetailCreateWithoutOvstInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput | Prisma.RcptPrintDetailCreateOrConnectWithoutOvstInput[];
    upsert?: Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutOvstInput | Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutOvstInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyOvstInputEnvelope;
    set?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    disconnect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    delete?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    update?: Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutOvstInput | Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutOvstInput[];
    updateMany?: Prisma.RcptPrintDetailUpdateManyWithWhereWithoutOvstInput | Prisma.RcptPrintDetailUpdateManyWithWhereWithoutOvstInput[];
    deleteMany?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
};
export type RcptPrintDetailCreateNestedManyWithoutRcptPrintInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput> | Prisma.RcptPrintDetailCreateWithoutRcptPrintInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput | Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyRcptPrintInputEnvelope;
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
};
export type RcptPrintDetailUncheckedCreateNestedManyWithoutRcptPrintInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput> | Prisma.RcptPrintDetailCreateWithoutRcptPrintInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput | Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyRcptPrintInputEnvelope;
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
};
export type RcptPrintDetailUpdateManyWithoutRcptPrintNestedInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput> | Prisma.RcptPrintDetailCreateWithoutRcptPrintInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput | Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput[];
    upsert?: Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutRcptPrintInput | Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutRcptPrintInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyRcptPrintInputEnvelope;
    set?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    disconnect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    delete?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    update?: Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutRcptPrintInput | Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutRcptPrintInput[];
    updateMany?: Prisma.RcptPrintDetailUpdateManyWithWhereWithoutRcptPrintInput | Prisma.RcptPrintDetailUpdateManyWithWhereWithoutRcptPrintInput[];
    deleteMany?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
};
export type RcptPrintDetailUncheckedUpdateManyWithoutRcptPrintNestedInput = {
    create?: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput> | Prisma.RcptPrintDetailCreateWithoutRcptPrintInput[] | Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput[];
    connectOrCreate?: Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput | Prisma.RcptPrintDetailCreateOrConnectWithoutRcptPrintInput[];
    upsert?: Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutRcptPrintInput | Prisma.RcptPrintDetailUpsertWithWhereUniqueWithoutRcptPrintInput[];
    createMany?: Prisma.RcptPrintDetailCreateManyRcptPrintInputEnvelope;
    set?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    disconnect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    delete?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    connect?: Prisma.RcptPrintDetailWhereUniqueInput | Prisma.RcptPrintDetailWhereUniqueInput[];
    update?: Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutRcptPrintInput | Prisma.RcptPrintDetailUpdateWithWhereUniqueWithoutRcptPrintInput[];
    updateMany?: Prisma.RcptPrintDetailUpdateManyWithWhereWithoutRcptPrintInput | Prisma.RcptPrintDetailUpdateManyWithWhereWithoutRcptPrintInput[];
    deleteMany?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
};
export type RcptPrintDetailCreateWithoutOvstInput = {
    financeNumber: string;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
    rcptPrint?: Prisma.RcptPrintCreateNestedOneWithoutDetailsInput;
};
export type RcptPrintDetailUncheckedCreateWithoutOvstInput = {
    financeNumber: string;
    rcpno?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailCreateOrConnectWithoutOvstInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput>;
};
export type RcptPrintDetailCreateManyOvstInputEnvelope = {
    data: Prisma.RcptPrintDetailCreateManyOvstInput | Prisma.RcptPrintDetailCreateManyOvstInput[];
    skipDuplicates?: boolean;
};
export type RcptPrintDetailUpsertWithWhereUniqueWithoutOvstInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    update: Prisma.XOR<Prisma.RcptPrintDetailUpdateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedUpdateWithoutOvstInput>;
    create: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedCreateWithoutOvstInput>;
};
export type RcptPrintDetailUpdateWithWhereUniqueWithoutOvstInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateWithoutOvstInput, Prisma.RcptPrintDetailUncheckedUpdateWithoutOvstInput>;
};
export type RcptPrintDetailUpdateManyWithWhereWithoutOvstInput = {
    where: Prisma.RcptPrintDetailScalarWhereInput;
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateManyMutationInput, Prisma.RcptPrintDetailUncheckedUpdateManyWithoutOvstInput>;
};
export type RcptPrintDetailScalarWhereInput = {
    AND?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
    OR?: Prisma.RcptPrintDetailScalarWhereInput[];
    NOT?: Prisma.RcptPrintDetailScalarWhereInput | Prisma.RcptPrintDetailScalarWhereInput[];
    financeNumber?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcpno?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    vn?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    income?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    paidst?: Prisma.StringFilter<"RcptPrintDetail"> | string;
    rcptamt?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    discount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    totalAmount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
    hosGuid?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    hosGuidExt?: Prisma.StringNullableFilter<"RcptPrintDetail"> | string | null;
    specialDiscount?: Prisma.FloatNullableFilter<"RcptPrintDetail"> | number | null;
};
export type RcptPrintDetailCreateWithoutRcptPrintInput = {
    financeNumber: string;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
    ovst?: Prisma.OvstCreateNestedOneWithoutRcptPrintDetailsInput;
};
export type RcptPrintDetailUncheckedCreateWithoutRcptPrintInput = {
    financeNumber: string;
    vn?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailCreateOrConnectWithoutRcptPrintInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput>;
};
export type RcptPrintDetailCreateManyRcptPrintInputEnvelope = {
    data: Prisma.RcptPrintDetailCreateManyRcptPrintInput | Prisma.RcptPrintDetailCreateManyRcptPrintInput[];
    skipDuplicates?: boolean;
};
export type RcptPrintDetailUpsertWithWhereUniqueWithoutRcptPrintInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    update: Prisma.XOR<Prisma.RcptPrintDetailUpdateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedUpdateWithoutRcptPrintInput>;
    create: Prisma.XOR<Prisma.RcptPrintDetailCreateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedCreateWithoutRcptPrintInput>;
};
export type RcptPrintDetailUpdateWithWhereUniqueWithoutRcptPrintInput = {
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateWithoutRcptPrintInput, Prisma.RcptPrintDetailUncheckedUpdateWithoutRcptPrintInput>;
};
export type RcptPrintDetailUpdateManyWithWhereWithoutRcptPrintInput = {
    where: Prisma.RcptPrintDetailScalarWhereInput;
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateManyMutationInput, Prisma.RcptPrintDetailUncheckedUpdateManyWithoutRcptPrintInput>;
};
export type RcptPrintDetailCreateManyOvstInput = {
    financeNumber: string;
    rcpno?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailUpdateWithoutOvstInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rcptPrint?: Prisma.RcptPrintUpdateOneWithoutDetailsNestedInput;
};
export type RcptPrintDetailUncheckedUpdateWithoutOvstInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    rcpno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailUncheckedUpdateManyWithoutOvstInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    rcpno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailCreateManyRcptPrintInput = {
    financeNumber: string;
    vn?: string | null;
    income: string;
    paidst: string;
    rcptamt?: number | null;
    discount?: number | null;
    totalAmount?: number | null;
    hosGuid?: string | null;
    hosGuidExt?: string | null;
    specialDiscount?: number | null;
};
export type RcptPrintDetailUpdateWithoutRcptPrintInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    ovst?: Prisma.OvstUpdateOneWithoutRcptPrintDetailsNestedInput;
};
export type RcptPrintDetailUncheckedUpdateWithoutRcptPrintInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailUncheckedUpdateManyWithoutRcptPrintInput = {
    financeNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    vn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    income?: Prisma.StringFieldUpdateOperationsInput | string;
    paidst?: Prisma.StringFieldUpdateOperationsInput | string;
    rcptamt?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalAmount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    hosGuid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hosGuidExt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialDiscount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
};
export type RcptPrintDetailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    financeNumber?: boolean;
    rcpno?: boolean;
    vn?: boolean;
    income?: boolean;
    paidst?: boolean;
    rcptamt?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    hosGuid?: boolean;
    hosGuidExt?: boolean;
    specialDiscount?: boolean;
    ovst?: boolean | Prisma.RcptPrintDetail$ovstArgs<ExtArgs>;
    rcptPrint?: boolean | Prisma.RcptPrintDetail$rcptPrintArgs<ExtArgs>;
}, ExtArgs["result"]["rcptPrintDetail"]>;
export type RcptPrintDetailSelectScalar = {
    financeNumber?: boolean;
    rcpno?: boolean;
    vn?: boolean;
    income?: boolean;
    paidst?: boolean;
    rcptamt?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    hosGuid?: boolean;
    hosGuidExt?: boolean;
    specialDiscount?: boolean;
};
export type RcptPrintDetailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"financeNumber" | "rcpno" | "vn" | "income" | "paidst" | "rcptamt" | "discount" | "totalAmount" | "hosGuid" | "hosGuidExt" | "specialDiscount", ExtArgs["result"]["rcptPrintDetail"]>;
export type RcptPrintDetailInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ovst?: boolean | Prisma.RcptPrintDetail$ovstArgs<ExtArgs>;
    rcptPrint?: boolean | Prisma.RcptPrintDetail$rcptPrintArgs<ExtArgs>;
};
export type $RcptPrintDetailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RcptPrintDetail";
    objects: {
        ovst: Prisma.$OvstPayload<ExtArgs> | null;
        rcptPrint: Prisma.$RcptPrintPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        financeNumber: string;
        rcpno: string | null;
        vn: string | null;
        income: string;
        paidst: string;
        rcptamt: number | null;
        discount: number | null;
        totalAmount: number | null;
        hosGuid: string | null;
        hosGuidExt: string | null;
        specialDiscount: number | null;
    }, ExtArgs["result"]["rcptPrintDetail"]>;
    composites: {};
};
export type RcptPrintDetailGetPayload<S extends boolean | null | undefined | RcptPrintDetailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload, S>;
export type RcptPrintDetailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RcptPrintDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RcptPrintDetailCountAggregateInputType | true;
};
export interface RcptPrintDetailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RcptPrintDetail'];
        meta: {
            name: 'RcptPrintDetail';
        };
    };
    findUnique<T extends RcptPrintDetailFindUniqueArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RcptPrintDetailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RcptPrintDetailFindFirstArgs>(args?: Prisma.SelectSubset<T, RcptPrintDetailFindFirstArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RcptPrintDetailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RcptPrintDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RcptPrintDetailFindManyArgs>(args?: Prisma.SelectSubset<T, RcptPrintDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RcptPrintDetailCreateArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailCreateArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RcptPrintDetailCreateManyArgs>(args?: Prisma.SelectSubset<T, RcptPrintDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RcptPrintDetailDeleteArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailDeleteArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RcptPrintDetailUpdateArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailUpdateArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RcptPrintDetailDeleteManyArgs>(args?: Prisma.SelectSubset<T, RcptPrintDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RcptPrintDetailUpdateManyArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RcptPrintDetailUpsertArgs>(args: Prisma.SelectSubset<T, RcptPrintDetailUpsertArgs<ExtArgs>>): Prisma.Prisma__RcptPrintDetailClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RcptPrintDetailCountArgs>(args?: Prisma.Subset<T, RcptPrintDetailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RcptPrintDetailCountAggregateOutputType> : number>;
    aggregate<T extends RcptPrintDetailAggregateArgs>(args: Prisma.Subset<T, RcptPrintDetailAggregateArgs>): Prisma.PrismaPromise<GetRcptPrintDetailAggregateType<T>>;
    groupBy<T extends RcptPrintDetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RcptPrintDetailGroupByArgs['orderBy'];
    } : {
        orderBy?: RcptPrintDetailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RcptPrintDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRcptPrintDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RcptPrintDetailFieldRefs;
}
export interface Prisma__RcptPrintDetailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ovst<T extends Prisma.RcptPrintDetail$ovstArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RcptPrintDetail$ovstArgs<ExtArgs>>): Prisma.Prisma__OvstClient<runtime.Types.Result.GetResult<Prisma.$OvstPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rcptPrint<T extends Prisma.RcptPrintDetail$rcptPrintArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RcptPrintDetail$rcptPrintArgs<ExtArgs>>): Prisma.Prisma__RcptPrintClient<runtime.Types.Result.GetResult<Prisma.$RcptPrintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RcptPrintDetailFieldRefs {
    readonly financeNumber: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly rcpno: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly vn: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly income: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly paidst: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly rcptamt: Prisma.FieldRef<"RcptPrintDetail", 'Float'>;
    readonly discount: Prisma.FieldRef<"RcptPrintDetail", 'Float'>;
    readonly totalAmount: Prisma.FieldRef<"RcptPrintDetail", 'Float'>;
    readonly hosGuid: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly hosGuidExt: Prisma.FieldRef<"RcptPrintDetail", 'String'>;
    readonly specialDiscount: Prisma.FieldRef<"RcptPrintDetail", 'Float'>;
}
export type RcptPrintDetailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where: Prisma.RcptPrintDetailWhereUniqueInput;
};
export type RcptPrintDetailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where: Prisma.RcptPrintDetailWhereUniqueInput;
};
export type RcptPrintDetailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where?: Prisma.RcptPrintDetailWhereInput;
    orderBy?: Prisma.RcptPrintDetailOrderByWithRelationInput | Prisma.RcptPrintDetailOrderByWithRelationInput[];
    cursor?: Prisma.RcptPrintDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RcptPrintDetailScalarFieldEnum | Prisma.RcptPrintDetailScalarFieldEnum[];
};
export type RcptPrintDetailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where?: Prisma.RcptPrintDetailWhereInput;
    orderBy?: Prisma.RcptPrintDetailOrderByWithRelationInput | Prisma.RcptPrintDetailOrderByWithRelationInput[];
    cursor?: Prisma.RcptPrintDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RcptPrintDetailScalarFieldEnum | Prisma.RcptPrintDetailScalarFieldEnum[];
};
export type RcptPrintDetailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where?: Prisma.RcptPrintDetailWhereInput;
    orderBy?: Prisma.RcptPrintDetailOrderByWithRelationInput | Prisma.RcptPrintDetailOrderByWithRelationInput[];
    cursor?: Prisma.RcptPrintDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RcptPrintDetailScalarFieldEnum | Prisma.RcptPrintDetailScalarFieldEnum[];
};
export type RcptPrintDetailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RcptPrintDetailCreateInput, Prisma.RcptPrintDetailUncheckedCreateInput>;
};
export type RcptPrintDetailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RcptPrintDetailCreateManyInput | Prisma.RcptPrintDetailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RcptPrintDetailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateInput, Prisma.RcptPrintDetailUncheckedUpdateInput>;
    where: Prisma.RcptPrintDetailWhereUniqueInput;
};
export type RcptPrintDetailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RcptPrintDetailUpdateManyMutationInput, Prisma.RcptPrintDetailUncheckedUpdateManyInput>;
    where?: Prisma.RcptPrintDetailWhereInput;
    limit?: number;
};
export type RcptPrintDetailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where: Prisma.RcptPrintDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.RcptPrintDetailCreateInput, Prisma.RcptPrintDetailUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RcptPrintDetailUpdateInput, Prisma.RcptPrintDetailUncheckedUpdateInput>;
};
export type RcptPrintDetailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
    where: Prisma.RcptPrintDetailWhereUniqueInput;
};
export type RcptPrintDetailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RcptPrintDetailWhereInput;
    limit?: number;
};
export type RcptPrintDetail$ovstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OvstSelect<ExtArgs> | null;
    omit?: Prisma.OvstOmit<ExtArgs> | null;
    include?: Prisma.OvstInclude<ExtArgs> | null;
    where?: Prisma.OvstWhereInput;
};
export type RcptPrintDetail$rcptPrintArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintInclude<ExtArgs> | null;
    where?: Prisma.RcptPrintWhereInput;
};
export type RcptPrintDetailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RcptPrintDetailSelect<ExtArgs> | null;
    omit?: Prisma.RcptPrintDetailOmit<ExtArgs> | null;
    include?: Prisma.RcptPrintDetailInclude<ExtArgs> | null;
};
