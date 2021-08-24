<template>
  <div>
    <!-- <prismicChild :dataArray="response"/> -->
    <!-- <h1>Here's your raw API response:</h1> -->
    <!-- <q-spinner-clock v-if="spinner!=false" color="teal" size="4rem" /> -->
    <!-- <h5 id="app" v-html="JSON.stringify(response, null, 2)"></h5> -->
    <h1>CIAO DA BLOGCARD</h1>
    <h3 class="q-py-xl" style="font-size: 1rem;">{{this.$route.params}}</h3>

  </div>
</template>

<script>


export default {
  name: 'App',
  components : {

  },
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      longText: null,
      mainImage: null,
      postId: this.$route.params.id
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type','pacchetti')
      );
      console.log('result');

      this.response = response.results
      // this.longText = response.data.rich_text[1].text
      // this.mainImage = response.data.main_image.url



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


