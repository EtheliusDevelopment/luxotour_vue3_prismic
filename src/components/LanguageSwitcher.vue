<!-- some .vue file -->

<template>
  <!-- ...... -->
 <q-select
    v-model="locale"
    :options="localeOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <!-- ...... -->
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    const $q = useQuasar()
    console.log($q.lang.getLocale()) // returns a string
    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'it-it', label: 'Italiano' }
      ]
    }
  }
}
</script>

