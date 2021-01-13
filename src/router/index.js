import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Missing from "../views/Missing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import("../views/Timeline.vue"),
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
  },
  {
    path: "/designhero",
    name: "DesignHero",
    component: () => import("../views/MyWork.vue"),
  },
  /* 404 route, navigate to this if no route is matched */
  {
    path: "*",
    name: "Missing",
    component: Missing,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
