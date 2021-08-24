<template>
  <PreLoader />
  <q-layout view="lHh lpR lFf">
    <q-header class="text-white bg-secondary" height-hint="98">
      <q-toolbar class="toolbar">
        <q-btn
          class="mobile-only"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="navbar-title desktop-only">
          <router-link to="/" class="wrapper-logo">
            <q-img
              class="navbar-logo"
              src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
            />
          </router-link>

          <q-tabs>
            <!-- <q-route-tab to="/" label="Home" /> -->
            <q-route-tab to="/about" label="About Us" />
            <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
            <q-route-tab to="/wine-club" label="Wine Club" />
            <q-route-tab to="/testimonials" label="Testimonials" />
            <q-route-tab to="/quiz" label="Quiz" />
            <q-route-tab to="/blog" label="Blog" />
            <q-route-tab to="/contact-us" label="Contact" />
          </q-tabs>

          <q-btn
            size="1.1vw"
            class="q-px-lg q-py-xs btn-toolbar"
            color="white"
            label="Start a planning"
          />
        </q-toolbar-title>
      </q-toolbar>
      <!--
      <q-tabs class="desktop-only">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About Us" />
        <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
        <q-route-tab to="/wine-club" label="Wine Club" />
        <q-route-tab to="/testimonials" label="Testimonials" />
        <q-route-tab to="/quiz" label="Quiz" />
        <q-route-tab to="/blog" label="Blog" />
        <q-route-tab to="/contact-us" label="Contact" />
      </q-tabs> -->
    </q-header>

    <q-drawer
      class="drawer"
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      bordered
    >
      <!-- drawer content -->

      <!-- <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About Us" />
        <q-route-tab to="/luxury-travel" label="Italy Luxury Travel" />
        <q-route-tab to="/wine-club" label="Wine Club" />
        <q-route-tab to="/testimonials" label="Testimonials" />
        <q-route-tab to="/quiz" label="Quiz" />
        <q-route-tab to="/blog" label="Blog" />
        <q-route-tab to="/contact-us" label="Contact" /> -->
      <q-list padding class="menu-list q-list-drawer">
        <!--
           <q-item clickable v-ripple to="/about">
              <q-img
                class="q-mb-md"
                src="~assets\luxoitalia_logo_white_2020.svg"
                spinner-color="primary"
                spinner-size="82px"
              />
            </q-item> -->

        <q-item clickable v-ripple to="/" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="home" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Home </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> About Us </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/luxury-travel" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Italy Luxury Travel
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/wine-club" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Wine Club
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/testimonials" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md">
            Testimonials
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/quiz" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Quiz </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/blog" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Blog </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/contact-us" class="q-ml-md">
          <q-item-section avatar q-ml-md>
            <q-icon name="flight_takeoff" color="white" />
          </q-item-section>

          <q-item-section class="text-white q-ml-md"> Contact </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="testCONTAINER">
      <router-view />
    </q-page-container>

    <q-footer elevated class="footer text-white desktop-only">
      <q-card class="my-card">
        <q-img class="footer-dialog" src="~assets\venice-footer-box.png">
        </q-img>

        <div class="footer-dialog-inner">
          <h2 class="dialog-inner-h2">Design your luxury tour.</h2>
          <q-img src="~assets\claim-footer-box.svg" class="claim-footer-box" />

          <q-btn
            size="1.1vw"
            class="q-px-lg q-py-xs q-mt-md btn-footer-box"
            color="white"
            label="Start the quiz"
          />
        </div>
      </q-card>

      <div class="wrapper-footer-items">
        <q-img
          class="inner-logo"
          src="https://www.luxoitalia.com/wp-content/themes/luxo-italia/assets/images/luxoitalia_logo_white_2020.svg"
        />
        <br />

        <q-img src="~assets\contact-us.svg" class="contact-footer" />
        <br />

        <q-img src="~assets\mail-footer.svg" class="mail-footer" />

        <br />

        <q-img src="~assets\follow-us.svg" class="follow-footer" />
        <br />

        <SocialComponent class="social-component" />
      </div>

      <h6 class="privacy-footer text-center">
        © LUXO ITALIA SNC - P.IVA 08637280960. ALL RIGHTS RESERVED. |
        <router-link to="/privacy"
          ><span class="privacy-link">PRIVACY POLICY</span></router-link
        >
        |
        <router-link to="/terms-and-conditions"
          ><span class="terms-link">TERMS AND CONDITION</span></router-link
        >
        |
        <router-link to="/brochure"
          ><span class="brochure-link">BROCHURE</span></router-link
        >
      </h6>

      <!-- </div> -->
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SocialComponent from "../components/SocialComponent.vue";
import PreLoader from "../components/PreLoader.vue";

