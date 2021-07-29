// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteOrder } from "./types/market/tx";
import { MsgDeletePair } from "./types/market/tx";
import { MsgUpdatePair } from "./types/market/tx";
import { MsgCreatePair } from "./types/market/tx";
import { MsgUpdateOrder } from "./types/market/tx";
import { MsgCreateOrder } from "./types/market/tx";
const types = [
    ["/onomyprotocol.onomy.market.MsgDeleteOrder", MsgDeleteOrder],
    ["/onomyprotocol.onomy.market.MsgDeletePair", MsgDeletePair],
    ["/onomyprotocol.onomy.market.MsgUpdatePair", MsgUpdatePair],
    ["/onomyprotocol.onomy.market.MsgCreatePair", MsgCreatePair],
    ["/onomyprotocol.onomy.market.MsgUpdateOrder", MsgUpdateOrder],
    ["/onomyprotocol.onomy.market.MsgCreateOrder", MsgCreateOrder],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgDeleteOrder", value: data }),
        msgDeletePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgDeletePair", value: data }),
        msgUpdatePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgUpdatePair", value: data }),
        msgCreatePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCreatePair", value: data }),
        msgUpdateOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgUpdateOrder", value: data }),
        msgCreateOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCreateOrder", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
