import Vue from 'vue'
import App from './App.vue'

import "./config/toasted";
import "./config/axios";
import vuetify from "./config/vuetify";

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
