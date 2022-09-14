package express_test

import (
	"testing"

	keepertest "express/testutil/keeper"
	"express/testutil/nullify"
	"express/x/express"
	"express/x/express/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ExpressKeeper(t)
	express.InitGenesis(ctx, *k, genesisState)
	got := express.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
