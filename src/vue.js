import Vue from 'vue';
import App from './App.vue';
import store from './store.js';

import './assets/scss/global.scss';

Vue.config.productionTip = false;

export default new Vue({
    store,
    render: h => h(App),
});
