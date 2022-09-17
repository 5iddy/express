package keeper

import (
	"encoding/binary"
	"express/x/express/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) GetBubbleCount(ctx sdk.Context) uint64 {
	byteKey := []byte(types.BubbleCountKey)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), byteKey)
	countInBytes := store.Get(byteKey)
	count := binary.BigEndian.Uint64(countInBytes)
	return count
}

func (k Keeper) SetBubbleCount(ctx sdk.Context, count uint64) {
	byteKey := []byte(types.BubbleCountKey)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), byteKey)
	countInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(countInBytes, count)
	store.Set(byteKey, countInBytes)
}

func (k Keeper) IncrementBubbleCount(ctx sdk.Context) (previousValue uint64, updatedValue uint64) {
	previousValue = k.GetBubbleCount(ctx)
	updatedValue = previousValue + 1
	k.SetBubbleCount(ctx, updatedValue)
	return previousValue, updatedValue
}

func (k Keeper) AddBubble(ctx sdk.Context, bubble types.Bubble) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BubbleKeyPrefix))
	bubbleInBytes := k.cdc.MustMarshal(&bubble)
	currentCount := k.GetBubbleCount(ctx)
	id := currentCount
	currentCount += 1
	idByteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(idByteKey, id)
	store.Set(idByteKey, bubbleInBytes)
	return id
}

func (k Keeper) GetBubble(ctx sdk.Context, bubbleId uint64) *types.Bubble {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BubbleKeyPrefix))
	bubbleIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(bubbleIdInBytes, bubbleId)
	bubbleInBytes := store.Get(bubbleIdInBytes)
	var bubble types.Bubble
	k.cdc.MustUnmarshal(bubbleInBytes, &bubble)
	return &bubble
}

func (k Keeper) SetBubble(ctx sdk.Context, bubble *types.Bubble) {
	bubbleStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BubbleKeyPrefix))
	bubbleIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(bubbleIdInBytes, bubble.Id)
	bubbleInBytes := k.cdc.MustMarshal(bubble)
	bubbleStore.Set(bubbleIdInBytes, bubbleInBytes)
}

func (k Keeper) DeleteBubble(ctx sdk.Context, bubbleId uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BubbleKeyPrefix))
	bubbleIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(bubbleIdInBytes, bubbleId)
	store.Delete(bubbleIdInBytes)
}

func (k Keeper) EditBubble(ctx sdk.Context, bubble *types.Bubble) error {
	currentBubble := k.GetBubble(ctx, bubble.Id)
	if bubble.Creator == currentBubble.Creator {
		k.SetBubble(ctx, bubble)
		return nil
	} else {
		err := sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot edit thought if you're not the owner")
		return err
	}
}
