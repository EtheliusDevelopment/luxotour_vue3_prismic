<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/Blog-luxoitalia.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="figcaption">
          <h6 class="text-white">AMAZING STORIES</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Blog</h1>
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
        <div class="header-component">
          <div class="headcaption">
            <p class="text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="second-block" data-aos="fade-up" data-aos-duration="2000">
      <div class="body-component">
        <BlogLoop />
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import BlogLoop from "../components/Blog/BlogLoop.vue";

export default {
  components: {
    PreLoader,
    BlogLoop,
  },
  methods: {},
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
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
// **********FIRST BLOCK**********

.first-block {
  display: grid;
}

.headcaption {
  display: flex;
  width: 100%;
  padding: 6% 20%;
  justify-content: center;
  align-items: center;
}

.separator-block {
  margin-right: 5% !important;
  margin-left: 5% !important;
  height: 1px;
  width: 90%;
}

.head-navigation {
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0 10%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
// ******SECOND BLOCK**************
.second-block {
  margin: 0 10% 5% 10%;
}

.pagination-luxury-block {
    margin-top: 5%;
}


@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh !important;
  }
}

@media screen and (max-width: 680px) {
  .img1 {
    height: 35vh !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh !important;
  }

  .headcaption {
   padding: 5% 10% !important;
}
}
</style>
