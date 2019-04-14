import axios from 'axios';
import {eventBus} from '../service/eventbus';

export default {
  install: (Vue, options) => {
    Vue.prototype.$axios = axios;

    axios.defaults.baseURL = eventBus.baseUrl;

    // Add a request interceptor
    axios.interceptors.request.use(config => {
      eventBus.start();
      return config;
    }, error => {
      eventBus.end();
      console.log('Global Request Error Handler: ', error);
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(response => {
      eventBus.end();
      return response;
    }, error => {
      eventBus.end();
      // console.log('Global Response Error Handler: ', error);
      if (error.response && error.response.data) {
        let msg = error.response.data.errorMessage || error.response.data.error;



        setTimeout(() => {eventBus.alert(msg, '错误');}, 300);
      }
      return Promise.reject(error);
    });
  }
};
