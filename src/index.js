import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'

axios.defaults.baseURL = 'https://ky1xvy1aa1.execute-api.ap-northeast-1.amazonaws.com'

Vue.use(VueAxios, axios)

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
