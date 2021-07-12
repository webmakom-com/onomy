/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "onomyprotocol.onomy.onomy";
const baseOrder = {
    creator: "",
    id: 0,
    account: "",
    amount: "",
    bid: "",
    ask: "",
    exchRate: "",
};
export const Order = {
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
