<template>
  <div class="lead-block" :class="{ 'px-4': $vuetify.breakpoint.xs }">
    <!-- :aspect-ratio="1/1.25" -->
    <!-- :content-class="
        ['eva.jpeg', 'vitalli.jpeg'].includes(lead.image)
          ? ''
          : 'reposition-cover'
      " -->
    <v-img
      :aspect-ratio="1"
      class="rounded-xl"
      :class="{
        'mr-4': $vuetify.breakpoint.lgAndUp,
        'reposition-cover': ![
          'eva.jpeg',
          'vitalli.jpeg',
          'lead1.jpeg',
          'lead3.jpeg',
        ].includes(lead.image),
        'tim-photo-shift': lead.image === 'lead3.jpeg',
        'yomi-photo-shift': lead.image === 'lead1.jpeg',
      }"
      :src="require(`@/assets/imgs/${lead.image}.webp`)"
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
    <p class="grey--text mb-1 mt-4 pl-2">{{ lead.title }}</p>
    <p
      class="headline pl-2"
      style="cursor: pointer"
      @click="gotoURL(lead.linkedIn)"
    >
      {{ lead.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    lead: {
      type: Object,
      default: () => ({
        image: "lead1",
        title: "CEO",
        name: "Jane Doe",
        linkedIn: "https://linkedin.com",
      }),
    },
  },
  methods: {
    gotoURL(site) {
      window.open(site, "_blank");
    },
  },
};
</script>

<style>
.reposition-cover .v-image__image.v-image__image--cover {
  background-position: top -50px center !important;
  background-size: 135%;
}

.tim-photo-shift .v-image__image.v-image__image--cover {
  background-position: top -70px left -40px !important;
  background-size: 150%;
}

.yomi-photo-shift .v-image__image.v-image__image--cover {
  background-position: top -50px left -70px !important;
  background-size: 135%;
}
</style>