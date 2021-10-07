<template>
  <div class="contact-box desktop-only">
    <a href="mailto:info@luxoitalia.com" title="Email Us">
      <div style="text-align: center">
        <img class="barimage envelope" src="~assets/envelope.svg" /><span
          class="title"
          >Email us</span
        >
      </div>
    </a>
    <a href="https://wa.me/393478198849" target="_blank" title="Chat Whatsapp">
      <div style="text-align: center">
        <img class="barimage" src="~assets/whatsapp.png" /><span class="title"
          >Whatsapp</span
        >
      </div>
    </a>
  </div>
  <div class="mobile-contact-box mobile-only">
    <a href="https://wa.me/393478198849" target="_blank" title="Chat Whatsapp">
      <div style="text-align: center">
        <img class="wa-image" src="~assets/whatsapp.png" />
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-box {
  position: fixed;
  z-index: 99999;
  right: 0;
  top: 45%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  background: #d9c69f;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.contact-box a {
  width: 50px;
  height: 50px;
  display: block;
  text-decoration: none !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
}

.barimage {
  vertical-align: middle;
  border-style: none;
  width: 41%;
  margin-bottom: 6px;
  margin-top: 16px;
}

a span {
  display: block;
  clear: both;
  color: #fff !important;
  text-decoration: none !important;
  text-transform: uppercase;
  font-size: 10px;
  transition: all 0.3s ease;
  opacity: 0;
}

.envelope {
  width: 48%;
  margin-top: 50%;
}

.mobile-contact-box {
  position: fixed;
  bottom: 0;
  right: 0;
  background: #d9c69f;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border-radius: 50%;
  margin: 2%;
  z-index: 99999;
}

.wa-image {
  width: 50%;
  margin-top: 22.5%;
}

/* @media screen and (max-width: 800px) {
  .contact-box {
    max-width: 250px;
    position: fixed;
    z-index: 99999;
    top: unset;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #ae8e31;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 55%;
    text-align: center;
    border-bottom-left-radius: unset;
  }
  .contact-box a {
    width: 70px;
    height: 70px;
    display: inline-block;
    text-decoration: none !important;
    position: relative;
    float: none;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    opacity: 0.7;
    padding-top: 13px;
  }

  .envelope {
    margin-top: unset;
  }

  a span {
    opacity: 1;
  }
} */
</style>
