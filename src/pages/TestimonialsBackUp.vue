<template>
  <q-page class="flex flex-center">
    <pre-loader />
    <testComponentPrismic/>
  </q-page>
</template>

<script>
import PreLoader from 'src/components/PreLoader.vue';
import { defineComponent } from 'vue';
import testComponentPrismic from '../components/Prismic/testComponentPrismic.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    testComponentPrismic,
    PreLoader
  },
  setup () {

    return {
    testComponentPrismic
  }
  },
})
</script>
