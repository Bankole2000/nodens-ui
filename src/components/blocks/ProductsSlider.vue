<template>
  <div class="products-slider">
    <v-container class="mb-0 pb-0">
      <v-row class="mb-0 pb-0">
        <div class="mb-0 pb-0">
          <v-btn
            icon
            outlined
            color="primary"
            @click="model === 0 ? (model = products.length) : model--"
            x-large
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            @click="model === products.length ? (model = 0) : model++"
            icon
            outlined
            color="primary"
            class="mx-4"
            x-large
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
    <v-container fluid class="mt-0 pt-0">
      <v-sheet class="ml-n16 py-0 transparent" elevation="0" min-width="115vw">
        <v-slide-group
          v-model="model"
          class="pa-0"
          center-active
          next-icon=""
          prev-icon=""
          :show-arrows="false"
        >
          <v-slide-item>
            <v-card
              color="transparent"
              elevation="0"
              rounded="xl"
              min-width="40vw"
              style="display: flex; align-items: center; height: 70vh"
            >
              <div style="min-width: 40vw">
                <p>Our Products</p>
                <h1>We Create Customer-First Products</h1>
              </div>
            </v-card>
          </v-slide-item>
          <v-slide-item
            v-for="(p, n) in products"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <ProductFrameCard
              @click="toggle"
              :style="{
                border: active
                  ? '1px solid transparent'
                  : '1px solid transparent',
                transform: active ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 0.3s ease',

                marginRight: n === products.length - 1 ? '30vw' : '',
              }"
              :bgColor="p.bgColor"
              :btnLink="p.btnLink"
              :imgFrame="p.imgFrame"
              :logo="p.logo"
              :title="p.title"
              :btnColor="p.btnColor"
              :btnText="p.btnText"
              class="mb-16 rounded-xl"
              :class="{
                'elevated-light': active,
                'mx-4': n !== products.length - 1,
              }"
            />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import ProductFrameCard from "./ProductFrameCard.vue";

export default {
  components: {
    ProductFrameCard,
  },
  data() {
    return {
      model: 1,
      intervalId: null,
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
  methods: {
    slide() {
      if (this.model === this.products.length) {
        this.model = 0;
        return;
      }
      this.model++;
    },
    startSlider() {
      this.intervalId = setInterval(() => {
        this.slide();
      }, 2000);
    },
  },
  mounted() {
    this.startSlider();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style>
</style>