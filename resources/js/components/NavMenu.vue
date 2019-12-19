<template>

    <nav   class="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
        <a v-for="link in links" :key="link.route" id="aLinksHover"   class=" navbar-brand" v-bind:href="link.route">{{link.text}}</a>
    </nav>

</template>


<script>

export default {
 
  data: function() {
    return {
      drawer: false,
         links: [
        {        
          text: "Search",
          route: "/search"
          
        },
        {   
          text: "Movies Idea",
          route: "/moviesidea"
        },
        {
          text: "Shows Idea",
          route: "/showsidea"
        },
        {
          text: "Top Rated Movies",
          route: "/top-rated-movies"
        },
        {
          text: "Top Rated Shows",
          route: "/top-rated-shows"
        }
      ]

    };
  },
 
};

</script>