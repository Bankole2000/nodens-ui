<template>
  <div
    class="presskit-page pt-100"
    style="background-color: #eaebf9"
    :style="{ marginTop: `-${navbarHeight}px` }"
  >
    <v-container>
      <v-row class="mb-24">
        <v-col cols="12" md="6" lg="6">
          <h1 class="text-h2 font-weight-600">
            Useful Resources for Press and Media
          </h1>
        </v-col>
        <v-col cols="12 mt-16">
          <template>
            <v-item-group v-model="onboarding" class="" mandatory>
              <v-item
                v-for="link in links"
                :key="`btn-${link.value}`"
                v-slot="{ active, toggle }"
              >
                <v-btn
                  :input-value="active"
                  class="mr-10 text-capitalize"
                  plain
                  text
                  @click="toggle"
                >
                  {{ link.text }}
                </v-btn>
              </v-item>
            </v-item-group>
            <v-window v-model="onboarding" reverse>
              <v-window-item v-for="link in links" :key="`card-${link.value}`">
                <!-- <v-card color="" height=""> -->
                <component :is="link.comp"> </component>
              </v-window-item>
            </v-window>

            <!-- <v-card-actions class="justify-space-between"> -->

            <!-- </v-card-actions> -->
            <!-- </v-card> -->
          </template>
        </v-col>
      </v-row>
    </v-container>
    <partner />
    <NodensFooter />
  </div>
</template>

<script>
import News from '@/views/media/News.vue';
import Reports from '@/views/media/Reports.vue';
import Partner from '../components/common/Partner.vue';
import ProductLogo from '@/views/media/ProductLogo.vue';
import People from '@/views/media/People.vue';
import NodensFooter from '../components/common/NodensFooter.vue';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      length: 3,
      onboarding: 0,
      links: [
        {
          text: 'In the news',
          value: 1,
          comp: 'News',
        },
        {
          text: 'Reports',
          value: 2,
          comp: 'Reports',
        },
        {
          text: 'Product logos',
          value: 3,
          comp: 'ProductLogo',
        },
        {
          text: 'People and roles',
          value: 4,
          comp: 'People',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'ui/navbarHeight',
    }),
  },
  components: { News, Reports, ProductLogo, People, NodensFooter, Partner },
};
</script>

<style>
.v-btn--active {
  background-color: #d8e9ff !important;
  color: #0068eb !important;
  border-radius: 30px;
}
</style>
