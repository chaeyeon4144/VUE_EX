import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Cash from "@/views/Cash.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Reservation from "@/views/Reservation.vue";
import Review from "@/views/Review.vue";
import Menu01 from "@/views/Menu01.vue";
import Menu02 from "@/views/Menu02.vue";
import Menu03 from "@/views/Menu03.vue";
import Menu04 from "@/views/Menu04.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/cash", component: Cash },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reservation", component: Reservation },
  { path: "/review", component: Review },
  { path: "/menu01", component: Menu01 },
  { path: "/menu02", component: Menu02 },
  { path: "/menu03", component: Menu03 },
  { path: "/menu04", component: Menu04 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
