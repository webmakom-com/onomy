import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePair } from "./types/onomy/tx";
import { MsgCreatePair } from "./types/onomy/tx";
import { MsgUpdateOrder } from "./types/onomy/tx";
import { MsgCreateOrder } from "./types/onomy/tx";
import { MsgDeletePair } from "./types/onomy/tx";
import { MsgDeleteOrder } from "./types/onomy/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdatePair: (data: MsgUpdatePair) => EncodeObject;
    msgCreatePair: (data: MsgCreatePair) => EncodeObject;
    msgUpdateOrder: (data: MsgUpdateOrder) => EncodeObject;
    msgCreateOrder: (data: MsgCreateOrder) => EncodeObject;
    msgDeletePair: (data: MsgDeletePair) => EncodeObject;
    msgDeleteOrder: (data: MsgDeleteOrder) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
