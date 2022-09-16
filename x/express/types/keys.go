package types

import "encoding/binary"

const (
	// ModuleName defines the module name
	ModuleName = "express"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_express"

	// ThoughtStoreKeyPrefix + Thought.Id => key for thought
	ThoughtKeyPrefix = "thought/id/"
	// total number of thoughts in store
	ThoughtCountKey = "thought/count/"
	// BubbleStoreKeyPrefix + Bubble.Id => key for Bubble
	BubbleKeyPrefix = "bubble/id/"
	BubbleCountKey  = "bullbe/count/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

func NewThoughtKey(id uint64) *[]byte {
	idInBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(idInBytes, id)
	return &idInBytes
}
