<template>
  <div class="question-box">
    <div class="inner-question-box">
      <h4 class="text-center text-info question">Congratulations!</h4>

      <h6 class="text-center text-primary answer">
        Check your Email, and find out what kind of traveler you are
      </h6>

      <div class="flex flex-center q-mt-xl">
        <button
          type="button"
          class="general-btn-1"
          style="padding: 1% 2%"
          @click="$router.push('/')"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="quiz-layout">
    <div class="input-box q-mt-lg">
      <q-input
        outlined
        v-model="name"
        label="Name"
        class="q-mb-xl input-quiz"
      />

      <q-input
        outlined
        v-model="surname"
        label="Surname"
        class="q-mb-xl input-quiz"
      />
      <q-input
        outlined
        v-model="email"
        label="Email"
        class="q-mb-xl input-quiz"
      />
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore, mapMutations, mapActions } from "vuex";

export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(["quiz/actStep9"]),
    ...mapMutations({
      updateStep1: "quiz/updateStep9",
    }),
  },

  setup(props) {
    const $store = useStore();
    const wrapper1 = ref();
    const wrapper2 = ref();
    const wrapper3 = ref();
    const wrapper4 = ref();
    const answer = ref();
    const name = ref();
    const surname = ref();
    const email = ref();

    const stepVal = computed({
      get: () => $store.state.quiz.step9,
    });

    return {
      wrapper1,
      wrapper2,
      wrapper3,
      wrapper4,
      stepVal,
      answer,
      name,
      surname,
      email,

      addClass(val, event) {
        $store.dispatch("quiz/actStep9", answer);

        if (val == "teal") {
          wrapper2.value = null;
          wrapper3.value = null;
          wrapper4.value = null;
          wrapper1.value = "active-class";
        } else if (val == "red") {
          wrapper1.value = null;
          wrapper3.value = null;
          wrapper4.value = null;
          wrapper2.value = "active-class";
        } else if (val == "blue") {
          wrapper1.value = null;
          wrapper2.value = null;
          wrapper4.value = null;
          wrapper3.value = "active-class";
        } else if (val == "green") {
          wrapper1.value = null;
          wrapper2.value = null;
          wrapper3.value = null;
          wrapper4.value = "active-class";
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.radio-quiz {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 20%;
  height: 50vh;
  flex-direction: column;
  margin-left: 3%;
  border: 3px solid #4c457149;
  border-radius: 5px;
  padding: 0.4%;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
  cursor: pointer;
  margin: 2% 2%;
  background-color: white;
}

.active-class {
  box-shadow: unset;
  border: 3px solid #4c4571c2;
}

.wrapped-section-two {
  align-items: center;
  margin-top: 10%;
}

.quiz-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // position: relative;
  // top: 5vh;
  margin: 0 6%;
}

.hr {
  width: 80%;
  height: 1vh;
  border: none;
  background-color: $info;
  z-index: -1;
  position: relative;
  top: 30vh;
  margin-top: 2vh;
}

.question-box {
  // position: sticky;
  // top: 0;
  z-index: 999;
  background: white;
  padding: 1%;
  margin-top: 6%;
  margin-bottom: 10%;
}

.progress-bar {
  display: flex;
  justify-content: center;
}

.linear-progress {
  width: 80%;
}

.answer {
  font-family: "CommutersSans-Regular";
  text-align: center;
  margin: unset;
  padding: 0 5%;
  font-size: 20px;
}

.question {
  font-size: 40px;
  line-height: 50px;
  margin-top: unset;
}

.input-quiz {
  width: 100%;
}

.input-box {
  width: 40%;
}

@media screen and (max-width: 990px) {
  .answer {
    transform: scale(0.9);
  }

  .question {
    transform: scale(0.9);
  }
  .wrapper {
    width: 40%;
  }

  .hr {
    display: none;
  }
}
@media screen and (max-width: 680px) {
  .quiz-layout {
    flex-direction: column;
  }

  .wrapper {
    width: 90%;
    height: 30vh;
  }

  .wrapped-section-two {
    margin-top: 5%;
  }

  .hr {
    display: none;
  }

  .answer {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 1%;
  }

  .question {
    font-size: 25px;
  }

  // .question-box {
  //   margin-bottom: 40%;
  // }

  .question {
    transform: scale(0.85);
    margin-bottom: 1%;
  }
}
</style>
