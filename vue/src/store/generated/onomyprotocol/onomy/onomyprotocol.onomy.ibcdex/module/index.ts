// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelBuyOrder } from "./types/ibcdex/tx";
import { MsgSendCreatePair } from "./types/ibcdex/tx";
import { MsgCancelSellOrder } from "./types/ibcdex/tx";
import { MsgSendBuyOrder } from "./types/ibcdex/tx";
import { MsgSendSellOrder } from "./types/ibcdex/tx";


const types = [
  ["/onomyprotocol.onomy.ibcdex.MsgCancelBuyOrder", MsgCancelBuyOrder],
  ["/onomyprotocol.onomy.ibcdex.MsgSendCreatePair", MsgSendCreatePair],
  ["/onomyprotocol.onomy.ibcdex.MsgCancelSellOrder", MsgCancelSellOrder],
  ["/onomyprotocol.onomy.ibcdex.MsgSendBuyOrder", MsgSendBuyOrder],
  ["/onomyprotocol.onomy.ibcdex.MsgSendSellOrder", MsgSendSellOrder],
  
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
    msgCancelBuyOrder: (data: MsgCancelBuyOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.ibcdex.MsgCancelBuyOrder", value: data }),
    msgSendCreatePair: (data: MsgSendCreatePair): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.ibcdex.MsgSendCreatePair", value: data }),
    msgCancelSellOrder: (data: MsgCancelSellOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.ibcdex.MsgCancelSellOrder", value: data }),
    msgSendBuyOrder: (data: MsgSendBuyOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.ibcdex.MsgSendBuyOrder", value: data }),
    msgSendSellOrder: (data: MsgSendSellOrder): EncodeObject => ({ typeUrl: "/onomyprotocol.onomy.ibcdex.MsgSendSellOrder", value: data }),
    
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
