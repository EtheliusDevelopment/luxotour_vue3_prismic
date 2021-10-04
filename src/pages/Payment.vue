<template>
  <q-page>
    <Payment />
  </q-page>
</template>

<script>
import Payment from "../components/Payment";

export default {
  components: {
    Payment,
  },

  setup() {
    return {
      Payment,
    };
  },
};
</script>

<style></style>
