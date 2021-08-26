<template>
  <q-page class="main-content-index">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="imgMain"
        img-class="imgMain-index"
        src="~assets/img_main_index.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="120vh"
      >
        <div class="absolute-top figcaption" style="height: 100%">
          <h1 class="text-white text-center h1-header-block">
            Italy’s Finest <br />
            Luxury Experiences
          </h1>

          <q-separator color="white" inset />

          <h6 class="text-white title-header-h6 text-center">
            TAILORED TO YOUR PASSIONS AND TASTES
          </h6>

          <button class="btn-main-index" @click="$router.push('/start_planning')">LEARN WHAT WE DO</button>
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
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="first-block">
      <div class="sub-section-first">
        <h2 class="text-primary text-center">
          Luxury private tour of Italy and custom experiences
        </h2>
        <p class="text-center p-first-block">
          A special and unique time to create wonderful memories with the people
          you love the most. So don’t limit your expectations and dreams! An
          exclusive visit to the secret rooms of the Vatican. A private vineyard
          experience in Tuscany led by the owners. We will design your perfect
          italian luxury travel together.
        </p>
        <p class="text-center p-first-block">
          We are here to listen to your travel interests and special needs, then
          we will plan a detailed itinerary togheter and take care of all the
          pre-trip arrangements. You’ll save time on planning complex
          itineraries, all kinds of bookings, and being frustrated.
        </p>

        <button class="general-btn-1 q-mt-xl" style="padding: 1% 2%" @click="$router.push('/start_planning')">
          LEARN WHAT WE DO
        </button>
      </div>
    </div>

    <div class="second-block">
      <q-img
        class="img2"
        img-class="img2-index"
        src="~assets/luxury-travel-rome-luxoitalia-3.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-img
        class="img3"
        img-class="img3-index"
        src="~assets/luxury-travel-rome-luxoitalia-4.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="second-block-add">
      <div class="sub-section-first-2">
        <h2 class="text-primary h2-inspiration">Need some inspiration?</h2>
        <p class="p-first-block p-inspiration">
          At Luxo Italia, we pride ourselves in offering our clients luxury
          private tours of Italy that are exclusive, authentic and that treat
          each guest as an individual. Our founders, Andrea and Paul, are
          dedicated to delivering a top quality, guest-centred experience that
          showcases the beauty of Italy in a way that suits your unique travel
          style. With a network of the best in Italian hospitality, Andrea and
          Paul’s vast industry knowledge makes them experts in understanding
          what it is that each guest needs and how they can best be of service.
          From new ways to discover much-loved monuments to exploring a side of
          world famous cities that not everyone is lucky enough to see, we offer
          guests a real taste of Italy at your own pace.
        </p>
      </div>
    </div>

    <div class="third-block">
      <Carouselindex />
    </div>

    <LuxuryHomePage class="luxury-home-page" />

    <div class="fourth-block">
      <q-img
        class="img4"
        img-class="img4-index"
        src="~assets/index_luxo_partners.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first-3">
        <div class="text-sub-section-first-3">
          <h6 class="text-primary subtitle-h6">PAUL &amp; ANDREA</h6>
          <h2 class="text-primary title-h2">
            Your Personal Luxury Travel Designers
          </h2>
          <p class="body-p">
            We do not just create luxury vacations in Italy, but rather
            extraordinary and unique life experiences. Each of our luxury tours
            is different simply because our travelers arranged it with us. For
            this reason, our objective is to provide you with a friendly, unique
            and warm personal approach to discussing, creating, and planning
            every detail of your travel.
          </p>
          <p class="body-p">
            During your entire luxury tour, you will travel with local experts,
            who have a deep love for their country and are proud to share the
            hidden luxury gems of Italy with you. Are you ready to experience
            the most beautiful and captivating trip of your life?
          </p>
          <div class="btn-fifth-block-x">
            <button class="general-btn-2 btn-fifth-block" @click="$router.push('/start_planning')">
              START PLANNING
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="sixth-block">
      <h2 class="text-primary text-center">Why book with Luxo Italia</h2>

      <div class="sub-section-first-sixth-block">
        <div class="members-review">
          <p class="text-center title-card-six text-primary">Lorem Ipsum</p>

          <p class="text-center body-card-six">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div class="members-review">
          <p class="text-center title-card-six text-primary">Lorem Ipsum</p>

          <p class="text-center body-card-six">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div class="members-review">
          <p class="text-center title-card-six text-primary">Lorem Ipsum</p>

          <p class="text-center body-card-six">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>

    <div class="video-block">
      <a href="https://vimeo.com/464780853" target="_blank">
     <q-img
       src="~assets/banner-video.jpg"
       :ratio="16/9"
       fit="contain"
       spinner-color="primary"
       spinner-size="82px"
     />
      </a>
    </div>

    <div class="seventh-block">
      <q-img
        img-class="col-md-2 test22"
        src="~assets/main_sponsors_index.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="fifth-block">
      <div class="sub-section-first-4">
        <h6 class="text-primary subtitle-h6">
          HELP US CREATE THE MOST BEAUTIFUL SCRIPT FOR YOUR HOLIDAY
        </h6>
        <h2 class="text-primary title-h2">
          What kind of luxury traveler are you?
        </h2>
        <p class="body-p">
          We do not just create luxury vacations in Italy, but rather
          extraordinary and unique life experiences. Each of our luxury tours is
          different simply because our travelers arranged it with us. For this
          reason, our objective is to provide you with a friendly, unique and
          warm personal approach to discussing, creating, and planning every
          detail of your travel.
        </p>
        <p class="body-p">
          During your entire luxury tour, you will travel with local experts,
          who have a deep love for their country and are proud to share the
          hidden luxury gems of Italy with you. Are you ready to experience the
          most beautiful and captivating trip of your life?
        </p>

        <div class="btn-fifth-block-x">
          <button class="general-btn-1 btn-start-quiz" @click="$router.push('/quiz')">START THE QUIZ</button>
        </div>
      </div>

      <q-img
        class="img5"
        img-class="img5-index"
        src="~assets/index_luxo_small_village.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="img-block-last">
      <q-img
        src="~assets/luxo_img_1_index.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="530px"
      />
    </div>

    <CarouselFacebook style="margin-bottom: 10%" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import PreLoader from "src/components/PreLoader.vue";
