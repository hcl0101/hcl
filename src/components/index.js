import Button from "./button/index.js";
import Drawer from "./drawer/index.js";

const components = [
  Button,
  Drawer
];

components.install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default components;
