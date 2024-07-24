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
		orderItems: []
	},
	mutations: {
		addOrderItem(state: State, orderItem: OrderItem) {
			state.orderItems.push(orderItem)
		},
		updateOrderItemQuantity(state: State, params: UpdateQuantityObject) {
			const {id, newQuantity} = params;
			const orderItem = state.orderItems.find(item => item.shopItemId.toString() === id);
			if (orderItem) {
				orderItem.orderAmount = newQuantity;
			}
		}
	},
	actions: {},
	getters: {}
})
