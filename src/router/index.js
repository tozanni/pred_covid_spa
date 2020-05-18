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
    meta: {title: 'Signos Vitales'},
    component: () => import(/* webpackChunkName: "Vitals" */ "../views/Vitals"),
  },
  {
    path: "/traige",
    name: "triage",
    meta: {title: 'Triage'},
    component: () => import(/* webpackChunkName: "Triage" */ "../views/Triage"),
  },
  {
    path: "/laboratorios",
    name: "laboratorios",
    meta: {title: 'Laboratorios'},
    component: () => import(/* webpackChunkName: "Laboratorios" */ "../views/Laboratorios"),
  },
  {
    path: "/notas-medica",
    name: "notas",
    meta: {title: 'Notas Medicas'},
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
