// import Vue from 'vue'
// import App from './App.vue'

//Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//vue-cli4的导入写法
//vue-cli4的导入写法
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

createApp(App).config.productionTip = false
createApp(App).use(router).use(store).mount("#app")

