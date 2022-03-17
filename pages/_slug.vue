<template>
  <div class="post">
    <!-- <About
      v-if="post.slug === 'about'"
      :post="post"
    /> -->
    <pre>{{ page }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let page;
    try {
      page = await $content(`pages`, params.slug).fetch();
    } catch (e) {
      error({ message: `Page not found` });
    }

    return {
      page,
    };
  },
};
</script>

<style lang="scss" scoped>

.post {

}

</style>
