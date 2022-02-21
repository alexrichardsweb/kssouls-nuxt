<template>
  <div
    :class="{ 'small' : hasScrolled }"
    class="header bg-black c-white box-shadow"
  >
    <div class="header__main p-1 max-content-width">
      <div class="header__logo">
        <img
          :src="logo"
          title="Ka's Ska Souls logo"
          alt="Ka's Ska Souls logo"
        >
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
      <div
        :class="mobileMenuOpen ? 'active' : 'not-active'"
        class="header__toggle"
        title="Main Menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <div class="header__checkered bg-checkered" />
    <MobileMenu
      :open="mobileMenuOpen"
      :menu-items="menuItems"
      :social="social"
    />
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      hasScrolled: false,
      mobileMenuOpen: false,
    };
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
        return this.settings.logo.replace(`/static`, ``);
      }
      return {};
    },
    social () {
      return this.settings.social.map(social => social.social_media);
    },
  },
  beforeMount () {
    window.addEventListener(`scroll`, this.handleScroll);
  },
  destroyed () {
    window.removeEventListener(`scroll`, this.handleScroll);
  },
  mounted () {
  },
  methods: {
    handleScroll (e) {
      this.hasScrolled = window.scrollY >= 120;
    },
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
  max-height: #{$headerHeightMobile};

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s;
  }

  &__logo {
    width: 90px;
    transition: .2s;
    img {
      transition: .2s;
    }
  }

  &__checkered {
    width: 100%;
    height: 20px;
    transition: .2s;
  }

  &__menu {
    display: none;
    @include fontSize(20px);
  }

  &__toggle {
    width: 57.5px;
    cursor: pointer;
    padding: .75rem;

    span {
      display: block;
      width: 100%;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3);
      border-radius: 3px;
      height: 3px;
      background: #fff;
      transition: all .2s;
      position: relative;
    }

    span + span {
      margin-top: 7px;
    }

    &.active {
      span:nth-child(1) {
        animation: ease .7s top forwards;
      }
      span:nth-child(2) {
        animation: ease .7s scaled forwards;
      }
      span:nth-child(3) {
        animation: ease .7s bottom forwards;
      }
    }

    &.not-active {
      span:nth-child(1) {
        animation: ease .7s top-2 forwards;
      }
      span:nth-child(2) {
        animation: ease .7s scaled-2 forwards;
      }
      span:nth-child(3) {
        animation: ease .7s bottom-2 forwards;
      }
    }

  }
}

@include breakpoint('landscape-tablet') {

  .header {
    transition: .2s;
    max-height: #{$headerHeightDesktop};
    &__menu {
      display: flex;
      @include fontSize(24px);
      li {
        margin-left: 2rem;
        position: relative;
        margin-top: 1px;
        list-style: none;
        a {
          transition: .2s;
          text-decoration: none;
          color: #fff;
        }
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          width: 0;
          background: #fff;
          transition: .2s;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
    &__logo {
      width: 130px;
    }

    &__toggle {
      display: none;
    }

    &.small {
      .header__logo {
        width: 90px;
      }
      .header__menu {
        @include fontSize(20px);
      }
      .header__checkered {
        /* height: 0; */
        transition: .2s;
      }
    }
  }

}

/* Mobile Menu Animations */

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 10px;
    transform: rotate(0);
  }
  100% {
    top: 10px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 10px;
    transform: rotate(45deg);
  }
  50% {
    top: 10px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 10px;
    transform: rotate(0);
  }
  100% {
    bottom: 10px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 10px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 10px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>
