import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
// import VueCompositionAPI from '@vue/composition-api';
import vuetify from '@/plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@/plugins/composition-api';

// Vue.use(VueCompositionAPI); // 順番はとても大事
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
