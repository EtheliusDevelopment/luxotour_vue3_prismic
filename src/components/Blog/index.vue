<template>

<h1 class="text-green">{{article_title}}</h1>

<img class="img" :src="main_img" alt="">
  <!-- <div class="loop-div" v-for="(item, index) in response" :key="index">
     <q-item clickable :to="'/luxury-travel/italy/'+ (item.uid).toString()">
        <p class="q-py-xl q-px-xl">{{item.data.package_title[0].text}}</p>
        <img :src="item.data.main_img.url" alt="">
     </q-item>
  </div> -->
</template>

<script>


export default {
  name: 'Italy Luxury Travel',
  components : {

  },
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      article_title: null,
      main_img: null
      // longText: null,
      // mainImage: null,
      // postId: this.$route.params.id
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type','blog')
      );


      this.response = response.results[0].data
      this.article_title = response.results[0].data.article_title[0].text
      this.main_img = response.results[0].data.main_img.url


    }
  },
  created() {
    // Call the API query method
    this.getContent()


    // this.spinner = true;
    // console.log(this.spinner)
    //   setTimeout(()=>{
    //     this.spinner = false;
    //     console.log(this.spinner)
    //   },3000);


  }
}
</script>



<style>
.img {
  width: 100%;
  padding: 0 15vw;
}
</style>
