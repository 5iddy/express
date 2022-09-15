package keeper

import (
	"context"

    "express/x/express/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)


func (k msgServer) CreateThought(goCtx context.Context,  msg *types.MsgCreateThought) (*types.MsgCreateThoughtResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO: Handling the message
    _ = ctx

	return &types.MsgCreateThoughtResponse{}, nil
}
