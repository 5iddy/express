package keeper

import (
	"express/x/express/types"
)

var _ types.QueryServer = Keeper{}
