<template>


   
    
        <div  class="container">
        <h1 class="mb-3 text-center text-primary">Shows Ideas</h1>
          <div class=" row">
      
            <div :key="item.id" v-for="item in ideasShow.results" class="col-md-3">
              <div  class="  card mb-4 box-shadow">
               
                <img class="img-fluid" v-if="item.poster_path"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ item.poster_path"  v-bind:alt="item.title">
                <img class="img-fluid"   v-if="!item.poster_path" src="https://via.placeholder.com/200x300"  v-bind:alt="item.title">
                
                   
                  <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#exampleModal' + item.id">
 {{item.name || item.original_name || 'Missing data.... Sorry!'}}
</button>
               
                </div>

<!-- Modal -->
<div class="modal fade show" v-bind:id="'exampleModal'+item.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-info" id="exampleModalLongTitle"> {{item.name || item.original_name || 'Missing data.... Sorry!'}}</h5>
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      
          <span aria-hidden="true">&times;</span>
        </button>
      
      </div>
         <p class="text-success cml-2 text-center">Vote : {{item.vote_average || 'Missing data.... Sorry!'}}/10</p>
      <div class="modal-body">
       {{item.overview || 'Missing data.... Sorry!'}}
      </div>

      <small class="ml-2">Release date : {{item.first_air_date || 'Missing data.... Sorry!'}}</small>
      
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


export default {
  name: 'app',

  data() {
    return {
 
      ideasShow: [],

    };
  },
  created() {
    this.fetchIdeasMovie();
  
  },
  methods: {
    fetchIdeasMovie(page_url) {
     
       var url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.ideasShow=data
               
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