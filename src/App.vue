<template>
  <v-app>
    <Navbar />
    <!-- <TransparentNavbar /> -->
    <v-main>
      <transition name="router-anim">
        <router-view/>
      </transition>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/common/Navbar.vue';
// import TransparentNavbar from './components/common/TransparentNavbar.vue';

export default {
  components: { 
    Navbar, 
    // TransparentNavbar 
    },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

.router-anim-y-enter-active {
  animation: comingY 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-y-leave-active {
  animation: goingY 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes goingY {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
}

@keyframes comingY {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

*::-webkit-scrollbar {
  width: 0px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #28282833;
  border-radius: 10px;
  border: transparent;
}
</style>
