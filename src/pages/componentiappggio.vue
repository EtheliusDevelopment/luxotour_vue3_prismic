<template>
<!-- BOTTONIERA PROGRESS QUIZ -->
 <div>
        <q-btn v-if="count>=1" @click="count--" class="q-mr-xl" label="Diminuisci" type="button" color="primary"/>
        <q-btn  @click="count++" label="Aumenta" type="button" color="primary" flat class="q-ml-sm" />
      </div>
<!-- PROGRESS BAR************************* -->
   <q-linear-progress
      stripe
      rounded
      size="20px"
      :value="value"
      color="primary"
      class="q-mt-sm linear-progress"
      />
<!-- CARD PER FORM****************** -->
  <    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-img>

      <q-card-section>
        <h6>per ora tutto ok</h6>
      </q-card-section>

      <q-card-actions>
           <q-radio color="green" name="shape" v-model="shape" val="line" label="Line" />
      </q-card-actions>
    </q-card>>

  </    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-img>

      <q-card-section>
        <h6>per ora tutto ok</h6>
      </q-card-section>

      <q-card-actions>
           <q-radio color="green" name="shape" v-model="shape" val="line" label="Line" />
      </q-card-actions>
    </q-card>>
</template>


<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    const count = ref(0)

    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      },

      value: 0.325,
      count,
            group: ref('op1'),

      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],
      shape: ref(null),
    }
  }
}
</script>
