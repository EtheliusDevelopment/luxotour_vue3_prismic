<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/about_header.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Paul &amp; Andrea</h1>
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
        <h2 class="text-primary text-center">Your Luxury Travel Designers</h2>
        <p class="text-center">
          We know and love every small village, corner, and place in our
          country, and we want to help you get to know it in the way that best
          reflects your tastes and preferences.
        </p>
        <p class="text-center">
          But before luxury travel designers we are above all travelers.
        </p>
        <p class="text-center">
          We love discovering new places, new foods, new cultures, learning how
          to get to know those who accompany us and enjoying the beauty of Italy
          together.
        </p>
        <p class="text-center">
          Precisely, this aspect defines the difference between what we offer
          you and what the classic luxury travel agencies offer.
        </p>
        <p class="text-center">
          We do not limit ourselves to organizing and booking a pre-established
          and undistinguished itinerary. Our objective is different; we want to
          offer you an exclusive, unique and inimitable luxury experience that
          is completely customized. What travel experience do you seek?
        </p>

        <button class="general-btn-1 q-mt-xl" style="padding: 1% 2%" @click="$router.push('/start_planning')">
          LET’S FIND OUT TOGHETER
        </button>
      </div>
    </div>

    <div class="second-block">
      <div class="sub-section-first bg-info">
        <div class="text-box-second-block">
          <h2 class="text-primary title-h2 h2-second-block">
            Why Luxo Italia? A passion that has become a job
          </h2>
          <p class="body-p">
            Luxo Italia originated from the passion and will to make your luxury
            holidays in Italy unforgettable. Every itinerary we design for your
            trip is extremely accurate and customized as if we were the clients:
            this is perhaps the best guarantee to ensure a unique and inimitable
            service. We are friends, we love to travel and we have both had work
            experiences in tourism. Meeting and discovering that we had an
            identical dream for work triggered our decision, leading us to
            conceive and then found Luxo Italia.
          </p>
        </div>
      </div>

      <q-img
        class="img1 img-about"
        img-class="img1-luxury"
        src="~assets/about_luxo_wine.png"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>


  <div class="third-block">
      <h2 class="text-primary heading-third-block text-center">Who We Are</h2>

      <q-img
        class="img3"
        img-class="img-about-4-index"
        src="~assets/paul_lewis.png"
        spinner-color="primary"
        spinner-size="82px"
      >
        <div class="figcaption figcaption-about">
          <div class="figcaption-body">
            <h2 class="text-white figcaption-title">Paul Lewis</h2>

            <h6 class="text-white figcaption-subtitle">
              COSMOPOLITAN AND DILIGENT PERFECTIONIST
            </h6>

            <q-separator color="white" inset />

            <div
              class="social-footer-content flex justify-evenly"
              style="width: 20%"
            >
              <a href="https://www.facebook.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/facebook.svg"
                />
              </a>

              <a href="https://www.instagram.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/instagram.svg"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/luxo-italia/"
                target="_blank"
              >
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/linkedin.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </q-img>
      <div class="sub-section-first q-pa-md">
        <h6 class="text-primary h6-title-sub">PAUL LEWIS</h6>

        <p class="text">
          My name is Paul and in spite of the name, I’m Italian, on my mother’s
          side. My mother passed on her passion and love for great gastronomy to
          me, while my father (of British nationality) passed on a strong sense
          of practicality and precision.
        </p>

        <p class="text">
          This multicultural mix perfectly matched my eclectic spirit, leading
          me to an “exploratory” life. Even after my first trip to the USA
          (during my childhood), I realized I was destined to travel far and
          wide without interruption. Currently, I can consider myself a sort of
          global nomad, always looking for the beauty and exclusivity the world
          can offer.
        </p>

        <p class="text">
          In addition, I became a restaurant expert and a fine wine connoisseur,
          two passions that I love to cultivate in my free time, as well as
          making the most use of them for my work. I like to design (and try)
          itineraries for the most refined tastes as well as for the most
          adventurous, in accordance with my own passions. The same ones that
          led me to found Luxo Italia with my great friend Andrea.
        </p>
      </div>

      <div class="sub-section-second q-pa-md">
        <h6 class="text-primary h6-title-sub">ANDREA DEGASPERI</h6>

        <p class="text">
          I love traveling the world, it is my greatest passion. I take great
          pride in my authentic Italic roots, which have made me, and could not
          be otherwise, a fan of the multi-faceted Italian cuisine and its
          high-quality wines.
        </p>

        <p class="text">
          Before becoming a co-founder of Luxo Italia, I experienced several
          work experiences in the hospitality industry that, combined with my
          passion for travel, proved to be fundamental in leading me to start
          this adventure with Paul.
        </p>

        <p class="text">
          Factors reinforced by my desire to work with and for people. The
          radical knowledge of the territory and the great empathy that I share
          with my partner and friend Paul allows us to design trips and
          itineraries capable of responding to the needs of every client in whom
          we instill our passion and experience—100% Italian.
        </p>

        <button class="general-btn-1 q-mt-xl desktop-only" style="padding: 2% 4%" @click="$router.push('/start_planning')">
          TALK WITH US
        </button>
      </div>

      <q-img
        class="img4"
        img-class="img-degasperi-index"
        src="~assets/andrea_degasperi.png"
        spinner-color="primary"
        spinner-size="82px"
      >
        <div class="figcaption figcaption-about">
          <div class="figcaption-body">
            <h2 class="text-white figcaption-title">Andrea Degasperi</h2>

            <h6 class="text-white figcaption-subtitle">
              EMPATHETIC, VERSATILE WITH A COMPASSIONATE SOUL
            </h6>

            <q-separator color="white" inset />

            <div
              class="social-footer-content flex justify-evenly"
              style="width: 20%"
            >
              <a href="https://www.facebook.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/facebook.svg"
                />
              </a>

              <a href="https://www.instagram.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/instagram.svg"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/luxo-italia/"
                target="_blank"
              >
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/linkedin.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </q-img>

        <button class="general-btn-1 q-mx-xl mobile-only btn-grid" style="padding: 2% 4%" @click="$router.push('/start_planning')">
          TALK WITH US
        </button>
    </div>

    <div class="fourth-block">
      <q-img
        class="img4"
        img-class="img4-index"
        src="~assets/about_luxo_partners_lake.png"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first-3">
        <div class="text-sub-section-first-3">
          <h2 class="text-primary title-h2">
            A luxury trip that comes from getting to know each other
          </h2>
          <p class="body-p">
            To make sure that your luxury itinerary in Italy is perfect, it is
            necessary for us to meet and get to know you, establishing a
            confidential relationship that allows us to personalize it and make
            it as congenial as possible to you. Our work starts with this
            initial and fundamental approach.
          </p>
          <p class="body-p">
            It is no accident that our clients-travelers end up building a real
            friendship with us, often deciding to come back to us for new
            travels and new luxury experiences in Italy. An occurrence that we
            love to reciprocate with dinners or gifts because we consider you
            more than a regular client.
          </p>
          <button
            class="general-btn-2 btn-fifth-block q-mb-md"
            style="margin-left: 5%"
            @click="$router.push('/testimonials')"
          >
            READ ABOUT OUR CLIENTS’ TRAVEL EXPERIENCES
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";

