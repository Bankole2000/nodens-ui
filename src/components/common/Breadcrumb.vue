<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-home</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs',
  props: ['currentPage', 'link'],

  data() {
    return {
      items: [
        {
          text: '',
          disabled: true,
          href: '',
        },
        {
          text: this.currentPage,
          disabled: true,
          href: this.link,
          exact: true,
        },
      ],
    };
  },
  mounted() {
    console.log(this.link);
  },
};
</script>
