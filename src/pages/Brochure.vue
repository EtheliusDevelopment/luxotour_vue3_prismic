<template>
<q-page padding>
  <PreLoader />

<transition name="fade">

    <div v-if="showNow">

      <q-img
      src="~assets/img_main_index.jpg"
      spinner-color="primary"
      spinner-size="82px"
    >
      <div class="absolute-top figcaption" style="height: 100%">
        <h4 class="text-white">
          Lorem ipsum dolor etur adipisicing eltatis fac
        </h4>

        <h1 class="text-white">
          Lorem ipsum dolor etur adipisicing eltatis fac
        </h1>

      </div>
    </q-img>


    <div class="first-block">

      <div class="sub-section-first">
        <h2 class="text-primary">
        Lorem ipsum di nove parole parole parole parole
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
        eaque voluptate omnis quod,
      </p>
      <p class="text-primary">earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim  </p>
      <p class="text-primary">fugit porro ratione</p>
      <p class="text-primary">Exercitationem
        eaque voluptate omnis quod, fugiat
        praesentium minus voluptatum!</p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

    </div>

       <div class="second-block">

      <div class="sub-section-first">
        <h2 class="text-primary">
        Lorem ipsum di nove parole parole parole parole
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
        eaque voluptate omnis quod,
      </p>
      <p class="text-primary">earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim  </p>
      <p class="text-primary">fugit porro ratione</p>
      <p class="text-primary">Exercitationem
        eaque voluptate omnis quod, fugiat
        praesentium minus voluptatum!</p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

     <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

    </div>

    <div class="third-block">
      <h2 class="text-primary">Who We Are</h2>

   <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
      <div class="sub-section-first">
        <h4 class="text-primary">
        PAUL LEWIS
      </h4>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
        eaque voluptate omnis quod,
      </p>
      <p class="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos exercitationem, distinctio aut molestiae optio, iure placeat commodi aperiam, in provident. Consectetur cumque earum unde expedita aperiam vitae, eveniet delectus!</p>
      <p class="text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia porro rem suscipit, modi at sit totam beatae nemo, laboriosam consectetur nostrum aliquam accusantium voluptates, doloribus deleniti maxime sint blanditiis?</p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

     <div class="sub-section-second">
        <h4 class="text-primary">
        PAUL LEWIS
      </h4>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
        eaque voluptate omnis quod,
      </p>
      <p class="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos exercitationem, distinctio aut molestiae optio, iure placeat commodi aperiam, in provident. Consectetur cumque earum unde expedita aperiam vitae, eveniet delectus!</p>
      <p class="text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia porro rem suscipit, modi at sit totam beatae nemo, laboriosam consectetur nostrum aliquam accusantium voluptates, doloribus deleniti maxime sint blanditiis?</p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

    <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

    <q-btn color="primary" icon="check" outline label="TALK WITH US" />

    </div>

    <div class="fourth-block">
        <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first">
      <h2 class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
        eaque voluptate omnis quod,
      </p>
      <p class="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos exercitationem, distinctio aut molestiae optio, iure placeat commodi aperiam, in provident. Consectetur cumque earum unde expedita aperiam vitae, eveniet delectus!</p>

      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

    </div>
    </div>
  </transition>
</q-page>

</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from 'vue'
import { onMounted } from 'vue'
export default {
  components: { PreLoader },
  setup () {

      let showNow = ref(false)
      onMounted(() => {
      // setTimeout(()=>{showNow = true},1500)
      setTimeout(() => {
                    showNow.value = true
                }, 4000)
          // alert(showNow)
    })
    return {
      showNow,
    }
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 2s ease;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 4s ease;
}
</style>
