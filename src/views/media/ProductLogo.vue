<template>
  <div class="mt-6">
    <div class="d-flex justify-space-between pt-16 pb-6">
      <h3 class="text-h5 font-weight-600 text--black">Product logos</h3>
      <v-btn text color="success"
        >Download all <v-icon>mdi-download</v-icon></v-btn
      >
    </div>
    <v-row class="fill-height" align="center" justify="center">
      <v-col
        cols="6"
        class="mb-5"
        md="4"
        lg="4"
        xl="4"
        v-for="report in reports"
        :key="report.id"
      >
        <div class="news">
          <img :src="require(`@/assets/imgs/${report.image}`)" alt="" />
          <div class="d-flex mt-4 justify-space-between">
            <div
              class="name text-body-main black--text font-weight-medium mb-2"
            >
              {{ report.title }}
            </div>
            <v-btn text color="grey"><v-icon>mdi-download</v-icon></v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      reports: [
        {
          id: 1,
          title: 'NodensInc logo',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 2,
          title: 'NodTransfer logo',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 3,
          title: 'NodCredit logo',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 4,
          title: 'NodAgent logo',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 5,
          title: 'NodCheckout logo',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 6,
          title: 'NodBank logo',
          download: '#',
          image: 'media-placeholder.png',
        },
      ],
    };
  },
};
</script>

<style></style>
