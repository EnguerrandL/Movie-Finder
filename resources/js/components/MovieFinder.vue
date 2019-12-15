<template>


        
  
                      
                      
                        
                
        <div>   
               <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Movie Finder</a>
 

    <input   class=" form-control form-control-dark w-100"   v-model="searchKey" type="text" placeholder="Search a movie" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li   class=" nav-item text-nowrap">
      <button  v-on:click="searchMovies" class="container btn-success">Search</button>
      </li>
    </ul>

  </nav>

    <div class="mt-3 container">
      
          <div class="row">

  <div class="col-md-3"  v-for="finder in moviesFinded.results" >
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
        <h5 class="modal-title" id="exampleModalLongTitle"> {{finder.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       {{finder.overview}}
      </div>
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








 



</template>

<script>



const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';


export default {
   props:['movie'],
  data() {
    return {

      searchKey:'',
      moviesFinded:[],

    };
  },
  created() {
    
    
   
  },
  methods: {
    searchMovies (page_url) {
     
       var url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` +this.searchKey;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesFinded=data
                return this.data
            })
            
        .catch(err => console.log(err));
    },

    
       mounted() {
         
         
            console.log('Component Movie-finded mounted.')
        }

  }
};

</script>