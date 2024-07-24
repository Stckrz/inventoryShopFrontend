<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { useStore } from 'vuex';
import { OrderItem, ShopItem } from '../../models/shopItemModel';

export default defineComponent({
	name: "QuantityCounter",
	props: {
		shopItem: {
			type: Object as PropType<ShopItem>,
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
			if (quantity.value < props.shopItem.quantity) {
				quantity.value++
			}
		}
		const addItem = () => {
			if (quantity.value > 0) {
				const itemInCart = store.state.orderItems.find((item: OrderItem) => props.shopItem.shopItemId === item.shopItemId)
				if (itemInCart === undefined) {
					const item = {
						shopItemId: props.shopItem.shopItemId,
						shopItemName: props.shopItem.shopItemName,
						shopItemCategory: props.shopItem.shopItemCategory,
						price: props.shopItem.price,
						buyPrice: props.shopItem.buyPrice,
						quantity: props.shopItem.quantity,
						parAmount: props.shopItem.parAmount,
						orderAmount: quantity.value
					}
					store.commit('addOrderItem', item);
				} else {
					store.commit('updateOrderItemQuantity', { id: props.shopItem.shopItemId, newQuantity: quantity.value })
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
			<button @click="addItem" class="addItemButton" button>
				Add
			</button>
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

.addItemButton {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2em;
}
</style>
