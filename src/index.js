import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  render:(h)=>h(App)
})