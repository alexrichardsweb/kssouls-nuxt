<template>
  <div class="header bg-black c-white">
    <div class="header__main p-2">
      <div class="header__menu c-white">
        Menu
      </div>
    </div>
    <div class="header__checkered bg-checkered" />
  </div>
</template>

<script>
export default {
  props: {

  },
  async asyncData ({ $content }) {
    const settings = await $content(`Settings`).fetch();
    console.log(settings);
    return { settings };
  },
  data () {
    return {
    };
  },
  mounted () {
  },
};
</script>

<style lang="scss" scoped>

.header {

  &__checkered {
    width: 100%;
    height: 30px;
  }
}

</style>
