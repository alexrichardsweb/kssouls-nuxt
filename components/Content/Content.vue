<template>
  <div
    class="content"
    v-html="content"
  />
</template>

<script>
export default {
  props: {
    content: String,
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

  .content {
    img {
      width: 100%;
      margin: 1rem 0;
    }

    ul {
      margin: 1rem 0;
    }

    p {
      margin: 0 0 .5rem 0;
    }
  }

</style>
