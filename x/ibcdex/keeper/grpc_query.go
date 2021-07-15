package keeper

import (
	"github.com/onomyprotocol/onomy/x/ibcdex/types"
)

var _ types.QueryServer = Keeper{}
