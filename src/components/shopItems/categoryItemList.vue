<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getStoreItemsByCategory } from '../../library/api/storeItemApi.ts';
import { ShopItem } from '../../models/shopItemModel';
export default defineComponent({
	name: "CategoryList",
	setup() {
		const route = useRoute();
		const category = route.params.category;
		const itemArray = ref<ShopItem[]>([])

		onMounted(() => {
			getStoreItemsByCategory(category).then((data) => {
				itemArray.value = data;
			})
		})

		watch(() => route.params.category, (category) => {
			getStoreItemsByCategory(category).then((data) => {
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
			</tr>
			<tr v-for="item in itemArray" :key="item.shopItemId">
				<td>{{ item.shopItemName }}</td>
				<td>{{ item.price }}</td>
				<td>{{ item.quantity }}</td>
			</tr>
		</table>
	</div>
</template>

<style>
.categoryListContainer {
	display: flex;
	flex-direction: column;
}
</style>
