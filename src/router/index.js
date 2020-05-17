import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home"),
  },
  {
    path: "/medical-record",
    name: "medicalRecord",
    component: () => import(/* webpackChunkName: "MedicalRecord" */ "../views/MedicalRecord"),
  },
  {
    path: "/operation",
    name: "operation",
    component: () => import(/* webpackChunkName: "Operation" */ "../views/Operation"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
