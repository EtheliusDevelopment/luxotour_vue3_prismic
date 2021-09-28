<template>
  <h3>{{ feed }}</h3>
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
          this.feed = feed;
        });
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
  setup() {
    const feed = ref();

    return {
      feed,
    };
  },
};
</script>
