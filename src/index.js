import Button from "./components/button/index.js";
import CountUp from "./components/count-up/index.js";
import ContextMenu from "./components/context-menu/index.js";
import Drawer from "./components/drawer/index.js";
import DirectoryGroup from "./components/directory-group/index.js";
import Directory from "./components/directory/index.js";
import Loading from "./components/loading/index.js";

const components = [
  Button,
  CountUp,
  ContextMenu,
  Drawer,
  DirectoryGroup,
  Directory,
  Loading
];

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  CountUp,
  ContextMenu,
  Drawer,
  DirectoryGroup,
  Directory,
  Loading
};