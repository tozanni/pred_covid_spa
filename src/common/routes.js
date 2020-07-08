import Home from '../views/Home';
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    meta: { title: 'Iniciar sesion' },
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: { title: 'Registro' },
    component: () => import(/* webpackChunkName: "Registration" */ "../views/Registration"),
  },
  {
    path: "/about",
    name: "about",
    meta: { title: 'Proyecto' },
    component: () => import(/* webpackChunkName: "About" */ "../views/About"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: { title: 'Contacto' },
    component: () => import(/* webpackChunkName: "Contact" */ "../views/Contact"),
  },
  {
    path: "/medical-record/:uuid?",
    name: "medicalRecord",
    props: true,
    meta: { title: 'Expediente' },
    component: () => import(/* webpackChunkName: "MedicalRecord" */ "../views/MedicalRecord"),
    children: [
      {
        path: "vitals",
        name: "vitals",
        meta: { title: 'Signos Vitales' },
        component: () => import(/* webpackChunkName: "Vitals" */ "../views/Vitals"),
      },
      {
        path: "triage",
        name: "triage",
        meta: { title: 'Triage' },
        component: () => import(/* webpackChunkName: "Triage" */ "../views/Triage"),
      },
      {
        path: "probability",
        name: "probability",
        meta: { title: 'Probability' },
        component: () => import(/* webpackChunkName: "Probability" */ "../views/Probability"),
      },
    ]
  },
  {
    path: "/medical-records-list",
    name: "medicalRecords",
    meta: { title: 'Listado de Pacientes' },
    component: () => import(/* webpackChunkName: "MedicalRecords" */ "../views/MedicalRecordList"),
  },
  {
    path: "/laboratorios",
    name: "laboratorios",
    meta: { title: 'Laboratorios' },
    component: () => import(/* webpackChunkName: "Laboratorios" */ "../views/Laboratorios"),
  },
  {
    path: "/notas-medicas",
    name: "notas",
    meta: { title: 'Notas Medicas' },
    component: () => import(/* webpackChunkName: "Notes" */ "../views/Notes"),
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound"),
  },
]

export default routes;
