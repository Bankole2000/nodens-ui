<template>
  <div class="products-section">
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

      <!-- <div style="height: 10000px"></div> -->
    </v-container>
    <div style="min-height: 1px" class="end-section"></div>
  </div>
</template>

<script>
import ProductFrameCard from "./ProductFrameCard.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    ProductFrameCard,
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
    };
  },
  mounted() {
    // console.log({ gsap, ScrollTrigger });
    // gsap.registerPlugin(ScrollTrigger);
    // const animation = gsap.fromTo(".section", { x: 0 }, { x: "-190vw" });
    // ScrollTrigger.create({
    //   trigger: ".products-section",
    //   animation,
    //   start: "top 110px",
    //   pin: ".products-section",
    //   scrub: true,
    //   markers: true,
    //   endTrigger: "end-section",
    //   end: "bottom top",
    // });
  },
};
</script>

<style>
</style>