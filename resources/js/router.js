import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import ShowIdea from './components/ShowIdea.vue';
import MovieFinder from './components/MovieFinder.vue';
import MovieIdea from './components/MovieIdea.vue';
import TopRatedMovie from './components/TopRatedMovie.vue';
import TopRatedShow from './components/TopRatedShow.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
 
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/search',
      name: 'search',
      component: MovieFinder
    },
    {
      path: '/moviesidea',
      name: 'movieidea',
      component: MovieIdea
    },
    {
      path: '/showsidea',
      name: 'showidea',
      component: ShowIdea
    },
    {
      path: '/top-rated-movies',
      name: 'topratedmovies',
      component: TopRatedMovie
    },
    {
      path: '/top-rated-shows',
      name: 'topratedshows',
      component: TopRatedShow
    }
  ]
})