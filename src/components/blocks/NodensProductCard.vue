<template>
  <div class="nodens-product-card">
    <v-card flat class="py-8 rounded-xl white pl-4" :class="{'pl-16 py-16': $vuetify.breakpoint.smAndUp}">
      <IconCard :logo="logo" :size="$vuetify.breakpoint.smAndUp ? 150 : 100" class="mb-16" />
      <p :class="$vuetify.breakpoint.xs ? 'display-1':'display-2'" class="font-weight-bold accent--text text--darken-1">{{ product.title }}</p>
      <p :class="$vuetify.breakpoint.xs ? 'text-h6':'text-h5'" class="accent--text pr-8" style="line-height: 2.5rem;">{{ product.desc }}</p>
      <a :href="product.link" class="headline font-weight-bold secondary--text text-decoration-none"
        >Go to {{ product.title }}</a
      >
      
    </v-card>
  </div>
</template>

<script>
import IconCard from "./IconCard.vue";
export default {
  props: {
    logo: {
      type: String,
      default: "nodcredit",
    },
    product: {
      type: Object,
      default: () => ({
        title: "NodCredit",
        desc: "Providing easy access to quick credit. Get your loans in less than 24 hours.",
        link: "https://nodcredit.com",
      }),
    },
  },
  components: { IconCard },
};
</script>

<style>
</style>