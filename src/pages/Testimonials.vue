<template>
  <q-page class="qpage-testimonials">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/Testimonials-luxoitalia-travel.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white">THAT’S WHY WE LOVE</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Our Clients</h1>
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
        <h2
          class="text-primary text-center title-first-block"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Read about our clients’ travel stories
        </h2>
        <p class="text-center" data-aos="fade-up" data-aos-duration="1500">
          Every travel experience that our clients have with us inevitably
          becomes a story, and it is because it remains indelible and
          unforgettable in their eyes and especially in their hearts.
        </p>
        <p class="text-center" data-aos="fade-up" data-aos-duration="1500">
          Many have wanted to share with us how beautiful their luxury holiday
          experience was and tell us why it was so special for them.
        </p>
        <p class="text-center" data-aos="fade-up" data-aos-duration="1500">
          There are several and varied experiences, from art to those dedicated
          to outdoor activities or immersing yourself in the most beautiful
          Italian cities, without forgetting the well-being and comfort of the
          luxury hotels and resorts that we choose and that characterize every
          story.
        </p>
      </div>
    </div>

    <div
      class="second-block-carousel"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <CarouselTestimonials />
    </div>

    <div class="third-block" data-aos="fade-up" data-aos-duration="2000">
      <CarouselFacebook />
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import CarouselTestimonials from "../components/Utils/CarouselTestimonials.vue";
import CarouselFacebook from "src/components/Utils/CarouselFacebook.vue";

export default {
  components: {
    PreLoader,
    CarouselTestimonials,
    CarouselFacebook,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      slide_second: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********

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

// **********SECOND BLOCK**********
.second-block-carousel {
  margin-bottom: 10%;
  overflow: hidden;
}

// **********THIRD BLOCK**********
@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
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
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

.header-block hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}

// **********THIRD BLOCK**********

.third-block {
}
.third-block .sub-section-first {
}

.payoff {
  font-family: "Hatton-Medium";
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 10%;
}

.payoff-echo {
  font-size: 17px;
  margin-bottom: 20%;
}

.body-review {
  font-family: "CommutersSans-Regular";
  font-size: 17px;
  padding: 0 15%;
}

.h2-title-review {
  margin-bottom: 5%;
  margin-top: 5%;
}

.separator-sixth-block {
}

@media screen and (max-width: 1100px) {
  .img1 {
    height: 20% !important;
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
}
@media screen and (max-width: 680px) {
  // **********HEADER BLOCK**********

  .figcaption h1.text-white.text-center {
    margin-bottom: 3vh !important;
  }

  .img1 {
    height: 35vh !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }
  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem !important;
  }

  // **********THIRD BLOCK**********

  .title-first-block {
    padding: unset;
    font-size: 30px;
    line-height: 38px;
  }
}
</style>
