package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/onomyprotocol/onomy/x/market/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) OrderAll(c context.Context, req *types.QueryAllOrderRequest) (*types.QueryAllOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Orders []*types.Order
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	OrderStore := prefix.NewStore(store, types.KeyPrefix(types.OrderKey))

	pageRes, err := query.Paginate(OrderStore, req.Pagination, func(key []byte, value []byte) error {
		var Order types.Order
		if err := k.cdc.UnmarshalBinaryBare(value, &Order); err != nil {
			return err
		}

		Orders = append(Orders, &Order)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllOrderResponse{Order: Orders, Pagination: pageRes}, nil
}

func (k Keeper) Order(c context.Context, req *types.QueryGetOrderRequest) (*types.QueryGetOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Order types.Order
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasOrder(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetOrderIDBytes(req.Id)), &Order)

	return &types.QueryGetOrderResponse{Order: &Order}, nil
}
