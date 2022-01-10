<template>
  <div class="nodens-product-card">
    <v-card
      flat
      class="py-8 rounded-xl white pl-4"
      :class="{ 'pl-16 py-16': $vuetify.breakpoint.smAndUp }"
    >
      <IconCard
        :logo="logo"
        :size="$vuetify.breakpoint.smAndUp ? 150 : 100"
        class="mb-16"
      />
      <p
        :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'"
        class="font-weight-bold accent--text text--darken-1"
      >
        {{ product.title }}
      </p>
      <p
        :class="$vuetify.breakpoint.xs ? 'text-h6' : 'text-h5'"
        class="accent--text pr-8"
        style="line-height: 2.5rem"
      >
        {{ product.desc }}
      </p>
      <div :class="$vuetify.breakpoint.mdAndUp ? 'd-flex align-center' : ''">
        <div v-for="(link, i) in productLinks" :key="i">
          <v-btn
            v-if="link.link"
            large
            @click="handleProductLinkClick(link)"
            text
            color="secondary"
          >
            <span
              class="
                title
                no-text-transform
                secondary--text
                text-decoration-none
              "
              >{{ link.text }}</span
            >
            <v-icon size="28" right>mdi-arrow-top-right</v-icon>
            <!-- <v-icon right>mdi-open-in-new</v-icon> -->
          </v-btn>
          <v-btn v-else disabled large text>
            <v-icon left color="info">mdi-cog</v-icon>

            <span class="title no-text-transform text-decoration-none">{{
              link.linkAlt
            }}</span>
          </v-btn>
          <!-- <v-icon
            v-if="i < productLinks.length - 1 && productLinks.length > 0"
            class="mx-4"
            >mdi-circle</v-icon
          > -->
        </div>
      </div>
      <!-- <a
        :href="product.link"
        class="headline font-weight-bold secondary--text text-decoration-none"
        >Go to {{ product.title }}</a
      > -->
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
    productLinks: {
      type: Array,
      default: () => [
        {
          text: "Some Text",
          link: "https://google.com",

          linkAlt: "Product is Live",
        },
        {
          text: "Some Text",
          link: "https://google.com",
          hasLink: true,
          linkAlt: "Product is Live",
        },
      ],
    },
  },
  components: { IconCard },
  methods: {
    handleProductLinkClick(productLink) {
      window.open(productLink.link, "_blank");
      // console.log({ productLink });
    },
  },
};
</script>

<style>
.no-text-transform {
  text-transform: none;
}
</style>