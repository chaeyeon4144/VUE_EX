import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Event from "@/views/Event.vue";
import Fq from "@/views/Fq.vue";
import Review from "@/views/Review.vue";
import Reservation from "@/views/Reservation.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetail },
  { path: "/about", component: About },
  { path: "/event", component: Event },
  { path: "/fq", component: Fq },
  { path: "/review", component: Review },
  { path: "/reservation", component: Reservation },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
