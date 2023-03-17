<template>
  <footer class="footer">
    <div class="footer__container">
      <a
        href="https://wbdv.ru"
        class="footer__link"
        target="_blank"
      >
        <svg-icon
          name="my-logo-icon"
          class="footer__icon"
        />
      </a>
      <a
        href="https://github.com/ProjectOnGitHub"
        class="footer__link"
        target="_blank"
      >
        <svg-icon
          name="github-icon"
          class="footer__icon"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @include gridable(100%);
  background-color: $color-bg-main;
  box-sizing: border-box;
  justify-items: center;
  &__container {
    @include flexible(100%);
    justify-content: right;
    align-items: center;
    gap: 15px;
    max-width: $max-width;
    padding: 30px 20px;
    box-sizing: border-box;
  }
  &__icon {
    @include flexible(30px);
    align-content: center;
    height: 30px;
  }
}
</style>
