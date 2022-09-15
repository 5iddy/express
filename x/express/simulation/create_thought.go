package simulation

import (
	"math/rand"

	"express/x/express/keeper"
	"express/x/express/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgCreateThought(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateThought{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateThought simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateThought simulation not implemented"), nil, nil
	}
}
