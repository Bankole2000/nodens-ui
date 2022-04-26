<template>
  <div class="company-page" :style="{marginTop : `-${navbarHeight}px`}">
    <h1>Company Page</h1>
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