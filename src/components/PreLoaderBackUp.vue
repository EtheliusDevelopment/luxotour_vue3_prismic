<template>
  <div class="vld-parent">
    <loading
      v-model:active="isLoading"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      background-color="#4c4571"
      color="#D9C5A0"
      opacity="1"
      transition="fade"
      loader="dots"
      lock-scroll="true"
    />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
 
  data() {
    return {
      isLoading: true,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },

  methods: {
    loaderOff() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },

  mounted() {
    this.loaderOff();
  },
};
</script>

<style lang="scss" scoped>


</style>
