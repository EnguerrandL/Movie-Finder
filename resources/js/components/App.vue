<template>
<div>
  <app-navmenu></app-navmenu>
  <router-view></router-view>
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
