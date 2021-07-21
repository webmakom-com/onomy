package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreatePair{}, "onomy/CreatePair", nil)
	cdc.RegisterConcrete(&MsgUpdatePair{}, "onomy/UpdatePair", nil)
	cdc.RegisterConcrete(&MsgDeletePair{}, "onomy/DeletePair", nil)

	cdc.RegisterConcrete(&MsgCreateOrder{}, "onomy/CreateOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateOrder{}, "onomy/UpdateOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteOrder{}, "onomy/DeleteOrder", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePair{},
		&MsgUpdatePair{},
		&MsgDeletePair{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateOrder{},
		&MsgUpdateOrder{},
		&MsgDeleteOrder{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
