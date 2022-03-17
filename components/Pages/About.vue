<template>
  <div class="about max-article-width py-2 px-1">
    About
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
  .about {
    animation: .2s fade-in-left ease-in-out;
  }
</style>
