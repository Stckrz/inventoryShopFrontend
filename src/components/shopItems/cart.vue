<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
	name: "Cart",
	emits: ['toggle-cart'],
	setup(_, { emit }) {
		const store = useStore();
		const cartTotal = ref(0);
		const getCartTotal = () => {
			let total = 0;
			for (let i = 0; i < store.state.orderItems.length; i++) {
				total += store.state.orderItems[i].price * store.state.orderItems[i].orderAmount
			}
			return (total)
		}
		const emitToggleCart = (event: MouseEvent): void => {
			emit('toggle-cart', event)
		}

		onMounted(() => {
			cartTotal.value = getCartTotal();
		})
		return { store, cartTotal, emitToggleCart }
	}
})
</script>

<template>
	<div class="cartView">
		<div class="cartItemTableContainer">
			<button class="cartCloseButton" @click="emitToggleCart">X</button>
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
		<div class="totalBox">
			total: {{ cartTotal }}
			<RouterLink class="navItem" to="/processOrder">
				<div @click="emitToggleCart" class="orderProcessButton">
					Process

				</div>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.cartView {
	background-color: #737994;
	position: absolute;
	right: 0;
	top: 7%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 30%;
	height: 92%;
}

.cartItemTable {
	border: none;
}

th {
	border: none;
}

.cartItemTableContainer {
	max-height: 90%;
	overflow: auto;
}

.cartCloseButton {
	padding: 4px;
	background-color: #acb0aa;
	width: 10%;
}

.totalBox {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	height: 10%;
	width: 100%;
}

.orderProcessButton {
	cursor: pointer;
	padding: 5px;
	background-color: #acb0aa;
	border-radius: 10px;
}

.cartItem {
	border: none;
}

.cartItemCell {
	border: none;
}
</style>
