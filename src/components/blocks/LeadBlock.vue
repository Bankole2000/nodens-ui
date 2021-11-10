<template>
  <div class="lead-block">
    <v-img :aspect-ratio="1" class="rounded-xl mr-4" :src="require(`@/assets/imgs/${lead.image}.jpg`)" />
    <p class="grey--text title mb-1 mt-4 pl-2">{{lead.title}}</p>
    <p class="headline pl-2">{{lead.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    lead: {
      type: Object,
      default: () => ({
        image: 'lead1',
        title: 'CEO',
        name: 'Jane Doe'
      })
    }
  }
}
</script>

<style>

</style>