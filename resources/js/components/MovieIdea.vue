<template>

 <div>
   
    
        <div class=" test container">
        <h1 class="mb-3 text-center text-primary">Movies Ideas</h1>
          <div class=" row">
      
            <div v-for="item in ideasMovies.results.slice(0, 9)" class="col-md-4">
              <div  class="  card mb-4 box-shadow">
                <img class="img-fluid"   v-bind:src="'https://image.tmdb.org/t/p/w200/'+ item.poster_path"  v-bind:alt="item.title">
                <div class="card-body">
                  <h5 class="text-primary">Title : {{item.title}}</h5>
                  <p class="card-text">{{item.overview.slice(0,250)+'...'}}</p>
                  </div>
                     <small class="text-primary ml-2 mb-2 ">Realase date : {{item.release_date}}</small>
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
     
       var url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`;
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