import Carouselindex from "src/components/Utils/CarouselIndex.vue";
import CarouselFacebook from "src/components/Utils/CarouselFacebook.vue";

import LuxuryHomePage from "src/components/LuxuryTravel/LuxuryHomePage.vue";

export default {
  components: {
    PreLoader,
    Carouselindex,
    LuxuryHomePage,
    CarouselFacebook,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK***********
@media screen and (min-width: 1580px) {
  .fifth-block {
    grid-template-rows: 0.8fr !important;
    margin: 0 3% 0% 3% !important;
  }
}

@media screen and (max-width: 1580px) {
  .first-block {
    margin-bottom: 5%;
  }

  .fourth-block {
    grid-template-rows: 0.1fr 1fr 0.1fr !important;
  }

  .text-sub-section-first-3 {
    padding-top: 1% !important;
  }

  .first-block {
    grid-template-rows: 80vh auto !important;
  }
}

// ********HEADER BLOCK*********
.h1-header-block {
  font-family: Hatton-Semibold;
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 1.5% !important;
}

hr {
  height: 3px;
  width: 20%;
}

h2.text-primary {
}

.p-first-block {
  padding: 0 17% 0 11%;
}

.title-header-h6 {
  font-size: 18px !important;
  line-height: 23px !important;
  letter-spacing: 3px !important;
  margin-top: 1% !important;
}

.btn-main-index {
  border: 2px solid;
  padding: 1% 2%;
  background-color: transparent;
  color: white;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-main-index:hover {
  background-color: white;
  color: #4c4571;
}

.figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  margin-top: 5%;
  background: rgb(0, 0, 0) !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 65%
  ) !important;
}

.first-block {
  display: grid;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 65vh auto;

  /* grid-template-columns: auto; */
}

.img1-index {
  grid-column: 1;
  grid-row: 1;
}
.img1 {
  position: relative;
  bottom: 12rem;
}
.sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  grid-column: 2;
  grid-row: 1;
  position: absolute;
  padding: 6rem;
}
.btn-1 {
  grid-column: 1/3;
  grid-row: 2;
}

// *********SECOND BLOCK ********
.second-block {
  display: grid;
  grid-template-columns: 2fr 0.3fr 1fr;
  grid-template-rows: 25vh 50vh 25vh;
}

// *********SECOND BLOCK ADD********
.second-block-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}

.img2 {
  grid-column: 1/3;
  grid-row: 1/3;
}

