package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/onomyprotocol/onomy/x/onomy/types"
	"strconv"
)

// GetOrderCount get the total number of Order
func (k Keeper) GetOrderCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderCountKey))
	byteKey := types.KeyPrefix(types.OrderCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetOrderCount set the total number of Order
func (k Keeper) SetOrderCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderCountKey))
	byteKey := types.KeyPrefix(types.OrderCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendOrder appends a Order in the store with a new id and update the count
func (k Keeper) AppendOrder(
	ctx sdk.Context,
	creator string,
	account string,
	amount string,
	bid string,
	ask string,
	exchRate string,
) uint64 {
	// Create the Order
	count := k.GetOrderCount(ctx)
	var Order = types.Order{
		Creator:  creator,
		Id:       count,
		Account:  account,
		Amount:   amount,
		Bid:      bid,
		Ask:      ask,
		ExchRate: exchRate,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	value := k.cdc.MustMarshalBinaryBare(&Order)
	store.Set(GetOrderIDBytes(Order.Id), value)

	// Update Order count
	k.SetOrderCount(ctx, count+1)

	return count
}

// SetOrder set a specific Order in the store
func (k Keeper) SetOrder(ctx sdk.Context, Order types.Order) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	b := k.cdc.MustMarshalBinaryBare(&Order)
	store.Set(GetOrderIDBytes(Order.Id), b)
}

// GetOrder returns a Order from its id
func (k Keeper) GetOrder(ctx sdk.Context, id uint64) types.Order {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	var Order types.Order
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetOrderIDBytes(id)), &Order)
	return Order
}

// HasOrder checks if the Order exists in the store
func (k Keeper) HasOrder(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	return store.Has(GetOrderIDBytes(id))
}

// GetOrderOwner returns the creator of the Order
func (k Keeper) GetOrderOwner(ctx sdk.Context, id uint64) string {
	return k.GetOrder(ctx, id).Creator
}

// RemoveOrder removes a Order from the store
func (k Keeper) RemoveOrder(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	store.Delete(GetOrderIDBytes(id))
}

// GetAllOrder returns all Order
func (k Keeper) GetAllOrder(ctx sdk.Context) (list []types.Order) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Order
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetOrderIDBytes returns the byte representation of the ID
func GetOrderIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetOrderIDFromBytes returns ID in uint64 format from a byte array
func GetOrderIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
