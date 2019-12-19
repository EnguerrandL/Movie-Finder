<template>
<!-- Input finder used for searching movies... -->
  <div  class="col-12 container">   
    <nav   class="mt-3 mx-auto col-6 navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Movie Finder</a>
        <input   class=" form-control form-control-dark w-100"   v-model="searchKey" type="text" placeholder="Search a movie" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li   class=" nav-item text-nowrap">
          <button  v-on:click="searchMovies" class="container btn-success">Search</button>
        </li>
      </ul>
    </nav>

          <template-app :pageTitle="pageTitle" :movies="moviesFinded" :picUrl="picUrl"></template-app> 
            
  </div>
</template>

<script>
import AppTemplate from './AppTemplate'
const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';

export default {
  name: 'app',
  components: {
    appTemplate: AppTemplate, 
  },

  data() {
    return {
      pageTitle: "",
      picUrl: 'https://image.tmdb.org/t/p/w200/',
      searchKey:'',
      moviesFinded:[],
    };
  },
  created() {
    this.searchMovies();
    
  },
  methods: {
    searchMovies (page_url) { 
     var url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` +this.searchKey;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{     
                this.moviesFinded=data
            })     
        .catch(err => console.log(err));
    },
       mounted() {    
            console.log('Component Movie-finded mounted.')
        }
  }
};
</script>