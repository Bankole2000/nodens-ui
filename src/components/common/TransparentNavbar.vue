<template>
  <div class="transparent-navbar">
    <v-app-bar :height="navbarHeight" app absolute color="transparent" flat>
      <div
      :style="{minHeight: `${navbarHeight}px`}"
        style="
          position: relative;
          display: flex;
          ailgn-items: center;
          width: 100%;
        "
        class="py-0"
      >
      <div style="width: 100%; display: flex; align-items: center; z-index: 1;" :style="{height: `${navbarHeight}px`}" class="px-16">
        <v-container style="display: flex; align-items: center;">
          <v-spacer v-if="$vuetify.breakpoint.xs"></v-spacer>
          <v-toolbar-title class="text-h4"><span class="accent--text font-weight-bold">nodens</span><span class="secondary--text font-weight-bold">inc.</span></v-toolbar-title>
          <v-spacer></v-spacer>
        </v-container>
      </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight'
    })
  }
}
</script>

<style>

</style>