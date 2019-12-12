
<template>

</template>

<script>
export default {
  props:['movie'],
  data() {
    return {
      moviesUps: [],
    
    
    };
  },
  created() {
    this.fetchMovieUp();
  },
  methods: {
    fetchMovieUp(page_url) {
     
       var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c6c6830bf220e88fe3aa7d26725e4184&language=en-US&page=1';
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesUps=data
                return this.data
            })
        .catch(err => console.log(err));
    },

       mounted() {
          this.fetchMovieUp()
            console.log('Component Movie-Upcoming mounted.')
        }

  }
};
</script>


