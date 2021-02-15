import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';

import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';
import {routes} from './routes.js';

export const checkUpdates = new Vue();

Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');