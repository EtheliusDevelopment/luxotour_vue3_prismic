<template>
  <PreLoader />
  <q-layout view="lHh lpR lFf" @scroll="navBarBg">
    <q-header class="text-white bg-transaprent" height-hint="98">
      <div
        class="bg-transparent text-white q-px-xl wrapper-toolbar"
        style="width: 100%"
      >
        <div class="navbar-no-offset">
          <q-toolbar>
            <div class="mobile-navbar mobile-only q-mt-md flex flex-center">
              <q-img
                @click="toHome"
                class="navbar-logo-home mobile-only"
                width="200px"
                src="~assets/luxoitalia_logo_white_2020.svg"
              />
              <q-btn
                class="mobile-only btn-ham-mobile"
                dense
                flat
                round
                icon="menu"
                @click="toggleLeftDrawer"
              />
            </div>
            <router-link to="/" class="wrapper-logo desktop-only">
              <q-img
                class="navbar-logo q-mt-md"
                width="14vw"
                src="~assets/luxoitalia_logo_white_2020.svg"
              />
            </router-link>

            <q-space />

            <button
              class="btn-toolbar-new q-mt-md"
              @click="$router.push('/start_planning')"
            >
              START PLANNING
            </button>
          </q-toolbar>

          <q-separator
            color="white"
            size="1px"
            inset
            spaced
            style="margin-top: 2%"
            class="desktop-only"
          />

          <q-toolbar class="navigation-toolbar desktop-only">
            <q-tabs class="navigation-block wrap" indicator-color="primary">
              <q-route-tab
                class="route-tab"
                to="/about"
                label="About Us"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/luxury-travel"
                label="Italy Luxury Travel"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/wine-club"
                label="Wine Club"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/testimonials"
                label="Testimonials"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/quiz"
                label="Quiz"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/blog"
                label="Blog"
                active-class="route-active"
              />
              <q-route-tab
                class="route-tab"
                to="/contact-us"
                label="Contact Us"
                active-class="route-active"
              />
            </q-tabs>

            <q-space />

            <div
              class="social-footer-content flex justify-evenly"
              style="width: 9%"
            >
              <a href="https://www.facebook.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/facebook.svg"
                />
              </a>

              <a href="https://www.instagram.com/luxoitalia/" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/instagram.svg"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/luxo-italia/"
                target="_blank"
              >
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/linkedin.svg"
                />
              </a>

              <a href="https://twitter.com/luxo_italia" target="_blank">
                <q-img
                  img-class="img-footer-logo"
                  width="1.1vw"
                  class="footer-logo"
                  src="~assets/twitter.svg"
                />
              </a>
            </div>
          </q-toolbar>
        </div>

        <div class="navbar-offset" :class="bodyClass">
          <q-toolbar class="navigation-toolbar desktop-only justify-around">
            <router-link to="/" class="wrapper-logo desktop-only">
              <q-img
                class="navbar-logo"
                width="10vw"
                src="~assets/luxoitalia_logo_white_2020-2.svg"
              />
            </router-link>

            <q-tabs class="navigation-block wrap">
              <!-- <q-route-tab to="/" label="Home" /> -->
              <q-route-tab
                class="route-tab"
                to="/about"
                label="About Us"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/luxury-travel"
                label="Italy Luxury Travel"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/wine-club"
                label="Wine Club"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/testimonials"
                label="Testimonials"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/quiz"
                label="Quiz"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/blog"
                label="Blog"
                active-class="route-active-new"
              />
              <q-route-tab
                class="route-tab"
                to="/contact-us"
                label="Contact Us"
                active-class="route-active-new"
              />
            </q-tabs>

            <button
              class="btn-toolbar-new"
              @click="$router.push('/start_planning')"
            >
              START PLANNING
            </button>
          </q-toolbar>

          <q-toolbar class="mobile-only">
            <div class="mobile-navbar mobile-only q-mt-md flex flex-center">
              <q-img
                @click="toHome"
                class="navbar-logo-home mobile-only"
                width="50vw"
                src="~assets/luxoitalia_logo_white_2020-2.svg"
              />
              <q-btn
                class="mobile-only btn-ham-mobile"
                dense
                flat
                round
                icon="menu"
                @click="toggleLeftDrawer"
              />
            </div>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer
      class="drawer"
      v-model="leftDrawerOpen"
      side="right"
      behavior="mobile"
      no-swipe-open
      no-swipe-close
      no-swipe-backdrop
      bordered
    >
      <q-list padding class="menu-list q-list-drawer">
        <div class="img-index-drawer-box flex justify-between items-center">
          <q-img
            @click="toHome"
            class="navbar-logo"
            width="60%"
            src="~assets/luxoitalia_logo_white_2020-2.svg"
          />

          <q-icon
            name="close"
            color="white"
            size="8vw"
            class="q-mr-md"
            @click="toggleLeftDrawer"
          />
        </div>

        <q-item clickable v-ripple to="/">
          <q-item-section class="text-white qitem-align"> Home </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about" class="qitem-align">
          <q-item-section class="text-white qitem-align">
            About Us
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/luxury-travel" class="qitem-align">
          <q-item-section class="text-white qitem-align">
            Italy Luxury Travel
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/wine-club" class="qitem-align">
          <q-item-section class="text-white qitem-align">
            Wine Club
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/testimonials" class="qitem-align">
          <q-item-section class="text-white qitem-align">
            Testimonials
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/quiz" class="qitem-align">
          <q-item-section class="text-white qitem-align"> Quiz </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/blog" class="qitem-align">
          <q-item-section class="text-white qitem-align"> Blog </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/contact-us" class="qitem-align">
          <q-item-section class="text-white qitem-align">
            Contact
          </q-item-section>
        </q-item>

        <div class="btn-box-drawer flex flex-center">
          <button
            class="btn-toolbar-new-drawer q-mt-md"
            @click="$router.push('/start_planning')"
          >
            START PLANNING
          </button>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <WhatsappComponent />
      <router-view />
    </q-page-container>

    <q-footer class="absolute bg-white" :class="bodyClass">
      <div class="card-block flex flex-center">
        <q-img
          class="footer-dialog"
          src="~assets\venice-footer-box.jpg"
          width="80%"
        >
          <div
            class="flex flex-center"
            style="
              width: 100%;
              height: 100%;
              align-items: center;
              flex-direction: column;
              background-color: #48447150;
            "
          >
            <h2 class="text-white h2-card-block text-center">
              Design your luxury tour.
            </h2>

            <h6 class="text-white subtitle-h6-card-block text-center">
              LIMITED ONLY BY YOUR IMAGINATION .
            </h6>

            <button
              class="btn-toolbar-new btn-dialog-footer"
              @click="$router.push('/quiz')"
            >
              START THE QUIZ
            </button>
          </div>
        </q-img>
      </div>

      <div class="title-footer">
        <h6 class="text-primary subtitle-h6-card-block text-center">
          FOLLOW US ON INSTAGRAM
        </h6>
      </div>

      <div class="instagram-feed">
        <InstagramFeed />
      </div>

      <div class="footer-content flex justify-around">
        <div class="img-footer-content">
          <q-img
            img-class="img-footer-logo-main"
            class="img-footer-logo-main"
            width="15vw"
            src="~assets/luxoitalia-logo-2.svg"
          />
        </div>
        <div class="text-footer-content">
          <h6 class="text-info text-center h6-text-footer-content">
            Contact us
          </h6>
          <h5 class="text-black text-center h5-text-footer-content">
            INFO@LUXOITALIA.COM
          </h5>
        </div>
        <div
          class="social-footer-content flex justify-evenly"
          style="width: 9%"
        >
          <a href="https://www.facebook.com/luxoitalia/" target="_blank">
            <q-img
              img-class="img-footer-logo-social"
              width="1.8vw"
              class="footer-logo img-footer-logo-social"
              src="~assets/fb-foter.svg"
            />
          </a>

          <a href="https://www.instagram.com/luxoitalia/" target="_blank">
            <q-img
              img-class="img-footer-logo-social"
              width="1.8vw"
              class="footer-logo img-footer-logo-social"
              src="~assets/ig-foter.svg"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/luxo-italia/"
            target="_blank"
          >
            <q-img
              img-class="img-footer-logo-social"
              width="1.8vw"
              class="footer-logo img-footer-logo-social"
              src="~assets/in-foter.svg"
            />
          </a>

          <a href="https://twitter.com/luxo_italia" target="_blank">
            <q-img
              img-class="img-footer-logo-social"
              width="1.8vw"
              class="footer-logo img-footer-logo-social"
              src="~assets/tw-foter.svg"
            />
          </a>
        </div>
      </div>

      <q-separator inset color="info" />

      <div class="footer-bottom">
        <h6 class="h6-footer-bottom text-center text-black">
          © LUXO ITALIA SNC - P.IVA 08637280960.ALL RIGHTS RESERVED. | PRIVACY
          POLICY | TERMS AND CONDITION | BROCHURE
        </h6>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref, computed, onUpdated } from "vue";
