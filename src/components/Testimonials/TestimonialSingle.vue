<template>
  <div class="header-block">
    <q-img
      class="img1"
      img-class="img1-luxury"
      :src="single.header_block_img"
      :ratio="16 / 9"
      spinner-color="primary"
      spinner-size="82px"
      height="600px"
    >
      <div class="figcaption">
        <h6 class="text-white">A FULFILLING EXPERIENCE</h6>
        <q-separator color="white" inset />
        <h1 class="text-white text-center">{{ single.header_block_title }}</h1>
      </div>
    </q-img>

    <div class="breadcrumbs">
      <q-breadcrumbs separator="---" class="text-orange" active-color="primary">
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
        <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
      </q-breadcrumbs>
    </div>
  </div>

  <div class="first-block">
    <div class="sub-section-first">
      <p class="text-center p-body-testimonials">{{ single.intro }}</p>
      <button class="general-btn-1" style="padding: 2% 4%">
        DOWNLOAD STORY
      </button>
    </div>
  </div>

  <div class="second-block">
    <div class="sub-section-first-img bg-primary">
      <q-img
        src="https://placeimg.com/500/300/nature"
        spinner-color="primary"
        spinner-size="82px"
        height="100%"
      />
    </div>

    <div class="sub-section-first bg-info">
      <h2 class="text-primary trip-journal">Trip Journal</h2>
      <h6 class="text-primary date-range">DATE: JUNE 12TH – JULY 7TH</h6>
      <p class="p-location">Locations:</p>
      <h6 class="itinerary">{{ single.location }}</h6>
    </div>
  </div>

  <div class="third-block">
    <div class="text-box">
      <h3 class="text-primary title-block">Date:</h3>
      <h3 class="text-primary title-block">
        June 12<sup>th</sup> – July 7<sup>th</sup>
      </h3>

      <p class="location_itinerary">
        <span class="location_cursor p-location">Location: </span
        >{{ single.places_bl1 }}
      </p>

      <p class="text-center p-body-testimonials">{{ single.first_par_bl1 }}</p>
      <p class="text-center p-body-testimonials">{{ single.second_par_bl1 }}</p>
      <p class="text-center p-body-testimonials">{{ single.third_par_bl1 }}</p>
      <p class="text-center p-body-testimonials">{{ single.fourth_par_bl1 }}</p>
    </div>

    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="fourth-block">
    <div class="text-box">
      <h3 class="text-primary title-block">Date:</h3>
      <h3 class="text-primary title-block">
        June 12<sup>th</sup> – July 7<sup>th</sup>
      </h3>

      <p class="location_itinerary">
        <span class="location_cursor p-location">Location: </span
        >{{ single.places_bl2 }}
      </p>

      <p class="text-center p-body-testimonials">{{ single.first_par_bl2 }}</p>
      <p class="text-center p-body-testimonials">{{ single.second_par_bl2 }}</p>
      <p class="text-center p-body-testimonials">{{ single.third_par_bl2 }}</p>
    </div>
    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="fifth-block">
    <div class="text-box">
      <h3 class="text-primary title-block">Date:</h3>
      <h3 class="text-primary title-block">
        June 12<sup>th</sup> – July 7<sup>th</sup>
      </h3>

      <p class="location_itinerary">
        <span class="location_cursor p-location">Location: </span
        >{{ single.places_bl3 }}
      </p>

      <p class="text-center p-body-testimonials">{{ single.first_par_bl3 }}</p>
      <p class="text-center p-body-testimonials">{{ single.second_par_bl3 }}</p>
      <p class="text-center p-body-testimonials">{{ single.third_par_bl3 }}</p>
      <p class="text-center p-body-testimonials">{{ single.fourth_par_bl3 }}</p>
    </div>

    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="sixth-block">
    <div class="text-box">
      <h3 class="text-primary title-block">Date:</h3>
      <h3 class="text-primary title-block">
        June 12<sup>th</sup> – July 7<sup>th</sup>
      </h3>

      <p class="location_itinerary">
        <span class="location_cursor p-location">Location: </span
        >{{ single.places_bl4 }}
      </p>

      <p class="text-center p-body-testimonials">{{ single.first_par_bl4 }}</p>
      <p class="text-center p-body-testimonials">{{ single.second_par_bl4 }}</p>
      <p class="text-center p-body-testimonials">{{ single.third_par_bl5 }}</p>
      <p class="text-center p-body-testimonials">{{ single.fourth_par_bl4 }}</p>
    </div>
    <button class="general-btn-1" style="padding: 1% 2%">
      BACK TO TESTIMONIALS AND REVIEWS
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import dbIndex from "../../db_test/testimonialSingle.json";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Italy Luxury Travel",
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const params = route.params.slug;
    const single = dbIndex.find((val) => val.slug === params);

    single ? null : router.push("/uid");

    return {
      params,
      single,
      db: ref(dbIndex),
    };
  },
};
</script>

