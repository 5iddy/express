package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateThought = "create_thought"

var _ sdk.Msg = &MsgCreateThought{}

func NewMsgCreateThought(creator string) *MsgCreateThought {
  return &MsgCreateThought{
		Creator: creator,
	}
}

func (msg *MsgCreateThought) Route() string {
  return RouterKey
}

func (msg *MsgCreateThought) Type() string {
  return TypeMsgCreateThought
}

func (msg *MsgCreateThought) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgCreateThought) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateThought) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  	if err != nil {
  		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  	}
  return nil
}

