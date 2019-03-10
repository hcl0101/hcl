import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/button",
          name: "button",
          component: () => import("./views/button/Button.vue")
        }, {
          path: "/drawer",
          name: "drawer",
          component: () => import("./views/drawer/Drawer.vue")
        }, {
          path: "/directory",
          name: "directory",
          component: () => import("./views/directory/Directory.vue")
        },
      ]
    }
  ]
});
