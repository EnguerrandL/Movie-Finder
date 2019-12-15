<template>

 <div>
   
    
        <div class=" test container">
        <h1 class="mb-3 text-center text-primary">Movies Ideas</h1>
          <div class=" row">
      
            <div v-for="item in ideasMovies.results.slice(4, 16)" class="col-md-3">
              <div  class="  card mb-4 box-shadow">
               
                <img class="img-fluid"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ item.poster_path"  v-bind:alt="item.title">
                
                   
                  <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="'#exampleModal' + item.id">
 {{item.title}}
</button>
               
                </div>

<!-- Modal -->
<div class="modal fade show" v-bind:id="'exampleModal'+item.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> {{item.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       {{item.overview}}
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
  props:['movie', 'results'],
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
     
       var url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=true&page=1`;
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