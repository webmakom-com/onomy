/* eslint-disable */
import { Order } from "../onomy/Order";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "onomyprotocol.onomy.onomy";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.OrderList) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.OrderList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.OrderList = [];
        if (object.OrderList !== undefined && object.OrderList !== null) {
            for (const e of object.OrderList) {
                message.OrderList.push(Order.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.OrderList) {
            obj.OrderList = message.OrderList.map((e) => e ? Order.toJSON(e) : undefined);
        }
        else {
            obj.OrderList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.OrderList = [];
        if (object.OrderList !== undefined && object.OrderList !== null) {
            for (const e of object.OrderList) {
                message.OrderList.push(Order.fromPartial(e));
            }
        }
        return message;
    },
};
