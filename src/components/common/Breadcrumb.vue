<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon v-text="icon" style="font-size: 1.5rem"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs',
  props: {
    currentPage: {
      type: String,
      default: '',
    },
    link: {
      type: String,
    },
    icon: {
      type: String,
      default: 'mdi-home',
    },
  },
  // ['currentPage', 'link', 'icon']
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
    // console.log(this.link);
  },
};
</script>
