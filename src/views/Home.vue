<template>
  <div
    class="home-page"
    :style="{ marginTop: `-${navbarHeight}px`, backgroundColor: `#faf6f8` }"
  >
    <div
      style="
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        display: flex;
        
      "
      :style="{paddingTop: `${navbarHeight}px`}"
      
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card elevation="0" class="mb-5" :img="require('@/assets/imgs/newcover1.jpeg')" height="40vh" style="border-radius: 16px">

            </v-card>
          </v-col>
          <v-col cols="6">
            <h1>Creating a Future that is Accessible and Connected.</h1>
          </v-col>
          <v-col cols="6">
            <div style="height: 100%;">
              <h4 class="body-copy-l pr-4" style="font-weight: 400 !important; color: #6E7177;">We creating a future that is sustainable! Where you’re in control of money and connected to  resources that help better your life and people around you. Join us as we take incredible leaps to make this possible.</h4>
              <div style="display: flex; align-items: center; justify-content: start;" class="mt-12">
                <div class="mr-7" v-for="(topic, i) in topics" :key="i" :style="{borderRight: i < topics.length - 1 ? '2px solid #CCE3FF': 'none'}">
                  <p style="color: #101010; font-size: 18px; line-height: 22px; font-weight: 400;" class="mb-0 mr-7">{{topic}}</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="width: 100vw; height: calc(100vh); position: relative; display: flex;">
      <div style="flex: 1; height: 100%; background: #101010;"></div>
      <div style="flex: 1; height: 100%; background-size: cover; background-position: center center;" :style="{backgroundImage: `url(${require('@/assets/imgs/newcover2.jpeg')})`}"></div>
      <div style="position: absolute; top: 0; left: 0; width: 100vw;">
        <v-container>
          <v-row>
            <v-col cols="6">
              <div class="mt-25">
                <p class="mb-4" style="font-size: 16px; line-height: 18.91px; letter: 12%; font-weight: 600; color: #6E7177;">OUR MISSION</p>
                <h2 style="color: white;" class="mb-6">Providing globally competitive services with a net positive on customers.</h2>
                <p class="pr-13 mb-16" style="font-size: 18px; line-height: 21.28px; font-weight: 400; color: #F4F6F8; letter: 1%;">Centered around good, we are seeking to provide customer-first services that ensure businesses are making profits rather than spending time worrying about capital to run their start-up.</p>
                <div class="pt-16 d-flex align-center">
                  <div style="flex: 1;">
                    <h2 style="color: white;" class="mb-1">$3.5m</h2>
                    <p style="font-size: 18px; line-height: 21.28px; letter: 1%; font-weight: 400; color: #B6B7BE;">Worth of loans disbursed</p>
                  </div>
                  <div style="flex: 1;">
                    <h2 style="color: white;">$2.2m</h2>
                    <p class="pr-16" style="font-size: 18px; line-height: 21.28px; letter: 1%; font-weight: 400; color: #B6B7BE;">Returns to investors</p>
                  </div>
                  <div style="flex: 1;">
                    <h2 style="color: white;">300k+</h2>
                    <p style="font-size: 18px; line-height: 21.28px; letter: 1%; font-weight: 400; color: #B6B7BE;">Customers onboarded</p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="6"></v-col>
          </v-row>
        </v-container>
      </div>

    </div>
    <div style="width: 100vw;">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="pa-24" style="background-color: #101010; border-radius: 24px;">
              <v-row>
                <v-col cols="7"></v-col>
                <v-col cols="5">
                  <div class="d-flex align-center">
                    <h2 style="color: white;">Here's what people are saying about us</h2>
                  </div>
                </v-col>
                
              </v-row>

            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

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
            class="mt-8 font-weight-regular accent--text"
            style="line-height: 8rem; font-size: 5rem"
          >
            <!-- Providing speedy and responsive financial services while generating
            substantial value. -->
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
      <v-divider></v-divider>
      <SmallFooter />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import IconCard from "../components/blocks/IconCard.vue";
import LeadBlock from "../components/blocks/LeadBlock.vue";
import NodensProductCard from "../components/blocks/NodensProductCard.vue";
import SmallFooter from "../components/common/SmallFooter.vue";

export default {

  components: { NodensProductCard, LeadBlock, SmallFooter },
  computed: {
    ...mapGetters({
      navbarHeight: "ui/navbarHeight",
    }),
  },
  data() {
    return {
      topics: ['Loans', 'BPNL', 'Financing', 'Cards', 'Banking'],
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
    console.log({ vuetify: this.$vuetify });
  },
};
</script>
