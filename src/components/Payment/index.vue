<template>
  <div class="header-block">
    <div class="figcaption">
      <h6 class="text-white text-center" style="margin-bottom: 10%">
        THANK YOU
      </h6>
      <q-separator color="white" inset />
      <h1 class="text-white text-center">{{ customerName }}</h1>
    </div>
  </div>
  <div class="payment-block-wrapper">
    <div class="payment-block">
      <img :src="image" alt="" />
      <div class="text-box">
        <h2 class="text-primary" style="line-height: 60px">
          Package Balance: {{ packageName }}
        </h2>
        <h6 style="text-transform: uppercase" class="text-primary">
          DATE: {{ travelDate }}
        </h6>
        <p class="" v-for="(postPar, index) in description" :key="index">
          {{ postPar.text }}
        </p>
        <h2 class="text-info" style="font-size: 30px">{{ price }}</h2>
        <a :href="paymentLink" target="_blank" style="width: fit-content">
          <button
            class="general-btn-1"
            data-v-2c11fd19=""
            style="padding: 8% 5%; width: 150px"
          >
            CHECK OUT
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("my.payments.uid", this.thisRoute)
      );
      this.customerName = response.results[0].data.cutomer_name[0].text;
      this.travelDate = response.results[0].data.date[0].text;
      this.packageName = response.results[0].data.package_name[0].text;
      this.paymentLink = response.results[0].data.payment_link.url;
      this.image = response.results[0].data.payment_image.url;
      this.price = response.results[0].data.price_field[0].text;
      this.description = response.results[0].data.package_descritpion;
    },
  },
  created() {
    this.getContent();
  },
  setup() {
    const route = useRoute();
    const thisRoute = route.params.name;
    const customerName = ref();
    const packageName = ref();
    const travelDate = ref();
    const paymentLink = ref();
    const image = ref();
    const price = ref();
    const description = ref();

    return {
      route,
      thisRoute,
      customerName,
      packageName,
      travelDate,
      paymentLink,
      image,
      price,
      description,
    };
  },
};
</script>

<style scoped lang="scss">
/* HEADER BLOCK */
.header-block {
  background-color: #d9c5a0;
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.header-block hr {
  height: 2px;
  width: 100%;
  margin: 2%;
}

.figcaption {
  padding-bottom: 3%;
}

/* PAYMENT BLOCK */

.payment-block-wrapper {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10% 0;
}

.payment-block {
  box-sizing: border-box;
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.text-box {
  box-sizing: border-box;
  width: 57%;
  display: flex;
  flex-direction: column;
  padding: 3% 0% 3% 2%;
  align-items: self-start;
}

@media screen and (max-width: 990px) {
  .payment-block {
    flex-direction: column;
  }

  .text-box {
    width: 100%;
    align-items: center !important;
  }

  .figcaption h6 {
    font-size: 20px;
  }
}

@media screen and (max-width: 770px) {
  /* HEADER BLOCK */
  .header-block {
    min-height: 35vh;
  }

  .figcaption h6 {
    font-size: 18px;
  }

  .text-box {
    align-items: center !important;
  }
}
</style>
