import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/student",
        name: "AdminStudent",
        component: () => import("../views/AdminStudent.vue"),
      },
      {
        path: "/teacher",
        name: "AdminTch",
        component: () => import("../views/AdminTch.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
