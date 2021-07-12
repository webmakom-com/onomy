/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "onomyprotocol.onomy.onomy";
const baseMsgCreateOrder = {
    creator: "",
    account: "",
    amount: "",
    bid: "",
    ask: "",
    exchRate: "",
};
export const MsgCreateOrder = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrder };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = String(object.account);
        }
        else {
            message.account = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = String(object.bid);
        }
        else {
            message.bid = "";
        }
        if (object.ask !== undefined && object.ask !== null) {
            message.ask = String(object.ask);
        }
        else {
            message.ask = "";
        }
        if (object.exchRate !== undefined && object.exchRate !== null) {
            message.exchRate = String(object.exchRate);
        }
        else {
            message.exchRate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.bid !== undefined && (obj.bid = message.bid);
        message.ask !== undefined && (obj.ask = message.ask);
        message.exchRate !== undefined && (obj.exchRate = message.exchRate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        else {
            message.account = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = object.bid;
        }
        else {
            message.bid = "";
        }
        if (object.ask !== undefined && object.ask !== null) {
            message.ask = object.ask;
        }
        else {
            message.ask = "";
        }
        if (object.exchRate !== undefined && object.exchRate !== null) {
            message.exchRate = object.exchRate;
        }
        else {
            message.exchRate = "";
        }
        return message;
    },
};
const baseMsgCreateOrderResponse = { id: 0 };
export const MsgCreateOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateOrder = {
    creator: "",
    id: 0,
    account: "",
    amount: "",
    bid: "",
    ask: "",
    exchRate: "",
};
export const MsgUpdateOrder = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = String(object.account);
        }
        else {
            message.account = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = String(object.bid);
        }
        else {
            message.bid = "";
        }
        if (object.ask !== undefined && object.ask !== null) {
            message.ask = String(object.ask);
        }
        else {
            message.ask = "";
        }
        if (object.exchRate !== undefined && object.exchRate !== null) {
            message.exchRate = String(object.exchRate);
        }
        else {
            message.exchRate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.bid !== undefined && (obj.bid = message.bid);
        message.ask !== undefined && (obj.ask = message.ask);
        message.exchRate !== undefined && (obj.exchRate = message.exchRate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        else {
            message.account = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = object.bid;
        }
        else {
            message.bid = "";
        }
        if (object.ask !== undefined && object.ask !== null) {
            message.ask = object.ask;
        }
        else {
            message.ask = "";
        }
        if (object.exchRate !== undefined && object.exchRate !== null) {
            message.exchRate = object.exchRate;
        }
        else {
            message.exchRate = "";
        }
        return message;
    },
};
const baseMsgUpdateOrderResponse = {};
export const MsgUpdateOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrderResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    },
};
const baseMsgDeleteOrder = { creator: "", id: 0 };
export const MsgDeleteOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteOrderResponse = {};
export const MsgDeleteOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrderResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateOrder(request) {
        const data = MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request("onomyprotocol.onomy.onomy.Msg", "CreateOrder", data);
        return promise.then((data) => MsgCreateOrderResponse.decode(new Reader(data)));
    }
    UpdateOrder(request) {
        const data = MsgUpdateOrder.encode(request).finish();
        const promise = this.rpc.request("onomyprotocol.onomy.onomy.Msg", "UpdateOrder", data);
        return promise.then((data) => MsgUpdateOrderResponse.decode(new Reader(data)));
    }
    DeleteOrder(request) {
        const data = MsgDeleteOrder.encode(request).finish();
        const promise = this.rpc.request("onomyprotocol.onomy.onomy.Msg", "DeleteOrder", data);
        return promise.then((data) => MsgDeleteOrderResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
