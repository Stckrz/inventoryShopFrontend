<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue';
import { useStore } from 'vuex';
import { OrderItem } from '../../models/shopItemModel';
export default defineComponent({
	name: "QuantityCounter",
	props: {
		orderItem: {
			type: Object as PropType<OrderItem>,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const quantity = ref(0);

		const handleDecrement = () => {
			if (quantity.value > 0) {
				quantity.value--
			}
		}
		const handleIncrement = () => {
			if (quantity.value < props.orderItem.quantity) {
				quantity.value++
			}
		}
		const addItem = () => {
			if (quantity.value > 0) {
				const itemInCart = store.state.orderItems.find(item => props.orderItem.shopItemId === item.shopItemId)
				if (itemInCart === undefined) {
					const item = {
						shopItemId: props.orderItem.shopItemId,
						shopItemName: props.orderItem.shopItemName,
						shopItemCategory: props.orderItem.shopItemCategory,
						price: props.orderItem.price,
						buyPrice: props.orderItem.buyPrice,
						quantity: props.orderItem.quantity,
						parAmount: props.orderItem.parAmount,
						orderAmount: quantity.value
					}
					store.commit('addOrderItem', item);
				} else {
					store.commit('updateOrderItemQuantity', { id: props.orderItem.shopItemId, newQuantity: quantity.value })
				}
			}
		}

		return { quantity, handleDecrement, handleIncrement, addItem }
	}

})
</script>

<template>
	<div class="counterContainer">
		<div class="quantityChangeBox">
			<div class="countButton" @click="handleDecrement">-</div>
			<div class="countQuantity">{{ quantity }}</div>
			<div class="countButton" @click="handleIncrement">+</div>
		</div>
		<div class="cartAddButtonBox">
			<div @click="addItem" class="cartAddButton" button>
				Add
			</div>
		</div>
	</div>
</template>

<style scoped>
.counterContainer {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 100%;
	user-select: none;
}

.quantityChangeBox {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #acb0aa;
	border-radius: 1em;
	gap: 10px;
	padding: 0px 5px 0px 5px;
}

.countQuantity {
	font-size: 20px;
	height: 50%;
	border-radius: 2em;
}

.countButton {
	font-size: 20px;
	height: 50%;
	border-radius: 2em;
}

.cartAddButtonBox {
	text-align: center;
	width: 20%;
	height: 50%;
	background-color: #acb0cb;
	padding: 2px;
	border-radius: 5px;
}

.cartAddButtonBox:hover {
	background-color: #9ca0b0;
}
</style>
