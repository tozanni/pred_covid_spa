import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {title: 'Probabilidad RCP'},
  },
  {
    path: "/login",
    name: "login",
    meta: {title: 'Iniciar sesion'},
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {title: 'Registro'},
    component: () => import(/* webpackChunkName: "Registration" */ "../views/Registration"),
  },
  {
    path: "/about",
    name: "about",
    meta: {title: 'Proyecto'},
    component: () => import(/* webpackChunkName: "About" */ "../views/About"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: {title: 'Contacto'},
    component: () => import(/* webpackChunkName: "Contact" */ "../views/Contact"),
  },
  {
    path: "/medical-record",
    name: "medicalRecord",
    meta: {title: 'Expediente'},
    component: () => import(/* webpackChunkName: "MedicalRecord" */ "../views/MedicalRecord"),
  },
  {
    path: "/medical-records-list",
    name: "medicalRecords",
    meta: {title: 'Listado de Pacientes'},
    component: () => import(/* webpackChunkName: "MedicalRecords" */ "../views/MedicalRecordList"),
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
    path: "/records",
    name: "records",
    meta: {title: 'Expedientes'},
    component: () => import(/* webpackChunkName: "Records" */ "../views/Records"),
  },
  {
    path: "/notas-medicas",
    name: "notas",
    meta: {title: 'Notas Medicas'},
    component: () => import(/* webpackChunkName: "Notes" */ "../views/Notes"),
  },
  {
    path: "/probability",
    name: "probability",
    meta: {title: 'Probabilidad RCP'},
    component: () => import(/* webpackChunkName: "Probability" */ "../views/Probability"),
  },
  {
    path: "/non-suspicious",
    name: "non-suspicious",
    meta: {title: 'No Sospechoso'},
    component: () => import(/* webpackChunkName: "NonSuspicious" */ "../views/NonSuspicious"),
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
