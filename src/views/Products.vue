<template>
  <div class="products-page" :style="{marginTop : `-${navbarHeight}px`}">
    <h1>Products Page</h1>
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