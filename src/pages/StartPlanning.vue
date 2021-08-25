<template>

<q-page>

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
  <CarouselFacebook />
</q-page>

</template>

<script>

import CarouselFacebook from "src/components/Utils/CarouselFacebook.vue";

export default {
  components: {
      CarouselFacebook,
  },

  setup() {


    return {

    }
  }
}
</script>

<style>

</style>
