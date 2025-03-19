import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ReservationView from "@/views/ReservationView.vue";
import AboutView from "@/views/AboutView.vue";
import ReservationView from "@/views/ReservationView.vue";
const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/reservation", name: "Reservation", component: ReservationView },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
