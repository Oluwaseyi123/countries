import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/country/:id",
    props:true, 
    name: "Country",
    component: () =>
      import( "../views/CountryDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
