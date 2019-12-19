<template>

    <template-app :pageTitle="pageTitle" :movies="ideasShow" :picUrl="picUrl"></template-app>

</template>



<script>
import AppTemplate from './AppTemplate';
const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';

export default {
  name: 'app',

  components: {
    appTemplate: AppTemplate, 
  },

  data() {
    return {
      pageTitle: "Top Rated Shows",
      picUrl: 'https://image.tmdb.org/t/p/w200/',
      ideasShow: [],
    };
  },
  created() {
    this.fetchIdeasMovie();
  
  },
  methods: {
    fetchIdeasMovie(page_url) {
     
       var url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`+  "&language=en-US&page=" + this.page;
    fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.ideasShow=data
                
                return this.data
                
            })
        .catch(err => console.log(err))

    
        
    },
       watch: {
      page: function(page) {
        this.fetchIdeasMovie();
      }
    },
    
    mounted() { 
          this.fetchIdeasMovie()
            console.log('Component Movie-Idea mounted.')
        }
  }
};
</script>