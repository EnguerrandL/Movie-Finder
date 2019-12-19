<template>

      <template-app :pageTitle="pageTitle" :movies="topRatedMovies" :picUrl="picUrl"></template-app>

</template>


<script>

const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';
import AppTemplate from './AppTemplate';

export default {
  components: {
    appTemplate: AppTemplate, 
  },
  data() {
    return {
       pageTitle: "Top Rated Movies",
      picUrl: 'https://image.tmdb.org/t/p/w200/',
      topRatedMovies: [],

    };
  },
  created() {
    this.fetchIdeasMovie();
  
  },
  methods: {
    fetchIdeasMovie(page_url) {
     
       var url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.topRatedMovies=data
               
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