<style lang="scss" scoped>
// TYPO**************

.p-body-testimonials {
  font-family: "Commuters-Sans-Light";
  font-size: 16px;
  line-height: 25px;
}

.title-block {
  font-family: Hatton-Semibold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-top: unset;
  margin-bottom: unset;
}

.trip-journal {
  font-family: Hatton-Medium;
  font-size: 50px;
  line-height: 65px;
  letter-spacing: 0.5px;
  margin-bottom: unset;
}

.date-range {
  font-family: "Commuters-Sans-Bold";
  font-size: 16px;
  line-height: 31px;
  margin-top: unset;
}

.itinerary {
  font-family: "Commuters-Sans-Light";
  font-size: 16px;
  line-height: 25px;
  margin-top: unset;
}
.p-location {
  font-family: "Commuters-Sans-Bold";
  font-size: 16px;
  line-height: 25px;
  margin-bottom: unset;
}

.location_itinerary {
  margin-top: 1%;
  margin-bottom: 3%;
  width: 100%;
  text-align: center;
  font-family: "Commuters-Sans-Regular";
}

.location_cursor {
  margin-right: 1%;
}

sup {
  font-size: 0.8rem !important;
}

h6.itinerary {
  padding-right: 20%;
}

// **********HEADER BLOCK**********

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6%;
}

.figcaption h6.text-white {
  margin: 1% 0 0 0;
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

// **********FIRST BLOCK**********

.first-block .sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 17.5rem;
}

.first-block {
  margin-bottom: 2%;
}

.title-first-block {
  padding: 0 13%;
  line-height: 60px;
}

.text-box {
  padding: 3% 18%;
}

// *******SECOND BLOCK***************

.second-block {
  display: grid;
  grid-template-columns: 1fr 20% 1.3fr;
  grid-auto-rows: 10vh 65vh 18vh;
  margin-bottom: 2%;
}

.sub-section-first {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 35%;
  grid-column: 2/4;
  grid-row: 1/3;
}

.sub-section-first-img {
  grid-column: 1/3;
  grid-row: 2/4;
}

// ********THIRD BLOCK ************
.third-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-block {
  display: flex;
  width: 100%;
  justify-content: center;
}

// ********FOURTH BLOCK ************
.fourth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location_cursor {
}

// ********FIFTH BLOCK ************
.fifth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location_cursor {
}

// ********SIXTH BLOCK ************
.sixth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}

@media screen and (max-width: 1100px) {
  // TYPO**************

  .p-body-testimonials {
  }

  .title-block {
    transform: scale(0.9);
  }

  .trip-journal {
    transform: scale(0.9);
  }

  .date-range {
    transform: scale(0.9);
  }

  .itinerary {
    transform: scale(0.9);
  }
  .p-location {
    transform: scale(0.9);
  }

  // HEADER BLOCK****************
  .img1 {
    height: 20% !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // **********FIRST BLOCK**********

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5% 5% !important;
  }

  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 680px) {
  // TYPO**************

  .p-body-testimonials {
  }

  .title-block {
    transform: scale(0.85);
  }

  .trip-journal {
    text-align: center;
  }

  .date-range {
    text-align: center;
  }

  .itinerary {
    text-align: center;
    padding-right: unset !important;
    transform: scale(0.85);
  }
  .p-location {
    text-align: center;
    transform: scale(0.85);
  }

  // HEADER BLOCK****************

  .img1 {
    height: 35vh !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }
  // **********FIRST BLOCK**********
  .first-block {
    margin-bottom: unset;
  }

  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5% 10% !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }
  .text-box {
    padding: 3% 3%;
  }

  .sub-section-first {
    align-items: center;
  }
  // *****SECOND BLOCK****

  .second-block {
    grid-template-columns: auto;
    grid-auto-rows: 30vh auto;
    margin-bottom: 10%;
  }

  .sub-section-first-img {
    grid-column: 1;
    grid-row: 1;
    box-sizing: border-box;
    border: 10px solid $info;
    background-color: $info !important;
  }

  .sub-section-first {
    padding-left: unset;
    grid-column: 1;
    grid-row: 2;
    margin-left: unset;
  }
}
</style>
