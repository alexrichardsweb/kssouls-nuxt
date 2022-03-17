<template>
  <main id="app">
    <Header />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>

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
