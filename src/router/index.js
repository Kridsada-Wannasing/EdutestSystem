import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Home",
    component: Home,
    children: [
      {
        path: "student",
        name: "AdminStudent",
        component: () => import("../views/AdminStudent.vue"),
        props: true,
        // beforeEnter(routeTo, routeFrom, next) {
        //   store
        //     .dispatch("admin/getStudents")
        //     .then((students) => {
        //       routeTo.params.students = students;
        //       next();
        //     })
        //     .catch((error) => error);
        // },
      },
      {
        path: "teacher",
        name: "AdminTeacher",
        component: () => import("../views/AdminTeacher.vue"),
        props: true,
        // beforeEnter(routeTo, routeFrom, next) {
        //   store
        //     .dispatch("admin/getTeachers")
        //     .then((teachers) => {
        //       routeTo.params.teachers = teachers;
        //       next();
        //     })
        //     .catch((error) => error);
        // },
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
