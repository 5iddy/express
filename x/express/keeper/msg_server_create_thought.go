package keeper

import (
	"context"

	"express/x/express/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateThought(goCtx context.Context, msg *types.MsgCreateThought) (*types.MsgCreateThoughtResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Create a new Thought
	newThought := types.Thought{
		Creator:             msg.Creator,
		Content:             msg.Content,
		ContentType:         msg.ContentType,
		IsReply:             msg.IsReply,
		ReplyForThoughtId:   msg.ReplyForThoughtId,
		ReplyForBubbleId:    msg.ReplyForBubbleId,
		Categories:          msg.Categories,
		Tags:                msg.Tags,
		Extension:           msg.Extension,
		ExtensionType:       msg.ExtensionType,
		IsCloned:            msg.IsCloned,
		ClonedFromThoughtId: msg.ClonedFromThoughtId,
		IsChildOfBubble:     msg.IsChildOfBubble,
		ParentBubbleId:      msg.ParentBubbleId,
	}

	thoughtId := k.AddThought(ctx, newThought)

	return &types.MsgCreateThoughtResponse{Id: thoughtId}, nil
}
