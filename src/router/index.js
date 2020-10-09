import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store/index";
import NProgress from "nprogress";

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
    meta: { requiresAuth: true },
    children: [
      {
        path: "student",
        name: "AdminStudent",
        component: () => import("../views/AdminStudent.vue"),
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          store
            .dispatch("student/getAllStudents")
            .then((students) => {
              routeTo.params.students = students;
              next();
            })
            .catch((error) => error);
        },
      },
      {
        path: "teacher",
        name: "AdminTeacher",
        component: () => import("../views/AdminTeacher.vue"),
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          store
            .dispatch("teacher/getAllTeachers")
            .then((teachers) => {
              routeTo.params.teachers = teachers;
              next();
            })
            .catch((error) => error);
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token_admin");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  }
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
