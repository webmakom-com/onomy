package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePair{}

func NewMsgCreatePair(creator string, bid string, ask string) *MsgCreatePair {
	return &MsgCreatePair{
		Creator: creator,
		Bid:     bid,
		Ask:     ask,
	}
}

func (msg *MsgCreatePair) Route() string {
	return RouterKey
}

func (msg *MsgCreatePair) Type() string {
	return "CreatePair"
}

func (msg *MsgCreatePair) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePair) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePair) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePair{}

func NewMsgUpdatePair(creator string, id uint64, bid string, ask string) *MsgUpdatePair {
	return &MsgUpdatePair{
		Id:      id,
		Creator: creator,
		Bid:     bid,
		Ask:     ask,
	}
}

func (msg *MsgUpdatePair) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePair) Type() string {
	return "UpdatePair"
}

func (msg *MsgUpdatePair) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePair) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePair) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePair{}

func NewMsgDeletePair(creator string, id uint64) *MsgDeletePair {
	return &MsgDeletePair{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePair) Route() string {
	return RouterKey
}

func (msg *MsgDeletePair) Type() string {
	return "DeletePair"
}

func (msg *MsgDeletePair) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePair) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePair) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
