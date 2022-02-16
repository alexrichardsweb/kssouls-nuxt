<template>
  <div class="header bg-black c-white box-shadow">
    <div class="header__main p-1 max-content-width">
      <div class="header__logo">
        Logo
      </div>
      <ul class="header__menu c-white ta-right">
        <li
          v-for="item in menuItems"
          :key="item.title"
          class="tf-allcaps tf-heading tf-bold"
        >
          <a
            v-if="item.page_type === 'external'"
            :href="item.link"
            :title="item.title"
            target="_blank"
          >
            {{ item.title }}
          </a>
          <nuxt-link
            v-else
            :to="item.page"
            :title="item.title"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
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
    logo () {
      if (this.settings) {
        return this.settings.logo;
      }
      return {};
    },
  },
  mounted () {
  },
};
</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  &__main {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    width: 100px;
  }

  &__checkered {
    width: 100%;
    height: 26px;
  }

  &__menu {
    display: flex;
    @include fontSize(20px);
  }
}

@include breakpoint('landscape-tablet') {

  .header {
    &__menu {
      li {
        margin-left: 1.5rem;
      }
    }
  }

}

</style>
