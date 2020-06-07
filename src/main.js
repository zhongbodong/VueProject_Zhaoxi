import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import padTitle from "@/components/PadTitle.vue"
import inner from "@/components/Inner.vue"
import banner from "@/components/TopImage.vue"
Vue.component("padTitle",padTitle);
Vue.component("inner",inner);
Vue.component("banner",banner);

Vue.config.productionTip = false
Vue.use(element);
new Vue({
  //el:"#app",
  router,
  render: h => h(App)
}).$mount('#app')
