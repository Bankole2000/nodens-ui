<template>
  <div
    class="bank-page pt-20"
    style="background-color: #fff"
    :style="{ marginTop: `0px` }"
  >
    <v-container class="mb-16">
      <v-row>
        <v-col cols="12">
          <div
            class="rounded-xl pa-16"
            style="background-color: #fdd5b9"
            :style="{
              backgroundImage: `url(${require('@/assets/imgs/bgimages/orangebgpattern.svg')})`,
              backgroundPosition: 'right center',
              backgroundSize: 'cover',
            }"
          >
            <h3 class="font-weight-600 text-h2 mb-6">Our Terms of Use</h3>
            <p class="accent--text darken font-weight-medium text-body-main">
              Revised 15th February, 2022
            </p>
          </div>
          <div class="pt-16">
            <h4 class="text-h5 mb-5 font-weight-600">
              1. Responsible for the processing of personal data
            </h4>
            <div class="grey-text text-body-main">Owner: Daniele Caldelli</div>
            <div class="grey-text text-body-main">
              Location: Valencia (Spain)
            </div>
            <div class="grey-text text-body-main">NIE: Y3736398Q</div>
            <div class="grey-text mb-10 text-body-main">
              Contact email: daniele@dummytrade.com
            </div>
            <h4 class="text-h5 mb-4 font-weight-600">
              2. Purpose of the processing of personal data
            </h4>
            <p class="font-weight-600 text-body-main mb-4">
              Owner: DanieDummy Trade will treat the data of the users of your
              web page, with the following purposes:
            </p>
            <p class="font-weight-600 text-body-main mb-4">
              Manage your subscription to the different Dummy Trade plans
              Balance and transactions of cryptocurrency Exchanges, connected by
              the user through the Api Keys Manage requests to receive the Dummy
              Trade Newsletter Send electronic communications with information
              about news, advice on maintenance services, notifications and
              everything will be relevant about Dummy Trade Manage the
              registration and control of the capacity of the different events
              (conferences, seminars, courses, etc...) developed in the
              facilities of Dummy Trade. The Events will be photographed and
              recorded to share and disseminate them through social networks,
              media, web pages, etc. so the image and voice of the attendees can
              be captured. In general:
            </p>
            <p class="font-weight-600 text-body-main mb-4">
              They will be used to comply with legal obligations Deadlines and /
              or criteria for data retention The term of conservation by Dummy
              Trade of the personal data of the users only during the time
              necessary for the achievement of the purposes for which they were
              collected, or where appropriate within the period established byle
              Caldelli <br />
              Location: Valencia (Spain) <br />
              NIE: Y3736398Q <br />Contact email: daniele@dummytrade.com
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <nodensFooter />
  </div>
</template>

<script>
import NodensFooter from "../components/common/NodensFooter.vue";
export default {
  name: "Privacy",
  components: { NodensFooter },
};
</script>

<style>
p {
  color: #6e7177;
}
</style>
