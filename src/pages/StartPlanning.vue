<template>
  <q-page>
    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/start-planning-luxo-italia.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white desktop-only">
            SPECIALIZES TAILORING LUXURY ITALIAN TOURS
          </h6>
            <h6 class="text-white mobile-only">
            TAILORING LUXURY ITALIAN TOURS
          </h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center desktop-only">Start your luxury journey here</h1>
          <h1 class="text-white text-center mobile-only">Start your journey</h1>
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

    <div class="first-block">
      <div class="sub-section-first">
        <h2 class="text-primary text-center title-first-block">
          Start Planning !
        </h2>
        <p class="text-center">
          When it comes to planning a journey that is just right for you, there
          is no substitute for working alongside an expert — Leave the stress of
          travel planning in these troubling times to Luxo Italia and get ready
          for the trip of a lifetime!
        </p>
        <p
          class="text-center q-mt-lg"
          style="font-family: 'Commuters-Sans-Bold'"
        >
          See for yourself how easy it is to create the journey of your dreams
          with us:
        </p>
      </div>
    </div>

    <div class="cards-block">
      <div class="body flex flex-center">
        <div class="body-card q-mx-md" style="width: 30%">
          <div class="step-number text-primary flex flex-center">
            <span
              class="inner-step-number"
              style="font-size: 4rem; padding-top: 10%"
              >1</span
            >
          </div>
          <q-img
            src="~assets/13-easy-going.jpg"
            class="img-body-card"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
          <h5 class="h5-body-card q-px-md text-center text-primary">
            Tell us about your ideal journey, your budget, interests,
            preferences, style, and more
          </h5>
        </div>

        <div class="body-card q-mx-md" style="width: 30%">
          <div class="step-number text-primary flex flex-center">
            <span
              class="inner-step-number"
              style="font-size: 4rem; padding-top: 10%"
              >2</span
            >
          </div>
          <q-img
            src="~assets/8-art-culture.jpg"
            class="img-body-card"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
          <h5 class="h5-body-card q-px-md text-center text-primary">
            Make your journey your own. Unlimited round of revisions until you
            are 100% happy
          </h5>
        </div>

        <div class="body-card q-mx-md" style="width: 30%">
          <div class="step-number text-primary flex flex-center">
            <span
              class="inner-step-number"
              style="font-size: 4rem; padding-top: 10%"
              >3</span
            >
          </div>
          <q-img
            src="~assets/9-crystalline-water.jpg"
            class="img-body-card"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
          <h5 class="h5-body-card q-px-md text-center text-primary">
            Travel with around the clock Luxo Italia support. We ’ re available
            24/7 by phone, whatsapp or email.
          </h5>
        </div>
      </div>

      <div class="btnbox flex flex-center q-mt-lg" style="width: 100%">
        <button
          class="general-btn-1 btn-step"
          style="padding: 1% 2%"
          onclick="window.open('https://calendly.com/info-15731/15min?month=2021-08')"
        >
          BOOK A CALL NOW
        </button>
      </div>
    </div>

    <div class="video-block">
      <a href="https://vimeo.com/464780853" target="_blank">
        <q-img
          src="~assets/banner-video.jpg"
          :ratio="16 / 9"
          fit="contain"
          spinner-color="primary"
          spinner-size="82px"
        />
      </a>
    </div>

    <div class="second-block">
      <div class="sub-section-first bg-info">
        <div class="text-box-second-block">
          <h2 class="text-primary title-h2 h2-second-block">Luxury Packages</h2>
          <p class="body-p">
            Looking to experience a real taste of all that Italy has to offer
            but don’t know where to begin? We’ve travelled far and wide, and
            have carefully crafted eight tried and tested luxury Italy travel
            packages that showcase the best of this iconic destination.
          </p>
          <p class="body-p">
            Our packages include luxury accommodation, exceptional cuisine,
            private guides, exclusive access to popular sites and top class
            transfers. Our pricing for Luxury Packages begins at €800 per person
            per night and varies depending on location and season. Send us your
            travel dates and number of guests and we’ll get back to you with a
            personalised quote.
          </p>

          <div class="btn-box-discover">
            <button
              class="general-btn-2 btn-fifth-block q-my-md"
              style="margin-left: 5%"
              @click="$router.push('/luxury-travel')"
            >
              DISCOVER OUR TOURS
            </button>
          </div>
        </div>
      </div>

      <q-img
        class="img1 img-about"
        img-class="img1-luxury"
        src="~assets/capri_faraglioni.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="facebook-block">
      <CarouselFacebook />
    </div>
  </q-page>
