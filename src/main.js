import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Antd)
export const eventBus = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')
