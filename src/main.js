window.$ = window.jQuery = require('jquery');

window.Tether = require('tether');
window.Popper = require('popper.js');

import Vue from 'vue'
import App from './App.vue'

// CSS Carousel file
import 'vueperslides/dist/vueperslides.css'

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
