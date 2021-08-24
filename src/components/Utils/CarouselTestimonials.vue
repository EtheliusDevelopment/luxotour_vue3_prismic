<template>
  <Carousel :items-to-show="1.8" :wrap-around="true">
    <Slide v-for="slide in db" :key="slide">
      <div class="carousel__item">
        <q-img
          class="img-carousel-testimonials-1"
          img-class="img1-carousel-testimonials"
          :src="slide.img"
          :ratio="16 / 9"
          height="80vh"
          no-spinner
        >
          <div class="figcaption">
            <h4 class="title-carousel">{{ slide.testimonial_name }}</h4>
            <h5 class="body-carousel">{{ slide.payoff }}</h5>
            <q-btn
              class="cta-carousel"
              label="DISCOVER MORE"
              :to="'/testimonials/' + slide.slug"
            />
          </div>
        </q-img>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import dbIndex from "src/db_test/db_carousel.json";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const db = dbIndex;

    return {
      db,
    };
  },
});
</script>

<style scoped lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 8%;
}
.title-carousel {
  margin: unset;
  font-family: "Hatton-Medium";
  font-size: 40px;
  letter-spacing: 0.5px;
}
.body-carousel {
  margin: unset;
  font-family: "Commuters-Sans-Light";
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
}
.cta-carousel {
  margin: unset;
  margin-top: 5%;
  padding: 0 1% 1% 1%;
  border-bottom: 2px solid;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #d9c5a0;
}

@media screen and (max-width: 680px) {
  .figcaption {
    justify-content: space-evenly;
  }


.title-carousel{
    margin: unset;
    font-family: "Hatton-Medium";
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.5px;
}

.body-carousel {
    line-height: 20px;
}


.carousel__slide--prev .figcaption {
    background-color: #000000d1;
}


.carousel__slide--next .figcaption {
    background-color: #000000d1;
}
}
</style>
