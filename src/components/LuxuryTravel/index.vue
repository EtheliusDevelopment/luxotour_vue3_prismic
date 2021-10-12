<template>
  <div class="first-block" style="margin-bottom: 20rem">
    <q-img
      v-for="(item, index) in results"
      :key="index"
      class="img-luxury-loop"
      img-class="img-loop"
      :src="item.data.main_img.url"
      spinner-color="info"
      spinner-size="82px"
    >
      <div class="figcatpion_loop" @click="clickFunct(item.uid)">
        <h4 class="text-figcaption text-center">
          {{ item.data.package_title[0].text }}
        </h4>
      </div>
    </q-img>
  </div>
  <div class="flex flex-center pagination-luxury-block">
    <q-pagination
      v-if="max > 1"
      v-model="current"
      :max="max"
      direction-links
      outline
      color="info"
      active-color="primary"
      active-text-color="primary"
      @update:model-value="myFunct"
      size="1.5vw"
      round
      padding="1.5vw"
    />
  </div>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "Italy Luxury Travel",
  components: {},
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      max: null,
      current: null,
      next_page: null,
      prev_page: null,
      secondResponse: null,
      pageSize: null,
      results: null,

      // longText: null,
      // mainImage: null,
      // postId: this.$route.params.id
    };
  },
  methods: {
    clickFunct(e) {
      this.$router.push(`/luxury-travel/italy/${e}`);
    },

    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "pacchetti"),
        { pageSize: 9 }
      );

      this.response = response;
      this.results = response.results;
      this.max = response.total_pages;
      this.current = response.page;
      this.pageSize = response.results_per_page;
      this.next_page = response.next_page;
      this.prev_page = response.prev_page;
    },

     async myFunct(val) {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "pacchetti"),
        {
          page: val,
          pageSize: 9,
        }
      );

      this.response = response;
      this.results = response.results;
      this.max = response.total_pages;
      this.current = response.page;
      this.pageSize = response.results_per_page;
      this.next_page = response.next_page;
      this.prev_page = response.prev_page;

      window.scroll({
        top: 1100,
        behavior: "smooth",
      });
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
};
</script>

<style lang="scss" scoped>
// *******TYPO

.text-figcaption {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  font-family: "Hatton-Semibold";
}

// ****** BLOCK

.qitem {
  flex-direction: column;
  outline: dashed;
  align-items: center;
}

.imgRid {
  width: 60%;
}

.fluidText {
  font-size: 1.3rem;
}

// ***FIGCAPTION BLOCK***************
.figcatpion_loop {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  background: linear-gradient(0deg, #000000, #0000 100%) !important;
}

// FIRST BLOCK************
.first-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 2%;
  margin: 0 8%;
  margin-bottom: 5% !important;
}

.img-luxury-loop {
  margin-bottom: 1%;
}

// Pagination ********

.pagination-luxury-block {
  margin-bottom: 5%;
}

@media screen and (max-width: 1100px) {
  .text-figcaption {
    transform: scale(0.9);
    margin-bottom: unset;
  }
}

@media screen and (max-width: 680px) {
  .imgRid {
    width: 100%;
  }
  .fluidText {
    font-size: 0.9rem;
  }
  // *******TYPO

  .text-figcaption {
    transform: scale(0.8);
    margin-bottom: unset;
  }

  // FIRST BLOCK *************

  .first-block {
    display: flex !important;
    flex-direction: column; 
  }

  .img-luxury-loop {
    margin-bottom: 10%;
    height: 25vh !important;
}
}
</style>
