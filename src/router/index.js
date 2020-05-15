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
  /* 404 route, navigate to this if no route is matched */
  {
    path: "*",
    name: "Missing",
    component: Missing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;



/* NOT USING 

import Profile from  "../views/Profile.vue";
import Info from "../views/Info.vue";

  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },*/

  /* dynamic route, can pass parameters into a route 
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
    /* child route needs "<router-view /> " in the vue file 
    children:[
      {
        path:'info',
        name:"Info",
        component: Info
      }
    ]
  },
  ,
  
*/


