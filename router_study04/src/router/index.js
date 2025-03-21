import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Review from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/payment", component: Payment },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/review", component: Review },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
