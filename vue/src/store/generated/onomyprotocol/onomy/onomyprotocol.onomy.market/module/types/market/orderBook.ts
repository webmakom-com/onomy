/* eslint-disable */
import { Order } from "../market/order";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "onomyprotocol.onomy.market";

export interface OrderBook {
  index: string;
  orderIDTrack: number;
  amountDenom: string;
  exchRateDenom: string;
  orders: Order[];
}

const baseOrderBook: object = {
  index: "",
  orderIDTrack: 0,
  amountDenom: "",
  exchRateDenom: "",
};

export const OrderBook = {
  encode(message: OrderBook, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.orderIDTrack !== 0) {
      writer.uint32(24).int32(message.orderIDTrack);
    }
    if (message.amountDenom !== "") {
      writer.uint32(34).string(message.amountDenom);
    }
    if (message.exchRateDenom !== "") {
      writer.uint32(42).string(message.exchRateDenom);
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrderBook {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderBook } as OrderBook;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.orderIDTrack = reader.int32();
          break;
        case 4:
          message.amountDenom = reader.string();
          break;
        case 5:
          message.exchRateDenom = reader.string();
          break;
        case 6:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBook {
    const message = { ...baseOrderBook } as OrderBook;
    message.orders = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.orderIDTrack !== undefined && object.orderIDTrack !== null) {
      message.orderIDTrack = Number(object.orderIDTrack);
    } else {
      message.orderIDTrack = 0;
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom);
    } else {
      message.amountDenom = "";
    }
    if (object.exchRateDenom !== undefined && object.exchRateDenom !== null) {
      message.exchRateDenom = String(object.exchRateDenom);
    } else {
      message.exchRateDenom = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.orderIDTrack !== undefined &&
      (obj.orderIDTrack = message.orderIDTrack);
    message.amountDenom !== undefined &&
      (obj.amountDenom = message.amountDenom);
    message.exchRateDenom !== undefined &&
      (obj.exchRateDenom = message.exchRateDenom);
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBook>): OrderBook {
    const message = { ...baseOrderBook } as OrderBook;
    message.orders = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.orderIDTrack !== undefined && object.orderIDTrack !== null) {
      message.orderIDTrack = object.orderIDTrack;
    } else {
      message.orderIDTrack = 0;
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom;
    } else {
      message.amountDenom = "";
    }
    if (object.exchRateDenom !== undefined && object.exchRateDenom !== null) {
      message.exchRateDenom = object.exchRateDenom;
    } else {
      message.exchRateDenom = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromPartial(e));
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