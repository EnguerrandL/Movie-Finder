<template>

    <div  class="col-12 container">
  
      
         <nav   class="mt-5 mx-auto col-6 navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Movie Finder</a>
 

    <input   class=" form-control form-control-dark w-100"   v-model="searchKey" type="text" placeholder="Search a movie" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li   class=" nav-item text-nowrap">
      <button  v-on:click="searchMovies " class="container btn-success">Search</button>
      </li>
    </ul>

  </nav>
   
    
      
    


       


<div  class="container">
       
  
        <div class="mx-auto mt-3 row">
  



<div class=" row">
  
    
  <div class="col-md-3" :key="finder.id" v-for="finder in moviesFinded.results" >

  

  <div  class="card mb-4 box-shadow">
    
      <img class="img-fluid"   v-if="finder.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w200/'+ finder.poster_path"  v-bind:alt="finder.title">
      <img class="img-fluid"   v-if="!finder.poster_path" src="https://via.placeholder.com/200x300"  v-bind:alt="finder.title">
                      <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#exampleModal' + finder.id">
 {{finder.title}}
</button>

 </div>

<!-- Modal -->
<div class="modal fade show" v-bind:id="'exampleModal'+finder.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="text-info modal-title" id="exampleModalLongTitle"> {{finder.title || finder.original_title || 'Missing data.... Sorry!'}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <p class="text-success cml-2 text-center">Vote : {{finder.vote_average  || 'Missing data.... Sorry!'}}/10</p>
      <div  v-if="finder.overview" class="modal-body">
       {{finder.overview || 'Missing data.... Sorry!'}}
      </div>
        <small class="ml-2">Release date : {{finder.release_date || 'Missing data.... Sorry!'}}</small>
   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  
    </div>
    </div>
    </div>
    </div>
    </div>








 



</template>

<script>

import SideNav from './SideNav';
import AppTemplate from './AppTemplate'

const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';


export default {
  name: 'app',

  components: {
    SideNav,
  },

  data() {
    return {
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