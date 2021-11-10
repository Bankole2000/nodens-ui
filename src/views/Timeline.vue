<template>
  <div class="timeline-page" :style="{ marginTop: `-${navbarHeight}px` }">
    <div style="min-height: 95vh; position: relative; display: flex">
      <v-spacer></v-spacer>
      <div style="width: 70%">
        <v-carousel
          height="95vh"
          v-model="slide"
          :show-arrows="false"
          hide-delimiters
        >
          <v-carousel-item v-for="(image, i) in headerImages" :key="i">
            <v-img height="95vh" :src="require(`@/assets/imgs/${image}`)" >
            <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div style="position: absolute; bottom: 0; left: 100px">
        <v-card width="45vw" class="pa-16" tile elevation="0" height="75vh">
          <p class="display-3 font-weight-bold pr-8" style="line-height: 5rem">
            Creating a Future that is accessible and connected.
          </p>
          <v-divider class="my-12"></v-divider>
          <div class="d-flex align-center">
            <p class="mb-0 pr-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              assumenda iste rerum repellat dolores ad facere cum magni.
            </p>
            <div
              class="d-flex align-center justify-center primary grow"
              style="height: 80px; width: 80px"
            >
              <v-icon color="white">mdi-arrow-right</v-icon>
            </div>
          </div>
          <div style="display: flex; align-items: center" class="my-6">
            <div
              style="width: 50px; height: 5px; cursor: pointer"
              class="mr-4"
              v-for="i in headerImages.length"
              :key="i"
              @click="slide = i - 1"
              :class="i - 1 == slide ? 'primary' : 'grey lighten-2'"
            ></div>
          </div>
        </v-card>
      </div>
    </div>
    <div class="grey lighten-3 py-8">
      <v-container>
        <v-row>
          <v-col cols="12">
            <p class="font-weight-bold text-h4 grey--text">
              Trusted by Global Investors
            </p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="1"></v-col>
          <v-col cols="12" sm="2" v-for="(image, i) in investorLogos" :key="i">
            <v-img :src="require(`@/assets/imgs/logos/${image}`)" />
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container>
      
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="display-4 mt-16 font-weight-regular" style="line-height: 7rem;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus corporis.</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="4" v-for="i in 3" :key="i">
          <div class="d-flex align-center">
            <p class="display-3 font-weight-thin">$5.8M</p>
            <p class="headline ml-4">
              Credit & Insurance
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <p class="font-weight-bold display-3 text-center">Our Products</p>
        </v-col>
      </v-row>
      <v-row class="my-8">
        <v-col cols="3" v-for="(image, i) in nodLogos" :key="i" class="px-14">
          <v-img :src="require(`@/assets/imgs/logos/${image}`)" >
          <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
          </v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="my-16">
        <v-col cols="12">
          <div class="d-flex align-center">
            <p class="mb-0 display-2 font-weight-bold" style="line-height: 4rem;">Insights and <br />Highlights</p>
            <v-spacer></v-spacer>
            <div style="width: 100px; height: 100px;" class="d-flex align-center justify-center primary">
              <v-icon color="white" size="32">mdi-arrow-right</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between" class="mb-16">
        <v-col cols="4" v-for="(article, i) in demoArticles" :key="i">
          <v-img :src="require(`@/assets/imgs/${article.cover}`)" />
          <p class="subtitle-1 grey--text mt-4">{{article.title}}</p>
          <p class="headline">{{article.text}}</p>
          
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from '../components/common/Footer.vue';
export default {
  components: { Footer },
  computed: {
    ...mapGetters({
      navbarHeight: "ui/navbarHeight",
    }),
  },
  data() {
    return {
      slide: 0,
      headerImages: ["header1.png", "team1.jpg", "team2.jpg", "team3.jpg"],
      investorLogos: [
        "allianz.svg",
        "carrefour.svg",
        "vinci.svg",
        "microsoft.svg",
        "airbnb.svg",
      ],
      nodLogos: ['nodcreditLogo.svg', 'nodtransferLogo.svg', 'nodcheckoutLogo.svg', 'geminiLogo.svg'], 
      demoArticles: [
        {title: 'Report', text: 'Duisque eu ridiculus feugiat proin phare ullamcorper sem.', cover: 'cover1.svg'},
        {title: 'Market Views', text: 'Duisque eu ridiculus feugiat proin phare ullamcorper sem.', cover: 'cover2.svg'},
        {title: 'Ocholi Okutepa', text: 'Duisque eu ridiculus feugiat proin phare ullamcorper sem.', cover: 'cover3.svg'}
      ],
    };
  },
  methods: {
    autoSlide(){
      setInterval(() => {
        if(this.slide < this.headerImages.length - 1){
          this.slide++
        } else {
          this.slide = 0;
        }
      }, 3000);
    }
  },
  mounted(){
    this.autoSlide();
  }
};
</script>

<style>
</style>