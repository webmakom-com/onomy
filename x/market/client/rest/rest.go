package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers market-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/market/Pairs/{id}", getPairHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/market/Pairs", listPairHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/market/Orders/{id}", getOrderHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/market/Orders", listOrderHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/market/Pairs", createPairHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/Pairs/{id}", updatePairHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/Pairs/{id}", deletePairHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/market/Orders", createOrderHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/Orders/{id}", updateOrderHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/Orders/{id}", deleteOrderHandler(clientCtx)).Methods("POST")

}
