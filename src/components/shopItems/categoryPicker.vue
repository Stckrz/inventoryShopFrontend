<script lang="ts">
import { defineComponent } from 'vue';
import { categories } from '../../models/shopItemModel';
export default defineComponent({
	name: "CategoryPicker",
	setup() {
		return { categories }
	}

})
</script>

<template>
	<div class="buttonBox">
		<div class="categoryButton" v-for="item in categories">
			<RouterLink :to="'/categoryList/' + item">
				{{ item }}
			</RouterLink>
		</div>
	</div>
</template>

<style>
.buttonBox {
	margin: 5px;
	display: flex;
	align-self: center;
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
.categoryButton:hover{
	background-color: #9ca0b0;
}

.categoryButton a {
	color: black;
	text-decoration: none;
}
</style>
