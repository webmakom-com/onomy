// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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
    msgUpdatePair: (data: MsgUpdatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgUpdatePair", value: data }),
    msgCreatePair: (data: MsgCreatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgCreatePair", value: data }),
    msgUpdateOrder: (data: MsgUpdateOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgUpdateOrder", value: data }),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgCreateOrder", value: data }),
    msgDeletePair: (data: MsgDeletePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgDeletePair", value: data }),
    msgDeleteOrder: (data: MsgDeleteOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.onomy.MsgDeleteOrder", value: data }),
    
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
