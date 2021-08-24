<template>
  <q-page class="flex flex-center">
    <div class="div-spinner" v-if="spinner">
      <q-btn color="primary" icon="check" label="OK" @click="spinner=false" />
      <q-spinner-cube color="white" size="5.5em" />
      <h1 class="text-white">{{spinner}}</h1>
    </div>

    <div class="content" v-if="!spinner">
      <h1>TERMS AND CONDITIONS</h1>
      <q-btn color="primary" icon="check" label="OK" @click="spinner=true" />

      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
      <h1>TERMS AND CONDITIONS</h1>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let spinner = ref(true);

    return {
        spinner
    }
  },
  mounted(){
    setTimeout(()=>{
        this.spinner = false
    },3000)
  }
}
</script>

<style lang="scss">
.div-spinner {
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: teal;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
