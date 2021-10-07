<template>
  <Carousel :items-to-show="1.8" :wrap-around="true">
    <Slide v-for="(item, index) in $props.imageList" :key="index">
      <div class="carousel__item">
        <q-img
          class="img-carousel-testimonials-1"
          img-class="img1-carousel-testimonials"
          :src="item.other_img.url"
          :ratio="16 / 9"
          height="75vh"
          no-spinner
        >
          <div class="figcaption"></div>
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
  props: {
    imageList: {
      type: Array,
    },
  },
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
.carousel__slide--active {
  .figcaption {
    display: none;
  }
}

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
</style>
