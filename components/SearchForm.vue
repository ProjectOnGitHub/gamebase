<template>
  <form class="search__form">
    {{ token }}

    <label class="search__form-label">
      <input
        class="search__form-input"
        min-ength="1"
        required
        name="search"
        type="search"
        placeholder="Games..." />
      <Button
        className="search__button"
        buttonType="button"
        buttonName="search-button"
        @click="requestToken">
        <svg-icon
          name="search-icon"
          class="search__icon" />
      </Button>
    </label>
  </form>
</template>

<script>
const AUTH_URL = process.env.AUTH_URL;
const API_URL = process.env.API_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
export default {
  data() {
    return {
      token: '',
    };
  },
  mounted() {},

  methods: {
    requestToken() {
      fetch(
        `${AUTH_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
        {
          method: 'POST',
        },
      )
        .then((res) => res.json())
        .then((data) => {
          const expireTo = data.expires_in * 60 + Date.now();
          if (localStorage.getItem('expireTo') < Date.now()) {
            localStorage.setItem('expireTo', JSON.stringify(expireTo));
            localStorage.setItem('token', JSON.stringify(data.access_token));
          }
          this.token = localStorage.getItem('token');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__form {
    @include flexible(100%);

    max-width: 500px;
    border-radius: 50%;
    height: 40px;
    &-label {
      @include flexible(100%);
      align-items: center;
      height: 100%;
      border-radius: 50px;
      border: none;
      flex-flow: nowrap;
      padding-left: 15px;
      background-color: $color-bg-element;
    }
    &-input {
      @include flexible(100%);
      border: none;
      height: 24px;
      outline: none;
      background-color: $color-bg-element;
      color: $color-text-main;
      &::placeholder {
        color: $color-link-main;
      }
    }
  }
  &__icon {
    stroke: $color-link-main;
    fill: transparent;
    width: 18px;
    height: 18px;
  }
}
</style>
