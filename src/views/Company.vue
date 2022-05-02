<template>
  <div
    class="company-page pt-100"
    style="background-color: #eaebf9"
    :style="{ marginTop: `-${navbarHeight}px` }"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h2 font-weight-600">
            Disrupting the Banking Sector with Competitive Services
          </h1>
          <section class="mt-16">
            <slick ref="slick" :options="slickOptions">
              <template v-if="images">
                <img
                  v-for="(image, index) in images"
                  :key="index"
                  :src="require(`@/assets/imgs/${image}`)"
                />
              </template>
            </slick>
          </section>
        </v-col>
      </v-row>

      <section class="stat pt-26">
        <v-row class="my-12">
          <v-col cols="12" lg="9" xl="9" class="ma-auto">
            <h3 class="text-center mb-16 text-h4 font-weight-600 black--text">
              Nodensinc is breaking the barriers on how money is accessed and
              ensuring people are given equal opportunities to see their ideas
              bloom.
            </h3>
          </v-col>
          <v-col cols="12" lg="4" sm="6" v-for="(item, i) in stats" :key="i">
            <div class="d-flex align-center flex-column">
              <p class="display-3 mb-2 font-weight-bold black--text">
                {{ item.value }}
              </p>
              <p class="headline ml-4 text-grey">{{ item.metric }}</p>
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
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
              <v-card-title class="text-h4 font-weight-600 mb-6">
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
    <NodensFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import 'slick-carousel/slick/slick.css';
import Slick from 'vue-slick';
import NodensFooter from '../components/common/NodensFooter.vue';
export default {
  components: { Slick, NodensFooter },
  data() {
    return {
      images: [
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
        'placeholder.jpg',
      ],
      slickOptions: {
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        // Any other options that can be got from plugin documentation
      },
      stats: [
        { metric: 'Total Loans Disbursed', value: '$3.5m' },
        { metric: 'Returns to Investors', value: '$2.2m' },
        { metric: 'Registered Users', value: '300k+' },
        // {metric: 'Total No of Staff', value: '50'},
      ],
      values: [
        {
          title: 'Building for the people',
          content:
            'We provide loans to grow your business, focus on your business rather than worry about capital.',
        },
        {
          title: 'Building for the people',
          content:
            'We provide loans to grow your business, focus on your business rather than worry about capital.',
        },
        {
          title: 'Building for the people',
          content:
            'We provide loans to grow your business, focus on your business rather than worry about capital.',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight',
    }),
  },
};
</script>

<style>
.slick-dots {
  display: flex;
  justify-content: end;
}
.slick-slide {
  margin-left: 15px;
  margin-right: 15px;
}

.slick-list {
  margin-left: -15px;
  margin-right: -15px;
  pointer-events: none;
}
</style>
