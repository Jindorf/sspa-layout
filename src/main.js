import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import { BootstrapVue } from 'bootstrap-vue';

import App from './App.vue';
import store from './store';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    store
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
