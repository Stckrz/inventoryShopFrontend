<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { postOrder, postOrderedItem } from '../../library/api/sentOrderApi.ts';


export default defineComponent({
	name: "ProcessOrder",
	setup() {
		const store = useStore();
		const cartTotal = ref(0);
		const getCartTotal = () => {
			let total = 0;
			for (let i = 0; i < store.state.orderItems.length; i++) {
				total += store.state.orderItems[i].price * store.state.orderItems[i].orderAmount
			}
			return (total)
		}

		const confirmOrder = async () => {
			const sentStatus = await postOrder(cartTotal.value)
			if (sentStatus) {
				for (let i = 0; i < store.state.orderItems.length; i++) {
					const shopItemId = store.state.orderItems[i].shopItemId;
					const receivedOrderId = sentStatus.receivedOrderId;
					const shopItemQuantity = store.state.orderItems[i].orderAmount;
					await postOrderedItem(shopItemId, receivedOrderId, shopItemQuantity)
				}
			}
		}

		onMounted(() => {
			cartTotal.value = getCartTotal()
		})
		return { store, cartTotal, confirmOrder }
	}
})
</script>

<template>
	<div class="orderProcessContainer">
		<div class="itemsTable">
			<table class="cartItemTable">
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
				</tr>
				<tr class="cartItem" v-for="item of store.state.orderItems">
					<td class="cartItemCell">{{ item.shopItemName }}</td>
					<td class="cartItemCell">{{ item.price }}</td>
					<td class="cartItemCell">{{ item.orderAmount }}</td>
					<td class="cartItemCell">{{ item.price * item.orderAmount }}</td>
				</tr>
			</table>
		</div>
		<div class="orderConfirmContainer">
			total: {{ cartTotal }}
			<button @click="confirmOrder">confirm order</button>
		</div>
	</div>
</template>

<style scoped>
.orderProcessContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
