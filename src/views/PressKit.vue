<template>
  <div class="presskit-page" :style="{ marginTop: `-${navbarHeight}px` }">
    <h1>Press Kit Page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      navbarHeight: "ui/navbarHeight",
    }),
  },
};
</script>

<style>
</style>