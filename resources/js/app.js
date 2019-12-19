/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('template-app',require('./components/AppTemplate.vue').default);
Vue.component('movie-app',require('./components/App.vue').default);
Vue.component('home-app',require('./components/Home.vue').default);
Vue.component('app-navmenu',require('./components/NavMenu.vue').default);
Vue.component('movie-idea',require('./components/MovieIdea.vue').default);
Vue.component('showidea-app',require('./components/ShowIdea.vue').default);
Vue.component('movie-finder',require('./components/MovieFinder.vue').default);

// Vue.component('movie-trending',require('./components/MovieTrending.vue').default);
// Vue.component('movie-genre',require('./components/MovieGenre.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './components/App.vue';
import router from './router';

const app = new Vue({
   
    render: h => h(App),
    router: router,
  }).$mount('#app');
