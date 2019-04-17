import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "../components/main/MainPage";
import ProductList from "../components/product/ProductList";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/product/list', name: 'ProductList', component: ProductList },
  ]
})
