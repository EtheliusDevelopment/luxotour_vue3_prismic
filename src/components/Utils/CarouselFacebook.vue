<template>
  <div class="facebook-reviews-global" style="border: 1px solid #d9c5a0">
    <div class="facebook-title">
      <h2 class="text-primary text-center">Facebook Reviews</h2>
    </div>

    <div class="facebook-body desktop-only">
      <div
        class="review-first flex div-review"
        v-if="count === 0"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="count === 1"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Filippo de Sanctis</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Pietro Binachi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="count === 2"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Giuseppe Verdi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>
    </div>

    <div class="facebook-body mobile-only">
      <div
        class="review-first flex div-review"
        v-if="slide1"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            And then I found the Luxo wine club. I just wanted to share my
            experience with my friends and family, to show them what is it - to
            be an Italian.
          </p>

          <p class="text-center body-review">
            I wanted to share with my family! The wine selection, gifts, the
            community itself - is a literal experience of Italy.
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="slide2"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            temporibus. Porro incidunt numquam delectus et nisi beatae minus
            labore excepturi!
          </p>

          <p class="text-center body-review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            dolores est maxime.
          </p>

          <p class="payoff text-center text-primary">Filippo de Sanctis</p>

          <p class="payoff-echo text-center text-info">Denver, Colorado</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            to be an Italian. And then I found the Luxo
            wine club Lorem ipsum dolor sit amet.
          </p>

          <p class="text-center body-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            facilis corrupti maxime vel voluptatibus.
          </p>

          <p class="payoff text-center text-primary">Pietro Binachi</p>

          <p class="payoff-echo text-center text-info">Dubai, EAU</p>
        </div>
      </div>

      <div
        class="review-first flex div-review"
        v-if="slide3"
        style="flex-wrap: nowrap"
      >
        <div class="facebook-slide flex">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Giuseppe Verdi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <hr color="#D9C5A0" class="desktop-only" />

        <div class="facebook-slide flex desktop-only">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">Mario Rossi</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>
    </div>

    <div
      class="facebook-buttons"
      style="
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 99;
        position: relative;
        bottom: 35vh;
        padding: 0 2%;
      "
    >
      <img
        class="prev-arrow"
        src="~assets/freccia_prev.svg"
        alt=""
        @click="count--"
        style="width: 4vw"
      />

      <img
        class="next-arrow"
        src="~assets/freccia.svg"
        alt=""
        @click="count++"
        style="width: 4vw"
      />
    </div>

    <div class="navigation-mobile q-mb-md mobile-only">
      <div class="navigation-box flex flex-center">
        <button
          class="
            q-mr-sm q-btn q-btn-item
            non-selectable
            no-outline
            q-btn--flat q-btn--round
            text-white
            q-btn--actionable
            q-focusable q-hoverable
            q-btn--dense
            q-carousel__navigation-icon q-carousel__navigation-icon--inactive
            btn-facebook-mobile
          "
          :class="{ active: classSlide1 }"
          @click="slide1Fn"
          tabindex="0"
          type="button"
          role="button"
          style="font-size: 10px; color: #4c4571 !important"
        >
          <span class="q-focus-helper" tabindex="-1"></span
          ><span
            class="
              q-btn__content
              text-center
              col
              items-center
              q-anchor--skip
              justify-center
              row
            "
            ><svg
              class="q-icon"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              ></path></svg
          ></span>
        </button>

        <button
          class="
            q-mr-sm q-btn q-btn-item
            non-selectable
            no-outline
            q-btn--flat q-btn--round
            text-white
            q-btn--actionable
            q-focusable q-hoverable
            q-btn--dense
            q-carousel__navigation-icon q-carousel__navigation-icon--inactive
            btn-facebook-mobile
          "
          :class="{ active: classSlide2 }"
          @click="slide2Fn"
          tabindex="0"
          type="button"
          role="button"
          style="font-size: 10px; color: #4c4571 !important"
        >
          <span class="q-focus-helper" tabindex="-1"></span
          ><span
            class="
              q-btn__content
              text-center
              col
              items-center
              q-anchor--skip
              justify-center
              row
            "
            ><svg
              class="q-icon"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              ></path></svg
          ></span>
        </button>

        <button
          class="
            q-btn q-btn-item q-mr-sm
            non-selectable
            no-outline
            q-btn--flat q-btn--round
            text-white
            q-btn--actionable
            q-focusable q-hoverable
            q-btn--dense
            q-carousel__navigation-icon q-carousel__navigation-icon--inactive
            btn-facebook-mobile
          "
          :class="{ active: classSlide3 }"
          @click="slide3Fn"
          tabindex="0"
          type="button"
          role="button"
          style="font-size: 10px; color: #4c4571 !important"
        >
          <span class="q-focus-helper" tabindex="-1"></span
          ><span
            class="
              q-btn__content
              text-center
              col
              items-center
              q-anchor--skip
              justify-center
              row
            "
            ><svg
              class="q-icon"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              ></path></svg
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";

export default {
  setup() {
    const count = ref(0);
    const slide1 = ref(true);
    const slide2 = ref(false);
    const slide3 = ref(false);
    const classSlide1 = ref(true);
    const classSlide2 = ref(false);
    const classSlide3 = ref(false);

    onUpdated(() => {
      if (count.value < 0) {
        count.value = 2;
      } else if (count.value > 2) {
        count.value = 0;
      } else {
        return null;
      }
    });
    return {
      count,
      slide1,
      slide2,
      slide3,
      classSlide1,
      classSlide2,
      classSlide3,
      slide1Fn() {
        classSlide2.value = false;
        classSlide3.value = false;
        classSlide1.value = true;

        slide2.value = false;
        slide3.value = false;
        slide1.value = true;
      },
      slide2Fn() {
        classSlide1.value = false;
        classSlide3.value = false;
        classSlide2.value = true;

        slide1.value = false;
        slide3.value = false;
        slide2.value = true;
      },
      slide3Fn() {
        classSlide1.value = false;
        classSlide2.value = false;
        classSlide3.value = true;

        slide1.value = false;
        slide2.value = false;
        slide3.value = true;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1580px) {
  .facebook-buttons {
    bottom: 25vh !important;
  }
}

hr {
  height: 30vh;
}

.facebook-reviews-global {
  margin: 4% 6%;
}

.facebook-slide {
  flex-direction: column;
}

.payoff {
  font-family: "Hatton-Medium";
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 10%;
}

.payoff-echo {
  font-size: 17px;
}

.body-review {
  font-family: "CommutersSans-Regular";
  font-size: 17px;
  padding: 0 15%;
}

.facebook-body {
  padding: 0 10%;
}

.facebook-buttons-prev {
  position: relative;
  top: 38vh;
  left: 5%;
}

.facebook-buttons-next {
  position: relative;
  top: -30vh;
  left: 90%;
}

.next-arrow {
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

.prev-arrow {
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1) !important;
  }
}

@media screen and (max-width: 680px) {
  .facebook-buttons {
    display: none !important;
  }

  .body-review {
    padding: 0 5%;
  }

  .btn-facebook-mobile {
  }

  .facebook-body {
    padding: unset !important;
  }

  .active {
    opacity: 1 !important;
  }

  .payoff {
    margin-top: 5%;
  }
}
</style>
