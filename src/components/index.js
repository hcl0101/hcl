import Button from "./button/index.js";
import Drawer from "./drawer/index.js";
import ContextMenu from "./context-menu/index.js";
import Directory from "./directory/index.js";

const components = [
  Button,
  Drawer,
  ContextMenu,
  Directory
];

components.install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default components;
