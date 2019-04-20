import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "../components/main/MainPage";
import About from "../components/about/About";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/about', name: 'About', component: About },
  ]
})
