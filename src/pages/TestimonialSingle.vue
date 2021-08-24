<template>
  <q-page class="overflow-hidden">
    <PreLoader />

    <TesimonialSingle />
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import TesimonialSingle from "../components/Testimonials/TestimonialSingle.vue";

export default {
  components: {
    PreLoader,
    TesimonialSingle,
  },
  setup() {
    return {};
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

@media screen and (max-width: 1300px) {
  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 1100px) {
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
}
</style>
