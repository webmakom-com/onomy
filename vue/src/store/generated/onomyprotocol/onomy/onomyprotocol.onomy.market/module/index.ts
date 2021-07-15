// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendCreatePair: (data: MsgSendCreatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgSendCreatePair", value: data }),
    msgSendCreateOrder: (data: MsgSendCreateOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgSendCreateOrder", value: data }),
    msgCancelOrder: (data: MsgCancelOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.market.MsgCancelOrder", value: data }),
    
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
