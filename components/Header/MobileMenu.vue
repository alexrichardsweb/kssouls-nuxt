<template>
  <div
    :class="open ? 'open' : 'closed'"
    class="menu bg-black c-white fixed p-1"
  >
    <ul class="menu__menu c-white ta-centre">
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
</template>

<script>
export default {
  props: {
    menuItems: Array,
    open: Boolean,
    social: Array,
  },
};
</script>

<style lang="scss" scoped>

.menu {
  bottom: 0;
  right: 0;
  left: 0;
  top: 79px;
  opacity: 0;
  transform: translateY(100%);
  &.open {
    animation: fade-in-menu .5s ease-out;
    opacity: 1;
    transform: translateY(0);
  }
  &.closed {
    animation: fade-out-menu .5s ease-out;
  }

  ul {
    li {
      margin: 1rem 0;
      @include fontSize(24px);
    }
  }
}

@include breakpoint('landscape-tablet') {

  .menu {
    display: none;
  }

}

@for $i from 1 through 8 {
  .menu.open ul {
    $speed: calc(.5s + #{$i / 10}s + #{$i / 20}s);
    li:nth-of-type(#{$i}) {
      animation: fade-in-menu-items #{$speed} ease-in-out;
    }
  }
}

@keyframes fade-in-menu {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-out-menu {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(100%);
    }
}

@keyframes fade-in-menu-items {
    from {
        opacity: 0;
        transform: translateX(200px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

</style>
