package rest

import (
	"net/http"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
	"github.com/onomyprotocol/onomy/x/onomy/types"
)

type createOrderRequest struct {
	BaseReq  rest.BaseReq `json:"base_req"`
	Creator  string       `json:"creator"`
	Account  string       `json:"account"`
	Amount   string       `json:"amount"`
	Bid      string       `json:"bid"`
	Ask      string       `json:"ask"`
	ExchRate string       `json:"exchRate"`
}

func createOrderHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createOrderRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedAccount := req.Account

		parsedAmount := req.Amount

		parsedBid := req.Bid

		parsedAsk := req.Ask

		parsedExchRate := req.ExchRate

		msg := types.NewMsgCreateOrder(
			req.Creator,
			parsedAccount,
			parsedAmount,
			parsedBid,
			parsedAsk,
			parsedExchRate,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateOrderRequest struct {
	BaseReq  rest.BaseReq `json:"base_req"`
	Creator  string       `json:"creator"`
	Account  string       `json:"account"`
	Amount   string       `json:"amount"`
	Bid      string       `json:"bid"`
	Ask      string       `json:"ask"`
	ExchRate string       `json:"exchRate"`
}

func updateOrderHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateOrderRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedAccount := req.Account

		parsedAmount := req.Amount

		parsedBid := req.Bid

		parsedAsk := req.Ask

		parsedExchRate := req.ExchRate

		msg := types.NewMsgUpdateOrder(
			req.Creator,
			id,
			parsedAccount,
			parsedAmount,
			parsedBid,
			parsedAsk,
			parsedExchRate,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteOrderRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteOrderHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteOrderRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteOrder(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
