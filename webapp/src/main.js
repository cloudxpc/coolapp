// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {eventBus} from './service/eventbus';
import AxiosConfig from './config/axios.config';
import GlobalConfig from './config/global.config';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAssistiveListeningSystems);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(AxiosConfig);
Vue.use(GlobalConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
