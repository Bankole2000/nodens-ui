<template>
  <v-app>
    <Navbar />
    <!-- <TransparentNavbar /> -->
    <v-main>
      <transition name="router-anim">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/common/Navbar.vue";
// import TransparentNavbar from './components/common/TransparentNavbar.vue';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    Navbar,
    // TransparentNavbar
  },
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    // console.log({ vuetify: this.$vuetify });
    // gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     id: "products",
    //     trigger: ".products-section",
    //     start: "center 40vh",
    //     pin: true,
    //     scrub: true,
    //     markers: true,
    //     endTrigger: ".end-section",
    //     end: "bottom top",
    //   },
    // });
    // tl.fromTo(".section", { x: 0 }, { x: "-190vw" });
    // console.log({ gsap, ScrollTrigger, triggers: ScrollTrigger.getAll() });
    // gsap.registerPlugin(ScrollTrigger);
    // const animation = gsap.fromTo(".section", { x: 0 }, { x: "-190vw" });
    // ScrollTrigger.create({
    //   trigger: ".products-section",
    //   animation,
    //   start: "top 110px",
    //   pin: true,
    //   scrub: true,
    //   markers: true,
    //   endTrigger: ".end-section",
    //   end: "bottom top",
    // });
  },
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
@media (min-width: 1264px) {
  .container {
    max-width: 1350px;
  }
}
</style>
