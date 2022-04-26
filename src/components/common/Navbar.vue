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
            background-color: #FAF6F817;
            top: 0;
           
            width: 100%;
            backdrop-filter: blur(5px);
          "
          :style="{minHeight: `${navbarHeight}px`}"
        ></div>

        <div style="width: 100%; display: flex; align-items: center; z-index: 1;" :style="{height: `${navbarHeight}px`}" class="px-16 py-10">
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <v-container style="display: flex; align-items: center;">
          <v-toolbar-title class="text-h4"><span class="black--text text--darken-4 font-weight-bold">nodens</span><span class="black--text font-weight-bold">inc.</span></v-toolbar-title>
          <v-spacer></v-spacer>

            <div style="position: relative" v-for="(route, i) in navRoutes" :key="i">
          <router-link :style="$route.name.includes(route.route)? styles.linkTextActive: styles.linkText"  exact-active-class="active-link" exact-path :to="{name: route.route}" text class="text-capitalize mx-8" >

            {{route.title}}
          </router-link>
            </div>
          <v-spacer></v-spacer>
          <v-btn class="primary" style="border-radius: 8px;" large depressed><p style="color: white; font-weight: 600;" class="mb-0">Schedule A meeting</p></v-btn>
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
        { title: 'Home', route: 'pages.home'},
        { title: 'Partnerships', route: 'pages.partnerships'},
        { title: 'Company', route: 'pages.company'},
        { title: 'Press Kit', route: 'pages.press-kit'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight'
    }), 
    styles(){
      let styles = {
        linkText: {
          textDecoration: 'none',
          fontSize: '16px', 
          lineHeight: '19px',
          color: '#6E7177'
        }, 
        linkTextActive: {
          textDecoration: 'none',

          fontSize: '16px', 
          lineHeight: '19px',
          color: '#101010',
        }
      }
      return styles
    }
  }
};
</script>

<style>
.v-toolbar__content {
  padding: 0px !important;
}

.active-link::after {
  content: '';
  background-color: #101010;
  /* margin-bottom: 15px;
  margin-top: -33px; */
  display: inline-block;
  position: absolute;
  bottom: -10%;
  left: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
</style>