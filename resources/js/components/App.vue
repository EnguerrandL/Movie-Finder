<template>

<div>

  <app-navmenu></app-navmenu>
  <transition  enter-active-class="animated fadeInDown" name="fade">
  <router-view></router-view>
  </transition>

</div>
</template>

<script>


import NavMenu from './NavMenu';


export default {
 name: 'App',
 components: {
      navMenu: NavMenu,
     
    },
};

</script>
