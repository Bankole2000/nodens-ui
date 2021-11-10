<template>
  <div class="icon-card">
    <v-card class="elevated-light d-flex align-center justify-center" :style="{borderRadius: `${+size * (30/100)}px`}" :height="`${size}px`" :width="`${size}px`">
      
        <v-img :max-width="`${+size * (40 / 100)}px`" style="border-radius: 0px;" :aspect-ratio="1" contain :src="require(`@/assets/imgs/logos/${logo}.svg`)" />
     
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: 'nodcredit',
    }, 
    size: { 
      type: [Number, String],
      default: 100
    }
  }
}
</script>

<style>

</style>