export default {
  components: { PreLoader },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********

// TYPO***************
.figcaption-title {
  margin-bottom: 2%;
}

@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
  }

  .second-block {
    grid-template-rows: 6vh 65vh 10vh !important;
  }

  .third-block {
    grid-template-rows: 18vh auto 25vh auto !important;
  }

  .fourth-block {
    grid-template-rows: 9vh 65vh 9vh !important;
  }

  .text-sub-section-first-3 {
    margin-top: 4% !important;
  }
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
  padding: 0 18rem;
}

.first-block {
  margin-bottom: 6%;
  margin-top: 4%;
}

// **********SECOND BLOCK**********

.second-block {
  display: grid;
  grid-template-columns: 1.8fr 0.6fr 1fr;
  grid-template-rows: 0.1fr 1fr 0.1fr;
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

// **********THIRD BLOCK**********

.third-block {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: 18vh auto 15vh auto;
  grid-gap: 2%;
  margin: 0 9% 20% 9%;
}

.heading-third-block {
  grid-column: 1/3;
  grid-row: 1;
  margin: 0;
}

.third-block .img3 {
  grid-column: 1;
  grid-row: 2/4;
}
.third-block .sub-section-first {
  grid-column: 2;
  grid-row: 2;
  border-radius: 2%;
}
.third-block .sub-section-second {
  grid-column: 1;
  grid-row: 4;
  border-radius: 2%;
}
.third-block .img4 {
  grid-column: 2;
  grid-row: 3/5;
}

// *******FOURTH BLOCK***********************

.fourth-block {
  display: grid;
  grid-template-columns: 34% 10% 56%;
  grid-template-rows: .1fr 1fr .1fr;
  margin-bottom: 10%;
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
}
// ********HEADER BLOCK*****
.figcaption-about {
  background: rgb(0, 0, 0) !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 65%
  ) !important;
}

