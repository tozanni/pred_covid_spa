import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../common/routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.anonymous) && store.getters["security/isAnonymous"]) {
    // this route allows anonymous users
      next();
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters["security/isAuthenticated"] && !store.getters["security/isAnonymous"]) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    }
  } else if (
    to.name == "medicalRecord" &&
    !store.getters["security/isAuthenticated"]
  ) {
    // User wants to create a record but is not authenticated
    // login as anonymous
    store.dispatch("security/loginAsAnonymous");
    next();
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
