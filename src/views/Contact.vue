<template>
  <div
    class="contact-page pt-20"
    style="background-color: #eaebf9"
    :style="{ marginTop: `-${navbarHeight}px` }"
  >
    <v-container class="mb-16">
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6">
          <div class="">
            <h3 class="font-weight-600 text-h2 mb-6">Contact Us</h3>
            <p
              class="accent--text darken font-weight-medium mb-4 text-body-main"
            >
              At NodensInc, we’re seeking ways to make money available to
              everyone. Do you want to partner or make an enquiry about out
              services?
            </p>
            <p class="accent--text darken font-weight-medium text-body-main">
              Please fill out the form on the right corner and we promise to
              respond quick and with detailed insights.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-form ref="form" class="white pa-16 rounded-lg">
            <v-text-field
              label="Full name"
              placeholder="Enter your full name"
              outlined
            ></v-text-field>
            <v-text-field
              label="Company name"
              placeholder="Enter your company name"
              outlined
            ></v-text-field>
            <v-text-field
              label="Email address"
              placeholder="youremail@example.com"
              outlined
            ></v-text-field>
            <v-text-field
              label="Phone number"
              placeholder="Enter your phone number"
              outlined
            ></v-text-field>
            <v-textarea
              background-color="white"
              color="black"
              placeholder="How can we help you?"
              outlined
              label="Message"
            ></v-textarea>
            <v-btn
              block
              depressed
              large
              class="text-uppercase"
              style="background-color: #0068eb; color: #fff"
            >
              Send message
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <nodensFooter />
  </div>
</template>

<script>
import NodensFooter from '../components/common/NodensFooter.vue';
export default {
  name: 'Privacy',
  components: { NodensFooter },
};
</script>

<style>
p {
  color: #6e7177;
}
</style>
