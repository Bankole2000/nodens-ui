<template>
  <div class="navbar">
    <v-app-bar
      :height="navbarHeight"
      elevate-on-scroll
      app
      color="transparent"
      class="py-0 ma-0"
    >
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
        <div
          style="
            position: absolute;
            left: 0;
            background-color: rgba(255, 255, 255, 0.5);
            top: 0;
           
            width: 100%;
            backdrop-filter: blur(5px);
          "
          :style="{minHeight: `${navbarHeight}px`}"
        ></div>

        <div style="width: 100%; display: flex; align-items: center; z-index: 1;" :style="{height: `${navbarHeight}px`}" class="px-16">
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <v-container style="display: flex; align-items: center;">
          <v-toolbar-title class="text-h4"><span class="primary--text text--darken-4 font-weight-bold">nodens</span><span class="accent--text font-weight-bold">inc.</span></v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn v-for="(route, i) in navRoutes" exact-active-class="accent--text" exact-path :to="{name: route.route}" text class="text-capitalize mx-2" :key="i">
            {{route.title}}
          </v-btn>
          <!-- <v-spacer></v-spacer> -->
          </v-container>
          <!-- <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return { 
      navRoutes: [
        { title: 'Timeline', route: 'pages.home'},
        { title: 'Investors', route: 'pages.investors'},
        { title: 'Products', route: 'pages.products'},
        { title: 'Insights', route: 'pages.insights'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight'
    })
  }
};
</script>

<style>
.v-toolbar__content {
  padding: 0px !important;
}
</style>