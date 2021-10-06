<template>
  <div class="insta-box">
    <!-- <div v-for="item in feed" :key="item.id" style="color: red">
      <h3>{{ item.enclosure.link.replace(/&amp;/g, "&") }}</h3>
    </div> -->
    <!-- <h3>{{ foto_1 }}</h3>
    <h3>{{ foto_2 }}</h3>
    <h3>{{ foto_3 }}</h3>
    <h3>{{ foto_4 }}</h3>
    <h3>{{ foto_5 }}</h3> -->

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
import { ref } from "vue";

export default {
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/RobkQxfGb7dFUTGC.xml"
      )
        .then((response) => response.body)
        .then((rb) => {
          const reader = rb.getReader();

          return new ReadableStream({
            start(controller) {
              // The following function handles each data chunk
              function push() {
                // "done" is a Boolean and value a "Uint8Array"
                reader.read().then(({ done, value }) => {
                  // If there is no more data to read
                  if (done) {
                    console.log("done", done);
                    controller.close();
                    return;
                  }
                  // Get the data and send it to the browser via the controller
                  controller.enqueue(value);
                  // Check chunks by logging to the console
                  console.log(done, value);
                  push();
                });
              }

              push();
            },
          });
        })
        .then((stream) => {
          // Respond with our stream
          return new Response(stream, {
            headers: { "Content-Type": "text/html" },
          }).text();
        })
        .then((result) => {
          const feed = JSON.parse(result);
          console.log(feed.items);
          this.feed = feed.items;
          this.foto_1 = feed.items[1].enclosure.link.replace(/&amp;/g, "&");
        });
    },
  },
  created() {
    // Call the API query method
    // this.getContent();
  },
  setup() {
    const feed = ref();
    const foto_1 = ref();

    return {
      feed,
      foto_1,
      // foto_2,
      // foto_3,
      // foto_4,
      // foto_5,
      // foto_6,
    };
  },
};
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
