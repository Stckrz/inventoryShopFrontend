import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import LandingPage from './components/landingPage.vue';
import CategoryPicker from './components/shopItems/categoryPicker.vue';
import CategoryList from './components/shopItems/categoryItemList.vue';
import ProcessOrder from './components/shopItems/processOrder.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: LandingPage },
		{ path: "/categories", component: CategoryPicker },
		{ path: "/categoryList", component: CategoryList },
		{ path: "/categoryList/:category", name: "categoryList", component: CategoryList },
		{ path: "/processOrder", component: ProcessOrder },
	]
});
const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
