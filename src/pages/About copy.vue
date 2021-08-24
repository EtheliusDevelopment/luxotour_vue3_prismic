<template>
  <q-page class="flex flex-center" padding>

    <h1>{{$t('success')}}</h1>

    <h1>ABOUT</h1>
    <div class="about-test shadow-6">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate qui repellat, dolore eos consequatur, eaque ipsam doloremque beatae minima aliquid earum vitae provident adipisci reprehenderit similique eveniet. Quod at perferendis facere. Architecto aliquid, suscipit nisi vero quidem hic quaerat omnis ut corporis nam rerum distinctio officia tempore dignissimos placeat provident, soluta animi eveniet cupiditate assumenda, mollitia obcaecati laborum ratione odit. Quis nesciunt dolore unde error inventore velit facere! Mollitia iure eius veritatis nostrum repellat consequatur repudiandae architecto explicabo quisquam, quam amet adipisci consectetur error officiis soluta dolorum culpa ut eos, eum necessitatibus impedit ratione tenetur, alias similique? Odio, in? Quasi, error porro exercitationem totam, mollitia distinctio corporis ab iure quibusdam nihil in. Doloremque neque minus, cumque voluptatibus, earum, debitis nobis iure eaque quos omnis odit modi! Nam autem minus neque magnam, dolorem earum atque eligendi. Libero veritatis perferendis tenetur voluptatum, fuga qui ad! Dolores unde, voluptates est non excepturi laborum perspiciatis saepe ipsa modi numquam, temporibus exercitationem nostrum? Porro perspiciatis deserunt eveniet ex, nemo sit dolorem consequatur ea expedita saepe, inventore error iste quasi esse quae obcaecati commodi in? Dolore dolorem repellat, at aut quibusdam iste quo obcaecati nulla  inventore? Quos adipisci, sequi saepe optio sapiente dolores enim!</p>
    </div>
      <div class="about-test shadow-6">
        <LanguageSwitcher class="col-12"/>
      </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
export default defineComponent({
  name: 'PageIndex',
  components : {
    LanguageSwitcher,
  }
})
</script>

<style lang="scss" scoped>


</style>
