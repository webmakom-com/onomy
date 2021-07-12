/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "onomyprotocol.onomy.onomy";

/** this line is used by starport scaffolding # proto/tx/message */
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

export interface MsgUpdateOrderResponse {}

export interface MsgDeleteOrder {
  creator: string;
  id: number;
}

export interface MsgDeleteOrderResponse {}

const baseMsgCreateOrder: object = {
  creator: "",
  account: "",
  amount: "",
  bid: "",
  ask: "",
  exchRate: "",
};

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.bid !== "") {
      writer.uint32(34).string(message.bid);
    }
    if (message.ask !== "") {
      writer.uint32(42).string(message.ask);
    }
    if (message.exchRate !== "") {
      writer.uint32(50).string(message.exchRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.bid = reader.string();
          break;
        case 5:
          message.ask = reader.string();
          break;
        case 6:
          message.exchRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = String(object.bid);
    } else {
      message.bid = "";
    }
    if (object.ask !== undefined && object.ask !== null) {
      message.ask = String(object.ask);
    } else {
      message.ask = "";
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = String(object.exchRate);
    } else {
      message.exchRate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bid !== undefined && (obj.bid = message.bid);
    message.ask !== undefined && (obj.ask = message.ask);
    message.exchRate !== undefined && (obj.exchRate = message.exchRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = object.bid;
    } else {
      message.bid = "";
    }
    if (object.ask !== undefined && object.ask !== null) {
      message.ask = object.ask;
    } else {
      message.ask = "";
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = object.exchRate;
    } else {
      message.exchRate = "";
    }
    return message;
  },
};

const baseMsgCreateOrderResponse: object = { id: 0 };

export const MsgCreateOrderResponse = {
  encode(
    message: MsgCreateOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateOrderResponse>
  ): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateOrder: object = {
  creator: "",
  id: 0,
  account: "",
  amount: "",
  bid: "",
  ask: "",
  exchRate: "",
};

export const MsgUpdateOrder = {
  encode(message: MsgUpdateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.bid !== "") {
      writer.uint32(42).string(message.bid);
    }
    if (message.ask !== "") {
      writer.uint32(50).string(message.ask);
    }
    if (message.exchRate !== "") {
      writer.uint32(58).string(message.exchRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.bid = reader.string();
          break;
        case 6:
          message.ask = reader.string();
          break;
        case 7:
          message.exchRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = String(object.bid);
    } else {
      message.bid = "";
    }
    if (object.ask !== undefined && object.ask !== null) {
      message.ask = String(object.ask);
    } else {
      message.ask = "";
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = String(object.exchRate);
    } else {
      message.exchRate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bid !== undefined && (obj.bid = message.bid);
    message.ask !== undefined && (obj.ask = message.ask);
    message.exchRate !== undefined && (obj.exchRate = message.exchRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = object.bid;
    } else {
      message.bid = "";
    }
    if (object.ask !== undefined && object.ask !== null) {
      message.ask = object.ask;
    } else {
      message.ask = "";
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = object.exchRate;
    } else {
      message.exchRate = "";
    }
    return message;
  },
};

const baseMsgUpdateOrderResponse: object = {};

export const MsgUpdateOrderResponse = {
  encode(_: MsgUpdateOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },

  toJSON(_: MsgUpdateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse;
    return message;
  },
};

const baseMsgDeleteOrder: object = { creator: "", id: 0 };

export const MsgDeleteOrder = {
  encode(message: MsgDeleteOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteOrderResponse: object = {};

export const MsgDeleteOrderResponse = {
  encode(_: MsgDeleteOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },

  toJSON(_: MsgDeleteOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.onomy.Msg",
      "CreateOrder",
      data
    );
    return promise.then((data) =>
      MsgCreateOrderResponse.decode(new Reader(data))
    );
  }

  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse> {
    const data = MsgUpdateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.onomy.Msg",
      "UpdateOrder",
      data
    );
    return promise.then((data) =>
      MsgUpdateOrderResponse.decode(new Reader(data))
    );
  }

  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse> {
    const data = MsgDeleteOrder.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.onomy.Msg",
      "DeleteOrder",
      data
    );
    return promise.then((data) =>
      MsgDeleteOrderResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
