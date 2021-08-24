<template>
  <div>
    <ul>
     <div class="row" >
        <q-card   class="my-card col-6 q-mr-sm q-mb-md shadow-9" style="width:40vw;" v-for="(item, index) in dataArray" :key="index" >

          <q-item clickable :to="'/blog/'+ item.id">
          <img :src="item.data.main_image.url" width="150" height="150" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by {{ item.data.titolo_post[0].text }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ item.data.rich_text[2].text }}
        </q-card-section>
          </q-item>

      </q-card>
     </div>
      <li v-for="(item, index) in dataArray" :key="index">
        <h3 class="text-pink">{{ item.data.titolo_post }}</h3>

        <q-img
          :src="item.data.main_image.url"
          spinner-color="primary"
          spinner-size="82px"
        />

        <h5 class="text-orange">{{ item.data.rich_text }}</h5>

        <ul>
          <li v-for="(it, index) in item.data.rich_text" :key="index">
            <h3 class="text-fuchsia">{{ it.type }}</h3>
            <h6 class="text-green">{{ it.text }}</h6>
            <h4>{{ it.spans }}</h4>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataArray: {
      type: Array,
    },
  },
  methods: {
       getUserRepositories () {
       alert('ciao')
    },
  },
};
</script>


<style lang="scss">
.my-card{
    transition: all .7s ease;
  &:hover {
      box-shadow: none;
      // background-color: rgba(151, 247, 247, 0.466);
      box-sizing: border-box;
      // background: rgb(131,58,180);
      // background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
      cursor: pointer;
      // border-radius: 80%;

  }
}
</style>
