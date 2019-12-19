<template>
<div  class="container">

  <!-- Main title for each page -->
  <h1 class="text-white font-italic mb-3 text-center ">{{pageTitle}}</h1>
    <div class=" row">    
      <div   v-for="movie in movies.results" :key="movie.id" class="col-md-3">
        <div  class="cardEffect  card mb-4 box-shadow">  
          <img class="img-fluid" v-if="movie.poster_path"   v-bind:src="picUrl + movie.poster_path"  v-bind:alt="movie.title">
          <img class="img-fluid"   v-if="!movie.poster_path" src="https://via.placeholder.com/200x300"  v-bind:alt="movie.title">  

          <button type="button" class="btn btn-success" data-toggle="modal" v-bind:data-target="'#exampleModal' + movie.id">
          {{movie.title || movie.original_title || movie.name || movie.original_name || 'Oops...no data' }}
          </button>             
        </div>

    <!-- Movies/Shows Modals -->
      <div class="modal fade show" v-bind:id="'exampleModal'+movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle"> {{movie.title || movie.name}}</h5>
                <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                  </div>
                    <div v-if="movie.vote_average" class="ml-2 mr-2 progress">
                        <div class=" progress-bar bg-success" role="progressbar" v-bind:style="'width:' + movie.vote_average * 10 + '%' " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Rating : {{movie.vote_average * 10}} /100
                        </div>
                    </div>
                  <div class="modal-body">
                    {{movie.overview || 'Oops...no data'}}
                  </div>
                <small class="ml-2">Release date : {{movie.release_date || movie.first_air_date || 'Oops...no data'}}</small>
              <div class="modal-footer">     
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: ["movies", "pageTitle", "picUrl"],
    data() {
      return {};
    }
  };
</script>