<template>


  

<div class="fixed-top sidebar-container">
  <div class="sidebar-logo">
    Movie Finder
  </div>
  <ul class="sidebar-navigation">
    <li class="header">Navigation</li>
       <li  v-for="link in links" :key="link.route" link :to="link.route" exact="true">
      <a v-bind:href="link.route">
        <i class="fa fa-info-circle" aria-hidden="true"></i> {{link.text}}
      </a>
    </li>
  
<!-- <li class="header">Trending movies</li> -->
     
    <!-- <li class="fixed-bottom" v-for="item in trendingMovies.results.slice(0, 5)">
    <p  v-if="item.title"  class="ml-3 ">{{item.title}}</p>
<p v-if="!item.title"  class="">Error data missing ! </p>
    </li> -->

  </ul>
        
</div>






</template>





<script>

import MovieFinder from './MovieFinder';

const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';




export default {
 
  data: function() {
    return {
     
      trendingMovies: [],


         links: [
        {        
          text: "Search",
          route: "/"
          
        },
        {   
          text: "Movies Idea",
          route: "/moviesidea"
        },
        {
          text: "Shows Idea",
          route: "/showsidea"
        },
        {
          text: "Top Rated Movies",
          route: "/top-rated-movies"
        },
        {
          text: "Top Rated Shows",
          route: "/top-rated-shows"
        }
      ]

 

    };
  },
  created() {
    this.fetchTrendingMovies();
  },
  methods: {
     

     
        showSearch() {
      this.displaySearch = true;
      this.displayMovieIdea = false;
      this.displayTopRatedMovie = false;
      this.displayShowIdea = false;
      this.displayTopRatedShow = false;
    },
    showMovieIdea() {
      this.displaySearch = false;
      this.displayMovieIdea = true;
      this.displayTopRatedMovie = false;
      this.displayShowIdea = false;
      this.displayTopRatedShow = false;
    },
    showTopRatedMovie() {
       this.displaySearch = false;
      this.displayMovieIdea = false;
      this.displayTopRatedMovie = true;
      this.displayShowIdea = false;
      this.displayTopRatedShow = false;
    },
    showShowIdea() {
      this.displaySearch = false;
      this.displayMovieIdea = false;
      this.displayTopRatedMovie = false;
      this.displayShowIdea = true;
      this.displayTopRatedShow = false;
    },
    showTopRatedShow() {
       this.displaySearch = false;
      this.displayMovieIdea = false;
      this.displayTopRatedMovie = false;
      this.displayShowIdea = false;
      this.displayTopRatedShow = true;
    },

    fetchTrendingMovies(page_url) {
     
       var url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
       
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.trendingMovies=data
                return this.data
            })
        .catch(err => console.log(err));
    },
    
       mounted() {
          this.fetchTrendingMovies()
            console.log('Component Movie-Trending mounted.')
        }

  }
};

</script>