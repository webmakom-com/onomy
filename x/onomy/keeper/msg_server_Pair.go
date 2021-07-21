package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/onomyprotocol/onomy/x/onomy/types"
)

func (k msgServer) CreatePair(goCtx context.Context, msg *types.MsgCreatePair) (*types.MsgCreatePairResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPair(
		ctx,
		msg.Creator,
		msg.Bid,
		msg.Ask,
	)

	return &types.MsgCreatePairResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePair(goCtx context.Context, msg *types.MsgUpdatePair) (*types.MsgUpdatePairResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pair = types.Pair{
		Creator: msg.Creator,
		Id:      msg.Id,
		Bid:     msg.Bid,
		Ask:     msg.Ask,
	}

	// Checks that the element exists
	if !k.HasPair(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPairOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPair(ctx, Pair)

	return &types.MsgUpdatePairResponse{}, nil
}

func (k msgServer) DeletePair(goCtx context.Context, msg *types.MsgDeletePair) (*types.MsgDeletePairResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPair(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPairOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePair(ctx, msg.Id)

	return &types.MsgDeletePairResponse{}, nil
}
