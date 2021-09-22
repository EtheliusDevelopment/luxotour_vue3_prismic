<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/cinqueterre_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white">NEED SOME INSPIRATION?</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Italy Luxury Travel</h1>
        </div>
      </q-img>

      <div class="breadcrumbs">
        <q-breadcrumbs
          separator="---"
          class="text-orange"
          active-color="primary"
        >
          <q-breadcrumbs-el icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="first-block" data-aos="fade-up" data-aos-duration="2000">
      <div class="sub-section-first">
        <h2 class="text-primary text-center">
          Meticulusly curated itineraries by Luxoitalia
        </h2>
        <p class="text-center">
          Choosing Luxo Italia, and relying on our experience, means embarking
          on the trip to Italy that you’ve always dreamed of, experiencing the
          true meaning of luxury in the Bel Paese.
        </p>
        <p class="text-center">
          Get ready to explore enchanting places, historical landscapes, and
          breathtaking experiences off the beaten path in signature style – not
          to mention staying in Italy’s most luxurious boutique hotels
        </p>
        <p class="text-center">
          For us, luxury travel means curating exclusive and unforgettable
          experiences that invigorates your heart and mind. We love and savour
          Italy, what it offers, its history. We are passionate about this
          country, and we want to help you share in our passion.
        </p>
        <p class="text-center">
          We do not limit ourselves to organizing and booking a pre-established
          and undistinguished itinerary. Our objective is different; we want to
          offer you an exclusive, unique and inimitable luxury experience that
          is completely customized. What travel experience do you seek?
        </p>
        <p class="text-center">
          Stimulate all your senses. Get some inspiration below:
        </p>
      </div>
    </div>

    <div class="second-block" data-aos="fade-up" data-aos-duration="2000">
      <LuxuryTravel />
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { defineComponent } from "vue";
import LuxuryTravel from "../../components/LuxuryTravel";
import { ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    LuxuryTravel,
    PreLoader,
  },
  setup() {
    const showNow = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showNow.value = true;
      }, 1500);
      // alert(showNow)
    });

    return {
      showNow,
    };
  },
});
</script>

//

<style lang="scss" scoped>
@media screen and (min-width: 1580px) {
  .header-block .figcaption {
    padding-bottom: 3% !important;
  }
}

// **********TYPO**********

//**************HEADER BLOCK*****
.header-block .figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9037990196078431) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.header-block .figcaption h6.text-white {
  margin-bottom: 0;
}

.header-block .figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}

// **********FIRST BLOCK**********

.first-block .sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 18rem;
}

.first-block {
  margin-bottom: 6%;
  margin-top: 4%;
}

// **********SECOND BLOCK**********
.second-block {
}

@media screen and (max-width: 1100px) {
  // **********HEADER BLOCK**********
  .img1 {
    height: 20% !important;
  }
  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10rem !important;
  }
}

@media screen and (max-width: 680px) {
  // **********HEADER BLOCK**********

  .img1 {
    height: 35vh !important;
  }
  .figcaption h1.text-white.text-center {
    margin-bottom: 3vh !important;
  }

  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem !important;
  }
}
</style>
