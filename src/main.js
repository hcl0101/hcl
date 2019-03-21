import Vue from "vue";
import hcl from "./components/index";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/index.scss";
import "./app.scss";

Vue.use(hcl);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
