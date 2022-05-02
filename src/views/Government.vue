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
              currentPage="For Government"
              link="partnerships/for-government"
            />

            <h3
              class="black--text font-weight-medium text-h2 mb-10"
              style="line-height: 75.65px"
            >
              Financial Inclusion for Individuals and Businesses
            </h3>
            <p class="description text-body-main">
              Financial inclusion means that individuals and businesses have
              access to useful and affordable financial products and services
              that meet their needs. Access to financial services can increase
              job creation, raise income levels, increase investments in human
              capital and ultimately drive economic growth.
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
              class="text-h2 mb-6 font-weight-bold black--text"
              style="max-width: 50%"
            >
              What We Offer Our Partners
            </h3>
            <p
              class="text-body-1 font-weight-regular black--text"
              style="max-width: 90%"
            >
              NodCredit has made it easy for the underbanked and unbanked in the
              rural communities to have access to credit facilities. We are the
              leading global development partner for governments on financial
              inclusion, providing policy advice, data, technical assistance,
              institutional development, risk-sharing, and financing.
            </p>
            <p
              class="text-body-1 font-weight-regular black--text"
              style="max-width: 90%"
            >
              Our principal emphasis is on the regulatory, policy and
              institutional framework that enables the safe and efficient
              provision of financial services to the underbanked to create
              capital accumulation which in turn increases economic growth. With
              our AI system, we can help the government in community development
              by disbursing nano loans and with our database, we can also
              monitor the lifecycle of loans disbursed to the communities.
            </p>
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

    <section class="partner pb-20">
      <v-container class="">
        <v-row class="black pa-10 rounded-xl">
          <v-col cols="12" md="9" lg="9">
            <h4 class="white--text font-weight-600 mb-6 text-h5">
              Partner with us and start generating revenues today with
              NodCredit, send us an email to learn more.
            </h4>
            <p class="white--text font-weight-600 text-h5">
              info@nodcredit.com
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <NodensFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import NodensFooter from '../components/common/NodensFooter.vue';
export default {
  data() {
    return {
      offers: [
        {
          title: 'Economy boost',
          content:
            'With the credit facilities offered to low-income customers and MSMEs, we would be laying a foundation that would in turn boost economic development.',
        },
        {
          title: 'Increase in financial inclusion',
          content:
            'By partnering with us, the government would be able to go within the rural communities to promote financial inclusion and bridging credit gaps amongst the underbanked and unbanked within the area.',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight',
    }),
  },
  components: { Breadcrumb, NodensFooter },
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
