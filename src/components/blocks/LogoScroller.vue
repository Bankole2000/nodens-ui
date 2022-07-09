<template>
  <div class="logo-scroller">
    <div style="position: relative">
      <div
        style="min-width: 100vw"
        class="animate d-flex align-center justify-space-between"
      >
        <v-img
          v-for="(partner, i) in partners"
          :key="i"
          class="mx-16"
          :src="require(`@/assets/imgs/${partner}`)"
        ></v-img>
      </div>
      <div
        style="min-width: 100vw; position: absolute; top: 0"
        class="animate2 d-flex align-center justify-space-between"
      >
        <v-img
          v-for="(partner, i) in partners"
          :key="i"
          class="mx-16"
          :src="require(`@/assets/imgs/${partner}`)"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        "paystacklogo.svg",
        "scotraillogo.svg",
        "mcenvoylogo.svg",
        "kinglogo.svg",
        "stripelogo.svg",
      ],
    };
  },
};
</script>

<style>
.animate {
  animation: animate 20s linear infinite;
}
.animate2 {
  animation: animate2 20s linear infinite;
}
@keyframes animate {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-0%);
  }
}
</style>