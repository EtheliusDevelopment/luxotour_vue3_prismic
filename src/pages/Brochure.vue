<template>
  <q-page>

  
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  components: {
    PreLoader,
    
  },

  setup() {
    let showNow = ref(false);
    onMounted(() => {
      // setTimeout(()=>{showNow = true},1500)
      setTimeout(() => {
        showNow.value = true;
      }, 4000);
      // alert(showNow)
    });
    return {
      showNow,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 4s ease;
}
</style>
