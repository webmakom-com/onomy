// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePair } from "./types/onomy/tx";
import { MsgCreatePair } from "./types/onomy/tx";
import { MsgUpdateOrder } from "./types/onomy/tx";
import { MsgCreateOrder } from "./types/onomy/tx";
import { MsgDeletePair } from "./types/onomy/tx";
import { MsgDeleteOrder } from "./types/onomy/tx";
const types = [
    ["/onomyprotocol.onomy.onomy.MsgUpdatePair", MsgUpdatePair],
    ["/onomyprotocol.onomy.onomy.MsgCreatePair", MsgCreatePair],
    ["/onomyprotocol.onomy.onomy.MsgUpdateOrder", MsgUpdateOrder],
    ["/onomyprotocol.onomy.onomy.MsgCreateOrder", MsgCreateOrder],
    ["/onomyprotocol.onomy.onomy.MsgDeletePair", MsgDeletePair],
    ["/onomyprotocol.onomy.onomy.MsgDeleteOrder", MsgDeleteOrder],
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
        msgUpdatePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgUpdatePair", value: data }),
        msgCreatePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgCreatePair", value: data }),
        msgUpdateOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgUpdateOrder", value: data }),
        msgCreateOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgCreateOrder", value: data }),
        msgDeletePair: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgDeletePair", value: data }),
        msgDeleteOrder: (data) => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgDeleteOrder", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
