export interface ItemCount {
	totalItems: number,
	numberOfPages: number
}

export interface ShopItem{
	shopItemId: number,
	shopItemName: string,
	shopItemCategory: string,
	price: number,
	buyPrice: number,
	quantity: number,
	parAmount: number
}

export interface OrderItem extends ShopItem{
	orderAmount: number
}

export const categories = [
	"fruits",
	"dry goods",
	"miscellaneous",
	"grains",
	"prepared goods",
	"beverages",
	"apparel"
]

export const ShopItemDefault = {
	shopItemId: 0,
	shopItemName: "",
	shopItemCategory: "",
	price: 0,
	buyPrice: 0,
	quantity: 0,
	parAmount: 0
}
export const OrderItemDefault = {
	shopItemId: 0,
	shopItemCategory: "",
	price: 0,
	buyPrice: 0,
	quantity: 0,
	parAmount: 0,
	orderAmount: 0
}
