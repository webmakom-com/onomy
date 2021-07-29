/* eslint-disable */
import { Pair } from "../market/Pair";
import { Order } from "../market/Order";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "onomyprotocol.onomy.market";

/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  PairList: Pair[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  OrderList: Order[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.PairList) {
      Pair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.OrderList) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.PairList = [];
    message.OrderList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.PairList.push(Pair.decode(reader, reader.uint32()));
          break;
        case 1:
          message.OrderList.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.PairList = [];
    message.OrderList = [];
    if (object.PairList !== undefined && object.PairList !== null) {
      for (const e of object.PairList) {
        message.PairList.push(Pair.fromJSON(e));
      }
    }
    if (object.OrderList !== undefined && object.OrderList !== null) {
      for (const e of object.OrderList) {
        message.OrderList.push(Order.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.PairList) {
      obj.PairList = message.PairList.map((e) =>
        e ? Pair.toJSON(e) : undefined
      );
    } else {
      obj.PairList = [];
    }
    if (message.OrderList) {
      obj.OrderList = message.OrderList.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.OrderList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.PairList = [];
    message.OrderList = [];
    if (object.PairList !== undefined && object.PairList !== null) {
      for (const e of object.PairList) {
        message.PairList.push(Pair.fromPartial(e));
      }
    }
    if (object.OrderList !== undefined && object.OrderList !== null) {
      for (const e of object.OrderList) {
        message.OrderList.push(Order.fromPartial(e));
      }
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
