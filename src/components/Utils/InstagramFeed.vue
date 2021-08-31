<template>
  <div class="insta-box">
    <div class="insta-pair">
      <a href="https://www.instagram.com/p/CMc2GB5HskH/" target="_blank">
        <img class="insta_media" src="~assets/insta_9.jpg" alt="" />
      </a>

      <a href="https://www.instagram.com/p/CO-dBR4nV_m/" target="_blank">
        <img class="insta_media insta-left" src="~assets/insta_2.jpg" alt="" />
      </a>
    </div>

    <div class="insta-pair insta-center-box">
      <a
        class="a-bordered"
        href="https://www.instagram.com/p/CQ85D-CIyWt/"
        target="_blank"
      >
        <img class="insta_media" src="~assets/insta_10.jpg" alt="" />
      </a>

      <a href="https://www.instagram.com/p/CRO6iolIOXt/" target="_blank">
        <img class="insta_media" src="~assets/insta_11.jpg" alt="" />
      </a>
    </div>

    <div class="insta-pair">
      <a href="https://www.instagram.com/p/CRrPY2boSwA/" target="_blank">
        <img class="insta_media insta-right" src="~assets/insta_7.jpg" alt="" />
      </a>

      <a href="https://www.instagram.com/p/CRHMQHdIxI2/" target="_blank">
        <img class="insta_media" src="~assets/insta_12.jpg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
// *********COMPONENT*********

.insta-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 15vw;
}

.insta-pair {
  display: flex;
  width: 33.33%;
}

.insta-pair > a {
  width: 50%;
  display: flex;
  justify-content: center;
}

img {
  height: 100%;
}

.insta-left {
  width: 87.5% !important;
  box-sizing: border-box;
}

.insta-right {
  width: 87.5% !important;
  box-sizing: border-box;
}

.insta-center-box {
}

.a-bordered {
  border-right: 1px solid white;
}

.insta_media {
  width: 100%;
}
</style>
