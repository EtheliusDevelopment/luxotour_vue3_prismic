<template>
  <q-form @submit="onSubmit" class="q-gutter-md" ref="contact_form">
    <q-input
      filled
      v-model="date"
      mask="date"
      :rules="['date']"
      label=""
      stack-label
      hint="Proposed Date"
      lazy-rules
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="date" today-btn>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-select
      filled
      v-model="stay_guest"
      :options="options_stay"
      hint="Number of Days"
      transition-show="jump-up"
      transition-hide="jump-up"
      use-chips
    />
    <q-select
      filled
      v-model="travel_with_guest"
      :options="options_travel_with"
      hint="Who Are You Traveling With?"
      transition-show="jump-up"
      transition-hide="jump-up"
      use-chips
    />
    <q-select
      filled
      v-model="budget_guest"
      :options="options_budget"
      hint="Budget Per Person Per Day"
      transition-show="jump-up"
      transition-hide="jump-up"
      use-chips
    />

    <q-input
      filled
      type="text"
      v-model="first_name"
      clearable
      hint="First Name"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 3) || 'Please use minimum 3 characters',
      ]"
    />

    <q-input
      filled
      type="text"
      v-model="last_name"
      clearable
      hint="Last Name"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 3) || 'Please use minimum 3 characters',
      ]"
    />

    <q-input
      filled
      type="number"
      v-model="age"
      clearable
      hint="Your age*"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 10 && val < 100) || 'Please type a real age',
      ]"
    />

    <q-input
      filled
      type="text"
      v-model="contact_number"
      hint="Contact Number*"
      clearable
      lazy-rules
      :rules="[
        (val) =>
          (val && /\d/.test(val)) || 'Please type a valid contact number',
      ]"
    />

    <q-input
      filled
      type="email"
      v-model="email"
      hint="Email*"
      lazy-rules
      clearable
      :rules="[
        (val) => (val && regexEmail.test(val)) || 'Please type a valid Email',
      ]"
    />

    <q-select
      filled
      v-model="country"
      :options="options_countries"
      hint="Your Country"
      transition-show="jump-up"
      transition-hide="jump-up"
      use-chips
    />

    <q-input
      filled
      type="textarea"
      v-model="textarea"
      hint="Send Us a Message*"
      lazy-rules
      clearable
      :rules="[
        (val) => (val && val.length > 3) || 'Please use minimum 3 characters',
      ]"
    />

    <q-toggle v-model="accept" label="I accept the license and terms" />

    <div class="flex flex-center">
      <button class="general-btn-1 q-mt-lg">CONTACT US</button>
    </div>
  </q-form>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { api } from "boot/axios";
import countryList from "src/components/ContactUs/countryList.json";

export default {
  setup() {
    const $q = useQuasar();

    const age = ref();
    const accept = ref(false);
    const textarea = ref();
    const stay_guest = ref();
    const travel_with_guest = ref();
    const budget_guest = ref();
    const first_name = ref();
    const last_name = ref();
    const contact_number = ref();
    const email = ref();
    const contact_form = ref();
    const countries = countryList;
    const country = ref();

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const options_stay = [
      "1 to 7 days",
      "7 to 15 days",
      "15 to 30 days",
      "Undefined",
    ];
    const options_travel_with = [
      "Family",
      "Friends",
      "Family and Friends",
      "Alone",
      "Special Event",
      "Incentive",
    ];
    const options_budget = [
      "up to 300 Eur",
      "up to 1000 Eur",
      "up to 3000 Eur",
      "Full Credit",
    ];

    const options_countries = countries;

    // da ESPORTARE****************
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "/" + mm + "/" + dd;
    const date = ref(today);
    // FINE da ESPORTARE****************

    return {
      age,
      accept,
      date,
      textarea,
      options_stay,
      stay_guest,
      travel_with_guest,
      options_travel_with,
      budget_guest,
      options_budget,
      first_name,
      last_name,
      contact_number,
      email,
      regexEmail,
      today,
      contact_form,
      countries,
      options_countries,
      country,

      async onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          var payload = {
            stay_guest: stay_guest.value,
            travel_with_guest: travel_with_guest.value,
            budget_guest: budget_guest.value,
            first_name: first_name.value,
            last_name: last_name.value,
            contact_number: contact_number.value,
            email: email.value,
            age: age.value,
            date: date.value,
            privacy: accept.value,
            message: textarea.value,
            country: country.value,
          };

          //API INTEGROMAT account ETH w/mail
          api
            .post(
              "https://hook.integromat.com/w96x9i4xjctqtwcqx89sqdaeuwbnwr1s",
              payload
            )
            .then(
              (response) => {
                console.log(response);
                $q.notify({
                  color: "green-4",
                  textColor: "white",
                  icon: "cloud_done",
                  message: "Your data has been submitted",
                });
              },
              (error) => {
                console.log(error);
                $q.notify({
                  color: "red-5",
                  textColor: "white",
                  icon: "warning",
                  message: "Something was wong, try again!",
                });
              }
            );

          // contact_form.value.resetValidation();
          contact_form.value.reset();

          stay_guest.value = null;
          travel_with_guest.value = null;
          budget_guest.value = null;
          first_name.value = null;
          last_name.value = null;
          contact_number.value = null;
          email.value = null;
          age.value = null;
          date.value = today;
          textarea.value = null;
          country.value = null;
          accept.value = false;
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-form {
  // border: 2px solid $info;
}

div {
  font-family: "Commuters-Sans-Bold" !important;
}
</style>
