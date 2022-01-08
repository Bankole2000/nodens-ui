<template>
  <div class="icon-card">
    <v-card
      class="elevated-light d-flex align-center justify-center"
      :style="{ borderRadius: `${+size * (30 / 100)}px` }"
      :height="`${size}px`"
      :width="`${size}px`"
      @click="gotoURL(logo)"
    >
      <v-img
        :max-width="`${+size * (40 / 100)}px`"
        style="border-radius: 0px"
        :aspect-ratio="1"
        transition="scale-transition"
        contain
        :src="require(`@/assets/imgs/logos/${logo}.svg`)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              size="40"
              width="4"
              indeterminate
              color="secondary lighten-1"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: "nodcredit",
    },
    size: {
      type: [Number, String],
      default: 100,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    gotoURL(siteName) {
      if (siteName !== "nodcash") {
        window.open(`https://${siteName}.com`, "_blank");
      }
    },
  },
};
</script>

<style>
</style>