.img3 {
  grid-column: 2/4;
  grid-row: 2/4;
}

.img3-index {
  position: relative;
  top: 25vh;
  object-position: 15% 50% !important;
}

.sub-section-first-2 {
  grid-column: 1/4;
  grid-row: 4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
}

.p-long-text {
  padding: 0 10vw;
}
.third-block {
  margin-bottom: 15%;
}

// ******FOURTH BLOCK******

.fourth-block {
  display: grid;
  grid-template-columns: 34% 10% 56%;
  grid-template-rows: 0.1fr 1fr 0.1fr !important;
  margin-bottom: 10%;
}

.title-h2 {
  line-height: 65px;
  margin-bottom: 5% !important;
  padding: 0 40% 0 0 !important;
  letter-spacing: 1px !important;
}

.body-p {
  margin-left: 5%;
  padding-right: 10%;
}

.body-btn {
  margin-left: 5%;
}

.text-sub-section-first-3 {
  margin-left: 5%;
}

.img4 {
  grid-column: 1/3;
  grid-row: 1/3;
}

.sub-section-first-3 {
  background-color: $info;
  grid-column: 2/4;
  grid-row: 2/4;
  display: grid;
  grid-template-columns: 10vw auto;
}
.text-sub-section-first-3 {
  grid-column: 2;
  padding-top: 6%;
}

// LUXURY BLOCK *******************
.luxury-home-page {
  display: none;
}

// **********FIFTH BLOCK**********

.fifth-block {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  margin: 0 7% 5% 7%;
}

.btn-fifth-block {
  margin-left: 5%;
  margin-top: 2%;
}

.sub-section-first-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  margin-left: 4%;
}

.btn-start-quiz {
  align-self: flex-start;
  margin-left: 5%;
  margin-top: 2%;
}

.img5 {
  grid-column: 2;
}

h6.text-primary.subtitle-h6 {
  padding: 0 30% 0 0 !important;
  margin-bottom: unset;
}

// **********VIDEO  BLOCK**********

.video-block {
 
}
// **********SIXTH BLOCK**********

.sixth-block {
  margin: 10% 3%;
}
.sub-section-first-sixth-block {
  display: flex;
}

.separator-sixth-block {
}

p.text-center.title-card-six {
  font-family: "Commuters-Sans-Bold";
  font-size: 17px;
}

.members-review {
  padding: 0 6%;
}

// **********SEVENTH BLOCK**********
.seventh-block {
  padding: 0 5vw 5vw 5vw;
}

