<template>
    <PreLoader />
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div id="demo"></div>
      </div>
    </div>

    <div class="row">
      <div class="divTest col-md-4 col-sm-8 col-xs-12">
        <img class="imgTest" src="~assets/venice-bg.jpg" alt="" />
      </div>
    </div>

    <div class="row mydiv">
      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <q-img
      src="~assets/venice-bg.jpg"
      draggable
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
    <q-img
      src="~assets/venice-bg.jpg"
      loading="lazy"
      spinner-color="primary"
      spinner-size="82px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PreLoader from '../components/PreLoader.vue'
export default defineComponent({
  name: "PageIndex",
  components: {
    PreLoader,
  },

  created() {
    let showPosition = (position) => {
      const x = document.getElementById("demo");
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
    };
    const x = document.getElementById("demo");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  },
});
</script>

<style lang="scss" scoped>
.imgTest {
  width: 100%;
}
.divTest {
}
.test22 {
  width: 80%;
}
</style>
