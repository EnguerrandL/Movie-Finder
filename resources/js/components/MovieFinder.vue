<template>


        
        
                      
                      
                        
                
           

   <div class=" container">
  <div class="col-md-4 row card mb-4 shadow-sm">
      <img class="img-fluid"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ movie.poster_path"  v-bind:alt="movie.title">
    <div class="card-body">
     <h5 class="card-title">Title : {{movie.original_title}}</h5>
      <p class="card-text">Resume : {{movie.overview}}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">Realase date : {{movie.release_date}}</small>
      </div>
    </div>
  </div>
  </div>

 



</template>

<script>



export default {
  props:['movie'],
    
       mounted() {
          
            console.log('Component Movie-Finder mounted.')
        }

 
};

</script>