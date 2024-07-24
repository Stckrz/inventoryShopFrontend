<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getSaleItemCategories } from '../../library/api/storeItemApi';

export default defineComponent({
	name: "CategoryPicker",
	setup() {
		const saleItemCategories = ref<string[] | undefined | { message: string }>([]);
		onMounted(() => {
			getSaleItemCategories().then((data) => {
				if (data)
					saleItemCategories.value = data;
			})
		})
		return { saleItemCategories }
	}
})
</script>

<template>
	<div v-if="saleItemCategories" class="buttonBox">
		<div class="categoryButton" v-for="item in saleItemCategories">
			<RouterLink :to="'/categoryList/' + item">
				{{ item }}
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.buttonBox {
	margin: 5px;
	display: flex;
	align-self: flex-start;
	flex-direction: column;
}

.categoryButton {
	padding: 5px;
	text-align: left;
	background-color: #acb0cb;
	text-wrap: nowrap;
	color: black;
	display: flex;
	flex-grow: 1;
}

.categoryButton:hover {
	background-color: #9ca0b0;
}

.categoryButton a {
	color: black;
	text-decoration: none;
}
</style>
