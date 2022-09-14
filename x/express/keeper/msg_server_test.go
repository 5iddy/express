package keeper_test

import (
	"context"
	"testing"

	keepertest "express/testutil/keeper"
	"express/x/express/keeper"
	"express/x/express/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ExpressKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
