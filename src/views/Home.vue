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
        v-if="$vuetify.breakpoint.smAndUp"
        style="min-height: 100vh; min-width: 72%; background-size: cover"
        class="d-flex align-center px-16"
        :style="{
          backgroundImage: `url(${require('@/assets/imgs/hero_bg.png.webp')})`,
        }"
      >
        <v-container class="pl-8">
          <v-row class="pl-16 pt-8" transition="slide-y-transition">
            <p
              class="font-weight-bold white--text mb-0"
              :style="{
                lineHeight: `${
                  $vuetify.breakpoint.mdAndUp
                    ? '7'
                    : $vuetify.breakpoint.smOnly
                    ? '4'
                    : '2'
                }rem`,
              }"
              :class="{
                'display-4': $vuetify.breakpoint.mdAndUp,
                'display-3': $vuetify.breakpoint.smOnly,
                'display-1': $vuetify.breakpoint.xsOnly,
              }"
            >
              Creating a Future that is accessible and connected.
            </p>
            <p
              class="white--text mt-4 mb-8"
              :class="{ headline: $vuetify.breakpoint.smAndUp }"
            >
              Solving financial inclusion problems through innovation.
            </p>
            <v-col cols="12">
              <v-btn
                x-large
                class="rounded-xl white--text text-capitalize secondary"
                depressed
                >Learn more</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        v-else
        style="min-height: 100vh; min-width: 100%; background-size: cover"
        class="d-flex flex-column align-center justify-center px-8 pt-16"
        :style="{
          backgroundImage: `url(${require('@/assets/imgs/hero_bg.png.webp')})`,
        }"
      >
        <p class="white--text text-center text-h4 font-weight-bold">
          Creating a Future that is accessible and connected.
        </p>
        <div>
          <v-btn
            block
            x-large
            class="secondary white--text text-capitalize rounded-xl"
            >Learn more</v-btn
          >
        </div>
        <div>
          <v-row align="center" justify="end" class="mt-8">
            <v-col cols="3" v-for="(product, i) in products" :key="i">
              <div class="d-flex align-center justify-center">
                <v-scroll-x-transition>
                  <IconCard
                    v-show="show[`show${i + 1}`]"
                    :logo="product.logo"
                    :size="80"
                  />
                </v-scroll-x-transition>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div
        v-if="$vuetify.breakpoint.lgAndUp"
        style="min-height: 100vh; min-width: 30%"
        class="white"
      ></div>
      <v-slide-x-transition>
        <IconCard
          v-show="show.show1"
          v-if="$vuetify.breakpoint.smAndUp"
          style="position: absolute; top: 60px; left: 35%"
          logo="nodcredit"
        />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <IconCard
          v-show="show.show2"
          v-if="$vuetify.breakpoint.smAndUp"
          style="position: absolute; top: 30px; left: 75%"
          logo="nodtransfer"
        />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <IconCard
          v-show="show.show3"
          v-if="$vuetify.breakpoint.smAndUp"
          style="position: absolute; top: 220px; left: calc(72% - 50px)"
          logo="nodcash"
        />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <IconCard
          v-show="show.show4"
          v-if="$vuetify.breakpoint.smAndUp"
          style="position: absolute; top: 60%; left: 85%"
          logo="nodcheckout"
        />
      </v-slide-x-transition>
    </div>
    <v-container>
      <v-row class="pt-16 mt-8">
        <v-col cols="12">
          <p
            class="font-weight-bold text-h4 accent--text mb-16"
            :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
          >
            Trusted by Global Investors
          </p>
        </v-col>
      </v-row>
    </v-container>

    <div style="position: relative">
      <v-container>
        <v-row class="py-8 my-4">
          <v-col cols="12">
            <v-card elevation="0" v-if="$vuetify.breakpoint.mdAndUp">
              <div class="d-flex align-center">
                <v-img
                  v-for="(image, i) in investorLogos"
                  class="mr-8"
                  :key="i"
                  :src="require(`@/assets/imgs/logos/${image}`)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
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
              <!-- <v-overlay :absolute="true" :opacity="0.1" :value="true">
                <v-btn color="orange lighten-2"> Hide Overlay </v-btn>
              </v-overlay> -->
            </v-card>
            <v-card elevation="0" v-else>
              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  sm="4"
                  v-for="(image, i) in investorLogos"
                  :key="i"
                >
                  <v-img
                    class="mx-8 my-4"
                    :src="require(`@/assets/imgs/logos/${image}`)"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          size="70"
                          width="5"
                          indeterminate
                          color="secondary lighten-1"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- background-color: rgba(255, 198, 122, 0.753); -->
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          backdrop-filter: blur(20px);
        "
      ></div>
    </div>
    <v-container>
      <v-row class="mb-16">
        <v-col cols="12">
          <p
            v-if="$vuetify.breakpoint.mdAndUp"
            class="text-h2 mt-8 font-weight-regular accent--text"
            style="line-height: 8rem"
          >
            <!-- Providing speedy and responsive financial services while generating
            substantial value. -->
            Providing globally competitive services with a net positive on
            customers.
          </p>
          <p
            v-else
            class="text-h3 text-center accent--text mt-16"
            style="line-height: 4rem"
          >
            <strong>Our Mission:</strong> <br />
            Providing globally competitive services with a net positive on
            customers.
          </p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" lg="4" sm="6" v-for="(item, i) in stats" :key="i">
          <div
            class="d-flex align-center"
            :class="{ 'flex-column': $vuetify.breakpoint.xs }"
          >
            <p class="display-3 font-weight-thin accent--text">
              {{ item.value }}
            </p>
            <p class="headline ml-4 accent--text">{{ item.metric }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col col="12">
          <p
            class="font-weight-bold text-left accent--text text--darken-1 px-4"
            :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
          >
            Our Products
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" v-for="(item, i) in products" :key="i">
          <NodensProductCard
            :logo="item.logo"
            :product="item.product"
            :productLinks="item.productLinks"
          />
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col col="12">
          <p
            class="font-weight-bold text-left accent--text text--darken-1 px-4"
            :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
          >
            Leadership
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-16 pb-16">
        <v-col cols="12" sm="4" v-for="(lead, i) in leadership" :key="i">
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
      show: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      },
      stats: [
        { metric: "Total Loans Disbursed", value: "$3.5m" },
        { metric: "Returns to Investors", value: "$2.2m" },
        { metric: "Registered Users", value: "300k+" },
        // {metric: 'Total No of Staff', value: '50'},
      ],
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
            desc: "Facilitating seamless access to nano loans. Get your loans in less than 24 hours.",
            link: "https://nodcredit.com",
          },
          productLinks: [
            {
              text: "Go to Loans",
              link: "https://nodcredit.com/loan",
              linkAlt: null,
            },
            {
              text: "Go to Invest",
              link: "https://nodcredit.com/invest",
              linkAlt: null,
            },
          ],
        },
        {
          logo: "nodtransfer",
          product: {
            title: "NodTransfer",
            desc: "The safest and quickest way to transfer money accross borders at competitive rates.",
            link: "https://nodtransfer.com",
          },
          productLinks: [
            {
              text: "Go to Money Transfer",
              link: "https://nodtransfer.com",
              linkAlt: null,
            },
            {
              text: "Go to Nodtransfer Credit",
              link: "https://nodtransfer.com/nodtransfer-credit",
              linkAlt: null,
            },
          ],
        },
        {
          logo: "nodcheckout",
          product: {
            title: "NodCheckout",
            desc: "A new way to shop. Providing an API for Buy Now, Pay Later shopping experience.",
            link: "https://nodcheckout.com",
          },
          productLinks: [
            {
              text: "Go to Checkout by NodCredit",
              link: "http://nodcheckout.com/for-businesses",
              linkAlt: null,
            },
          ],
        },
        // {
        //   logo: "gemini",
        //   product: {
        //     title: "Gemini",
        //     desc: "Providing customers with easy access to device and gadget financing at no interest rate.",
        //     link: "https://gemini.com",
        //   },
        // },
        {
          logo: "nodcash",
          product: {
            title: "NodCash App",
            desc: "A new way of sending, requesting and spending, combining crypto and leveraging our tech rails, this product sets your money free.",
            link: "https://nodcashapp.com",
          },
          productLinks: [
            {
              text: null,
              link: null,
              linkAlt: "Private Release - In Beta",
            },
          ],
        },
      ],
      leadership: [
        {
          image: "lead1.jpeg",
          title: "Cofounder, Execution and Management",
          name: "Abayomi Olofinlua",
          linkedIn: "https://www.linkedin.com/in/abayomi-olofinlua-513aa459",
        },
        {
          image: "lead2.jpg",
          title: "Cofounder, Investments and Marketing",
          name: "Olumide Oluwabiyi",
          linkedIn: "https://www.linkedin.com/in/olumide-oluwabiyi-750404a6",
        },
        {
          image: "lead3.jpeg",
          title: "Cofounder, Tech and Products",
          name: "Timothy Chukwuka",
          linkedIn: "https://www.linkedin.com/in/timchuks",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.show.show1 = true;
    }, 500);
    setTimeout(() => {
      this.show.show2 = true;
    }, 700);
    setTimeout(() => {
      this.show.show3 = true;
    }, 900);
    setTimeout(() => {
      this.show.show4 = true;
    }, 1100);
    console.log({ vuetify: this.$vuetify });
  },
};
</script>
