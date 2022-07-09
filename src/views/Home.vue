<template>
  <div
    class="home-page"
    :style="{ marginTop: `-${navbarHeight}px`, backgroundColor: `#faf6f8` }"
  >
    <!-- SECTION: Creating a future -->
    <div
      style="
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        display: flex;
      "
      :style="{ paddingTop: `${navbarHeight}px` }"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card
              elevation="0"
              class="mb-5"
              :img="require('@/assets/imgs/newcover1.jpeg')"
              height="40vh"
              width="100%"
              style="border-radius: 16px"
            >
            </v-card>
          </v-col>
          <v-col cols="6">
            <h1>Creating a Future that is Accessible and Connected.</h1>
          </v-col>
          <v-col cols="6">
            <div style="height: 100%">
              <h4
                class="body-copy-l pr-4"
                style="font-weight: 400 !important; color: #6e7177"
              >
                We creating a future that is sustainable! Where you’re in
                control of money and connected to resources that help better
                your life and people around you. Join us as we take incredible
                leaps to make this possible.
              </h4>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: start;
                "
                class="mt-12"
              >
                <div
                  class="mr-7"
                  v-for="(topic, i) in topics"
                  :key="i"
                  :style="{
                    borderRight:
                      i < topics.length - 1 ? '2px solid #CCE3FF' : 'none',
                  }"
                >
                  <p
                    style="font-size: 18px; line-height: 22px; font-weight: 400"
                    class="mb-0 mr-7 black-text"
                  >
                    {{ topic }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- TODO: SECTION: Scrolling logos -->
    <div class="my-16 pb-16">
      <LogoScroller />
    </div>
    <!-- TODO: SECTION: Banking the Unbanked -->
    <div class="my-16 pb-8">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-start">
              <h3 class="text-h3 mb-6 pt-2 font-weight-bold black--text">
                Banking the
                <!-- <span class="bg-colored-text">&nbsp;Unbanked.&nbsp;</span> -->
              </h3>
              <div style="position: relative" class="ml-2">
                <div style="background-color: #fdd5b9">
                  <h3
                    class="text-h3 mt-0 py-2 font-weight-bold transparent--text"
                  >
                    &nbsp; Unbanked.
                  </h3>
                </div>
                <div style="position: absolute; top: -50px; left: 10px">
                  <h3 class="text-h3 mb-6 py-2 font-weight-bold black--text">
                    &nbsp; Unbanked.
                  </h3>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <ValuePropositions />
    </div>
    <!-- SECTION: Our mission -->
    <div
      class="our-mission"
      style="
        width: 100vw;
        height: calc(100vh);
        position: relative;
        display: flex;
      "
    >
      <div style="flex: 1; height: 100%" class="black-bg"></div>
      <div
        style="
          flex: 1;
          height: 100%;
          background-size: cover;
          background-position: center center;
        "
        :style="{
          backgroundImage: `url(${require('@/assets/imgs/newcover2.jpeg')})`,
        }"
      ></div>
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          min-height: 100vw;
        "
      >
        <v-container>
          <v-row>
            <v-col cols="6">
              <div class="mt-25">
                <p
                  class="mb-4"
                  style="
                    font-size: 16px;
                    line-height: 18.91px;
                    letter: 12%;
                    font-weight: 600;
                    color: #6e7177;
                  "
                >
                  OUR MISSION
                </p>
                <h2 style="color: white" class="mb-6">
                  Providing globally competitive services with a net positive on
                  customers.
                </h2>
                <p
                  class="pr-13 mb-16"
                  style="
                    font-size: 18px;
                    line-height: 21.28px;
                    font-weight: 400;
                    color: #f4f6f8;
                    letter: 1%;
                  "
                >
                  Centered around good, we are seeking to provide customer-first
                  services that ensure businesses are making profits rather than
                  spending time worrying about capital to run their start-up.
                </p>
                <div class="pt-16 d-flex align-center">
                  <div style="flex: 1">
                    <h2 style="color: white" class="mb-1">$3.5m</h2>
                    <p
                      style="
                        font-size: 18px;
                        line-height: 21.28px;
                        letter: 1%;
                        font-weight: 400;
                        color: #b6b7be;
                      "
                      class="pr-5"
                    >
                      Worth of loans disbursed
                    </p>
                  </div>
                  <div style="flex: 1">
                    <h2 style="color: white">$2.2m</h2>
                    <p
                      class="pr-16"
                      style="
                        font-size: 18px;
                        line-height: 21.28px;
                        letter: 1%;
                        font-weight: 400;
                        color: #b6b7be;
                      "
                    >
                      Returns to investors
                    </p>
                  </div>
                  <div style="flex: 1">
                    <h2 style="color: white">300k+</h2>
                    <p
                      style="
                        font-size: 18px;
                        line-height: 21.28px;
                        letter: 1%;
                        font-weight: 400;
                        color: #b6b7be;
                      "
                      class="pr-5"
                    >
                      Customers onboarded
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="6"></v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- SECTION: Our products -->
    <div class="mt-16 pt-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-start">
              <h3 class="text-h3 mb-6 pt-2 font-weight-bold black--text">
                Putting Customers
                <!-- <span class="bg-colored-text">&nbsp;Unbanked.&nbsp;</span> -->
              </h3>
              <div style="position: relative" class="ml-2">
                <div style="background-color: #fdd5b9">
                  <h3
                    class="text-h3 mt-0 py-2 font-weight-bold transparent--text"
                  >
                    &nbsp; First.
                  </h3>
                </div>
                <div style="position: absolute; top: -50px; left: 10px">
                  <h3 class="text-h3 mb-6 py-2 font-weight-bold black--text">
                    &nbsp; First.
                  </h3>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <ProductsSlider />
    </div>
    <!-- <div>
      <ProductsSection :key="component" />
    </div> -->
    <!-- TODO: SECTION: Here's what people are saying -->
    <div style="width: 100vw" class="my-16 pb-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="pa-24 black-bg" style="border-radius: 24px">
              <v-row align="center">
                <v-col cols="7">
                  <v-card style="margin-bottom: 20vh" color="transparent">
                    <div style="width: 100px" class="mx-auto">
                      <div style="position: relative" class="ml-n16">
                        <v-hover v-slot:default="{ hover }">
                          <div
                            style="position: absolute; top: 0; left: 0"
                            :style="{ zIndex: hover ? 1 : 1 }"
                          >
                            <v-card rounded="xl" class="px-10 pt-10 pb-2">
                              <v-card-text class="pa-0">
                                <p
                                  class="text-h5 black-text"
                                  style="line-height: 1.8rem !important"
                                >
                                  "We trusted the foks at
                                  <strong>NodensInc</strong> to integrate some
                                  of our solutions and they fit so perfectly.
                                  We're so glad we got to work with them and
                                  we're hopeful to partner on more amazing
                                  products in times to come"
                                </p>
                              </v-card-text>
                              <v-card-actions class="pa-0">
                                <v-list two-line class="py-0">
                                  <v-list-item class="pa-0">
                                    <v-list-item-avatar>
                                      <v-avatar
                                        color="grey lighten-2"
                                      ></v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content class="py-0">
                                      <v-list-item-title
                                        >James Jones</v-list-item-title
                                      >
                                      <v-list-item-subtitle
                                        >Growth Manager</v-list-item-subtitle
                                      >
                                    </v-list-item-content>
                                    <v-list-item-icon>
                                      <div
                                        style="height: 100%"
                                        class="d-flex align-center"
                                      >
                                        <v-img
                                          class="mt-4"
                                          :src="
                                            require('@/assets/imgs/logos/stripe-black.svg')
                                          "
                                        ></v-img>
                                      </div>
                                    </v-list-item-icon>
                                  </v-list-item>
                                </v-list>
                              </v-card-actions>
                            </v-card>
                          </div>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                          <div
                            style="position: absolute; top: 13vh; left: 8vh"
                            :style="{ zIndex: hover ? 1 : 0 }"
                          >
                            <v-card
                              rounded="xl"
                              class="px-10 pt-10 pb-2 primary"
                            >
                              <v-card-text class="pa-0">
                                <p
                                  class="text-h5 white--text"
                                  style="line-height: 1.8rem !important"
                                >
                                  "We trusted the foks at
                                  <strong>NodensInc</strong> to integrate some
                                  of our solutions and they fit so perfectly.
                                  We're so glad we got to work with them and
                                  we're hopeful to partner on more amazing
                                  products in times to come"
                                </p>
                              </v-card-text>
                              <v-card-actions class="pa-0">
                                <v-list two-line class="py-0 primary">
                                  <v-list-item class="pa-0 white--text">
                                    <v-list-item-avatar>
                                      <v-avatar
                                        color="grey lighten-2"
                                      ></v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content class="py-0">
                                      <v-list-item-title
                                        >Stephen King</v-list-item-title
                                      >
                                      <v-list-item-subtitle
                                        class="grey--text text--lighten-2"
                                        >Founder</v-list-item-subtitle
                                      >
                                    </v-list-item-content>
                                    <v-list-item-icon>
                                      <div
                                        style="height: 100%"
                                        class="d-flex align-center"
                                      >
                                        <v-img
                                          class="mt-4"
                                          :src="
                                            require('@/assets/imgs/logos/king-white.svg')
                                          "
                                        ></v-img>
                                      </div>
                                    </v-list-item-icon>
                                  </v-list-item>
                                </v-list>
                              </v-card-actions>
                            </v-card>
                          </div>
                        </v-hover>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="5">
                  <div class="d-flex align-center">
                    <h2 style="color: white">
                      Here's what people are saying about us
                    </h2>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- TODO: SECTION: Footer -->
    <!-- <div style="position: relative">
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
    </div> -->
    <!-- <v-container>
      <v-row class="mb-16">
        <v-col cols="12">
          <p
            v-if="$vuetify.breakpoint.mdAndUp"
            class="mt-8 font-weight-regular accent--text"
            style="line-height: 8rem; font-size: 5rem"
          >
            
            <span
              class="
                font-weight-bold
                text-left
                accent--text
                text--darken-1
                px-4
              "
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              >Our Mission:</span
            >
            <br />
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
      <v-row class="mb-16 pb-16" justify="center">
        <v-col cols="12" sm="4" v-for="(lead, i) in leadership" :key="i">
          <LeadBlock :lead="lead" />
        </v-col>
      </v-row>
    </v-container> -->
    <NodensFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LogoScroller from "../components/blocks/LogoScroller.vue";
