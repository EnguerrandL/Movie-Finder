<template>

<div>

<movie-finder></movie-finder>
<movie-idea></movie-idea>


</div>
</template>

<script>



const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';

import ShowIdea from './ShowIdea';
import SideNav from './SideNav';
import MovieFinder from './MovieFinder';

export default {
 name: 'App',
 components: {
      sideNav: SideNav,
     
    },
};

</script>