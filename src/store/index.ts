import { createStore } from "vuex";
import { OrderItem } from "../models/shopItemModel";

interface State {
	orderItems: OrderItem[]
}
interface UpdateQuantityObject {
	id: string,
	newQuantity: number
}

export default createStore({
	state: {
		orderItems: [
			{
				shopItemId: 0,
				shopItemName: "ass",
				shopItemCategory: "",
				price: 20,
				buyPrice: 0,
				quantity: 12,
				parAmount: 0,
				orderAmount: 5
			}
		]
	},
	mutations: {
		addOrderItem(state: State, orderItem: OrderItem) {
			state.orderItems.push(orderItem)
		},
		updateOrderItemQuantity(state: State, params: UpdateQuantityObject) {
			const {id, newQuantity} = params;
			const orderItem = state.orderItems.find(item => item.shopItemId === id);
			if (orderItem) {
				orderItem.orderAmount = newQuantity;
			}
		}
	},
	actions: {},
	getters: {}
})
