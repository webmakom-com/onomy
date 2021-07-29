package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/onomyprotocol/onomy/x/market/types"
)

func CmdCreateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-Order [account] [amount] [bid] [ask] [exchRate]",
		Short: "Creates a new Order",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAccount := string(args[0])
			argsAmount := string(args[1])
			argsBid := string(args[2])
			argsAsk := string(args[3])
			argsExchRate := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateOrder(clientCtx.GetFromAddress().String(), string(argsAccount), string(argsAmount), string(argsBid), string(argsAsk), string(argsExchRate))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-Order [id] [account] [amount] [bid] [ask] [exchRate]",
		Short: "Update a Order",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAccount := string(args[1])
			argsAmount := string(args[2])
			argsBid := string(args[3])
			argsAsk := string(args[4])
			argsExchRate := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateOrder(clientCtx.GetFromAddress().String(), id, string(argsAccount), string(argsAmount), string(argsBid), string(argsAsk), string(argsExchRate))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-Order [id] [account] [amount] [bid] [ask] [exchRate]",
		Short: "Delete a Order by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteOrder(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
