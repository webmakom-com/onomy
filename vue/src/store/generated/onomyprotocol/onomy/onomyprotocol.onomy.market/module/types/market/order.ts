/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "onomyprotocol.onomy.market";

export interface Order {
  id: number;
  creator: string;
  amount: number;
  sourceCoin: number;
  targetCoin: number;
  exchRate: string;
}

const baseOrder: object = {
  id: 0,
  creator: "",
  amount: 0,
  sourceCoin: 0,
  targetCoin: 0,
  exchRate: "",
};

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.sourceCoin !== 0) {
      writer.uint32(32).int32(message.sourceCoin);
    }
    if (message.targetCoin !== 0) {
      writer.uint32(40).int32(message.targetCoin);
    }
    if (message.exchRate !== "") {
      writer.uint32(50).string(message.exchRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.sourceCoin = reader.int32();
          break;
        case 5:
          message.targetCoin = reader.int32();
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

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.sourceCoin !== undefined && object.sourceCoin !== null) {
      message.sourceCoin = Number(object.sourceCoin);
    } else {
      message.sourceCoin = 0;
    }
    if (object.targetCoin !== undefined && object.targetCoin !== null) {
      message.targetCoin = Number(object.targetCoin);
    } else {
      message.targetCoin = 0;
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = String(object.exchRate);
    } else {
      message.exchRate = "";
    }
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sourceCoin !== undefined && (obj.sourceCoin = message.sourceCoin);
    message.targetCoin !== undefined && (obj.targetCoin = message.targetCoin);
    message.exchRate !== undefined && (obj.exchRate = message.exchRate);
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.sourceCoin !== undefined && object.sourceCoin !== null) {
      message.sourceCoin = object.sourceCoin;
    } else {
      message.sourceCoin = 0;
    }
    if (object.targetCoin !== undefined && object.targetCoin !== null) {
      message.targetCoin = object.targetCoin;
    } else {
      message.targetCoin = 0;
    }
    if (object.exchRate !== undefined && object.exchRate !== null) {
      message.exchRate = object.exchRate;
    } else {
      message.exchRate = "";
    }
    return message;
  },
};

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
