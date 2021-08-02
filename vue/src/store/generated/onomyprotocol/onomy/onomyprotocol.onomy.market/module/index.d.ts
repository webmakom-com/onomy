import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateOrder } from "./types/market/tx";
import { MsgDeleteOrder } from "./types/market/tx";
import { MsgCreateOrder } from "./types/market/tx";
import { MsgCreatePair } from "./types/market/tx";
import { MsgDeletePair } from "./types/market/tx";
import { MsgUpdatePair } from "./types/market/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateOrder: (data: MsgUpdateOrder) => EncodeObject;
    msgDeleteOrder: (data: MsgDeleteOrder) => EncodeObject;
    msgCreateOrder: (data: MsgCreateOrder) => EncodeObject;
    msgCreatePair: (data: MsgCreatePair) => EncodeObject;
    msgDeletePair: (data: MsgDeletePair) => EncodeObject;
    msgUpdatePair: (data: MsgUpdatePair) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
