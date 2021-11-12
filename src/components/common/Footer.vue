<template>
  <div class="page-footer">
    <v-footer class="mt-16 pt-16">
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <p class="text-h6 mt-1 mb-4 font-weight-bold">Contact Us</p>
            <div
              style="
                display: flex;
                align-items: center;
                width: 80%;
                justify-content: space-between;
              "
            >
              
                <v-avatar color="primary">
                  <v-icon color="white">mdi-instagram</v-icon>
                </v-avatar>
              
              <v-avatar color="primary">
                <v-icon color="white">mdi-twitter</v-icon>
              </v-avatar>
              <v-avatar color="primary">
                <v-icon color="white">mdi-facebook</v-icon>
              </v-avatar>
              <v-avatar color="primary">
                <v-icon color="white">mdi-linkedin</v-icon>
              </v-avatar>
            </div>
            <p class="mt-4 mb-2">
              <a href="mailto:support@nodtransfer.com"
                >support@nodtransfer.com</a
              >
            </p>
            <p class="mt-0">
              <a href="tel:+2347042629950">NG: +234 704 2629 950</a>
            </p>
          </v-col>
          <v-col cols="12" sm="3">
            <!-- <NodCheckoutBlueLogo /> -->
          </v-col>
          <v-col cols="12" sm="3">
            <p class="text-h6 mt-1 mb-8 font-weight-bold">NodCheckout</p>
            <p>
              <a href="">For Shoppers</a>
            </p>
            <p>
              <a href="">For Businesses</a>
            </p>
            <p>
              <a href="">Help & Support</a>
            </p>
            <p>
              <a href="">Terms and Conditions</a>
            </p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </v-col>
          <v-col cols="12" sm="3">
            <p class="text-h6 mt-1 mb-8 font-weight-bold">Other Links</p>
            <p>
              <a href="">NodCredit</a>
            </p>
            <p>
              <a href="">NodTransfer</a>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <p class="text-center mb-16 mt-8">
            NodCheckout @&copy;{{ new Date().getFullYear() }}. All rights
            reserved.
          </p>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
// import NodCheckoutBlueLogo from "../../Common/NodCheckoutBlueLogo.vue";
export default {
  // components: { NodCheckoutBlueLogo },
  
};
</script>

<style>
</style>