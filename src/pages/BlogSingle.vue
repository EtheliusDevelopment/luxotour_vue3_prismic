<template>
  <q-page class="blog-single">
    <PreLoader />
    <BlogSingle data-aos="fade-up" data-aos-duration="2000"/>

    <h3>CIAO</h3>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import BlogSingle from "src/components/Blog/BlogSingle.vue"

export default {
  components: {
    PreLoader,
    BlogSingle,
  },
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
header{
  display:none !important;
}

@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
  }
}

@media screen and (max-width: 680px) {

  .img1{
    height: 15% !important;
  }

}

@media screen and (max-width: 990px) {

  .img1{
    height: 20% !important;
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



div:has(.figcaption) {
  grid-column: 2;
}

// .q-img__content.absolute-full.q-anchor--skip {
//     grid-column: 2;
// }

.img1 {
  display: grid;
  grid-auto-columns: 70% 30%;
}

.img1-blog {
  grid-column: 1;
}

// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}

.first-block {
}
</style>
