<template>
  <div class="home max-content-width px-1">
    Homepage
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

  .home {
    margin-top: #{$headerHeightMobile};
    min-height: calc(100vh - #{$headerHeightMobile} - #{$footerHeightMobile});
  }

  @include breakpoint('landscape-tablet') {

    .home {
      margin-top: #{$headerHeightDesktop};
      min-height: calc(100vh - #{$headerHeightDesktop} - #{$footerHeightDesktop});
    }

  }

</style>
