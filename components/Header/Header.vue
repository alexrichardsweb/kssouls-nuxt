<template>
  <div class="header bg-black c-white">
    <div class="header__main p-2">
      <div class="header__menu c-white">
        <li
          v-for="item in menuItems"
          :key="item.title"
        >
          {{ item.title }}
        </li>
      </div>
    </div>
    <div class="header__checkered bg-checkered" />
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {};
  },
  computed: {
    settings () {
      return this.$store.state.settings;
    },
    menuItems () {
      if (this.settings) {
        return this.settings.menu_pages.map(page => page[`Menu Item`]);
      }
      return [];
    },
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
