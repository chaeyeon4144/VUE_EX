import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.css"; // CSS 파일이 존재하는지 확인

const app = createApp(App);
app.use(router);
app.mount("#app");