import SocialComponent from "../components/SocialComponent.vue";
import PreLoader from "../components/PreLoader.vue";
import { useStore, mapMutations } from "vuex";
import { useRoute, useRouter } from "vue-router";
import InstagramFeed from "../components/Utils/InstagramFeed.vue";
import WhatsappComponent from "../components/Utils/WhatsappComponent.vue";

export default {
  components: {
    SocialComponent,
    PreLoader,
    InstagramFeed,
    WhatsappComponent,
  },

  methods: {
    ...mapMutations({
      addBodyClass: "dynamicClasses/addBodyClass",
    }),
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const thisRoute = ref(route.path);

    const leftDrawerOpen = ref(false);
    const $store = useStore();

    const bodyClass = ref();
    thisRoute.value === "/quiz"
      ? (bodyClass.value = "blog-single-display-none")
      : (bodyClass.value = "");

    onUpdated(() => {
      thisRoute.value = route.path;
      thisRoute.value === "/quiz"
        ? (bodyClass.value = "blog-single-display-none")
        : (bodyClass.value = "");
    });

    return {
      leftDrawerOpen,
      bodyClass,
      thisRoute,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      toHome() {
        router.push("/");
      },
      navBarBg() {
        const el = document.querySelector("header");
        const btn = document.querySelector(".btn-toolbar-new");
        const navBarOffset = document.querySelector(".navbar-offset");
        const navBarNoOffset = document.querySelector(".navbar-no-offset");

        window.scrollY > 100
          ? ((el.style.backgroundColor = "#D9C5A0"),
            (btn.style.display = "none"),
            (navBarOffset.style.display = "block"),
            (navBarNoOffset.style.display = "none"))
          : ((el.style.backgroundColor = "transparent"),
            (btn.style.display = "flex"),
            (navBarOffset.style.display = "none"),
            (navBarNoOffset.style.display = "block"));
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// *********TYPO *******************

.h6-footer-bottom {
  font-family: "CommutersSans-Regular";
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0px;
  margin: 0;
  line-height: 12px;
  padding: 2% 0%;
}

.h6-text-footer-content {
  margin-bottom: unset;
  font-family: "Hatton-Medium";
  font-size: 14px;
  letter-spacing: 1px;
}

.h5-text-footer-content {
  margin-top: unset;
  font-family: "CommutersSans-Regular";
  font-size: 15px;
  letter-spacing: 1px;
}

.subtitle-h6-card-block {
  margin-top: 1.5%;
  font-size: 24px;
  letter-spacing: 5px;
}

// *********NAVBAR BLOCK *******************
.navigation-toolbar {
}

.navigation-block {
  margin-left: -1% !important;
}

.route-tab {
  // padding: unset;
}

.wrapper-toolbar {
  padding: 0 6%;
}

.route-active {
  color: $info;
  border-bottom-width: 20px;
}

.route-active-new {
  color: $primary;
  border-bottom-width: 20px;
}

.blog-single-display-none {
  display: none !important;
}

header {
  background-color: transparent;
}

.btn-toolbar-new {
  border: none;
  padding: 1% 3%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

.navbar-offset {
  padding: 1% 0;
  display: none;
}

// *********DRAWER BLOCK *******************

.qitem-align {
  align-items: center !important;
  font-family: "Commuters-Sans-Bold";
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.img-index-drawer-box {
  border-bottom: 1px solid white;
  padding: 0 3% 8% 3%;
  margin-bottom: 6%;
}

.btn-toolbar-new-drawer {
  border: none;
  padding: 3% 6%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

// *********FOOTER BLOCK *******************

.footer-content {
  min-height: 40vh;
  align-items: center;
  background-color: #fbf8f4;
}

.instagram-feed {
  border-bottom: 1.3rem solid $info;
}

.footer-bottom {
  background-color: #fbf8f4;
}

.quiz-display-none {
  display: none;
}

.card-block {
  margin-bottom: 10%;
}

.my-card {
  position: relative;
  left: 15vw;
  width: 50vw;
  z-index: 9;
}

.btn-toolbar-new {
  border: none;
  padding: 1% 3%;
  background-color: white;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  font-size: 13px;
  cursor: pointer;
}

// ***FADING***************

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}

@media screen and (max-width: 1100px) {
  .h6-footer-bottom {
    transform: scale(0.9);
  }

  .subtitle-h6-card-block {
    transform: scale(0.9);
  }

  // ***NAVBAR********
  .btn-toolbar-new {
    padding: 1% 3%;
    background-color: white;
    color: #4c4571;
    font-family: "Commuters-Sans-Bold";
    font-size: 13px;
  }
}

@media screen and (max-width: 680px) {
  .h6-footer-bottom {
    transform: scale(0.85);
  }

  .subtitle-h6-card-block {
    font-size: 18px;
    line-height: 27px;
  }

  .btn-toolbar-new {
    display: none !important;
  }

  .footer-dialog {
    width: 100% !important;
    height: 430px !important;
  }

  .btn-dialog-footer {
    display: block !important;
    padding: 3% 6%;
  }

  .h2-card-block {
    font-size: 40px;
    line-height: 46px;
  }

  .footer-content {
    flex-direction: column;
  }

  .img-footer-logo-main {
    width: 70vw !important;
  }

  .social-footer-content {
    width: 50vw !important;
    margin-bottom: 10%;
  }

  .footer-logo {
    margin-right: 2% !important;
  }

  .img-footer-logo-social {
    width: 9vw !important;
    margin-right: 1% !important;
  }

  .mobile-navbar {
    width: 100% !important;
    justify-content: space-between !important;
  }

  .mobile-navbar {
    margin: 8px 0 !important;
  }
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  /* 2778x1284 pixels at 458ppi */
  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
  }
}
</style>
