
<template>

<div>
      <div class=" album py-5 bg-light">
        <div class="pt-2 test container">
        <h1 class="mb-3 text-center text-primary">Trending Movies</h1>
          <div class=" row">
      
            <div v-for="item in trendingMovies.results.slice(0, 3)" class="col-md-4">
              <div class="  card mb-4 box-shadow">
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
      </div>







</template>

<script>
export default {
  data() {
    return {
     
      trendingMovies: [],

    };
  },
  created() {
    this.fetchTrendingMovies();
  },
  methods: {
    fetchTrendingMovies(page_url) {
     
       var url = 'https://api.themoviedb.org/3/trending/all/day?api_key=c6c6830bf220e88fe3aa7d26725e4184';
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.trendingMovies=data
                return this.data
            })
        .catch(err => console.log(err));
    },
    
       mounted() {
          this.fetchTrendingMovies()
            console.log('Component Movie-Trending mounted.')
        }

  }
};
</script>


