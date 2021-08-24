<template>
  <div>
    <prismicChild :dataArray="response"/>
    <h1>Here's your raw API response:</h1>
    <q-spinner-clock v-if="spinner!=false" color="teal" size="4rem" />
    <h5 id="app" v-html="JSON.stringify(response, null, 2)"></h5>
  </div>
</template>

<script>
import prismicChild from './prismicChild.vue'

export default {
  name: 'App',
  components : {
    prismicChild
  },
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'blog-posts')
      )
      this.response = response.results;



    }
  },
  created() {
    // Call the API query method
    this.getContent()
    this.spinner = true;
    console.log(this.spinner)
      setTimeout(()=>{
        this.spinner = false;
        console.log(this.spinner)
      },3000);


  }
}
</script>


