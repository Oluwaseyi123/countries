import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/global.css";
import "./assets/global.scss";
createApp(App).use(store).use(router).mount("#app");
