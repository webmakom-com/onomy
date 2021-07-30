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
	r.HandleFunc("/market/pairs/{id}", getPairHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/market/pairs", listPairHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/market/orders/{id}", getOrderHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/market/orders", listOrderHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/market/pairs", createPairHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/pairs/{id}", updatePairHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/pairs/{id}", deletePairHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/market/orders", createOrderHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/orders/{id}", updateOrderHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/market/orders/{id}", deleteOrderHandler(clientCtx)).Methods("POST")

}
