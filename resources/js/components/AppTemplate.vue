<template>

        <div  class="container">
        <h1 class="mb-3 text-center text-primary">Movies Ideas</h1>
          <div class=" row">
      
            <div   v-for="movie in movies" :key="movie.id" class="col-md-3">
              <div  class="  card mb-4 box-shadow">
               
                <img class="img-fluid" v-if="movie.poster_path"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ movie.poster_path"  v-bind:alt="movie.title">
                <img class="img-fluid"   v-if="!movie.poster_path" src="https://via.placeholder.com/200x300"  v-bind:alt="movie.title">
                
                   
                  <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#exampleModal' + movie.id">
 {{movie.title}}
</button>
               
                </div>

<!-- Modal -->
<div class="modal fade show" v-bind:id="'exampleModal'+movie.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> {{movie.title || movie.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       {{movie.overview}}
      </div>
      <div class="modal-footer">
        <small>{{movie.release_date}}</small>
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
  export default {
    props: ["movies"],
    data() {
      return {};
    }
  };
</script>