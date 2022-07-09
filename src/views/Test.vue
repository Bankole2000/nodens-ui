<template>
  <div class="test-component">
    <LogoScroller />
    <v-container class="frame">
      <div
        style="display: flex; align-items: center; min-height: 80vh"
        class="section"
      >
        <div style="min-width: 40vw">
          <p>Our Products</p>
          <h1>We Create Customer-First Products</h1>
        </div>
        <ProductFrameCard
          v-for="(p, i) in products"
          :key="i"
          :bgColor="p.bgColor"
          :btnLink="p.btnLink"
          :imgFrame="p.imgFrame"
          :logo="p.logo"
          :title="p.title"
          :btnColor="p.btnColor"
          :btnText="p.btnText"
          class="mx-16"
        />
      </div>
    </v-container>
    <div style="min-height: 1px" class="end-section"></div>

    <section class="offer pt-80 pb-2" style="background: #fff">
      <v-container>
        <v-row class="pa-6" align="">
          <v-col cols="12" md="7" lg="8" align-self="center">
            <span
              class="
                d-flex
                text-body-main
                grey-text
                mb-6
                font-weight-600
                text-uppercase
              "
              >OUR values</span
            >
            <h3 class="text-h3 mb-6 font-weight-bold black--text">
              Here for
              <span class="pa-4" style="background-color: #fdd5b9"
                >The Dreamers.</span
              >
            </h3>
          </v-col>
          <v-col col="12" md="5" lg="4" class="pa-6" align-self="end">
            <v-card
              class="mx-auto pa-4 mb-12"
              style="
                background-color: #e9f2fe;
                border-radius: 8px;
                border: 1px solid blue;
              "
              v-for="(item, i) in values"
              :key="i"
            >
              <v-card-title
                class="text-h4 font-weight-600 mb-6"
                style="word-break: break-word"
              >
                {{ item.title }}</v-card-title
              >
              <v-card-text class="text-body-main">
                {{ item.content }}
              </v-card-text>
              <template v-if="item.lists">
                <v-list dense style="background: transparent">
                  <v-list-item v-for="(list, index) in item.lists" :key="index">
                    <v-list-item-icon>
                      <v-icon color="#0068EB" small="true">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        class="text-body-main font-weight-regular"
                        >{{ list }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <div class="partner-box d-flex justify-space-between flex-wrap pt-20">
      <div class="img-container" v-for="(partner, i) in partners" :key="i">
        <img
          class="partner-img"
          :src="require(`@/assets/imgs/${partner}`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductFrameCard from "../components/blocks/ProductFrameCard.vue";
import LogoScroller from "../components/blocks/LogoScroller.vue";
// import ProductsSlider from "../components/blocks/ProductsSlider.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    ProductFrameCard,
    LogoScroller,
    // ProductsSlider,
  },
  data() {
    return {
      products: [
        {
          bgColor: "#EFF7FF",
          logo: "nodcreditLogo",
          imgFrame: "nodcreditframe",
          btnColor: "primary",
          btnLink: "https://nodcredit.com",
          btnText: "Learn more",
          title: "Providing easy access to quick credit.",
        },
        {
          bgColor: "#ffeaf0",
          logo: "nodtransferLogo",
          imgFrame: "nodtransferframe",
          btnColor: "pink",
          btnLink: "https://nodtransfer.com",
          btnText: "Learn more",
          title: "Fast, easy and cheap way to send mondy to Africa.",
        },
        {
          bgColor: "#f4f9ff",
          logo: "nodcheckoutLogo",
          imgFrame: "nodcheckoutframe",
          btnColor: "info",
          btnLink: "https://nodcheckout.com",
          btnText: "Learn more",
          title:
            "Redefining the online checkout process using buy now pay later.",
        },
        {
          bgColor: "#efecff",
          logo: "nodbankLogo",
          imgFrame: "nodbankframe",
          btnColor: "purple",
          btnLink: "https://nodbank.com",
          btnText: "Learn more",
          title: "Redefining what it means to be a bank.",
        },
      ],
      values: [
        {
          title: "Building for the people",
          content:
            "We provide loans to grow your business, focus on your business rather than worry about capital.",
        },
        {
          title: "Building for the people",
          content:
            "We provide loans to grow your business, focus on your business rather than worry about capital.",
        },
        {
          title: "Building for the people",
          content:
            "We provide loans to grow your business, focus on your business rather than worry about capital.",
        },
      ],
      partners: [
        "paystacklogo.svg",
        "scotraillogo.svg",
        "mcenvoylogo.svg",
        "kinglogo.svg",
        "stripelogo.svg",
      ],
    };
  },
  methods: {
    onBeforeEnter() {
      // console.log({ gsap, ScrollTrigger });
      // gsap.registerPlugin(ScrollTrigger);
      // const animation = gsap.fromTo(".section", { x: 0 }, { x: "-190vw" });
      // ScrollTrigger.create({
      //   trigger: ".frame",
      //   animation,
      //   start: "top 110px",
      //   pin: true,
      //   scrub: true,
      //   markers: true,
      //   endTrigger: ".end-section",
      //   end: "bottom top",
      // });
    },
    onBeforeLeave() {
      // ScrollTrigger.disable();
    },
  },
  mounted() {
    // console.log({ gsap, ScrollTrigger, allTriggers: ScrollTrigger.getAll() });
    // gsap.registerPlugin(ScrollTrigger);
    // const animation = gsap.fromTo(".section", { x: 0 }, { x: "-190vw" });
    // ScrollTrigger.enable();
    // ScrollTrigger.create({
    //   trigger: ".frame",
    //   animation,
    //   start: "top 110px",
    //   pin: true,
    //   scrub: true,
    //   markers: true,
    //   endTrigger: "end-section",
    //   end: "bottom top",
    // });
  },
  beforeDestroy() {
    // ScrollTrigger.disable();
  },
};
</script>

<style>
</style>