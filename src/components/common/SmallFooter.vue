<template>
  <div class="small-footer">
    <div class="d-flex align-center justify-start my-12" :class="{'flex-column': $vuetify.breakpoint.xs}">
      <div class="d-flex">
        <v-avatar size="36" class="mr-4" color="grey lighten-2">
          <v-icon color="grey darken-3">mdi-instagram</v-icon>
        </v-avatar>
        <v-avatar size="36" class="mr-4" color="grey lighten-2">
          <v-icon color="grey darken-3">mdi-twitter</v-icon>
        </v-avatar>
        <v-avatar size="36" class="mr-4" color="grey lighten-2">
          <v-icon color="grey darken-3">mdi-facebook</v-icon>
        </v-avatar>
        <v-avatar size="36" class="mr-4" color="grey lighten-2">
          <v-icon color="grey darken-3">mdi-linkedin</v-icon>
        </v-avatar>
      </div>
      <p class="mb-0 grey--text" :class="{'text-center mt-8': $vuetify.breakpoint.xs, 'ml-8': $vuetify.breakpoint.smAndUp}">
        © Copyright 2021 Nodens Nigeria Limited
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>