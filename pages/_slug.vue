<template>
  <div class="post">
    <FlexibleContent
      v-if="page.sections.length"
      :sections="page.sections"
    />
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
