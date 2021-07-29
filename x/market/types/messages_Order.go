package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateOrder{}

func NewMsgCreateOrder(creator string, account string, amount string, bid string, ask string, exchRate string) *MsgCreateOrder {
	return &MsgCreateOrder{
		Creator:  creator,
		Account:  account,
		Amount:   amount,
		Bid:      bid,
		Ask:      ask,
		ExchRate: exchRate,
	}
}

func (msg *MsgCreateOrder) Route() string {
	return RouterKey
}

func (msg *MsgCreateOrder) Type() string {
	return "CreateOrder"
}

func (msg *MsgCreateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOrder{}

func NewMsgUpdateOrder(creator string, id uint64, account string, amount string, bid string, ask string, exchRate string) *MsgUpdateOrder {
	return &MsgUpdateOrder{
		Id:       id,
		Creator:  creator,
		Account:  account,
		Amount:   amount,
		Bid:      bid,
		Ask:      ask,
		ExchRate: exchRate,
	}
}

func (msg *MsgUpdateOrder) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrder) Type() string {
	return "UpdateOrder"
}

func (msg *MsgUpdateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateOrder{}

func NewMsgDeleteOrder(creator string, id uint64) *MsgDeleteOrder {
	return &MsgDeleteOrder{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteOrder) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOrder) Type() string {
	return "DeleteOrder"
}

func (msg *MsgDeleteOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
