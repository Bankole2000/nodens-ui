<template>
  <div
    class="home-page"
    :style="{ marginTop: `-${navbarHeight}px`, backgroundColor: `#fafafa` }"
  >
    <div
      style="
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        display: flex;
      "
    >
      <div
        style="min-height: 100vh; min-width: 72%; background-size: cover"
        class="d-flex align-center px-16"
        :style="{
          backgroundImage: `url(${require('@/assets/imgs/hero_bg.png.webp')})`,
        }"
      >
        <v-container class="mx-16 pl-8">
          <v-row class="pl-4 pt-8">
            <p
              class="display-4 font-weight-bold white--text mb-0"
              style="line-height: 7rem"
            >
              Creating a Future that is accessible and connected.
            </p>
            <p class="headline white--text mt-4 mb-8">
              Mission: Et ridiculus elit feugiat sit venenatis proin phare
              ullamcorper sem feugiat venenatis.
            </p>
            <div>
              <v-btn
                x-large
                class="rounded-xl white--text text-capitalize secondary"
                depressed
                >Learn more</v-btn
              >
            </div>
          </v-row>
        </v-container>
      </div>
      <div style="min-height: 100vh; min-width: 30%" class="white"></div>
      <IconCard
        style="position: absolute; top: 60px; left: 35%"
        logo="nodcredit"
      />
      <IconCard
        style="position: absolute; top: 30px; left: 75%"
        logo="nodtransfer"
      />
      <IconCard
        style="position: absolute; top: 220px; left: calc(72% - 50px)"
        logo="gemini"
      />
      <IconCard
        style="position: absolute; top: 60%; left: 85%"
        logo="nodcheckout"
      />
    </div>
    <v-container>
      <v-row class="py-16">
        <v-col cols="12">
          <p class="font-weight-bold text-h4 accent--text mb-8">
            Trusted by Global Investors
          </p>
          <div class="d-flex align-center">
            <v-img
              v-for="(image, i) in investorLogos"
              class="mr-8"
              :key="i"
              :src="require(`@/assets/imgs/logos/${image}`)"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    size="70"
                    width="5"
                    indeterminate
                    color="secondary lighten-1"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-8">
        <v-col cols="12">
          <p
            class="text-h1 mt-8 font-weight-regular accent--text"
            style="line-height: 8rem"
          >
            Mission: Et feugiat sit proin phare ullamcorper sem feugiat
            venenatis.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="4" v-for="i in 3" :key="i">
          <div class="d-flex align-center">
            <p class="display-3 font-weight-thin accent--text">$5.8M</p>
            <p class="headline ml-4 accent--text">Credit & Insurance</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col col="12">
          <p
            class="
              font-weight-bold
              display-3
              text-left
              accent--text
              text--darken-1
            "
          >
            Our Products
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" v-for="(item, i) in products" :key="i">
          <NodensProductCard :logo="item.logo" :product="item.product" />
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col col="12">
          <p
            class="
              font-weight-bold
              display-3
              text-left
              accent--text
              text--darken-1
            "
          >
            Leadership
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-16 pb-16">
        <v-col col="12" sm="4" v-for="(lead, i) in leadership" :key="i">
          <LeadBlock :lead="lead" />
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <SmallFooter />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IconCard from "../components/blocks/IconCard.vue";
import LeadBlock from "../components/blocks/LeadBlock.vue";
import NodensProductCard from "../components/blocks/NodensProductCard.vue";
import SmallFooter from "../components/common/SmallFooter.vue";

export default {
  components: { IconCard, NodensProductCard, LeadBlock, SmallFooter },
  computed: {
    ...mapGetters({
      navbarHeight: "ui/navbarHeight",
    }),
  },
  data() {
    return {
      investorLogos: [
        "allianz.svg",
        "carrefour.svg",
        "vinci.svg",
        "microsoft.svg",
        "airbnb.svg",
      ],
      products: [
        {
          logo: "nodcredit",
          product: {
            title: "NodCredit",
            desc: "Providing easy access to quick credit. Get your loans in less than 24 hours.",
            link: "https://nodcredit.com",
          },
        },
        {
          logo: "nodtransfer",
          product: {
            title: "NodTransfer",
            desc: "Safest, and fastest way to transfer money in and out of Africa - at the lowest fees.",
            link: "https://nodtransfer.com",
          },
        },
        {
          logo: "nodcheckout",
          product: {
            title: "NodCheckout",
            desc: "A new way to shop. Providing an API for Buy Now, Pay Later shopping experience.",
            link: "https://nodcheckout.com",
          },
        },
        {
          logo: "gemini",
          product: {
            title: "Gemini",
            desc: "A new way to shop. Providing an API for Buy Now, Pay Later shopping experience.",
            link: "https://gemini.com",
          },
        },
      ],
      leadership: [
        {
          image: "lead1",
          title: "CEO",
          name: "Jane Doe",
        },
        {
          image: "lead2",
          title: "COO",
          name: "Emeka Doe",
        },
        {
          image: "lead3",
          title: "CTO",
          name: "Doe Doe",
        },
      ],
    };
  },
};
</script>
