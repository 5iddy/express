package keeper

import (
	"encoding/binary"
	"express/x/express/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) GetThoughtCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtCountKey))
	byteKey := []byte(types.ThoughtCountKey)
	countInBytes := store.Get(byteKey)
	count := binary.BigEndian.Uint64(countInBytes)
	return count
}

func (k Keeper) SetThoughtCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtCountKey))
	byteKey := []byte(types.ThoughtCountKey)
	countInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(countInBytes, count)
	store.Set(byteKey, countInBytes)
}

func (k Keeper) IncrementThoughtCount(ctx sdk.Context) (previousValue uint64, updatedValue uint64) {
	previousValue = k.GetThoughtCount(ctx)
	updatedValue = previousValue + 1
	k.SetThoughtCount(ctx, updatedValue)
	return previousValue, updatedValue
}

func (k Keeper) AddThought(ctx sdk.Context, thought types.Thought) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtKeyPrefix))
	thoughtInBytes := k.cdc.MustMarshal(&thought)
	currentThoughtCount := k.GetThoughtCount(ctx)
	id := currentThoughtCount + 1
	idByteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(idByteKey, id)
	store.Set(idByteKey, thoughtInBytes)
	return id
}

func (k Keeper) DeleteThought(ctx sdk.Context, creator string, thoughtId uint64) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtKeyPrefix))
	thoughtIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(thoughtIdInBytes, thoughtId)
	thoughtInBytes := store.Get(thoughtIdInBytes)
	var thought types.Thought
	k.cdc.MustUnmarshal(thoughtInBytes, &thought)
	if thought.Creator == creator {
		store.Delete(thoughtIdInBytes)
		return nil
	} else {
		err := sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot delete thought if you're not the owner")
		return err
	}
}

func (k Keeper) EditThought(ctx sdk.Context, thoughtId uint64, creator string, content string) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtKeyPrefix))
	thoughtIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(thoughtIdInBytes, thoughtId)
	thoughtInBytes := store.Get(thoughtIdInBytes)
	var thought types.Thought
	k.cdc.MustUnmarshal(thoughtInBytes, &thought)
	if thought.Creator == creator {
		thought.Content = content
		newThoughtInBytes := k.cdc.MustMarshal(&thought)
		store.Set(thoughtIdInBytes, newThoughtInBytes)
		return nil
	} else {
		err := sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot edit thought if you're not the owner")
		return err
	}
}

func (k Keeper) GetThought(ctx sdk.Context, thoughtId uint64) *types.Thought {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThoughtKeyPrefix))
	thoughtIdInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(thoughtIdInBytes, thoughtId)
	thoughtInBytes := store.Get(thoughtIdInBytes)
	var thought types.Thought
	k.cdc.MustUnmarshal(thoughtInBytes, &thought)
	return &thought
}
