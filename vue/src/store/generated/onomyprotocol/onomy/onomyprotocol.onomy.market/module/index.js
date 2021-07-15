// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendCreatePair } from "./types/market/tx";
import { MsgSendCreateOrder } from "./types/market/tx";
import { MsgCancelOrder } from "./types/market/tx";
const types = [
    ["/onomyprotocol.onomy.market.MsgSendCreatePair", MsgSendCreatePair],
    ["/onomyprotocol.onomy.market.MsgSendCreateOrder", MsgSendCreateOrder],
    ["/onomyprotocol.onomy.market.MsgCancelOrder", MsgCancelOrder],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSendCreatePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgSendCreatePair", value: data }),
        msgSendCreateOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgSendCreateOrder", value: data }),
        msgCancelOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCancelOrder", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
