package onomy

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/onomyprotocol/onomy/x/onomy/keeper"
	"github.com/onomyprotocol/onomy/x/onomy/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the Pair
	for _, elem := range genState.PairList {
		k.SetPair(ctx, *elem)
	}

	// Set Pair count
	k.SetPairCount(ctx, uint64(len(genState.PairList)))

	// Set all the Order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, *elem)
	}

	// Set Order count
	k.SetOrderCount(ctx, uint64(len(genState.OrderList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all Pair
	PairList := k.GetAllPair(ctx)
	for _, elem := range PairList {
		elem := elem
		genesis.PairList = append(genesis.PairList, &elem)
	}

	// Get all Order
	OrderList := k.GetAllOrder(ctx)
	for _, elem := range OrderList {
		elem := elem
		genesis.OrderList = append(genesis.OrderList, &elem)
	}

	return genesis
}
