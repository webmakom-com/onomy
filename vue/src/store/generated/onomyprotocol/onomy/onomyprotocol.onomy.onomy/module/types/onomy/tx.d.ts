import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "onomyprotocol.onomy.onomy";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePair {
    creator: string;
    bid: string;
    ask: string;
}
export interface MsgCreatePairResponse {
    id: number;
}
export interface MsgUpdatePair {
    creator: string;
    id: number;
    bid: string;
    ask: string;
}
export interface MsgUpdatePairResponse {
}
export interface MsgDeletePair {
    creator: string;
    id: number;
}
export interface MsgDeletePairResponse {
}
export interface MsgCreateOrder {
    creator: string;
    account: string;
    amount: string;
    bid: string;
    ask: string;
    exchRate: string;
}
export interface MsgCreateOrderResponse {
    id: number;
}
export interface MsgUpdateOrder {
    creator: string;
    id: number;
    account: string;
    amount: string;
    bid: string;
    ask: string;
    exchRate: string;
}
export interface MsgUpdateOrderResponse {
}
export interface MsgDeleteOrder {
    creator: string;
    id: number;
}
export interface MsgDeleteOrderResponse {
}
export declare const MsgCreatePair: {
    encode(message: MsgCreatePair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePair;
    fromJSON(object: any): MsgCreatePair;
    toJSON(message: MsgCreatePair): unknown;
    fromPartial(object: DeepPartial<MsgCreatePair>): MsgCreatePair;
};
export declare const MsgCreatePairResponse: {
    encode(message: MsgCreatePairResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePairResponse;
    fromJSON(object: any): MsgCreatePairResponse;
    toJSON(message: MsgCreatePairResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePairResponse>): MsgCreatePairResponse;
};
export declare const MsgUpdatePair: {
    encode(message: MsgUpdatePair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePair;
    fromJSON(object: any): MsgUpdatePair;
    toJSON(message: MsgUpdatePair): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePair>): MsgUpdatePair;
};
export declare const MsgUpdatePairResponse: {
    encode(_: MsgUpdatePairResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePairResponse;
    fromJSON(_: any): MsgUpdatePairResponse;
    toJSON(_: MsgUpdatePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePairResponse>): MsgUpdatePairResponse;
};
export declare const MsgDeletePair: {
    encode(message: MsgDeletePair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePair;
    fromJSON(object: any): MsgDeletePair;
    toJSON(message: MsgDeletePair): unknown;
    fromPartial(object: DeepPartial<MsgDeletePair>): MsgDeletePair;
};
export declare const MsgDeletePairResponse: {
    encode(_: MsgDeletePairResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePairResponse;
    fromJSON(_: any): MsgDeletePairResponse;
    toJSON(_: MsgDeletePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePairResponse>): MsgDeletePairResponse;
};
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromJSON(object: any): MsgCreateOrder;
    toJSON(message: MsgCreateOrder): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
};
export declare const MsgCreateOrderResponse: {
    encode(message: MsgCreateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromJSON(object: any): MsgCreateOrderResponse;
    toJSON(message: MsgCreateOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
};
export declare const MsgUpdateOrder: {
    encode(message: MsgUpdateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder;
    fromJSON(object: any): MsgUpdateOrder;
    toJSON(message: MsgUpdateOrder): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder;
};
export declare const MsgUpdateOrderResponse: {
    encode(_: MsgUpdateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse;
    fromJSON(_: any): MsgUpdateOrderResponse;
    toJSON(_: MsgUpdateOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse;
};
export declare const MsgDeleteOrder: {
    encode(message: MsgDeleteOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder;
    fromJSON(object: any): MsgDeleteOrder;
    toJSON(message: MsgDeleteOrder): unknown;
    fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder;
};
export declare const MsgDeleteOrderResponse: {
    encode(_: MsgDeleteOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse;
    fromJSON(_: any): MsgDeleteOrderResponse;
    toJSON(_: MsgDeleteOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    UpdatePair(request: MsgUpdatePair): Promise<MsgUpdatePairResponse>;
    DeletePair(request: MsgDeletePair): Promise<MsgDeletePairResponse>;
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    UpdatePair(request: MsgUpdatePair): Promise<MsgUpdatePairResponse>;
    DeletePair(request: MsgDeletePair): Promise<MsgDeletePairResponse>;
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
