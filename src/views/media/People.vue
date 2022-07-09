<template>
  <div class="mt-6">
    <div class="d-flex justify-space-between pt-16 pb-6">
      <h3 class="text-h5 font-weight-600 text--black">Leadership photos</h3>
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
        v-for="team in teams"
        :key="team.id"
      >
        <div class="news">
          <img :src="require(`@/assets/imgs/${team.image}`)" alt="" />
          <div class="d-flex mt-4 justify-space-between">
            <div class="">
              <div
                class="name text-body-main black--text font-weight-medium mb-1"
              >
                {{ team.name }}
              </div>
              <span class="tex-body-2 font-weight-thin text-grey">{{
                team.title
              }}</span>
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
      teams: [
        {
          id: 1,
          name: 'Abayomi Olofinlua',
          title: 'CEO & Co-founder',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 2,
          name: 'Tim Chukwuka',
          title: 'CTO & Co-founder',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 3,
          name: 'Eva Sheluhina',
          title: 'Data & Advisory',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 4,
          name: 'Eva Sheluhina',
          title: 'Data & Advisory',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 5,
          name: 'Tim Chukwuka',
          title: 'CTO & Co-founder',
          download: '#',
          image: 'media-placeholder.png',
        },
        {
          id: 6,
          name: 'Abayomi Olofinlua',
          title: 'CEO & Co-founder',
          download: '#',
          image: 'media-placeholder.png',
        },
      ],
    };
  },
};
</script>

<style></style>
