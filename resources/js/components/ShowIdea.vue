<template>


<template-app></template-app>


</template>

<script>



const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';


export default {
 

  data() {
    return {
 
      movies: [],

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