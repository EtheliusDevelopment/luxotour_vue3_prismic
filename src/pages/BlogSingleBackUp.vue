<template>
  <q-page class="flex flex-center" padding>
    <h3>HOLA DA BLOGSINGLE</h3>
    <Blog />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Blog from '../components/Blog'

export default defineComponent({
  name: 'PageIndex',
   components: {
    Blog,

  },
})
</script>

<style lang="scss" scoped>

</style>
