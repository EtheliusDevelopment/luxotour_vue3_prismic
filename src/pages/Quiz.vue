<template>
  <transition>
    <q-page>
      <PreLoader />

      <div class="header-block">
        <q-img
          class="img1"
          img-class="img1-luxury"
          src="~assets/Header-quiz.jpg"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          height="600px"
        >
          <div class="figcaption">
            <h6 class="text-white">LOREM IPSUM</h6>
            <q-separator color="white" inset />
            <h1 class="text-white text-center">Take this free quiz</h1>
          </div>
        </q-img>

        <div class="breadcrumbs">
          <q-breadcrumbs
            separator="---"
            class="text-orange"
            active-color="primary"
          >
            <q-breadcrumbs-el icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
            <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
          </q-breadcrumbs>
        </div>
      </div>

      <div class="first-block">
        <div class="sub-section-first">
          <!-- QUIZ WELCOME PAGE -->
          <div class="starter" v-if="starter">
            <h2 class="h2-title-quiz text-primary text-center">
              Discover which of our many experiences is right for you!
            </h2>
            <h6 class="h4-title-quiz text-info">Complete The Quiz And Get:</h6>

            <ul class="ul-title-quiz">
              <li class="li-title-quiz text-center">
                1. Detailed and professionally designed itinerary that match
                your traveler profile ( 250$ Value)
              </li>
              <li class="li-title-quiz text-center">
                2. Our guide: " The Ultimate List of Exclusive Things To Do In
                Italy You Won't Find On Google"
              </li>
              <li class="li-title-quiz text-center">
                3. Access to our Inner Circle and get practical advice on where
                to go, when to go and what to see once in Italy!
              </li>
            </ul>

            <button
              class="general-btn-1 q-mt-xl"
              style="padding: 2% 4%"
              @click="startQuiz"
            >
              START THE QUIZ
            </button>
          </div>

          <!-- QUIZ FLOW -->
          <div class="form-body" v-if="!starter">
            <q-form @submit="onSubmit">
              <Step1 v-if="count == 0" :step="value" />
              <Step2 v-if="count == 1" :step="value" />
              <Step3 v-if="count == 2" :step="value" />
              <Step4 v-if="count == 3" :step="value" />
              <Step5 v-if="count == 4" :step="value" />
              <Step6 v-if="count == 5" :step="value" />
              <Step7 v-if="count == 6" :step="value" />
              <Step8 v-if="count == 7" :step="value" />
              <Step9 v-if="count == 8" :step="value" />

              <div class="button-group">
                <button
                  type="submit"
                  class="general-btn-1"
                  style="padding: 1% 2%"
                  v-if="count >= 8"
                >
                  SUBMIT
                </button>
              </div>
            </q-form>
          </div>
          <div class="button-group" v-if="!starter">

            <button
              type="button"
              @click="prevPage"
              v-if="count > 0 && count < 8"
              class="general-btn-1"
              style="padding: 1% 2%"
            >
              BACK
            </button>

            <button
              type="button"
              @click="nextPage"
              v-if="count >= 0 && count < 8"
              class="general-btn-1"
              style="padding: 1% 2%"
            >
              FORWARD
            </button>
          </div>
          <div style="height: 25vh; width: 100%"></div>
        </div>
      </div>

      <!-- DIALOG -->

      <div class="dialog-box">
        <q-dialog v-model="card">
          <q-card class="my-card">
            <q-img src="~assets/luxo-italia-paul-venezia-barca.jpg" />

            <q-card-section>
              <q-btn
                fab
                color="primary"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  I think you have to pick an option!
                </div>
                <div
                  class="
                    col-auto
                    text-grey text-caption
                    q-pt-md
                    row
                    no-wrap
                    items-center
                  "
                >
                  <q-icon name="place" />
                  250 ft
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$・Italian, Cafe</div>
              <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn v-close-popup flat color="primary" label="Reserve" />
              <q-btn v-close-popup flat color="primary" round icon="event" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <!-- END DIALOG -->
    </q-page>
  </transition>
</template>

<script>
import Step1 from "../components/Quiz/Step1.vue";
import Step2 from "../components/Quiz/Step2.vue";
import Step3 from "../components/Quiz/Step3.vue";
import Step4 from "../components/Quiz/Step4.vue";
import Step5 from "../components/Quiz/Step5.vue";
import Step6 from "../components/Quiz/Step6.vue";
import Step7 from "../components/Quiz/Step7.vue";
import Step8 from "../components/Quiz/Step8.vue";
import Step9 from "../components/Quiz/Step9.vue";

import PreLoader from "src/components/PreLoader.vue";

