package keeper

import (
	"context"

	"express/x/express/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateThought(goCtx context.Context, msg *types.MsgCreateThought) (*types.MsgCreateThoughtResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	thoughtId := k.AddThought(ctx,
		&types.Thought{
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
		})

	return &types.MsgCreateThoughtResponse{Id: thoughtId}, nil
}
