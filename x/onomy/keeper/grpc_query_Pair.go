package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/onomyprotocol/onomy/x/onomy/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PairAll(c context.Context, req *types.QueryAllPairRequest) (*types.QueryAllPairResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pairs []*types.Pair
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	PairStore := prefix.NewStore(store, types.KeyPrefix(types.PairKey))

	pageRes, err := query.Paginate(PairStore, req.Pagination, func(key []byte, value []byte) error {
		var Pair types.Pair
		if err := k.cdc.UnmarshalBinaryBare(value, &Pair); err != nil {
			return err
		}

		Pairs = append(Pairs, &Pair)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPairResponse{Pair: Pairs, Pagination: pageRes}, nil
}

func (k Keeper) Pair(c context.Context, req *types.QueryGetPairRequest) (*types.QueryGetPairResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pair types.Pair
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPair(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPairIDBytes(req.Id)), &Pair)

	return &types.QueryGetPairResponse{Pair: &Pair}, nil
}
