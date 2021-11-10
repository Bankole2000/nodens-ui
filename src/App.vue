<template>
  <v-app>
    <!-- <Navbar v-if="$route.name != 'page.home'" /> -->
    <TransparentNavbar />
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
// import Navbar from './components/common/Navbar.vue';
import TransparentNavbar from './components/common/TransparentNavbar.vue';

export default {
  components: { 
    // Navbar, 
    TransparentNavbar 
    },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
