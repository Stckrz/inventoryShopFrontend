<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getStoreItemsByCategory } from '../../library/api/storeItemApi.ts';
import { ShopItem } from '../../models/shopItemModel';
import QuantityCounter from '../../components/shopItems/quantityCounter.vue';

export default defineComponent({
	name: "CategoryList",
	components: {
		QuantityCounter
	},
	setup() {
		const route = useRoute();
		const category = ref(route.params.category);
		const itemArray = ref<ShopItem[]>([])

		onMounted(() => {
			getStoreItemsByCategory(category.value).then((data) => {
				itemArray.value = data;
			})
		})

		watch(() => route.params.category, (newcategory) => {
			getStoreItemsByCategory(newcategory).then((data) => {
				category.value = newcategory
				itemArray.value = data;
			});
		});
		return { itemArray, category }
	}
})
</script>

<template>
	<div class="categoryListContainer">
		<h1 class="categoryHeader">{{ category }}</h1>
		<table>
			<tr>
				<th>Name</th>
				<th>Inventory</th>
				<th>Price</th>
				<th>Order</th>
			</tr>
			<tr v-for="item in itemArray" :key="item.shopItemId">
				<td>{{ item.shopItemName }}</td>
				<td>{{ item.quantity }}</td>
				<td>{{ item.price }}</td>
				<td class="orderCell">
					<QuantityCounter :orderItem="item" />
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
.categoryListContainer {
	display: flex;
	flex-direction: column;
}

.orderCell {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	width: 100%;
}
</style>
