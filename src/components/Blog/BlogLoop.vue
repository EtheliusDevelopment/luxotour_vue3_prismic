<template>
  <div class="head-main">

    <div class="navigation-mobile head-navigation">

      <div class="chip-filter" @click="myLib">
        <q-chip outline class="activeb li-item" color="primary">ALL</q-chip>
      </div>

      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">sea</q-chip>
      </div>

      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">lake</q-chip>
      </div>

      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">montain</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">wine</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">islands</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">food</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">art</q-chip>
      </div>

      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">yatch</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">wedding</q-chip>
      </div>
      <div class="chip-filter" @click="myLib">
        <q-chip outline class="li-item" color="primary">hotel</q-chip>
      </div>
    </div>
  </div>

  <q-separator spaced inset vertical color="primary" class="separator-block" />

  <div class="loop-block">
    <div class="blog-card" v-for="(item, index) in dataResults" :key="index">
      <div class="img-blog-card">
        <q-img
          class="img-blog-card-class"
          :src="item.data.main_img.url"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>

      <h2 class="text-primary h2-blog-card text-center">
        {{ item.data.article_title[0].text }}
      </h2>

      <p class="p-blog-card ellipsis-3-lines text-center">
        {{ item.data.post_body[0].paragraph_body[0].text }}
      </p>

      <div class="btn-box text-center q-mt-xl">
        <q-btn
          style="padding-bottom: 1%"
          class="btn-blog-card"
          color="info"
          flat
          label="READ MORE"
          :to="'/blog/' + item.slugs[0]"
        />
        <hr
          class="bg-info"
          style="width: 20%; margin-top: 1px; border-top: 2px solid #d9c5a0"
        />
      </div>
    </div>
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
import { ref } from "vue";

export default {
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "blog"),
        { pageSize: 9 }
      );
      console.log(response.results);
      this.dataResults = response.results;
      this.max = response.total_pages;
      this.current = response.page;
      this.pageSize = response.results_per_page;
    },
    async myLi(e) {
      let textValue = e.path[0].textContent;
      let nodeValue = e.path[0];
      let activeClass = document.querySelector(".active");

      activeClass ? activeClass.classList.remove("active") : null;
      nodeValue.classList.add("active");

      if (textValue === "ALL") {
        const response = await this.$prismic.client.query(
          this.$prismic.Predicates.at("document.type", "blog"),
          { pageSize: 9 }
        );
        console.log(response.results);
        this.dataResults = response.results;
        this.max = response.total_pages;
        this.current = response.page;
        this.pageSize = response.results_per_page;
      } else {
        const response = await this.$prismic.client.query(
          this.$prismic.Predicates.at("document.tags", [textValue]),
          { pageSize: 9 }
        );
        console.log(response);
        this.dataResults = response.results;
        this.max = response.total_pages;
        this.current = response.page;
        this.pageSize = response.results_per_page;
      }
    },

    async myLib(e) {
      let textValue = e.path[0].textContent;
      let nodeValue = e.path[1];
      let activeClass = document.querySelector(".activeb");
      console.log(activeClass);

      activeClass ? activeClass.classList.remove("activeb") : null;
      nodeValue.classList.add("activeb");

      if (textValue === "ALL") {
        const response = await this.$prismic.client.query(
          this.$prismic.Predicates.at("document.type", "blog"),
          { pageSize: 9 }
        );
        console.log(response.results);
        this.dataResults = response.results;
        this.max = response.total_pages;
        this.current = response.page;
        this.pageSize = response.results_per_page;
      } else {
        const response = await this.$prismic.client.query(
          this.$prismic.Predicates.at("document.tags", [textValue]),
          { pageSize: 9 }
        );
        console.log(response);
        this.dataResults = response.results;
        this.max = response.total_pages;
        this.current = response.page;
        this.pageSize = response.results_per_page;
      }
    },

    async myFunct(val) {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "blog"),
        {
          page: val,
          pageSize: 9,
        }
      );
      console.log(response.results);
      this.dataResults = response.results;
      this.max = response.total_pages;
      this.current = response.page;
      this.pageSize = response.results_per_page;

      window.scroll({
        top: 800,
        behavior: "smooth",
      });
    },
  },

  created() {
    this.getContent();
  },

  setup() {
    const dataBlog = ref(null);
    const dataResults = ref(null);
    const max = ref(null);
    const current = ref(null);
    const pageSize = ref(null);

    return {
      dataBlog,
      dataResults,
      max,
      current,
    };
  },
};
</script>

<style lang="scss" scoped>
h4.text-pink.q-ma-xl {
  word-wrap: break-word;
}
// ****TYPO*****
.h2-blog-card {
  font-size: 20px;
  padding: 0px 20%;
  line-height: unset;
}
.p-blog-card {
  padding: 0px 10%;
  line-height: unset;
}

.li-item {
  text-transform: capitalize;
  cursor: pointer;
}
// HEAD BLOCK***********

.separator-block {
  margin-right: 5% !important;
  margin-left: 5% !important;
  height: 1px;
  width: 90%;
  margin-bottom: 3%;
}

.head-navigation {
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0 10%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.head-main {
  margin-bottom: 2%;
}

.active {
  color: $info !important;
}

.activeb {
  color: $info !important;
}

// *** LOOP BLOCK ****

.loop-block {
  display: grid;
  grid-template-columns: 31.66% 31.66% 31.66%;
  grid-auto-rows: auto;
  grid-gap: 2.5%;
  margin-bottom: 10%;
}

// ****BLOG CARD ******

.blog-card {
  border: 2px solid $info;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
}

@media screen and (max-width: 1100px) {
  // ****TYPO*****

  .h2-blog-card {
    transform: scale(0.9);

    padding: 0px 20%;
    transform: scale(0.9);
  }
  .p-blog-card {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 680px) {
  // ****TYPO*****

  .h2-blog-card {
    transform: scale(0.85);
    padding: 0px 5%;
    transform: scale(0.85);
    text-align: center;
  }
  .p-blog-card {
    padding: unset;
  }

  .btn-box {
    margin-top: 3%;
  }

  .separator-block {
    margin-bottom: 10%;
  }

  .head-navigation {
    justify-content: space-around;
    padding: unset;
  }

  // *** LOOP BLOCK ****

  .loop-block {
    display: flex !important;
    flex-direction: column !important;
  }

  .blog-card {
    margin-bottom: 10% !important;
  }
  .head-navigation {
    display: none;
  }

  .navigation-mobile {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }

  .li-item {
    margin: 1.5% 2%;
    font-family: "CommutersSans-Regular";
  }

  .chip-filter {
    margin: 1px 2% !important;
  }
}
</style>
