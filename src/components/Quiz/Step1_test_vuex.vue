<template>
  <h1>hola</h1>
  <code>{{drawerState}}</code>
    <div>
    <q-toggle v-model="drawerState" />
  </div>
</template>


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const $store = useStore()

    const drawerState = computed({
      get: () => $store.state.quiz.drawerState,
      set: val => {
        $store.commit('quiz/updateDrawerState')
      }
    })

    return {
      drawerState
    }
  }
}
</script>
