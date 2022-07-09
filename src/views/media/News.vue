<template>
  <div class="mt-16">
    <v-row class="fill-height" align="center" justify="center">
      <v-col
        cols="6"
        class="mb-4"
        md="4"
        lg="4"
        xl="4"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="news">
          <img :src="require(`@/assets/imgs/${post.image}`)" alt="" />
          <div class="name text-body-main black--text font-weight-medium mb-2">
            {{ post.title }}
          </div>
          <span class="tex-body-2 font-weight-thin text-grey">{{
            post.date
          }}</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      posts: [
        {
          id: 1,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
        {
          id: 2,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
        {
          id: 3,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
        {
          id: 4,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
        {
          id: 5,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
        {
          id: 6,
          title:
            'NodensInc raises $5.5 billion in series A funding for its flagship product, Nodbank',
          date: 'April 3, 2022',
          image: 'media-placeholder.png',
        },
      ],
    };
  },
};
</script>

<style></style>