import { ref, watchEffect } from "vue";
import { api } from "boot/axios";
import { useStore, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    PreLoader,
  },
  methods: {
    ...mapActions(["quiz/actStep1"]),
    ...mapMutations({
      removeStep1: "quiz/removeStep1",
      removeStep2: "quiz/removeStep2",
      removeStep3: "quiz/removeStep3",
      removeStep4: "quiz/removeStep4",
      removeStep5: "quiz/removeStep5",
      removeStep6: "quiz/removeStep6",
      removeStep7: "quiz/removeStep7",
      removeStep8: "quiz/removeStep8",
      removeStep9: "quiz/removeStep9",
      addBodyClass: "dynamicClasses/addBodyClass",
    }),
  },
  setup() {
    const $store = useStore();

    const count = ref(0);
    const value = ref(1 / 9);
    const starter = ref(true);
    const card = ref(false);
    watchEffect(() => (value.value = (count.value + 1) / 9));

    return {
      count,
      value,
      starter,
      card,
      $store,
      stars: ref(3),

      startQuiz() {
        $store.commit("dynamicClasses/addFooterClass", "quiz");
        starter.value = false;
        window.scroll({
          top: 700,
          behavior: "smooth",
        });
      },

      prevPage() {
        if (count.value === 1 && $store.state.quiz.step1 !== "") {
          $store.commit("quiz/removeStep1");
          $store.commit("quiz/removeStep2");
        } else if (count.value === 2 && $store.state.quiz.step2 !== "") {
          $store.commit("quiz/removeStep2");
          $store.commit("quiz/removeStep3");
        } else if (count.value === 3 && $store.state.quiz.step3 !== "") {
          $store.commit("quiz/removeStep3");
          $store.commit("quiz/removeStep4");
        } else if (count.value === 4 && $store.state.quiz.step4 !== "") {
          $store.commit("quiz/removeStep4");
          $store.commit("quiz/removeStep5");
        } else if (count.value === 5 && $store.state.quiz.step5 !== "") {
          $store.commit("quiz/removeStep5");
          $store.commit("quiz/removeStep6");
        } else if (count.value === 6 && $store.state.quiz.step6 !== "") {
          $store.commit("quiz/removeStep6");
          $store.commit("quiz/removeStep7");
        } else if (count.value === 7 && $store.state.quiz.step7 !== "") {
          $store.commit("quiz/removeStep7");
          $store.commit("quiz/removeStep8");
        } else if (count.value === 8 && $store.state.quiz.step8 !== "") {
          $store.commit("quiz/removeStep8");
          $store.commit("quiz/removeStep9");
        } else if (count.value === 9 && $store.state.quiz.step9 !== "") {
          $store.commit("quiz/removeStep9");
          $store.commit("quiz/removeStep10");
        } else if (count.value === 10 && $store.state.quiz.step10 !== "") {
          $store.commit("quiz/removeStep10");
          $store.commit("quiz/removeStep11");
        }

        count.value--;
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          window.scrollTo(0, 250);
        } else {
          window.scrollTo(0, 700);
        }
      },

      nextPage() {
        if (count.value === 0 && $store.state.quiz.step1 === "") {
          card.value = true;
        } else if (count.value === 1 && $store.state.quiz.step2 === "") {
          card.value = true;
        } else if (count.value === 2 && $store.state.quiz.step3 === "") {
          card.value = true;
        } else if (count.value === 3 && $store.state.quiz.step4 === "") {
          card.value = true;
        } else if (count.value === 4 && $store.state.quiz.step5 === "") {
          card.value = true;
        } else if (count.value === 5 && $store.state.quiz.step6 === "") {
          card.value = true;
        } else if (count.value === 6 && $store.state.quiz.step7 === "") {
          card.value = true;
        } else if (count.value === 7 && $store.state.quiz.step8 === "") {
          card.value = true;
        } else if (count.value === 8 && $store.state.quiz.step9 === "") {
          card.value = true;
        } else {
          count.value++;
          if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            window.scrollTo(0, 250);
          } else {
            window.scrollTo(0, 700);
          }
        }
      },

      onSubmit() {
        const payload = {
          step1: $store.state.quiz.step1,
          step2: $store.state.quiz.step2,
          step3: $store.state.quiz.step3,
          step4: $store.state.quiz.step4,
          step5: $store.state.quiz.step5,
          step6: $store.state.quiz.step6,
          step7: $store.state.quiz.step7,
          step8: $store.state.quiz.step8,
          step9: $store.state.quiz.step9,
        };

        console.log(payload);

        api
          .post(
            "https://webhook.site/85c0b276-132e-469c-ad90-b723120d830c",
            payload
          )
          .then(
            (response) => {
              alert(JSON.stringify(response));
              // $q.notify({
              //   color: "green-4",
              //   textColor: "white",
              //   icon: "cloud_done",
              //   message: "Your data has been submitted",
              // });
            },
            (error) => {
              alert(error);
              // $q.notify({
              //   color: "red-5",
              //   textColor: "white",
              //   icon: "warning",
              //   message: "Something was wong, try again!",
              // });
            }
          );
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1580px) {
  .h2-title-quiz {
    padding: 0 15% !important;
  }
}

// TYPO***************
.h6-title-quiz {
}
.h2-title-quiz {
}
.h4-title-quiz {
}
.ul-title-quiz {
  font-family: "CommutersSans-Regular";
  list-style: none;
}
.li-title-quiz {
  margin-bottom: 1%;
}

// **********HEADER BLOCK**********

@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
  }
}

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9037990196078431) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.figcaption h6.text-white {
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}

.starter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4% 9% 6% 9%;
}

.button-group {
  // position: relative;
  // top: 15vh;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1%;
}

// **********FIRST BLOCK**********

.sub-section-first {
  margin-bottom: 10vh;
}

@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }
}

@media screen and (max-width: 680px) {
  .img1 {
    height: 35vh !important;
  }

   .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }

  .h4-title-quiz {
    font-size: 20px;
    line-height: 25px;
    text-align: center;
  }

  .ul-title-quiz {
    padding: unset;
  }

  .li-title-quiz {
    margin-bottom: 5%;
    font-size: 16px;
    line-height: 25px;
  }
}

// **********SECOND BLOCK**********
</style>
