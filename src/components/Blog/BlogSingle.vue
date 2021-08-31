<template>
  <div class="header-block-blog-single">
    <q-img
      class="img1 img-header-1"
      img-class="img1-blog"
      :src="bgImg"
      :ratio="16 / 9"
      spinner-color="primary"
      spinner-size="82px"
      height="600px"
    >
      <div class="absolute-top figcaption">
        <div class="desktop-ficaption">
          <h2 class="text-primary title-header-block">
            {{ articleTitle }}
          </h2>

          <h6 class="text-primary h6-header-blog">{{date}}</h6>

          <div class="tags-container flex">
            <h6
              class="text-white tags"
              v-for="(tag, index) in tags"
              :key="index"
            >
              {{ tag }}/
            </h6>
          </div>

          <div class="tags-container btn-box flex">
            <q-btn
              color="white"
              to="/blog"
              flat
              label="BACK TO THE BLOG"
              class="btn-header-block"
            />
          </div>
        </div>
      </div>
    </q-img>

    <div class="mobile-ficaption bg-info" style="display: none">
      <h2
        class="text-primary title-header-block text-center"
        style="
          font-size: 30px;
          line-height: 38px;
          margin-bottom: 5%;
          margin-top: 10%;
        "
      >
        {{ articleTitle }}
      </h2>

      <h6 class="text-primary h6-header-blog text-center">27/02/2020</h6>

      <div class="tags-container flex">
        <h6
          class="text-white tags"
          v-for="(tag, index) in tags"
          :key="index"
          style="font-size: 13px; line-height: 18px"
        >
          {{ tag }}/
        </h6>
      </div>

      <div class="tags-container btn-box flex">
        <q-btn
          color="white"
          to="/blog"
          flat
          label="BACK TO THE BLOG"
          class="btn-header-block"
        />
      </div>
    </div>
  </div>

  <div class="first-block">
    <div
      class="q-ma-xl blog-par"
      style="word-wrap: break-word"
      v-for="(post, index) in dataContent"
      :key="index"
    >
      <h4
        class="text-info h4-blog-par"
        v-for="(postTit, index) in post.paragraph_title"
        :key="index"
      >
        {{ postTit.text }}
      </h4>

      <p
        class="p-blog-par"
        v-for="(postPar, index) in post.paragraph_body"
        :key="index"
      >
        {{ postPar.text }}
      </p>

      <q-img
        :src="post.post_image.url"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("my.blog.uid", this.thisRoute)
      );

      this.dataPost = response.results;
      this.bgImg = response.results[0].data.main_img.url;
      this.dataContent = response.results[0].data.post_body;
      this.articleTitle = response.results[0].data.article_title[0].text;
      this.date = response.results[0].data.date[0].text;
      this.tags = response.results[0].tags;
    },
  },
  created() {
    this.getContent();
  },
  setup() {
    const route = useRoute();
    const thisRoute = route.params.post;
    const dataPost = ref();
    const bgImg = ref();
    const dataContent = ref();
    const articleTitle = ref();
    const date = ref();
    const tags = ref();

    return {
      thisRoute,
      dataPost,
      bgImg,
      dataContent,
      articleTitle,
      tags,
      date,
    };
  },
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 10% !important;
  }
}

// *******TYPO************

.title-header-block {
  font-family: "Hatton-Medium";
  font-size: 55px;
  line-height: 63px;
  letter-spacing: 0.5px;
  margin-bottom: 0;
}

.h4-blog-par {
  font-family: "CommutersSans-Regular";
  font-size: 25px;
  letter-spacing: 0.5px;
}

.p-blog-par {
  margin-bottom: 5%;
}

.tags {
  margin: unset;
  font-family: "Commuters-Sans-Light";
  text-transform: uppercase;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 4px;
  margin-bottom: 10% !important;
}

.h6-header-blog {
  font-size: 15px;
  font-family: "Commuters-Sans-Light";
  width: 100%;
  margin-top: 2%;
}

// **********HEADER BLOCK**********

.figcaption {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  background: $info !important;
  height: 100%;
  padding-bottom: 20%;
}

div:has(.figcaption) {
  grid-column: 2;
}

.btn-header-block {
}

.btn-header-block:after {
  content: "";
  height: 3px;
  background-color: white;
  width: 100%;
  margin-top: 3%;
}

// .q-img__content.absolute-full.q-anchor--skip {
//     grid-column: 2;
// }

.img1 {
  display: grid;
  grid-auto-columns: 65% 35%;
}

.img1-blog {
  grid-column: 1;
}







// **********FIRST BLOCK**********
.first-block {
  margin: 0 25% 10% 25%;
}

.blog-par {
  margin-bottom: 10%;
}

.tags-container {
  justify-content: flex-start;
  width: 100%;
}

.btn-box {
  position: absolute;
  top: 90%;
}

@media screen and (max-width: 1100px) {
  // *******TYPO************

  .h4-blog-par {
    transform: scale(0.9);
  }
  // **********HEADER BLOCK**********

  .img1 {
    height: 20% !important;
  }

  // **********FIRST BLOCK**********
  .first-block {
    margin: 0 5% 10% 5%;
  }

  .btn-box {
    position: absolute;
    top: 80%;
  }
}

@media screen and (max-width: 680px) {
  // *******TYPO************

  .h4-blog-par {
    transform: scale(0.85);
  }

  // **********HEADER BLOCK**********

  .img1 {
    height: 35vh !important;
  }

  .img1 {
    display: block;
  }

  .desktop-ficaption {
    display: none;
  }

  .mobile-ficaption {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .figcaption {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9037990196) 0%,
      rgba(0, 0, 0, 0) 100%
    ) !important;
  }

  .tags-container {
    justify-content: center !important;
  }

  .btn-box {
    position: unset;
    margin-bottom: 5%;
  }

  .blog-par {
    margin: 10% 5% !important;
  }
}
</style>