.btn-fifth-block-x {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

// **********CARD BLOCK**********

.card-block {
  margin-bottom: 10%;
}

.my-card {
  position: relative;
  left: 15vw;
  width: 50vw;
  z-index: 9;
}

.btn-toolbar-new {
  border: none;
  padding: 1% 3%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

// TYPO**********************
.h2-card-block {
  margin-bottom: unset;
  font-size: 50px;
  letter-spacing: 1px;
}

.subtitle-h6-card-block {
  margin-top: 1.5%;
  font-size: 24px;
  letter-spacing: 5px;
}

// END TYPO**********************

// **********IMAGE BLOCK LAST**********

.img-block-last {
  display: none;
  margin-top: 4%;
  margin-bottom: 10%;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 4s ease;
}

@media screen and (max-width: 1100px) {
  .h1-header-block {
    font-size: 45px !important;
    line-height: 50px !important;
    margin-bottom: 1.5% !important;
  }

  .first-block {
    grid-template-columns: 56vw 40vw !important;
    grid-template-rows: 30vh 35vw !important;
  }

  h2.text-primary {
  }
  .p-first-block {
    padding: 0 10% !important;
  }

  .img1-index {
    grid-column: 1;
    grid-row: 1;
    object-fit: contain;
    position: 50% 50%;
  }

  .img1 {
    bottom: 6rem !important;
    display: none;
  }

  .sub-section-first {
    position: unset !important;
    padding: unset !important;
    grid-column: 1/3 !important;
    grid-row: 1 !important;
    margin: 30% 0.75rem 0 0.75rem;
  }

  .img3-index {
    object-position: 15% 50% !important;
  }

  .second-block {
    grid-template-rows: 0.185fr 2.1fr 0.55fr !important;
  }

  .title-h2 {
    line-height: 50px !important;
  }

  .title-header-h6 {
    font-size: 18px !important;
    line-height: 23px !important;
    letter-spacing: 3px !important;
    margin-top: 1% !important;
  }
}

@media screen and (max-width: 680px) {
  figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9;
    background: transparent !important;
  }

  .imgMain {
    height: 100vh !important;
  }

  .first-block {
    display: grid;
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;

    /* grid-template-columns: auto; */
  }

  .img1-index {
    grid-column: 1/3;
    grid-row: 1;
    object-fit: contain;
    position: 50% 50%;
  }
  .img1 {
    bottom: 5rem !important;
    display: none;
  }
  .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    grid-column: 1/3 !important;
    grid-row: 1 !important;
    position: unset !important;
    padding: 0 2% !important;
    margin: unset;
  }

  .btn-1 {
    grid-column: 1/3;
    grid-row: 2;
  }
  h2.text-primary {
  }
  .p-first-block {
    padding: 0 5% !important;
  }
  .second-block {
    display: grid;
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
  }
  .img2 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  .img3 {
    grid-column: 1;
    grid-row: 1;
    height: 530px !important;
  }

  .img3-index {
    position: relative;
    top: 25vh;
    object-position: 15% 50% !important;
  }

  .sub-section-first-2 {
    grid-column: 1/4;
    grid-row: 4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 2% !important;
  }

  .p-long-text {
    padding: 0 10vw;
  }
  .third-block {
  }

  .q-img.q-img--menu.img3 {
  }

  .q-img.q-img--menu.img2 {
    display: none !important;
  }
  .fourth-block {
    grid-template-columns: 100% !important;
    grid-template-rows: 220px 220px auto !important;
    margin-bottom: 10% !important;
  }

  .img4 {
    grid-column: 1;
    grid-row: 1/3;
    padding: 1% 1% 0 1%;
    height: 440px !important;
  }

  .sub-section-first-3 {
    background-color: $info;
    grid-column: 1;
    grid-row: 2/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // .fifth-block {
  //   display: grid;
  //   grid-template-columns: 50% 50%;
  //   grid-template-rows: 70vh;
  //   padding: 10vw 5vw;
  // }

  .sub-section-first-4 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1;
  }

  .img5 {
    grid-column: 2;
  }

  .seventh-block {
    padding: 0 5vw 5vw 5vw;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 2s ease;
  }

  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity 4s ease;
  }

  .h1-header-block {
    font-size: 30px !important;
    line-height: 35px !important;
    margin-bottom: 1.5% !important;
  }

  .fourth-block .img4 {
  }

  .text-sub-section-first-3 {
    margin-left: 5% !important;
    padding: 250px 0 15% 0 !important;
  }

  .sub-section-first-sixth-block {
    flex-direction: column !important;
  }

  .title-h2 {
    line-height: 30px !important;
  }

  .img5 {
    display: none !important;
  }

  .fifth-block .sub-section-first-4 {
    grid-column: 1/3 !important;
  }

  // TYPO**********************
  .h1-header-block {
    font-size: 40px !important;
    line-height: 50px !important;
    margin-bottom: 4.5% !important;
  }

  .title-header-h6 {
    font-size: 18px !important;
    line-height: 23px !important;
    letter-spacing: 3px !important;
    margin-top: 4.5% !important;
  }

  .btn-main-index {
    padding: 3% 6% !important;
  }

  .first-block {
    margin-top: 10% !important;
    margin-bottom: 10% !important;
  }

  .third-block {
    display: none !important;
  }

  .second-block {
    margin: 10% 0 !important;
  }

  .h2-inspiration {
    text-align: center !important;
    font-size: 30px;
    line-height: 38px;
  }
  .p-inspiration {
    text-align: center !important;
  }

  .general-btn-1 {
    margin-top: 4% !important;
    margin-left: 0% !important;
  }

  h6.text-primary.subtitle-h6 {
    font-family: Commuters-Sans-Bold;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    padding: 0 !important;
  }

  .title-h2 {
    text-align: center;
    padding: 0 !important;
  }

  .text-sub-section-first-3 {
    margin-left: 0% !important;
  }

  .body-p {
    margin-left: 5%;
    padding-right: 5%;
    text-align: center !important;
  }

  .luxury-home-page {
    display: grid !important;
  }
  .btn-fifth-block-x {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .btn-fifth-block-x .btn-fifth-block {
    margin-left: unset !important;
  }

  .sub-section-first-4 {
    margin-left: 0% !important;
  }

  .img-block-last {
    display: block;
  }
}
</style>
