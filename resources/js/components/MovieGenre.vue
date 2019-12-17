<template>
<div class=" ml-3 py-5 float-left list-group">
  <a class="list-group-item list-group-item-action active">
  Find movies ideas by genre
  </a>
  <a href="#"    v-for="item in moviesGenre.genres" v-bind:id="item.id" class=" list-group-item list-group-item-action">{{ item.name }}</a>
 

</div>

 
</template>




<script>


const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';


export default {
 
  data() {
    return {
      
      moviesGenre: [],
      id: '',

    };
  },
  created() {
    this.fetchMovieGenre();
    
    
   
  },
  methods: {
    fetchMovieGenre (page_url) {
     
       var url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
     fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesGenre=data
                return this.data
            })
        .catch(err => console.log(err));
    },
  

    
       mounted() {
          this.fetchMovieGenre()
         
            console.log('Component Movie-Genre mounted.')
        }

  }
};

</script>