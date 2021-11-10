<template>
  <div class="investors-page" :style="{marginTop : `-${navbarHeight}px`}">
    <h1>Investors Page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { 
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight'
    })
  }
}
</script>

<style>

</style>