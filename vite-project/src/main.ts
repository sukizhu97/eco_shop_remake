import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import './assets/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
app.provide('axios', axios) // 全局注册axios

app.mount('#app')
