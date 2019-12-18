<template>

<div>
  <movie-sidenav></movie-sidenav>
  <router-view></router-view>


</div>
</template>

<script>



const API_KEY = 'c6c6830bf220e88fe3aa7d26725e4184';


import SideNav from './SideNav';


export default {
 name: 'App',
 components: {
      sideNav: SideNav,
     
    },
};

</script>