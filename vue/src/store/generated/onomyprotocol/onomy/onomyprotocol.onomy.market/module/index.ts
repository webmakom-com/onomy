// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateOrder } from "./types/market/tx";
import { MsgDeleteOrder } from "./types/market/tx";
import { MsgCreateOrder } from "./types/market/tx";
import { MsgCreatePair } from "./types/market/tx";
import { MsgDeletePair } from "./types/market/tx";
import { MsgUpdatePair } from "./types/market/tx";


const types = [
  ["/onomyprotocol.onomy.market.MsgUpdateOrder", MsgUpdateOrder],
  ["/onomyprotocol.onomy.market.MsgDeleteOrder", MsgDeleteOrder],
  ["/onomyprotocol.onomy.market.MsgCreateOrder", MsgCreateOrder],
  ["/onomyprotocol.onomy.market.MsgCreatePair", MsgCreatePair],
  ["/onomyprotocol.onomy.market.MsgDeletePair", MsgDeletePair],
  ["/onomyprotocol.onomy.market.MsgUpdatePair", MsgUpdatePair],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgUpdateOrder: (data: MsgUpdateOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgUpdateOrder", value: data }),
    msgDeleteOrder: (data: MsgDeleteOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgDeleteOrder", value: data }),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCreateOrder", value: data }),
    msgCreatePair: (data: MsgCreatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCreatePair", value: data }),
    msgDeletePair: (data: MsgDeletePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgDeletePair", value: data }),
    msgUpdatePair: (data: MsgUpdatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgUpdatePair", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};