export default {
  components: {
    SocialComponent,
    PreLoader,
  },

  setup() {

    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,


      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #4c4571;
  height: 100vh;
  position: unset;

  // position: relative;
  // top:400vh;
}

.my-card {
  position: relative;
  bottom: 24vh;
  left: 15vw;
  width: 50vw;
  z-index: 9;
}

.footer-dialog {
  width: 70vw;
  height: 60vh !important;
}

.inner-txt {
  height: 60vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.navbar-title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding-bottom: 6vh;
}

.navbar-logo {
  // width: 15vw;
  width: 12vw;
  // margin-top: 2vh;
}

.wrapper-logo {
  flex-grow: 1;
}

.q-page-container {
  // margin-top: 67vh;
  padding-bottom: unset !important;
  padding-top: unset !important;
}

.toolbar {
  // background-image: url("~assets/bg-header-1.png");
  // // background-repeat: no-repeat;
  background-color: transparent;
}

.btn-toolbar {
  color: #4c4571 !important;
  flex-grow: 1;
}

.btn-footer-box {
  color: #4c4571 !important;
  font-size: 0.8vw !important;
  font-weight: 900;
  padding: 2vh 3.5vw;
}

.q-tab {
  padding: unset;
  min-width: unset !important;
}

.q-page {
  margin-bottom: 30vh;
}

.q-tabs__content {
  // padding: 0 8rem;
  // width: 68vw;
  justify-content: space-around;
}

.q-header .q-tab__content {
  min-width: unset;
}
.q-header {
  position: unset !important;
}

.q-tabs__content {
  flex-grow: 1;
}

.q-tabs {
  flex-grow: 6;
}

.wrapper-footer-items {
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 6vh;
  margin-left: 10vw;
  margin-right: 10vw;
  position: relative;
  bottom: 48vh;
}
.privacy-footer {
  position: relative;
  bottom: 52vh;
}

.inner-logo {
  width: 20vw;
  margin-bottom: 3vh;
}

.mail-footer {
  width: 22vw;
  margin-bottom: 2rem;
}

.contact-footer {
  width: 13vw;
  margin-bottom: 1vh;
}

.follow-footer {
  width: 12vw;
  margin-bottom: 1vh;
}
.privacy-footer {
  font-size: 0.7vw;
  font-weight: 400;
}

.privacy-link {
  text-decoration: none;
  color: white;
}

.terms-link {
  text-decoration: none;
  color: white;
}

.brochure-link {
  text-decoration: none;
  color: white;
}

.q-card {
  background: transparent;
  box-shadow: unset;
}

.dialog-inner-h2 {
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  font-family: "Hatton";
  font-size: 2.8vw;
}
.footer-dialog-inner {
  position: relative;
  bottom: 50vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.claim-footer-box {
}

.q-tabs-drawer {
  display: flex;
  flex-direction: column;
}

.q-list-drawer {
  margin-top: 2vh;
}

// ******SANDBOX
// .q-toolbar.row.no-wrap.items-center.toolbar {
//     border: 3px solid;
// }

// .q-toolbar__title.ellipsis.navbar-title {
//     border: 3px solid yellow;
// }

// .q-tabs.row.no-wrap.items-center.q-tabs--not-scrollable.q-tabs--horizontal.q-tabs__arrows--inside.desktop-only {
//     border: 3px solid fuchsia;

// }

// .q-tabs__content.row.no-wrap.items-center.self-stretch.hide-scrollbar.q-tabs__content--align-center {
//     border: 3px solid greenyellow;
// }

// .q-tab__content.self-stretch.flex-center.relative-position.q-anchor--skip.non-selectable.column {
//     min-width: unset !important;
// }

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
</style>
