import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Ovst: "Ovst";
    readonly Kskdepartment: "Kskdepartment";
    readonly VnStat: "VnStat";
    readonly RcptPrint: "RcptPrint";
    readonly RcptPrintDetail: "RcptPrintDetail";
    readonly Pttype: "Pttype";
    readonly Ipt: "Ipt";
    readonly Ward: "Ward";
    readonly AnStat: "AnStat";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "ovst" | "kskdepartment" | "vnStat" | "rcptPrint" | "rcptPrintDetail" | "pttype" | "ipt" | "ward" | "anStat";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Ovst: {
            payload: Prisma.$OvstPayload<ExtArgs>;
            fields: Prisma.OvstFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OvstFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OvstFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                findFirst: {
                    args: Prisma.OvstFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OvstFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                findMany: {
                    args: Prisma.OvstFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>[];
                };
                create: {
                    args: Prisma.OvstCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                createMany: {
                    args: Prisma.OvstCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OvstDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                update: {
                    args: Prisma.OvstUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                deleteMany: {
                    args: Prisma.OvstDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OvstUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OvstUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OvstPayload>;
                };
                aggregate: {
                    args: Prisma.OvstAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOvst>;
                };
                groupBy: {
                    args: Prisma.OvstGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OvstGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OvstCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OvstCountAggregateOutputType> | number;
                };
            };
        };
        Kskdepartment: {
            payload: Prisma.$KskdepartmentPayload<ExtArgs>;
            fields: Prisma.KskdepartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KskdepartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KskdepartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                findFirst: {
                    args: Prisma.KskdepartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KskdepartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                findMany: {
                    args: Prisma.KskdepartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>[];
                };
                create: {
                    args: Prisma.KskdepartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                createMany: {
                    args: Prisma.KskdepartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.KskdepartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                update: {
                    args: Prisma.KskdepartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.KskdepartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KskdepartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.KskdepartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KskdepartmentPayload>;
                };
                aggregate: {
                    args: Prisma.KskdepartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKskdepartment>;
                };
                groupBy: {
                    args: Prisma.KskdepartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KskdepartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KskdepartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KskdepartmentCountAggregateOutputType> | number;
                };
            };
        };
        VnStat: {
            payload: Prisma.$VnStatPayload<ExtArgs>;
            fields: Prisma.VnStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VnStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VnStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                findFirst: {
                    args: Prisma.VnStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VnStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                findMany: {
                    args: Prisma.VnStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>[];
                };
                create: {
                    args: Prisma.VnStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                createMany: {
                    args: Prisma.VnStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.VnStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                update: {
                    args: Prisma.VnStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                deleteMany: {
                    args: Prisma.VnStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VnStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.VnStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VnStatPayload>;
                };
                aggregate: {
                    args: Prisma.VnStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVnStat>;
                };
                groupBy: {
                    args: Prisma.VnStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VnStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VnStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VnStatCountAggregateOutputType> | number;
                };
            };
        };
        RcptPrint: {
            payload: Prisma.$RcptPrintPayload<ExtArgs>;
            fields: Prisma.RcptPrintFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RcptPrintFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RcptPrintFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                findFirst: {
                    args: Prisma.RcptPrintFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RcptPrintFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                findMany: {
                    args: Prisma.RcptPrintFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>[];
                };
                create: {
                    args: Prisma.RcptPrintCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                createMany: {
                    args: Prisma.RcptPrintCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RcptPrintDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                update: {
                    args: Prisma.RcptPrintUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                deleteMany: {
                    args: Prisma.RcptPrintDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RcptPrintUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RcptPrintUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintPayload>;
                };
                aggregate: {
                    args: Prisma.RcptPrintAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRcptPrint>;
                };
                groupBy: {
                    args: Prisma.RcptPrintGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RcptPrintGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RcptPrintCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RcptPrintCountAggregateOutputType> | number;
                };
            };
        };
        RcptPrintDetail: {
            payload: Prisma.$RcptPrintDetailPayload<ExtArgs>;
            fields: Prisma.RcptPrintDetailFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RcptPrintDetailFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RcptPrintDetailFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                findFirst: {
                    args: Prisma.RcptPrintDetailFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RcptPrintDetailFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                findMany: {
                    args: Prisma.RcptPrintDetailFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>[];
                };
                create: {
                    args: Prisma.RcptPrintDetailCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                createMany: {
                    args: Prisma.RcptPrintDetailCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RcptPrintDetailDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                update: {
                    args: Prisma.RcptPrintDetailUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                deleteMany: {
                    args: Prisma.RcptPrintDetailDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RcptPrintDetailUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RcptPrintDetailUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RcptPrintDetailPayload>;
                };
                aggregate: {
                    args: Prisma.RcptPrintDetailAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRcptPrintDetail>;
                };
                groupBy: {
                    args: Prisma.RcptPrintDetailGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RcptPrintDetailGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RcptPrintDetailCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RcptPrintDetailCountAggregateOutputType> | number;
                };
            };
        };
        Pttype: {
            payload: Prisma.$PttypePayload<ExtArgs>;
            fields: Prisma.PttypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PttypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PttypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                findFirst: {
                    args: Prisma.PttypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PttypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                findMany: {
                    args: Prisma.PttypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>[];
                };
                create: {
                    args: Prisma.PttypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                createMany: {
                    args: Prisma.PttypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PttypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                update: {
                    args: Prisma.PttypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                deleteMany: {
                    args: Prisma.PttypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PttypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PttypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PttypePayload>;
                };
                aggregate: {
                    args: Prisma.PttypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePttype>;
                };
                groupBy: {
                    args: Prisma.PttypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PttypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PttypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PttypeCountAggregateOutputType> | number;
                };
            };
        };
        Ipt: {
            payload: Prisma.$IptPayload<ExtArgs>;
            fields: Prisma.IptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                findFirst: {
                    args: Prisma.IptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                findMany: {
                    args: Prisma.IptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>[];
                };
                create: {
                    args: Prisma.IptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                createMany: {
                    args: Prisma.IptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.IptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                update: {
                    args: Prisma.IptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                deleteMany: {
                    args: Prisma.IptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.IptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IptPayload>;
                };
                aggregate: {
                    args: Prisma.IptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIpt>;
                };
                groupBy: {
                    args: Prisma.IptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IptCountAggregateOutputType> | number;
                };
            };
        };
        Ward: {
            payload: Prisma.$WardPayload<ExtArgs>;
            fields: Prisma.WardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                findFirst: {
                    args: Prisma.WardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                findMany: {
                    args: Prisma.WardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>[];
                };
                create: {
                    args: Prisma.WardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                createMany: {
                    args: Prisma.WardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.WardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                update: {
                    args: Prisma.WardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                deleteMany: {
                    args: Prisma.WardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.WardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WardPayload>;
                };
                aggregate: {
                    args: Prisma.WardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWard>;
                };
                groupBy: {
                    args: Prisma.WardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WardCountAggregateOutputType> | number;
                };
            };
        };
        AnStat: {
            payload: Prisma.$AnStatPayload<ExtArgs>;
            fields: Prisma.AnStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                findFirst: {
                    args: Prisma.AnStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                findMany: {
                    args: Prisma.AnStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>[];
                };
                create: {
                    args: Prisma.AnStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                createMany: {
                    args: Prisma.AnStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AnStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                update: {
                    args: Prisma.AnStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                deleteMany: {
                    args: Prisma.AnStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AnStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnStatPayload>;
                };
                aggregate: {
                    args: Prisma.AnStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnStat>;
                };
                groupBy: {
                    args: Prisma.AnStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnStatCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OvstScalarFieldEnum: {
    readonly hosGuid: "hosGuid";
    readonly vn: "vn";
    readonly hn: "hn";
    readonly an: "an";
    readonly vstdate: "vstdate";
    readonly vsttime: "vsttime";
    readonly doctor: "doctor";
    readonly hospmain: "hospmain";
    readonly hospsub: "hospsub";
    readonly oqueue: "oqueue";
    readonly ovstist: "ovstist";
    readonly ovstost: "ovstost";
    readonly pttype: "pttype";
    readonly pttypeno: "pttypeno";
    readonly rfrics: "rfrics";
    readonly rfrilct: "rfrilct";
    readonly rfrocs: "rfrocs";
    readonly rfrolct: "rfrolct";
    readonly spclty: "spclty";
    readonly rcptDisease: "rcptDisease";
    readonly hcode: "hcode";
    readonly curDep: "curDep";
    readonly curDepBusy: "curDepBusy";
    readonly lastDep: "lastDep";
    readonly curDepTime: "curDepTime";
    readonly rxQueue: "rxQueue";
    readonly diagText: "diagText";
    readonly ptSubtype: "ptSubtype";
    readonly mainDep: "mainDep";
    readonly mainDepQueue: "mainDepQueue";
    readonly financeSummaryDate: "financeSummaryDate";
    readonly visitType: "visitType";
    readonly nodeId: "nodeId";
    readonly contractId: "contractId";
    readonly waiting: "waiting";
    readonly rfriIcd10: "rfriIcd10";
    readonly oReferNumber: "oReferNumber";
    readonly hasInsurance: "hasInsurance";
    readonly iReferNumber: "iReferNumber";
    readonly referType: "referType";
    readonly oReferDep: "oReferDep";
    readonly staff: "staff";
    readonly commandDoctor: "commandDoctor";
    readonly sendPerson: "sendPerson";
    readonly ptPriority: "ptPriority";
    readonly financeLock: "financeLock";
    readonly oldcode: "oldcode";
    readonly signDoctor: "signDoctor";
    readonly anonymousVisit: "anonymousVisit";
    readonly anonymousVn: "anonymousVn";
    readonly ptCapabilityTypeId: "ptCapabilityTypeId";
    readonly atHospital: "atHospital";
    readonly ovstKey: "ovstKey";
};
export type OvstScalarFieldEnum = (typeof OvstScalarFieldEnum)[keyof typeof OvstScalarFieldEnum];
export declare const KskdepartmentScalarFieldEnum: {
    readonly depcode: "depcode";
    readonly department: "department";
    readonly roomno: "roomno";
    readonly doctorCode: "doctorCode";
    readonly onlineTime: "onlineTime";
    readonly onDesk: "onDesk";
    readonly spclty: "spclty";
    readonly screenVisible: "screenVisible";
    readonly doctorVisible: "doctorVisible";
    readonly registryVisible: "registryVisible";
    readonly rxVisible: "rxVisible";
    readonly statusOpen: "statusOpen";
    readonly cashierVisible: "cashierVisible";
    readonly medicationCheck: "medicationCheck";
    readonly canPrintSticker: "canPrintSticker";
    readonly depcodeActive: "depcodeActive";
    readonly hospitalDepartmentId: "hospitalDepartmentId";
    readonly printStickerCheck: "printStickerCheck";
    readonly otServicePay: "otServicePay";
    readonly hosGuid: "hosGuid";
    readonly oldcode: "oldcode";
    readonly depConfirmCode: "depConfirmCode";
    readonly ipdVisible: "ipdVisible";
    readonly departmentActive: "departmentActive";
    readonly opdFileTracking: "opdFileTracking";
    readonly secondLineText: "secondLineText";
    readonly dfPercent: "dfPercent";
    readonly dfDecPrice: "dfDecPrice";
    readonly currentWaitingTime: "currentWaitingTime";
    readonly autoConfirmMedpay: "autoConfirmMedpay";
    readonly stockDepartmentId: "stockDepartmentId";
    readonly defaultStockDepartmentId: "defaultStockDepartmentId";
    readonly displayOrder: "displayOrder";
    readonly checkSpcltyWb: "checkSpcltyWb";
    readonly referPoint: "referPoint";
    readonly empDepId: "empDepId";
    readonly forceSelectDoctor: "forceSelectDoctor";
    readonly autoApplyStockDepartment: "autoApplyStockDepartment";
    readonly forceSelectClinicDoctor: "forceSelectClinicDoctor";
    readonly showAllAdviceItem: "showAllAdviceItem";
    readonly showDoctorRegistQueue: "showDoctorRegistQueue";
    readonly opdQsLocationId: "opdQsLocationId";
    readonly opdQsRoomId: "opdQsRoomId";
    readonly displayText: "displayText";
    readonly invNoWarnQty0: "invNoWarnQty0";
    readonly forceDxEntry: "forceDxEntry";
    readonly forceNhsoAuthenVisit: "forceNhsoAuthenVisit";
    readonly checkMissmatchSpclty: "checkMissmatchSpclty";
    readonly checkMissmatchDepcode: "checkMissmatchDepcode";
    readonly otServiceIcode: "otServiceIcode";
    readonly forceScreenSmoking: "forceScreenSmoking";
    readonly phoneNumber: "phoneNumber";
    readonly forceDoctorPeEntry: "forceDoctorPeEntry";
    readonly showNhsoFeeSchedule: "showNhsoFeeSchedule";
    readonly showNhsoConfirmService: "showNhsoConfirmService";
    readonly claimNhsoFs104: "claimNhsoFs104";
    readonly sendMophDental: "sendMophDental";
    readonly homeVisitAiAnalyze: "homeVisitAiAnalyze";
};
export type KskdepartmentScalarFieldEnum = (typeof KskdepartmentScalarFieldEnum)[keyof typeof KskdepartmentScalarFieldEnum];
export declare const VnStatScalarFieldEnum: {
    readonly vn: "vn";
    readonly hn: "hn";
    readonly pdx: "pdx";
    readonly gr504: "gr504";
    readonly lastvisit: "lastvisit";
    readonly accidentCode: "accidentCode";
    readonly dxDoctor: "dxDoctor";
    readonly dx0: "dx0";
    readonly dx1: "dx1";
    readonly dx2: "dx2";
    readonly dx3: "dx3";
    readonly dx4: "dx4";
    readonly dx5: "dx5";
    readonly sex: "sex";
    readonly ageY: "ageY";
    readonly ageM: "ageM";
    readonly ageD: "ageD";
    readonly aid: "aid";
    readonly moopart: "moopart";
    readonly countInMonth: "countInMonth";
    readonly countInYear: "countInYear";
    readonly pttype: "pttype";
    readonly income: "income";
    readonly paidMoney: "paidMoney";
    readonly remainMoney: "remainMoney";
    readonly ucMoney: "ucMoney";
    readonly itemMoney: "itemMoney";
    readonly dba: "dba";
    readonly spclty: "spclty";
    readonly vstdate: "vstdate";
    readonly op0: "op0";
    readonly op1: "op1";
    readonly op2: "op2";
    readonly op3: "op3";
    readonly op4: "op4";
    readonly op5: "op5";
    readonly rcpNo: "rcpNo";
    readonly printCount: "printCount";
    readonly printDone: "printDone";
    readonly pttypeInRegion: "pttypeInRegion";
    readonly pttypeInChwpart: "pttypeInChwpart";
    readonly pcode: "pcode";
    readonly hcode: "hcode";
    readonly inc01: "inc01";
    readonly inc02: "inc02";
    readonly inc03: "inc03";
    readonly inc04: "inc04";
    readonly inc05: "inc05";
    readonly inc06: "inc06";
    readonly inc07: "inc07";
    readonly inc08: "inc08";
    readonly inc09: "inc09";
    readonly inc10: "inc10";
    readonly inc11: "inc11";
    readonly inc12: "inc12";
    readonly inc13: "inc13";
    readonly inc14: "inc14";
    readonly inc15: "inc15";
    readonly inc16: "inc16";
    readonly hospmain: "hospmain";
    readonly hospsub: "hospsub";
    readonly pttypeno: "pttypeno";
    readonly pttypeExpire: "pttypeExpire";
    readonly cid: "cid";
    readonly mainPdx: "mainPdx";
    readonly inc17: "inc17";
    readonly incDrug: "incDrug";
    readonly incNondrug: "incNondrug";
    readonly ptSubtype: "ptSubtype";
    readonly rcpnoList: "rcpnoList";
    readonly ym: "ym";
    readonly nodeId: "nodeId";
    readonly illVisit: "illVisit";
    readonly countInDay: "countInDay";
    readonly pttypeBegin: "pttypeBegin";
    readonly lastvisitHour: "lastvisitHour";
    readonly rcptMoney: "rcptMoney";
    readonly discountMoney: "discountMoney";
    readonly oldDiagnosis: "oldDiagnosis";
    readonly debtIdList: "debtIdList";
    readonly vnGuid: "vnGuid";
    readonly lastvisitVn: "lastvisitVn";
    readonly hosGuid: "hosGuid";
    readonly rxLicenseNo: "rxLicenseNo";
    readonly labPaidOk: "labPaidOk";
    readonly xrayPaidOk: "xrayPaidOk";
};
export type VnStatScalarFieldEnum = (typeof VnStatScalarFieldEnum)[keyof typeof VnStatScalarFieldEnum];
export declare const RcptPrintScalarFieldEnum: {
    readonly financeNumber: "financeNumber";
    readonly rcpno: "rcpno";
    readonly billAmount: "billAmount";
    readonly billDateTime: "billDateTime";
    readonly user: "user";
    readonly hn: "hn";
    readonly vn: "vn";
    readonly status: "status";
    readonly department: "department";
    readonly pttype: "pttype";
    readonly remainMoney: "remainMoney";
    readonly computer: "computer";
    readonly creditCard: "creditCard";
    readonly discount: "discount";
    readonly bookNumber: "bookNumber";
    readonly billNumber: "billNumber";
    readonly accountConfirm: "accountConfirm";
    readonly totalAmount: "totalAmount";
    readonly manualDiscount: "manualDiscount";
    readonly financePayTypeId: "financePayTypeId";
    readonly creditCardAmount: "creditCardAmount";
    readonly creditCardId: "creditCardId";
    readonly creditCardNo: "creditCardNo";
    readonly creditCardOwner: "creditCardOwner";
    readonly hosGuid: "hosGuid";
    readonly creditTransfer: "creditTransfer";
    readonly hosGuidExt: "hosGuidExt";
    readonly billDate: "billDate";
    readonly billStaff: "billStaff";
    readonly cashAmount: "cashAmount";
    readonly depositDebitAmount: "depositDebitAmount";
    readonly receiveCashAmount: "receiveCashAmount";
    readonly moneyTransmit: "moneyTransmit";
    readonly officerId: "officerId";
    readonly rcptPrintTransHeadId: "rcptPrintTransHeadId";
    readonly billTime: "billTime";
    readonly couponAmount: "couponAmount";
    readonly couponNo: "couponNo";
    readonly specialDiscountAmount: "specialDiscountAmount";
    readonly kioskPay: "kioskPay";
    readonly kioskRefNo: "kioskRefNo";
    readonly changeMoney: "changeMoney";
    readonly hospitalDepartmentId: "hospitalDepartmentId";
    readonly qrAmount: "qrAmount";
    readonly qrRefCode: "qrRefCode";
    readonly rcptDepositTypeId: "rcptDepositTypeId";
    readonly ktbHwAmount: "ktbHwAmount";
};
export type RcptPrintScalarFieldEnum = (typeof RcptPrintScalarFieldEnum)[keyof typeof RcptPrintScalarFieldEnum];
export declare const RcptPrintDetailScalarFieldEnum: {
    readonly financeNumber: "financeNumber";
    readonly rcpno: "rcpno";
    readonly vn: "vn";
    readonly income: "income";
    readonly paidst: "paidst";
    readonly rcptamt: "rcptamt";
    readonly discount: "discount";
    readonly totalAmount: "totalAmount";
    readonly hosGuid: "hosGuid";
    readonly hosGuidExt: "hosGuidExt";
    readonly specialDiscount: "specialDiscount";
};
export type RcptPrintDetailScalarFieldEnum = (typeof RcptPrintDetailScalarFieldEnum)[keyof typeof RcptPrintDetailScalarFieldEnum];
export declare const PttypeScalarFieldEnum: {
    readonly pttype: "pttype";
    readonly name: "name";
    readonly editmask: "editmask";
    readonly isuse: "isuse";
    readonly pcode: "pcode";
    readonly requirecode: "requirecode";
    readonly doctorFee: "doctorFee";
    readonly feeCode: "feeCode";
    readonly discount: "discount";
    readonly contract: "contract";
    readonly paidst: "paidst";
    readonly inRegion: "inRegion";
    readonly uc: "uc";
    readonly requireHcode: "requireHcode";
    readonly oldcode: "oldcode";
    readonly feeCode2: "feeCode2";
    readonly priceType: "priceType";
    readonly debtor: "debtor";
    readonly noexpire: "noexpire";
    readonly hipdataCode: "hipdataCode";
    readonly minAge: "minAge";
    readonly maxAge: "maxAge";
    readonly billSss: "billSss";
    readonly billType: "billType";
    readonly hipdataPttype: "hipdataPttype";
    readonly useContractId: "useContractId";
    readonly yearlyCharge: "yearlyCharge";
    readonly yearlyChargeIcode1: "yearlyChargeIcode1";
    readonly yearlyChargeIcode2: "yearlyChargeIcode2";
    readonly regionType: "regionType";
    readonly pttypeGroup1: "pttypeGroup1";
    readonly pttypeGroup2: "pttypeGroup2";
    readonly pttypeGuid: "pttypeGuid";
    readonly maxDebtMoney: "maxDebtMoney";
    readonly allowFinanceEdit: "allowFinanceEdit";
    readonly printCsmbStatement: "printCsmbStatement";
    readonly pttypeInformation: "pttypeInformation";
    readonly feeCodePaidst: "feeCodePaidst";
    readonly feeCode2Paidst: "feeCode2Paidst";
    readonly debtDueDay: "debtDueDay";
    readonly rxPayDebitTr: "rxPayDebitTr";
    readonly separateRcpno: "separateRcpno";
    readonly rcpBookno: "rcpBookno";
    readonly separateDebtId: "separateDebtId";
    readonly admitFeeCode: "admitFeeCode";
    readonly usePackage: "usePackage";
    readonly chargeDfPerday: "chargeDfPerday";
    readonly nhsoCode: "nhsoCode";
    readonly ipdHourCut: "ipdHourCut";
    readonly pttypeSppId: "pttypeSppId";
    readonly printPrescNed: "printPrescNed";
    readonly hosGuid: "hosGuid";
    readonly sksBenefitPlanTypeId: "sksBenefitPlanTypeId";
    readonly pttypeStdCode: "pttypeStdCode";
    readonly exportEclaim: "exportEclaim";
    readonly roundMoney: "roundMoney";
    readonly pttypePricePolicyTypeId: "pttypePricePolicyTypeId";
    readonly empPrivilege: "empPrivilege";
    readonly isPttypePlan: "isPttypePlan";
    readonly financeRoundMoney: "financeRoundMoney";
    readonly empFinancial: "empFinancial";
    readonly pttypePriceGroupId: "pttypePriceGroupId";
    readonly calcDiscount: "calcDiscount";
    readonly debtFinanceLimit: "debtFinanceLimit";
    readonly debtFinancePttype: "debtFinancePttype";
    readonly opbkkTypeCode: "opbkkTypeCode";
    readonly ipdBedcharge24: "ipdBedcharge24";
    readonly nhsoSubinscl: "nhsoSubinscl";
    readonly grouperVersion: "grouperVersion";
    readonly rxQueueGroupId: "rxQueueGroupId";
    readonly incRoundMoney: "incRoundMoney";
    readonly hospmainList: "hospmainList";
    readonly grouperRelease: "grouperRelease";
    readonly checkNhsoAuth: "checkNhsoAuth";
    readonly pttypeUppTypeId: "pttypeUppTypeId";
    readonly defaultRequestFunds: "defaultRequestFunds";
};
export type PttypeScalarFieldEnum = (typeof PttypeScalarFieldEnum)[keyof typeof PttypeScalarFieldEnum];
export declare const IptScalarFieldEnum: {
    readonly an: "an";
    readonly admdoctor: "admdoctor";
    readonly dchdate: "dchdate";
    readonly dchstts: "dchstts";
    readonly dchtime: "dchtime";
    readonly dchtype: "dchtype";
    readonly dthdiagdct: "dthdiagdct";
    readonly hn: "hn";
    readonly ivstist: "ivstist";
    readonly ivstost: "ivstost";
    readonly lockdx: "lockdx";
    readonly prediag: "prediag";
    readonly pttype: "pttype";
    readonly regdate: "regdate";
    readonly regtime: "regtime";
    readonly rfrics: "rfrics";
    readonly rfrilct: "rfrilct";
    readonly rfrocs: "rfrocs";
    readonly rfrolct: "rfrolct";
    readonly spclty: "spclty";
    readonly vn: "vn";
    readonly ward: "ward";
    readonly rcptDisease: "rcptDisease";
    readonly dchDoctor: "dchDoctor";
    readonly iptType: "iptType";
    readonly irefType: "irefType";
    readonly ipacc: "ipacc";
    readonly actMoneyLimit: "actMoneyLimit";
    readonly drg: "drg";
    readonly mdc: "mdc";
    readonly rw: "rw";
    readonly wtlos: "wtlos";
    readonly ot: "ot";
    readonly result: "result";
    readonly gravidity: "gravidity";
    readonly parity: "parity";
    readonly livingChildren: "livingChildren";
    readonly rxdoctor: "rxdoctor";
    readonly staff: "staff";
    readonly bw: "bw";
    readonly firstWard: "firstWard";
    readonly referOutNumber: "referOutNumber";
    readonly inchargeDoctor: "inchargeDoctor";
    readonly anGuid: "anGuid";
    readonly anLock: "anLock";
    readonly ergent: "ergent";
    readonly chartState: "chartState";
    readonly receiveChartDateTime: "receiveChartDateTime";
    readonly receiveChartStaff: "receiveChartStaff";
    readonly receiveChartNote: "receiveChartNote";
    readonly adjrw: "adjrw";
    readonly iptSpclty: "iptSpclty";
    readonly financeLock: "financeLock";
    readonly lastCheckAutoincome: "lastCheckAutoincome";
    readonly admitFeeGuid: "admitFeeGuid";
    readonly leaveHomeDay: "leaveHomeDay";
    readonly operationStatus: "operationStatus";
    readonly financeSummaryDate: "financeSummaryDate";
    readonly estimateDischargeDate: "estimateDischargeDate";
    readonly oldCauseRevisit: "oldCauseRevisit";
    readonly financeTransfer: "financeTransfer";
    readonly provisionDx: "provisionDx";
    readonly dwHhcListId: "dwHhcListId";
    readonly hosGuid: "hosGuid";
    readonly hosGuidExt: "hosGuidExt";
    readonly bodyHeight: "bodyHeight";
    readonly updateDatetime: "updateDatetime";
    readonly curDepCode: "curDepCode";
    readonly financeStatusFlag: "financeStatusFlag";
    readonly iptAdmitTypeId: "iptAdmitTypeId";
    readonly noVisit: "noVisit";
    readonly noFood: "noFood";
    readonly confirmDischarge: "confirmDischarge";
    readonly grouperWarn: "grouperWarn";
    readonly grouperErr: "grouperErr";
    readonly grouperVersion: "grouperVersion";
    readonly labStatus: "labStatus";
    readonly xrayStatus: "xrayStatus";
    readonly grouperActlos: "grouperActlos";
    readonly autoChargeAmount: "autoChargeAmount";
    readonly provisionDxIcd: "provisionDxIcd";
    readonly iptCauseTypeId: "iptCauseTypeId";
    readonly iptSevereTypeId: "iptSevereTypeId";
    readonly iptCauseTypeNote: "iptCauseTypeNote";
    readonly followup: "followup";
    readonly dchSevereTypeId: "dchSevereTypeId";
    readonly opdFinanceWaitTr: "opdFinanceWaitTr";
    readonly homeLeaveStatus: "homeLeaveStatus";
    readonly grouperAdjrwPrice: "grouperAdjrwPrice";
    readonly reimbursePrice: "reimbursePrice";
    readonly err: "err";
    readonly warn: "warn";
    readonly oldcode: "oldcode";
    readonly dataOk: "dataOk";
    readonly dataExpDate: "dataExpDate";
    readonly iptSummaryStatusId: "iptSummaryStatusId";
    readonly noChargeRoom: "noChargeRoom";
    readonly rxHomeMed: "rxHomeMed";
    readonly hhcHospcode: "hhcHospcode";
    readonly operationStatusId: "operationStatusId";
    readonly ipdNurseEvalRangeCode: "ipdNurseEvalRangeCode";
    readonly planAdmit: "planAdmit";
};
export type IptScalarFieldEnum = (typeof IptScalarFieldEnum)[keyof typeof IptScalarFieldEnum];
export declare const WardScalarFieldEnum: {
    readonly ward: "ward";
    readonly name: "name";
    readonly oldCode: "oldCode";
    readonly spclty: "spclty";
    readonly bedcount: "bedcount";
    readonly shortname: "shortname";
    readonly sssCode: "sssCode";
    readonly hosGuid: "hosGuid";
    readonly wardExportCode: "wardExportCode";
    readonly wardActive: "wardActive";
    readonly ipdRxShiftTypeId: "ipdRxShiftTypeId";
    readonly selectBednoFromLayout: "selectBednoFromLayout";
    readonly ipKey: "ipKey";
    readonly strictAccess: "strictAccess";
    readonly lockBedcount: "lockBedcount";
    readonly realBedcount: "realBedcount";
};
export type WardScalarFieldEnum = (typeof WardScalarFieldEnum)[keyof typeof WardScalarFieldEnum];
export declare const AnStatScalarFieldEnum: {
    readonly an: "an";
    readonly pdx: "pdx";
    readonly hn: "hn";
    readonly dx0: "dx0";
    readonly dx1: "dx1";
    readonly dx2: "dx2";
    readonly dx3: "dx3";
    readonly dx4: "dx4";
    readonly dx5: "dx5";
    readonly sex: "sex";
    readonly ageY: "ageY";
    readonly ageM: "ageM";
    readonly ageD: "ageD";
    readonly aid: "aid";
    readonly countInMonth: "countInMonth";
    readonly countInYear: "countInYear";
    readonly pttype: "pttype";
    readonly income: "income";
    readonly lastvisit: "lastvisit";
    readonly regdate: "regdate";
    readonly dchdate: "dchdate";
    readonly admdate: "admdate";
    readonly drg: "drg";
    readonly rw: "rw";
    readonly los: "los";
    readonly ot: "ot";
    readonly spclty: "spclty";
    readonly ward: "ward";
    readonly printDone: "printDone";
    readonly printCount: "printCount";
    readonly paidMoney: "paidMoney";
    readonly remainMoney: "remainMoney";
    readonly ucMoney: "ucMoney";
    readonly itemMoney: "itemMoney";
    readonly pttypeInRegion: "pttypeInRegion";
    readonly pcode: "pcode";
    readonly op0: "op0";
    readonly op1: "op1";
    readonly op2: "op2";
    readonly op3: "op3";
    readonly op4: "op4";
    readonly op5: "op5";
    readonly op6: "op6";
    readonly inc01: "inc01";
    readonly inc02: "inc02";
    readonly inc03: "inc03";
    readonly inc04: "inc04";
    readonly inc05: "inc05";
    readonly inc06: "inc06";
    readonly inc07: "inc07";
    readonly inc08: "inc08";
    readonly inc09: "inc09";
    readonly inc10: "inc10";
    readonly inc11: "inc11";
    readonly inc12: "inc12";
    readonly inc13: "inc13";
    readonly inc14: "inc14";
    readonly inc15: "inc15";
    readonly inc16: "inc16";
    readonly dxDoctor: "dxDoctor";
    readonly vn: "vn";
    readonly inc17: "inc17";
    readonly rcpnoList: "rcpnoList";
    readonly pttypeno: "pttypeno";
    readonly moopart: "moopart";
    readonly gr504: "gr504";
    readonly accidentCode: "accidentCode";
    readonly lastvisitHour: "lastvisitHour";
    readonly rcptMoney: "rcptMoney";
    readonly discountMoney: "discountMoney";
    readonly oldDiagnosis: "oldDiagnosis";
    readonly debtIdList: "debtIdList";
    readonly admitHour: "admitHour";
    readonly anGuid: "anGuid";
    readonly admdateCut24: "admdateCut24";
    readonly hosGuid: "hosGuid";
    readonly debtMoney: "debtMoney";
    readonly opdWaitMoney: "opdWaitMoney";
    readonly prescNedIncomplete: "prescNedIncomplete";
    readonly lastSyncDatetime: "lastSyncDatetime";
    readonly rxLicenseNo: "rxLicenseNo";
    readonly hasRefillMedplan: "hasRefillMedplan";
    readonly hasMedRecon: "hasMedRecon";
    readonly pttypeListText: "pttypeListText";
    readonly diagTextList: "diagTextList";
    readonly lastBps: "lastBps";
    readonly lastBpd: "lastBpd";
    readonly lastTemperature: "lastTemperature";
    readonly lastSosScore: "lastSosScore";
    readonly iclaimListText: "iclaimListText";
};
export type AnStatScalarFieldEnum = (typeof AnStatScalarFieldEnum)[keyof typeof AnStatScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const OvstOrderByRelevanceFieldEnum: {
    readonly hosGuid: "hosGuid";
    readonly vn: "vn";
    readonly hn: "hn";
    readonly an: "an";
    readonly doctor: "doctor";
    readonly hospmain: "hospmain";
    readonly hospsub: "hospsub";
    readonly ovstist: "ovstist";
    readonly ovstost: "ovstost";
    readonly pttype: "pttype";
    readonly pttypeno: "pttypeno";
    readonly rfrics: "rfrics";
    readonly rfrilct: "rfrilct";
    readonly rfrocs: "rfrocs";
    readonly rfrolct: "rfrolct";
    readonly spclty: "spclty";
    readonly rcptDisease: "rcptDisease";
    readonly hcode: "hcode";
    readonly curDep: "curDep";
    readonly curDepBusy: "curDepBusy";
    readonly lastDep: "lastDep";
    readonly diagText: "diagText";
    readonly mainDep: "mainDep";
    readonly visitType: "visitType";
    readonly nodeId: "nodeId";
    readonly waiting: "waiting";
    readonly rfriIcd10: "rfriIcd10";
    readonly hasInsurance: "hasInsurance";
    readonly iReferNumber: "iReferNumber";
    readonly referType: "referType";
    readonly oReferDep: "oReferDep";
    readonly staff: "staff";
    readonly commandDoctor: "commandDoctor";
    readonly sendPerson: "sendPerson";
    readonly financeLock: "financeLock";
    readonly oldcode: "oldcode";
    readonly signDoctor: "signDoctor";
    readonly anonymousVisit: "anonymousVisit";
    readonly anonymousVn: "anonymousVn";
    readonly atHospital: "atHospital";
    readonly ovstKey: "ovstKey";
};
export type OvstOrderByRelevanceFieldEnum = (typeof OvstOrderByRelevanceFieldEnum)[keyof typeof OvstOrderByRelevanceFieldEnum];
export declare const KskdepartmentOrderByRelevanceFieldEnum: {
    readonly depcode: "depcode";
    readonly department: "department";
    readonly roomno: "roomno";
    readonly doctorCode: "doctorCode";
    readonly onDesk: "onDesk";
    readonly spclty: "spclty";
    readonly screenVisible: "screenVisible";
    readonly doctorVisible: "doctorVisible";
    readonly registryVisible: "registryVisible";
    readonly rxVisible: "rxVisible";
    readonly statusOpen: "statusOpen";
    readonly cashierVisible: "cashierVisible";
    readonly medicationCheck: "medicationCheck";
    readonly canPrintSticker: "canPrintSticker";
    readonly depcodeActive: "depcodeActive";
    readonly printStickerCheck: "printStickerCheck";
    readonly otServicePay: "otServicePay";
    readonly hosGuid: "hosGuid";
    readonly oldcode: "oldcode";
    readonly depConfirmCode: "depConfirmCode";
    readonly ipdVisible: "ipdVisible";
    readonly departmentActive: "departmentActive";
    readonly opdFileTracking: "opdFileTracking";
    readonly secondLineText: "secondLineText";
    readonly dfDecPrice: "dfDecPrice";
    readonly autoConfirmMedpay: "autoConfirmMedpay";
    readonly checkSpcltyWb: "checkSpcltyWb";
    readonly referPoint: "referPoint";
    readonly forceSelectDoctor: "forceSelectDoctor";
    readonly autoApplyStockDepartment: "autoApplyStockDepartment";
    readonly forceSelectClinicDoctor: "forceSelectClinicDoctor";
    readonly showAllAdviceItem: "showAllAdviceItem";
    readonly showDoctorRegistQueue: "showDoctorRegistQueue";
    readonly displayText: "displayText";
    readonly invNoWarnQty0: "invNoWarnQty0";
    readonly forceDxEntry: "forceDxEntry";
    readonly forceNhsoAuthenVisit: "forceNhsoAuthenVisit";
    readonly checkMissmatchSpclty: "checkMissmatchSpclty";
    readonly checkMissmatchDepcode: "checkMissmatchDepcode";
    readonly otServiceIcode: "otServiceIcode";
    readonly forceScreenSmoking: "forceScreenSmoking";
    readonly phoneNumber: "phoneNumber";
    readonly forceDoctorPeEntry: "forceDoctorPeEntry";
    readonly showNhsoFeeSchedule: "showNhsoFeeSchedule";
    readonly showNhsoConfirmService: "showNhsoConfirmService";
    readonly claimNhsoFs104: "claimNhsoFs104";
    readonly sendMophDental: "sendMophDental";
    readonly homeVisitAiAnalyze: "homeVisitAiAnalyze";
};
export type KskdepartmentOrderByRelevanceFieldEnum = (typeof KskdepartmentOrderByRelevanceFieldEnum)[keyof typeof KskdepartmentOrderByRelevanceFieldEnum];
export declare const VnStatOrderByRelevanceFieldEnum: {
    readonly vn: "vn";
    readonly hn: "hn";
    readonly pdx: "pdx";
    readonly accidentCode: "accidentCode";
    readonly dxDoctor: "dxDoctor";
    readonly dx0: "dx0";
    readonly dx1: "dx1";
    readonly dx2: "dx2";
    readonly dx3: "dx3";
    readonly dx4: "dx4";
    readonly dx5: "dx5";
    readonly sex: "sex";
    readonly aid: "aid";
    readonly moopart: "moopart";
    readonly pttype: "pttype";
    readonly spclty: "spclty";
    readonly op0: "op0";
    readonly op1: "op1";
    readonly op2: "op2";
    readonly op3: "op3";
    readonly op4: "op4";
    readonly op5: "op5";
    readonly rcpNo: "rcpNo";
    readonly printDone: "printDone";
    readonly pttypeInRegion: "pttypeInRegion";
    readonly pttypeInChwpart: "pttypeInChwpart";
    readonly pcode: "pcode";
    readonly hcode: "hcode";
    readonly hospmain: "hospmain";
    readonly hospsub: "hospsub";
    readonly pttypeno: "pttypeno";
    readonly cid: "cid";
    readonly mainPdx: "mainPdx";
    readonly rcpnoList: "rcpnoList";
    readonly ym: "ym";
    readonly nodeId: "nodeId";
    readonly illVisit: "illVisit";
    readonly oldDiagnosis: "oldDiagnosis";
    readonly debtIdList: "debtIdList";
    readonly vnGuid: "vnGuid";
    readonly lastvisitVn: "lastvisitVn";
    readonly hosGuid: "hosGuid";
    readonly rxLicenseNo: "rxLicenseNo";
    readonly labPaidOk: "labPaidOk";
    readonly xrayPaidOk: "xrayPaidOk";
};
export type VnStatOrderByRelevanceFieldEnum = (typeof VnStatOrderByRelevanceFieldEnum)[keyof typeof VnStatOrderByRelevanceFieldEnum];
export declare const RcptPrintOrderByRelevanceFieldEnum: {
    readonly financeNumber: "financeNumber";
    readonly rcpno: "rcpno";
    readonly user: "user";
    readonly hn: "hn";
    readonly vn: "vn";
    readonly status: "status";
    readonly department: "department";
    readonly pttype: "pttype";
    readonly computer: "computer";
    readonly creditCard: "creditCard";
    readonly accountConfirm: "accountConfirm";
    readonly creditCardNo: "creditCardNo";
    readonly creditCardOwner: "creditCardOwner";
    readonly hosGuid: "hosGuid";
    readonly creditTransfer: "creditTransfer";
    readonly hosGuidExt: "hosGuidExt";
    readonly billStaff: "billStaff";
    readonly moneyTransmit: "moneyTransmit";
    readonly couponNo: "couponNo";
    readonly kioskPay: "kioskPay";
    readonly kioskRefNo: "kioskRefNo";
    readonly qrRefCode: "qrRefCode";
};
export type RcptPrintOrderByRelevanceFieldEnum = (typeof RcptPrintOrderByRelevanceFieldEnum)[keyof typeof RcptPrintOrderByRelevanceFieldEnum];
export declare const RcptPrintDetailOrderByRelevanceFieldEnum: {
    readonly financeNumber: "financeNumber";
    readonly rcpno: "rcpno";
    readonly vn: "vn";
    readonly income: "income";
    readonly paidst: "paidst";
    readonly hosGuid: "hosGuid";
    readonly hosGuidExt: "hosGuidExt";
};
export type RcptPrintDetailOrderByRelevanceFieldEnum = (typeof RcptPrintDetailOrderByRelevanceFieldEnum)[keyof typeof RcptPrintDetailOrderByRelevanceFieldEnum];
export declare const PttypeOrderByRelevanceFieldEnum: {
    readonly pttype: "pttype";
    readonly name: "name";
    readonly editmask: "editmask";
    readonly isuse: "isuse";
    readonly pcode: "pcode";
    readonly requirecode: "requirecode";
    readonly doctorFee: "doctorFee";
    readonly feeCode: "feeCode";
    readonly contract: "contract";
    readonly paidst: "paidst";
    readonly inRegion: "inRegion";
    readonly uc: "uc";
    readonly requireHcode: "requireHcode";
    readonly oldcode: "oldcode";
    readonly feeCode2: "feeCode2";
    readonly debtor: "debtor";
    readonly noexpire: "noexpire";
    readonly hipdataCode: "hipdataCode";
    readonly billSss: "billSss";
    readonly hipdataPttype: "hipdataPttype";
    readonly useContractId: "useContractId";
    readonly yearlyCharge: "yearlyCharge";
    readonly yearlyChargeIcode1: "yearlyChargeIcode1";
    readonly yearlyChargeIcode2: "yearlyChargeIcode2";
    readonly pttypeGroup1: "pttypeGroup1";
    readonly pttypeGroup2: "pttypeGroup2";
    readonly pttypeGuid: "pttypeGuid";
    readonly allowFinanceEdit: "allowFinanceEdit";
    readonly printCsmbStatement: "printCsmbStatement";
    readonly pttypeInformation: "pttypeInformation";
    readonly feeCodePaidst: "feeCodePaidst";
    readonly feeCode2Paidst: "feeCode2Paidst";
    readonly rxPayDebitTr: "rxPayDebitTr";
    readonly separateRcpno: "separateRcpno";
    readonly separateDebtId: "separateDebtId";
    readonly admitFeeCode: "admitFeeCode";
    readonly usePackage: "usePackage";
    readonly chargeDfPerday: "chargeDfPerday";
    readonly nhsoCode: "nhsoCode";
    readonly printPrescNed: "printPrescNed";
    readonly hosGuid: "hosGuid";
    readonly pttypeStdCode: "pttypeStdCode";
    readonly exportEclaim: "exportEclaim";
    readonly roundMoney: "roundMoney";
    readonly empPrivilege: "empPrivilege";
    readonly isPttypePlan: "isPttypePlan";
    readonly financeRoundMoney: "financeRoundMoney";
    readonly empFinancial: "empFinancial";
    readonly calcDiscount: "calcDiscount";
    readonly debtFinancePttype: "debtFinancePttype";
    readonly opbkkTypeCode: "opbkkTypeCode";
    readonly ipdBedcharge24: "ipdBedcharge24";
    readonly nhsoSubinscl: "nhsoSubinscl";
    readonly incRoundMoney: "incRoundMoney";
    readonly hospmainList: "hospmainList";
    readonly grouperRelease: "grouperRelease";
    readonly checkNhsoAuth: "checkNhsoAuth";
    readonly defaultRequestFunds: "defaultRequestFunds";
};
export type PttypeOrderByRelevanceFieldEnum = (typeof PttypeOrderByRelevanceFieldEnum)[keyof typeof PttypeOrderByRelevanceFieldEnum];
export declare const IptOrderByRelevanceFieldEnum: {
    readonly an: "an";
    readonly admdoctor: "admdoctor";
    readonly dchstts: "dchstts";
    readonly dchtype: "dchtype";
    readonly dthdiagdct: "dthdiagdct";
    readonly hn: "hn";
    readonly ivstist: "ivstist";
    readonly ivstost: "ivstost";
    readonly prediag: "prediag";
    readonly pttype: "pttype";
    readonly rfrics: "rfrics";
    readonly rfrilct: "rfrilct";
    readonly rfrocs: "rfrocs";
    readonly rfrolct: "rfrolct";
    readonly spclty: "spclty";
    readonly vn: "vn";
    readonly ward: "ward";
    readonly rcptDisease: "rcptDisease";
    readonly dchDoctor: "dchDoctor";
    readonly irefType: "irefType";
    readonly drg: "drg";
    readonly mdc: "mdc";
    readonly result: "result";
    readonly rxdoctor: "rxdoctor";
    readonly staff: "staff";
    readonly firstWard: "firstWard";
    readonly referOutNumber: "referOutNumber";
    readonly inchargeDoctor: "inchargeDoctor";
    readonly anGuid: "anGuid";
    readonly anLock: "anLock";
    readonly ergent: "ergent";
    readonly chartState: "chartState";
    readonly receiveChartStaff: "receiveChartStaff";
    readonly receiveChartNote: "receiveChartNote";
    readonly iptSpclty: "iptSpclty";
    readonly financeLock: "financeLock";
    readonly admitFeeGuid: "admitFeeGuid";
    readonly operationStatus: "operationStatus";
    readonly oldCauseRevisit: "oldCauseRevisit";
    readonly financeTransfer: "financeTransfer";
    readonly provisionDx: "provisionDx";
    readonly hosGuid: "hosGuid";
    readonly hosGuidExt: "hosGuidExt";
    readonly curDepCode: "curDepCode";
    readonly noVisit: "noVisit";
    readonly noFood: "noFood";
    readonly confirmDischarge: "confirmDischarge";
    readonly grouperVersion: "grouperVersion";
    readonly labStatus: "labStatus";
    readonly xrayStatus: "xrayStatus";
    readonly provisionDxIcd: "provisionDxIcd";
    readonly iptCauseTypeNote: "iptCauseTypeNote";
    readonly followup: "followup";
    readonly homeLeaveStatus: "homeLeaveStatus";
    readonly oldcode: "oldcode";
    readonly dataOk: "dataOk";
    readonly noChargeRoom: "noChargeRoom";
    readonly rxHomeMed: "rxHomeMed";
    readonly hhcHospcode: "hhcHospcode";
    readonly ipdNurseEvalRangeCode: "ipdNurseEvalRangeCode";
    readonly planAdmit: "planAdmit";
};
export type IptOrderByRelevanceFieldEnum = (typeof IptOrderByRelevanceFieldEnum)[keyof typeof IptOrderByRelevanceFieldEnum];
export declare const WardOrderByRelevanceFieldEnum: {
    readonly ward: "ward";
    readonly name: "name";
    readonly oldCode: "oldCode";
    readonly spclty: "spclty";
    readonly shortname: "shortname";
    readonly sssCode: "sssCode";
    readonly hosGuid: "hosGuid";
    readonly wardExportCode: "wardExportCode";
    readonly wardActive: "wardActive";
    readonly selectBednoFromLayout: "selectBednoFromLayout";
    readonly ipKey: "ipKey";
    readonly strictAccess: "strictAccess";
    readonly lockBedcount: "lockBedcount";
};
export type WardOrderByRelevanceFieldEnum = (typeof WardOrderByRelevanceFieldEnum)[keyof typeof WardOrderByRelevanceFieldEnum];
export declare const AnStatOrderByRelevanceFieldEnum: {
    readonly an: "an";
    readonly pdx: "pdx";
    readonly hn: "hn";
    readonly dx0: "dx0";
    readonly dx1: "dx1";
    readonly dx2: "dx2";
    readonly dx3: "dx3";
    readonly dx4: "dx4";
    readonly dx5: "dx5";
    readonly sex: "sex";
    readonly aid: "aid";
    readonly pttype: "pttype";
    readonly drg: "drg";
    readonly spclty: "spclty";
    readonly ward: "ward";
    readonly printDone: "printDone";
    readonly pttypeInRegion: "pttypeInRegion";
    readonly pcode: "pcode";
    readonly op0: "op0";
    readonly op1: "op1";
    readonly op2: "op2";
    readonly op3: "op3";
    readonly op4: "op4";
    readonly op5: "op5";
    readonly op6: "op6";
    readonly dxDoctor: "dxDoctor";
    readonly vn: "vn";
    readonly rcpnoList: "rcpnoList";
    readonly pttypeno: "pttypeno";
    readonly moopart: "moopart";
    readonly accidentCode: "accidentCode";
    readonly oldDiagnosis: "oldDiagnosis";
    readonly debtIdList: "debtIdList";
    readonly anGuid: "anGuid";
    readonly hosGuid: "hosGuid";
    readonly prescNedIncomplete: "prescNedIncomplete";
    readonly rxLicenseNo: "rxLicenseNo";
    readonly hasRefillMedplan: "hasRefillMedplan";
    readonly hasMedRecon: "hasMedRecon";
    readonly pttypeListText: "pttypeListText";
    readonly diagTextList: "diagTextList";
    readonly iclaimListText: "iclaimListText";
};
export type AnStatOrderByRelevanceFieldEnum = (typeof AnStatOrderByRelevanceFieldEnum)[keyof typeof AnStatOrderByRelevanceFieldEnum];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    ovst?: Prisma.OvstOmit;
    kskdepartment?: Prisma.KskdepartmentOmit;
    vnStat?: Prisma.VnStatOmit;
    rcptPrint?: Prisma.RcptPrintOmit;
    rcptPrintDetail?: Prisma.RcptPrintDetailOmit;
    pttype?: Prisma.PttypeOmit;
    ipt?: Prisma.IptOmit;
    ward?: Prisma.WardOmit;
    anStat?: Prisma.AnStatOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
