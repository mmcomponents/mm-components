import Vue from 'vue';
import Components from './components';
import App from './App.vue';

Vue.config.productionTip = false;
Object.values(Components).forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  render: h => h(App),
}).$mount('#app');
