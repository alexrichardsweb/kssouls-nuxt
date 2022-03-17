<template>
  <div class="footer bg-black c-white">
    <div class="footer__checkered bg-checkered" />
    <div class="footer__main p-1">
      <div class="footer__menu c-white">
        Footer
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    social () {
      return this.settings.social.map(social => social.social_media);
    },
  },
};
</script>

<style lang="scss" scoped>

.footer {

  &__checkered {
    width: 100%;
    height: 20px;
  }
}

</style>
