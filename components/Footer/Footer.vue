<template>
  <div class="footer bg-black c-white">
    <div class="footer__checkered bg-checkered" />
    <div class="footer__main p-2">
      <div class="footer__menu c-white">
        Menu
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
};
</script>

<style lang="scss" scoped>

.footer {

  &__checkered {
    width: 100%;
    height: 30px;
  }
}

</style>
