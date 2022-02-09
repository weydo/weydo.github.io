import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource'

Vue.use(ElementUI,VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});

// Vue.config.productionTip = false

// App.mpType = 'app'

// // 引入全局uView
// import uView from 'uview-ui'
// Vue.use(uView);
// const app = new Vue({
//     ...App
// })
// import httpInterceptor from '@/common/http.interceptor.js';
// Vue.use(httpInterceptor, app);
// app.$mount()