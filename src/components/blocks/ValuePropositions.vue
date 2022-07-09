<template>
  <div class="valud-propositions">
    <v-container>
      <v-row>
        <div>
          <v-btn
            icon
            outlined
            color="primary"
            @click="model === 0 ? (model = valueProps.length - 1) : model--"
            x-large
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            @click="model === valueProps.length - 1 ? (model = 0) : model++"
            icon
            outlined
            color="primary"
            class="mx-4"
            x-large
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-sheet class="ml-n16 py-0 transparent" elevation="0" min-width="115vw">
        <v-slide-group
          v-model="model"
          class="pa-0"
          center-active
          next-icon=""
          prev-icon=""
          :show-arrows="false"
        >
          <v-slide-item
            v-for="(prop, n) in valueProps"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <div
              @click="toggle"
              class="my-10"
              :class="n === 3 ? 'ml-5' : 'mx-5'"
              :style="{
                border: active
                  ? '1px solid transparent'
                  : '1px solid transparent',
                transform: active ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                paddingRight: n === 3 ? '15vw' : '',
                marginRight: n === 3 ? '15vw' : '',
              }"
            >
              <ValuePropCard
                :text="prop.text"
                :title="prop.title"
                :image="prop.image"
                class="rounded-lg"
                :class="{ 'elevated-light': active }"
              />
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
    <!-- </v-row>
    </v-container> -->
  </div>
</template>

<script>
import ValuePropCard from "@/components/blocks/ValuePropCard.vue";

export default {
  components: { ValuePropCard },
  data() {
    return {
      model: 0,
      model2: null,
      valueProps: [
        {
          image: "borderlesspayments.svg",
          title: "Borderless Payments",
          text: `We provide loans to grow your business, focus on your business
              rather than worry about capital.`,
        },
        {
          image: "businessfinancing.svg",
          title: "Business Financing",
          text: `We provide loans to grow your business, focus on your business
              rather than worry about capital.`,
        },
        {
          image: "buyoncredit.svg",
          title: "Buy on Credit",
          text: `We provide loans to grow your business, focus on your business
              rather than worry about capital.`,
        },
        {
          image: "smartbanking.png",
          title: "Smart Banking",
          text: `We provide loans to grow your business, focus on your business
              rather than worry about capital.`,
        },
      ],
    };
  },
};
</script>

<style>
</style>