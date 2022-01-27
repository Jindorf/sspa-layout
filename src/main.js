import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import { BootstrapVue } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#layout-app',
    render: (h) => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
