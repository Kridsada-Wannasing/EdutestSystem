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
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin-stu",
    name: "AdminStudent",
    component: () => import("../views/AdminStudent.vue"),
  },
  {
    path: "/admin-tch",
    name: "AdminTch",
    component: () => import("../views/AdminTch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
