import Vue from 'vue';
import App from './App';  // eslint-disable-line

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