.figcaption-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}

.figcaption-subtitle {
  font-family: CommutersSans-Regular;
  font-size: 14px;
  // line-height: ;
  letter-spacing: 1px;
  line-height: 16px;
}

.figcaption-title {
  font-family: Hatton-Medium;
  font-size: 40px;
  letter-spacing: 2px;
}

// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-to {
//   opacity: 1;
// }
// .fade-enter-active {
//   transition: opacity 2s ease;
// }

@media screen and (max-width: 1300px) {
  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 1100px) {
  // TYPO***************
  .figcaption-title {
    transform: scale(0.9);
  }

  .img1 {
    height: 20% !important;
  }

  .img-about {
    height: 100% !important;
  }

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
    padding: 0 10rem !important;
  }

  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 680px) {
  // TYPO***************
  .figcaption-title {
    text-align: center;
    transform: scale(0.85);
  }

  .body-p {
    text-align: center !important;
  }

  .title-h2 {
    text-align: center !important;
  }

  .img1 {
    height: 35vh !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }

  // **********FIRST BLOCK**********

  .first-block {
    margin-bottom: 10% !important;
    margin-top: 10% !important;
  }

  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem !important;
  }

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
  }

  // ******THIRD BLOCK*******************

  .third-block {
    grid-template-columns: 100% !important;
    grid-template-rows: auto auto 530px auto 530px auto !important;
    margin: unset !important;
  }

  .heading-third-block {
    grid-column: 1 !important;
    grid-row: 1 !important;
    margin: 0 !important;
  }

  .third-block .img3 {
    grid-column: 1 !important;
    grid-row: 3 !important;
  }

  .third-block .sub-section-first {
    grid-column: 1 !important;
    grid-row: 2 !important;
    border-radius: unset !important;
  }

  .third-block .img4 {
    grid-column: 1 !important;
    grid-row: 5 !important;
  }


  .btn-grid {
    grid-column: 1 !important;
    grid-row: 6 !important;
  }

  .h6-title-sub {
    font-size: 14px !important;
    text-align: center !important;
  }

  .text {
    text-align: center !important;
  }

  .general-btn-2.btn-fifth-block {
    margin-left: unset !important;
  }

  .footer-logo {
    width: 6vw !important;
  }

  // *******FOURTH BLOCK***********************

  .fourth-block {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
    margin-top: 50vh !important;
    margin-bottom: 30% !important;
  }
  .fourth-block .img4 {
    display: none !important;
  }

  .img-about-4-index {
    object-position: 40% 50% !important; //riportato in app.css
  }

  .h2-second-block {
    text-align: center !important;
    padding-right: unset !important;
  }

  .body-p {
    text-align: center !important;
    padding-right: unset !important;
    margin-left: unset !important;
  }

  .text-box-second-block {
    margin-left: unset !important;
  }

  .social-footer-content {
    width: 40% !important;
    margin-top: 5% !important;
  }

  .figcaption-subtitle {
    text-align: center !important;
    margin-bottom: 5% !important;
  }

  .text-sub-section-first-3 {
    margin-left: unset !important;
  }

  .sub-section-first-3 {
    display: block !important;
    padding: 10% 5% !important;
  }
}
</style>
