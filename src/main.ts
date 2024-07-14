import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import LandingPage from './components/landingPage.vue';
import CategoryPicker from './components/shopItems/categoryPicker.vue';
import CategoryList from './components/shopItems/categoryItemList.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: LandingPage },
		{ path: "/categories", component: CategoryPicker },
		{ path: "/categoryList", component: CategoryList },
		{ path: "/categoryList/:category", name: "categoryList", component: CategoryList },
	]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
