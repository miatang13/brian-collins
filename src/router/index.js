import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Missing from "../views/Missing.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () =>
     import("../views/Timeline.vue")
  },
  {
    path: "/work",
    name: "Work",
    component: () =>
     import("../views/Work.vue")
  },
  {
    path: "/designhero",
    name: "DesignHero",
    component: () =>
     import("../views/MyWork.vue")
  },
  {
    path: "/extraImages",
    name: "ExtraImages",
    component: () =>
     import ("../views/ExtraImages.vue")
  },
  /* 404 route, navigate to this if no route is matched */
  {
    path: "*",
    name: "Missing",
    component: Missing
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;





