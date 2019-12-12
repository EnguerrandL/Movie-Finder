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

Vue.component('movie-finder',require('./components/MovieFinder.vue').default);
Vue.component('movie-discover',require('./components/MovieDiscover.vue').default);
Vue.component('movie-upcoming',require('./components/MovieUpcoming.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
  });

const finder = new Vue({
    el: '#movieFinder',
    data:{
        searchKey:'',
        moviesList:[]
    },
    methods:{
        
        searchMovies()
        {   
            
            var url = 'https://api.themoviedb.org/3/search/movie?api_key=c6c6830bf220e88fe3aa7d26725e4184&query=' +this.searchKey;
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesList=data;
            })
        }

    }
});

const discover = new Vue({
    el: '#discoverMovies',
    data:{
       
        moviesDiscover:[],
        
    },
    methods:{
        
        dicoverMovies: function()
        {  
            
            var url = 'https://api.themoviedb.org/3/discover/movie?api_key=c6c6830bf220e88fe3aa7d26725e4184&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesDiscover=data
                return this.data
            })
        },
        mounted () {
            
                this.dicoverMovies()
                console.log('test')
            
          }
          
    }
     
});
