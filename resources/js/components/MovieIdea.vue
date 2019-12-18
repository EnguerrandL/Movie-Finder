<template>


   
    
        <div  class="container">
        <h1 class="mb-3 text-center text-primary">Movies Ideas</h1>
          <div class=" row">
      
            <div :key="item.id" v-for="item in ideasMovies.results" class="col-md-3">
              <div  class="  card mb-4 box-shadow">
               
                <img class="img-fluid" v-if="item.poster_path"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ item.poster_path"  v-bind:alt="item.title">
                <img class="img-fluid"   v-if="!item.poster_path" src="https://via.placeholder.com/200x300"  v-bind:alt="item.title">
                
                   
                  <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#exampleModal' + item.id">
 {{item.title}}
</button>
               
                </div>

<!-- Modal -->
<div class="modal fade show" v-bind:id="'exampleModal'+item.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5   class="modal-title text-info" id="exampleModalLongTitle"> {{item.title || item.original_title || 'Oops, missing data.... Sorry!'}}</h5>
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      
      </div>
    <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" v-bind:style="'width:' + item.vote_average * 10 + '%' " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Rating : {{item.vote_average * 10}} /100</div>
</div>

      <div class="modal-body">
       {{item.overview || 'Oops, missing data.... Sorry!'}}
      </div>

      <small class="ml-2">Release date : {{item.release_date || 'Oops, missing data.... Sorry!'}}</small>
      
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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

import MovieFinder from './MovieFinder';

export default {

  data() {
    return {
 
      ideasMovies: [],

    };
  },
  created() {
    this.fetchIdeasMovie();
  
  },
  methods: {
    fetchIdeasMovie(page_url) {
     
       var url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.ideasMovies=data
               
                return this.data
                
            })
        .catch(err => console.log(err));
    },


    
       mounted() {
          
          this.fetchIdeasMovie()
            console.log('Component Movie-Idea mounted.')
        }

  }



};

</script>