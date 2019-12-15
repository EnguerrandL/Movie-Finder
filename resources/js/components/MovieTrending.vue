
<template>

<div class="col-2  ml-3 py-5 float-right">
      
        
        <h5 class=" text-center text-primary">Trending Movies</h5>
         
      <ul class=" list-group list-group-flush">
            <div v-for="item in trendingMovies.results.slice(0, 5)" class="list-group-item ">
          
  <a  href="item."  class="list-group-item list-group-item-action list-group-item-primary">{{item.title}}</a>


              </div>
              </ul>
        
         
        
        
      </div>







</template>

<script>

const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';

export default {
  props:['movie'],
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
     
       var url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
       
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


