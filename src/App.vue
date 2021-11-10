<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/common/Navbar.vue';

export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
