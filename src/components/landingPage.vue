<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: "LandingPage",
	setup() {
	}
})

</script>

<template>
	<div class="homePageContainer">
		<h2>Vue Store Page</h2>
		<div class="listContainer">
			<h4>
				Backend:
				<ul>
					<li>PHP</li>
					<li>MySql</li>
					<li>Apache</li>

				</ul>
			</h4>
			<h4>
				Frontend:
				<ul>
					<li>Typescript</li>
					<li>VueJS(vuex and vue router)</li>
				</ul>
			</h4>
		</div>
		<h5>What it is:
			<p>
			This is the sister site of the inventory management system. This page is for putting together and placing orders for the inventory system.
			</p>
		</h5>
		<h5>Link to sister site:
			<p>
				Here is where you can find the webpage for the inventory system:
			</p>
			<a href="https://stckrz.com/vueFrontend">go</a>
		</h5>
	</div>
</template>

<style scoped>
.homePageContainer {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	padding: 5px;
}

.listContainer {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
}

h4, h5{
	padding: 0;
	margin: 0;
}
</style>
