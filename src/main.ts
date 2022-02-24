import {createApp} from 'vue'
import router from "./router"; // 추가
import App from './App.vue'

createApp(App).use(router).mount("#app"); // .use(router) 추가