</template>

<script>
import CarouselFacebook from "src/components/Utils/CarouselFacebook.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: {
    CarouselFacebook,
  },

  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
  }
}

// TYPO *****************

.h5-body-card {
  font-family: "Hatton-Medium";
  font-size: 20px;
}

.figcaption {
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

.figcaption h6.text-white {
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}

.header-block {
  margin-bottom: 10%;
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

.title-first-block {
  padding: 0 13%;
  line-height: 60px;
}

// *********CARD BLOCK***********

.body {
  padding: 0 15rem;
}

.body-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  width: 100px;
  height: 100px;
  border: 2px solid $info;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: 6vh;
  z-index: 99;
}

.img-body-card {
  height: 430px;
}

// **********SECOND BLOCK**********

.second-block {
  display: grid;
  grid-template-columns: 1.8fr 0.6fr 1fr;
  grid-template-rows: 0.2fr 1fr 0.2fr;
  margin-bottom: 10%;
}

.second-block .sub-section-first {
  grid-column: 1/3;
  grid-row: 1/3;
  display: grid;
  grid-template-columns: auto 30%;
  grid-template-rows: 10vh auto;
}

.second-block .img1 {
  grid-column: 2/4;
  grid-row: 2/4;
}

.text-box-second-block {
  grid-column: 1;
  grid-row: 2;
  margin-left: 14%;
}

.body-p {
  margin-left: 5%;
  padding-right: 18%;
}

.title-h2 {
  padding: 0 30% 0 0 !important;
}

.btn-box-discover {
  margin-bottom: 10%;
}

// ********************************

@media screen and (max-width: 1300px) {
  // *****CARDS BLOCK***********

  .body {
    padding: 0 15%;
  }

  .body-card {
    width: 40% !important;
  }
}

@media screen and (max-width: 1100px) {
  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10rem !important;
  }

  // *****CARDS BLOCK***********

  .body {
    padding: 0 10%;
  }

  .body-card {
    width: 40% !important;
  }

  //  SECOND BLOCK
  .title-h2 {
    padding: 0 10% 0 0 !important;
  }

  // ************************
}

@media screen and (max-width: 680px) {

  // TYPO****************

  .title-first-block{
    padding: unset !important;
  }

  // HEADER BLOCK****************
  .img1 {
    height: 35vh !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
    font-size: 33px;
  }

  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem !important;
  }

  //******** */  CARDS BLOCK**************

  .body {
    padding: 0 5%;
  }

  .body.flex.flex-center {
    flex-direction: column;
  }

  .body-card {
    width: 100% !important;
    margin: unset;
  }

  // ****SECOND BLOCK **********

  .img-about {
    display: none !important;
  }

  .second-block {
    grid-template-columns: 100% !important;
    grid-template-rows: auto auto !important;
  }

  .second-block .sub-section-first {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
    padding: 10% 5% !important;
    grid-column: 1 !important;
    grid-row: 1 !important;
  }

  .second-block .img1 {
    display: block !important;
    grid-column: 1 !important;
    grid-row: 2 !important;
    height: 530px !important;
  }

  .title-h2 {
    padding: unset !important;
    text-align: center !important;
  }

  .body-p {
    text-align: center !important;
    padding-right: unset !important;
    margin-left: unset !important;
  }

  .text-box-second-block {
    margin-left: unset !important;
  }

  .btn-box-discover {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: unset !important;
  }

  // ***************************
}
</style>
