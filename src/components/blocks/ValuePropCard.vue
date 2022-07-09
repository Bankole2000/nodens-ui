<template>
  <div class="value-prop-card">
    <v-card elevation="0" width="400" color="#e9f2fe" class="pl-8 pt-8">
      <v-img :src="require(`@/assets/imgs/${image}`)" contain></v-img>
      <div
        class="py-8 pr-8"
        :style="{
          backgroundImage: `url(${require('@/assets/imgs/bgimages/smallbgpattern.svg')})`,
          backgroundPosition: 'right center',
        }"
      >
        <h3 class="mb-8">{{ title }}</h3>
        <p
          class="grey-text mb-0"
          style="line-height: 1.5rem; font-size: 1.2rem !important"
        >
          {{ text }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "borderlesspayments.svg",
    },
    title: {
      type: String,
      default: "Borderless Payments",
    },
    text: {
      type: String,
      default: `We provide loans to grow your business, focus on your business
              rather than worry about capital.`,
    },
  },
};
</script>

<style>
</style>