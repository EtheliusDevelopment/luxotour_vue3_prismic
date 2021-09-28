<template>
  <q-page class="flex flex-center">
    <FeedTest />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FeedTest from "../components/FeedTest.vue";

export default defineComponent({
  components: {
    FeedTest,
  },
  name: "PageIndex",
  setup() {
    return {
      FeedTest,
    };
  },
});
</script>
