<template>
  <q-page class="flex flex-center" padding>
    <PreLoader />
    <DynamicContent />
  </q-page>
</template>

<script>
import PreLoader from 'src/components/PreLoader.vue';
import DynamicContent from "../../../components/LuxuryTravel/DynamicContent.vue";
export default {
  components: {
    DynamicContent,
    PreLoader,
  },

  setup() {},
};
</script>
