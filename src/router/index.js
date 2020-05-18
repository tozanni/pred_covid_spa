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
    meta: {title: 'Expediente'},
    component: () => import(/* webpackChunkName: "MedicalRecord" */ "../views/MedicalRecord"),
  },
  {
    path: "/vitals",
    name: "vitals",
    component: () => import(/* webpackChunkName: "Vitals" */ "../views/Vitals"),
  },
  {
    path: "/traige",
    name: "triage",
    component: () => import(/* webpackChunkName: "Triage" */ "../views/Triage"),
  },
  {
    path: "/laboratorios",
    name: "laboratorios",
    component: () => import(/* webpackChunkName: "Laboratorios" */ "../views/Laboratorios"),
  },
  {
    path: "/notas-medica",
    name: "notas",
    component: () => import(/* webpackChunkName: "Notes" */ "../views/Notes"),
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
