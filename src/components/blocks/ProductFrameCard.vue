<template>
  <div class="product-frame-card">
    <v-card
      elevation="0"
      rounded="xl"
      class="pl-15 pt-15 pb-0 d-flex"
      width="800px"
      height="100%"
      style="overflow: hidden"
      :color="bgColor"
    >
      <div class="d-flex flex-column">
        <img width="200px" :src="require(`@/assets/imgs/logos/${logo}.svg`)" />
        <div class="my-4" v-if="imgFrame === 'nodbankframe'">
          <v-chip color="white" :class="`${btnColor}--text`">
            Coming Soon
          </v-chip>
        </div>
        <v-spacer></v-spacer>
        <h3>{{ title }}</h3>
        <div>
          <v-btn
            :href="btnLink"
            target="_blank"
            :class="btnColor"
            class="white--text mb-16 mt-12"
            >{{ btnText }} <v-icon right>mdi-arrow-right</v-icon></v-btn
          >
        </div>
      </div>

      <img
        style="border-radius: 0px"
        class="ml-16"
        :src="require(`@/assets/imgs/${imgFrame}.svg`)"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#EFF7FF",
    },
    logo: {
      type: String,
      default: "nodcreditLogo",
    },
    imgFrame: {
      type: String,
      default: "nodcreditframe",
    },
    btnColor: {
      type: String,
      default: "primary",
    },
    btnLink: {
      type: String,
      default: "https://nodcredit.com",
    },
    btnText: {
      type: String,
      default: "Learn more",
    },
    title: {
      type: String,
      default: "Providing easy access to quick credit.",
    },
  },
};
</script>

<style>
</style>