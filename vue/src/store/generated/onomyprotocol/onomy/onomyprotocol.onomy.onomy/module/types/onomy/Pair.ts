/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "onomyprotocol.onomy.onomy";

export interface Pair {
  creator: string;
  id: number;
  bid: string;
  ask: string;
}

const basePair: object = { creator: "", id: 0, bid: "", ask: "" };

export const Pair = {
  encode(message: Pair, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.bid !== "") {
      writer.uint32(26).string(message.bid);
    }
    if (message.ask !== "") {
      writer.uint32(34).string(message.ask);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePair } as Pair;
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
          message.bid = reader.string();
          break;
        case 4:
          message.ask = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pair {
    const message = { ...basePair } as Pair;
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
    return message;
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.bid !== undefined && (obj.bid = message.bid);
    message.ask !== undefined && (obj.ask = message.ask);
    return obj;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = { ...basePair } as Pair;
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
    return message;
  },
};

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
