<template>
  <div class="question-box">
    <div class="inner-question-box">
      <h4 class="text-center text-primary question">
        How Old Are You?
      </h4>

      <h6 class="text-center text-primary answer">
        Your Answer is: <span class="text-info">{{ answer }}</span>
      </h6>

      <div class="progress-bar">
        <q-linear-progress
          rounded
          size="20px"
          :value="$props.step"
          color="primary"
          class="q-mt-sm linear-progress"
        />
      </div>
    </div>
  </div>
  <div class="quiz-layout">
    <hr class="hr" />
    <hr class="hr" />
    <div class="wrapper" :class="wrapper1">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/21-20-40.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio
          v-model="answer"
          val="teal"
          color="primary"
          label="20 - 40"
          @update:model-value="addClass"
        />
      </q-item-section>
    </div>

    <div class="wrapper" :class="wrapper2">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/22-40-50.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio
          v-model="answer"
          val="red"
          color="primary"
          label="40 - 50"
          @update:model-value="addClass"
        />
      </q-item-section>
    </div>

    <div class="wrapper" :class="wrapper3">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/23-50-60.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio
          v-model="answer"
          val="blue"
          color="primary"
          label="50 - 60"
          @update:model-value="addClass"
        />
      </q-item-section>
    </div>

    <div class="wrapper" :class="wrapper4">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/24-60.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio
          v-model="answer"
          val="green"
          color="primary"
          label="60+"
          @update:model-value="addClass"
        />
      </q-item-section>
    </div>
  </div>
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
    ...mapActions(["quiz/actStep6"]),
    ...mapMutations({
      updateStep1: "quiz/updateStep6",
    }),
  },

  setup(props) {
    const $store = useStore();
    const wrapper1 = ref();
    const wrapper2 = ref();
    const wrapper3 = ref();
    const wrapper4 = ref();
    const answer = ref();

    const stepVal = computed({
      get: () => $store.state.quiz.step6,
    });

    return {
      wrapper1,
      wrapper2,
      wrapper3,
      wrapper4,
      stepVal,
      answer,

      addClass(val, event) {
        $store.dispatch("quiz/actStep6", answer);

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

}

.progress-bar {
  display: flex;
  justify-content: center;
}

.linear-progress {
  width: 80%;
}

.answer {
  margin: unset;
}

.question {
  font-size: 25px;
  line-height: 30px;
  margin-top: unset;
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
  }

  .question {
    font-size: 25px;
  }

  // .question-box {
  //   margin-bottom: 40%;
  // }

  .answer {
    transform: scale(0.85);
    margin-bottom: 1%;
  }

  .question {
    transform: scale(0.85);
    margin-bottom: 1%;
  }
}
</style>
