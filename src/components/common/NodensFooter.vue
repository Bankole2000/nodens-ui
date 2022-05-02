<template>
  <footer class="main-footer black white--text">
    <div class="upper-footer py-12" style="background-color: #72aaf5">
      <v-container>
        <v-row>
          <v-col col="12">
            <h3 class="font-weight-bold mb-4 black--text display-2">
              Want to know more?
            </h3>
            <p class="text-h4 black--text">
              Schedule a meeting or send a message
            </p>
            <div class="mt-16">
              <v-btn
                v-for="(item, index) in contactButton"
                :key="index"
                x-large
                elevation="0"
                rounded-lg
                :to="{ name: `${item.link}` }"
                :class="{
                  'mr-10': index == 0,
                  'black white--text': index == 0,
                  'white black--text': index == 1,
                }"
              >
                {{ item.text }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="down-footer py-12">
      <v-container>
        <v-row>
          <v-col cols="6" md="4" lg="4">
            <h3 class="footer-logo display-2 font-weight-bold mb-4">
              Nodensinc
            </h3>
            <p class="text-body-1">
              Create a future that is accessible and connected
            </p>
          </v-col>
          <v-col col="3" md="2" lg="2">
            <v-btn class="mb-1 d-block text-capitalize" color="white" plain>
              Company
            </v-btn>
            <v-btn
              class="text-capitalize d-bloc"
              :to="{ name: 'pages.contact-us' }"
              color="white"
              plain
            >
              Contact us
            </v-btn>
          </v-col>

          <v-col col="3" md="2" lg="2">
            <v-btn class="mb-1 text-capitalize d-block" color="white" plain>
              News
            </v-btn>
            <v-btn class="text-capitalize d-block" color="white" plain>
              Reports
            </v-btn>
          </v-col>

          <v-col col="3" md="2" lg="2">
            <v-btn class="mb-1 text-capitalize d-block" color="white" plain>
              Media assets
            </v-btn>
            <v-btn class="text-capitalize d-block" color="white" plain>
              Profile assets
            </v-btn>
          </v-col>

          <v-col col="3" md="2" lg="2" class="text-right">
            <v-btn icon class="" color="white">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <br />
            <v-btn icon class="" color="white">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-20 align-baseline">
          <v-col cols="7" md="8">
            <span class="text-body-1"
              >&copy; 2022 - <span>Nodens Inc.</span> All Rights Reserved.</span
            >
          </v-col>
          <v-col col="5" md="4" lg="4" class="d-flex justify-space-between">
            <v-btn
              class="text-capitalize"
              :to="{ name: 'pages.privacy-policy' }"
              color="white"
              plain
            >
              Privacy Policy
            </v-btn>
            <v-btn
              class="text-capitalize"
              :to="{ name: 'pages.terms-of-use' }"
              color="white"
              plain
            >
              Terms of use
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contactButton: [
        {
          text: 'Schedule a meeting',
          link: '#',
        },
        {
          text: 'Contact us',
          link: 'pages.contact-us',
        },
      ],
    };
  },
};
</script>

<style></style>
