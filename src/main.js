import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const Vuetify = createVuetify({
  components,
  directives,
});

//custom directive

const gapDirective = {
  beforeMount(el, binding) {
    el.style.gap = binding.value;
  },
  updated(el, binding) {
    el.style.gap = binding.value;
  },
};
const widthDirective = {
  beforeMount(el, binding) {
    el.style.width = binding.value;
  },
  updated(el, binding) {
    el.style.width = binding.value;
  },
};

createApp(App)
  .use(Vuetify)
  .directive("gap", gapDirective)
  .directive("width", widthDirective)
  .use(router)
  .mount("#app");
