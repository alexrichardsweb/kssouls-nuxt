<template>
  <main id="app">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import Vue from 'vue';
import global from '~/mixins.js/global.js';
import constants from '~/mixins.js/constants.js';

Vue.mixin(global);
Vue.mixin(constants);

export default {
};
</script>

<style lang="scss" scoped>

main {
  padding-top: $headerHeightMobile;
}

@include breakpoint('landscape-tablet') {

  main {
    padding-top: $headerHeightDesktop;
  }

}

</style>
