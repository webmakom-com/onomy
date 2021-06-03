package types

func (book OrderBook) InsertOrderAt(i int, order Order) OrderBook {
	if len(book.Orders) == i {
		book.Orders = append(book.Orders, &order)
		return book
	}

	book.Orders = append(book.Orders[:i+1], book.Orders[i:]...)
	book.Orders[i] = &order

	return book
}

func (book OrderBook) ProcessOrder(order Order) OrderBook {
	return book
}
