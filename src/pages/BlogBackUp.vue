<template>
  <q-page class="flex flex-center" padding>
    <PreLoader />
        <h3>HOLA DA BLOG LOOP</h3>

    <Blog />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Blog from '../components/Blog/index.vue'
import PreLoader from "src/components/PreLoader.vue";

export default defineComponent({
  name: 'PageIndex',
   components: {
    Blog,
    PreLoader

  },
})
</script>

<style lang="scss" scoped>

</style>
