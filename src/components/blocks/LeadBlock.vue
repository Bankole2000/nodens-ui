<template>
  <div class="lead-block">
    <v-img :aspect-ratio="1" class="rounded-xl" :class="{'mr-4': $vuetify.breakpoint.lgAndUp}" :src="require(`@/assets/imgs/${lead.image}.jpg.webp`)">
    <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
          size="70"
          width="5"
            indeterminate
            color="secondary lighten-1"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
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