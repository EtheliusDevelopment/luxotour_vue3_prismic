<template>
  <q-layout view="lHh lpR lFf">
    <q-page-container class="testCONTAINER">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";


export default {
  components: {

  },
  setup() {

      return {

      }
  },
 }
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
