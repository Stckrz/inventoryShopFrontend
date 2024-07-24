<script lang="ts">
import categoryPicker from './components/shopItems/categoryPicker.vue';
import { defineComponent, ref } from 'vue';
import Cart from './components/shopItems/cart.vue'
export default defineComponent({
	name: "App",
	components: {
		categoryPicker,
		Cart
	},
	methods: {

	},
	setup() {
		const cartOpen = ref(false);
		const toggleCart = (_event: MouseEvent): void => {
			cartOpen.value = !cartOpen.value
		}
		return { toggleCart, cartOpen }
	}
})
</script>

<template>
	<nav class="navbar">
		<RouterLink class="navItem" to="/">Home</RouterLink>
		<div @click="toggleCart" class="navItem navCart">Cart</div>
	</nav>

	<div class="appContainer">
		<categoryPicker />
		<div class="contentsContainer">
			<RouterView></RouterView>
		</div>
		<div v-if="cartOpen">
			<Cart @toggle-cart="toggleCart" />
		</div>
	</div>
</template>

<style scoped>
.appContainer {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	display: flex;
	width: 98%;
}

.navbar {
	width: 100vw;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: #737994;
	user-select: none;
}

.navItem {
	padding-left: 5px;
	padding-right: 5px;
	display: flex;
	height: 90%;
	align-items: center;
	color: white;
	border-right: 1px solid black;
	cursor: pointer;
}

.navCart {
	display: flex;
}

.contentsContainer {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-grow: 1;
}
</style>
