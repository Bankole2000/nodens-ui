<template>
  <div>
    <div
      class="bank-page pt-100 pb-40"
      style="background-color: #eaebf9"
      :style="{ marginTop: `-${navbarHeight}px` }"
    >
      <v-container>
        <v-row class="" justify="center">
          <v-col cols="12" md="7" align-self="center" class="text-center">
            <Breadcrumb
              class="text-center"
              large
              icon="mdi-office-building"
              currentPage="For Bank"
              link="partnerships/for-banks"
            />

            <h3
              class="black--text font-weight-medium text-h2 mb-10"
              style="line-height: 75.65px"
            >
              Innovation Driven by Partnerships
            </h3>
            <p class="description text-body-main">
              Using our AI system and community presence, we have been able to
              penetrate the unbanked communities promoting financial inclusion
              in those areas. We have combined breakthrough tech and machine
              learning to enable Financial Institutions empower the unbanked
              with Digital Credit solutions.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <section class="pt-100 pb-100" style="background-color: #9e8af6">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="6"> </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="offer pt-80 pb-2" style="">
      <v-container>
        <v-row class="pa-6" align="center">
          <v-col cols="12" md="7" lg="8">
            <h3
              class="text-h2 font-weight-bold black--text"
              style="max-width: 50%"
            >
              What We Offer Our Partners
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
              v-for="(item, i) in offers"
              :key="i"
            >
              <v-card-title class="text-h4 font-weight-600 mb-6">{{
                item.title
              }}</v-card-title>
              <v-card-text class="text-body-main">
                {{ item.content }}
              </v-card-text>
              <template v-if="item.lists">
                <v-list dense style="background: transparent">
                  <v-list-item v-for="(list, index) in item.lists" :key="index">
                    <v-list-item-icon>
                      <v-icon color="#0068EB">mdi-check</v-icon>
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
    <Partner />
    <NodensFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import Partner from '../components/common/Partner.vue';
import NodensFooter from '../components/common/NodensFooter.vue';
export default {
  data() {
    return {
      offers: [
        {
          title: 'Payment solutions',
          content:
            'Through NodCredit, a leading consumer credit brand, we give a simple framework to allow bank deliver disbursements solutions seamlessly to the underbanked and the unbanked..',
        },
        {
          title: 'Revenue generation',
          content:
            "For credit scoring, customer analytics, and tailored marketing automation, institutions can use NodCredit's machine learning and consumer data to make better credit decisions. This enables the development of new products and improves the client experience, resulting in increased income for banks.",
        },
        {
          title: 'Network security',
          content:
            'With our authentication, risk management, and fraud protection services, NodCredit can help you supplement your security procedures.',
        },
        {
          title: 'Credit customers on the go',
          content: null,
          lists: ['Mobile App', 'USSD', 'Web'],
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight',
    }),
  },
  components: { Breadcrumb, NodensFooter, Partner },
};
</script>

<style>
.v-breadcrumbs {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 18px 12px;
}
.v-breadcrumbs li {
  align-items: center;
  display: inline-flex;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
}

.v-card {
  min-height: 297px;
  width: 400px;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 15px !important;
  background: #d8e9ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
</style>
