<template>
  <div class="show-example">
    ShowExample
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data () {
    return {
    };
  },
  mounted () {
    this.$nextTick(() => {
    });
  },
};
</script>

<style lang="scss" scoped>

  .show-example {

  }

  @include breakpoint("small-laptop") {

  }

</style>
