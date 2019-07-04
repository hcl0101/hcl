import Button from "./button/index.js";
import CountUp from "./count-up/index.js";
import ContextMenu from "./context-menu/index.js";
import Drawer from "./drawer/index.js";
import DirectoryGroup from "./directory-group/index.js";
import Directory from "./directory/index.js";
import Loading from "./loading/index.js";

const components = [
  Button,
  CountUp,
  ContextMenu,
  Drawer,
  DirectoryGroup,
  Directory,
  Loading
];

components.install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default components;
