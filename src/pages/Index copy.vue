<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

    <div class="row q-my-xl">
       <to-do />

    </div>


<q-btn color="primary" icon="check" label="About" to="/wine-club" />
  </q-page>
</template>

<script>
import ToDo from 'src/components/ToDo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    ToDo

  },
  setup () {



    return {



  }
  },
})
</script>

<style lang="scss" scoped>
.row{
  width: 100vw;
  height: 30vh;
}
</style>
