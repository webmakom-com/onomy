package keeper

import (
	"encoding/binary"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/onomyprotocol/onomy/storage"
	"github.com/onomyprotocol/onomy/x/market/types"
	"strconv"
)

// GetPairCount get the total number of Pair
func (k Keeper) GetPairCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairCountKey))
	byteKey := types.KeyPrefix(types.PairCountKey)
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

// SetPairCount set the total number of Pair
func (k Keeper) SetPairCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairCountKey))
	byteKey := types.KeyPrefix(types.PairCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPair appends a Pair in the store with a new id and update the count
func (k Keeper) AppendPair(
	ctx sdk.Context,
	creator string,
	bid string,
	ask string,
) uint64 {
	// Create the Pair
	count := k.GetPairCount(ctx)
	var Pair = types.Pair{
		Creator: creator,
		Id:      count,
		Bid:     bid,
		Ask:     ask,
	}

	Pair = k.processPair(ctx, Pair)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	value := k.cdc.MustMarshalBinaryBare(&Pair)
	store.Set(GetPairIDBytes(Pair.Id), value)

	// Update Pair count
	k.SetPairCount(ctx, count+1)

	return count
}

// SetPair set a specific Pair in the store
func (k Keeper) SetPair(ctx sdk.Context, Pair types.Pair) {
	Pair = k.processPair(ctx, Pair)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	b := k.cdc.MustMarshalBinaryBare(&Pair)
	store.Set(GetPairIDBytes(Pair.Id), b)
}

// GetPair returns a Pair from its id
func (k Keeper) GetPair(ctx sdk.Context, id uint64) types.Pair {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	var Pair types.Pair
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPairIDBytes(id)), &Pair)
	return Pair
}

// HasPair checks if the Pair exists in the store
func (k Keeper) HasPair(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	return store.Has(GetPairIDBytes(id))
}

// GetPairOwner returns the creator of the Pair
func (k Keeper) GetPairOwner(ctx sdk.Context, id uint64) string {
	return k.GetPair(ctx, id).Creator
}

// RemovePair removes a Pair from the store
func (k Keeper) RemovePair(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	store.Delete(GetPairIDBytes(id))
}

// GetAllPair returns all Pair
func (k Keeper) GetAllPair(ctx sdk.Context) (list []types.Pair) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PairKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pair
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPairIDBytes returns the byte representation of the ID
func GetPairIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPairIDFromBytes returns ID in uint64 format from a byte array
func GetPairIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) processPair(ctx sdk.Context, Pair types.Pair) types.Pair {
	logger := k.Logger(ctx)
	// logic

	//Save to the mongo
	request := storage.Request{Collection: "pairs", Data: Pair}

	logger.Error("Pair: ", request)
	logger.With("module", fmt.Sprintf("x/%s", types.ModuleName))
	err := storage.CallSaiStorage("save", request)

	logger.Error("Mongo error: ")
	logger.Error(err)

	return Pair
}