import ProductsSlider from "../components/blocks/ProductsSlider.vue";
import ValuePropositions from "../components/blocks/ValuePropositions.vue";
// import IconCard from "../components/blocks/IconCard.vue";
// import LeadBlock from "../components/blocks/LeadBlock.vue";
// import NodensProductCard from "../components/blocks/NodensProductCard.vue";
import NodensFooter from "../components/common/NodensFooter.vue";
// import Test from "./Test.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    // NodensProductCard,
    // LeadBlock,
    NodensFooter,
    ValuePropositions,
    // Test,
    ProductsSlider,
    LogoScroller,
  },
  computed: {
    ...mapGetters({
      navbarHeight: "ui/navbarHeight",
    }),
  },
  watch: {
    "$route.name": function (value) {
      if (value.includes("home")) {
        this.component++;
      }
      /* console.log({ value }); */
    },
  },
  data() {
    return {
      topics: ["Loans", "BPNL", "Financing", "Cards", "Banking"],
      show: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      },
      component: 1,
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
              text: "Get Loans",
              link: "https://nodcredit.com/loan",
              linkAlt: null,
            },
            {
              text: "Invest",
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
              text: "Money Transfer",
              link: "https://nodtransfer.com",
              linkAlt: null,
            },
            {
              text: "Nodtransfer Credit",
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
              text: "Checkout by NodCredit",
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
          image: "eva.jpeg",
          title: "Management, Data & Advisory",
          name: "Eva Sheluhina",
          linkedIn: "",
        },
        // {
        //   image: "lead2.jpg",
        //   title: "Cofounder, Investments and Marketing",
        //   name: "Olumide Oluwabiyi",
        //   linkedIn: "https://www.linkedin.com/in/olumide-oluwabiyi-750404a6",
        // },
        {
          image: "vitalli.jpeg",
          title: "Engineering, Products",
          name: "Vitalii Khrabatyn",
          linkedIn: "",
        },
        {
          image: "lead3.jpeg",
          title: "Cofounder, Tech and Products",
          name: "Tim Chukwuka",
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
    // console.log({ vuetify: this.$vuetify });
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
