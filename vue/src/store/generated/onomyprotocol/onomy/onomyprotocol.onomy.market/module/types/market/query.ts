/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Pair } from "../market/Pair";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Order } from "../market/Order";

export const protobufPackage = "onomyprotocol.onomy.market";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPairRequest {
  id: number;
}

export interface QueryGetPairResponse {
  Pair: Pair | undefined;
}

export interface QueryAllPairRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPairResponse {
  Pair: Pair[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOrderRequest {
  id: number;
}

export interface QueryGetOrderResponse {
  Order: Order | undefined;
}

export interface QueryAllOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrderResponse {
  Order: Order[];
  pagination: PageResponse | undefined;
}

const baseQueryGetPairRequest: object = { id: 0 };

export const QueryGetPairRequest = {
  encode(
    message: QueryGetPairRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPairRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPairRequest } as QueryGetPairRequest;
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

  fromJSON(object: any): QueryGetPairRequest {
    const message = { ...baseQueryGetPairRequest } as QueryGetPairRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPairRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPairRequest>): QueryGetPairRequest {
    const message = { ...baseQueryGetPairRequest } as QueryGetPairRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPairResponse: object = {};

export const QueryGetPairResponse = {
  encode(
    message: QueryGetPairResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pair !== undefined) {
      Pair.encode(message.Pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPairResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPairResponse } as QueryGetPairResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pair = Pair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPairResponse {
    const message = { ...baseQueryGetPairResponse } as QueryGetPairResponse;
    if (object.Pair !== undefined && object.Pair !== null) {
      message.Pair = Pair.fromJSON(object.Pair);
    } else {
      message.Pair = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPairResponse): unknown {
    const obj: any = {};
    message.Pair !== undefined &&
      (obj.Pair = message.Pair ? Pair.toJSON(message.Pair) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPairResponse>): QueryGetPairResponse {
    const message = { ...baseQueryGetPairResponse } as QueryGetPairResponse;
    if (object.Pair !== undefined && object.Pair !== null) {
      message.Pair = Pair.fromPartial(object.Pair);
    } else {
      message.Pair = undefined;
    }
    return message;
  },
};

const baseQueryAllPairRequest: object = {};

export const QueryAllPairRequest = {
  encode(
    message: QueryAllPairRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPairRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPairRequest } as QueryAllPairRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPairRequest {
    const message = { ...baseQueryAllPairRequest } as QueryAllPairRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPairRequest>): QueryAllPairRequest {
    const message = { ...baseQueryAllPairRequest } as QueryAllPairRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPairResponse: object = {};

export const QueryAllPairResponse = {
  encode(
    message: QueryAllPairResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pair) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPairResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPairResponse } as QueryAllPairResponse;
    message.Pair = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pair.push(Pair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPairResponse {
    const message = { ...baseQueryAllPairResponse } as QueryAllPairResponse;
    message.Pair = [];
    if (object.Pair !== undefined && object.Pair !== null) {
      for (const e of object.Pair) {
        message.Pair.push(Pair.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPairResponse): unknown {
    const obj: any = {};
    if (message.Pair) {
      obj.Pair = message.Pair.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.Pair = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPairResponse>): QueryAllPairResponse {
    const message = { ...baseQueryAllPairResponse } as QueryAllPairResponse;
    message.Pair = [];
    if (object.Pair !== undefined && object.Pair !== null) {
      for (const e of object.Pair) {
        message.Pair.push(Pair.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrderRequest: object = { id: 0 };

export const QueryGetOrderRequest = {
  encode(
    message: QueryGetOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
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

  fromJSON(object: any): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetOrderResponse: object = {};

export const QueryGetOrderResponse = {
  encode(
    message: QueryGetOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Order !== undefined) {
      Order.encode(message.Order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromJSON(object.Order);
    } else {
      message.Order = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.Order !== undefined &&
      (obj.Order = message.Order ? Order.toJSON(message.Order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrderResponse>
  ): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromPartial(object.Order);
    } else {
      message.Order = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderRequest: object = {};

export const QueryAllOrderRequest = {
  encode(
    message: QueryAllOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderResponse: object = {};

export const QueryAllOrderResponse = {
  encode(
    message: QueryAllOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.Order) {
      obj.Order = message.Order.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.Order = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrderResponse>
  ): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.Order = [];
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Pair(request: QueryGetPairRequest): Promise<QueryGetPairResponse>;
  PairAll(request: QueryAllPairRequest): Promise<QueryAllPairResponse>;
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Pair(request: QueryGetPairRequest): Promise<QueryGetPairResponse> {
    const data = QueryGetPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.market.Query",
      "Pair",
      data
    );
    return promise.then((data) =>
      QueryGetPairResponse.decode(new Reader(data))
    );
  }

  PairAll(request: QueryAllPairRequest): Promise<QueryAllPairResponse> {
    const data = QueryAllPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.market.Query",
      "PairAll",
      data
    );
    return promise.then((data) =>
      QueryAllPairResponse.decode(new Reader(data))
    );
  }

  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.market.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryGetOrderResponse.decode(new Reader(data))
    );
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "onomyprotocol.onomy.market.Query",
      "OrderAll",
      data
    );
    return promise.then((data) =>
      QueryAllOrderResponse.decode(new Reader(data))
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
