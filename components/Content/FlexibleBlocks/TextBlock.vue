<template>
  <div class="text-block max-article-width">
    <Content
      :content="section.text"
    />
  </div>
</template>

<script>
export default {
  props: {
    section: Object,
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

  .text-block {

  }

</style>
