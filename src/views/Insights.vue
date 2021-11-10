<template>
  <div class="insights" :style="{ marginTop: `-${navbarHeight}px` }">
    <p>Insights Page</p>
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