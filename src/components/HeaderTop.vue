<template>
  <div class="header__top header__top--white">
    <div class="header__top--left">
      <a
        href="main.html"
        data-action="click->header#onBurgerBtnClick"
        data-target="header.burgerBtn"
        class="burger"
      >
        <span class="burger__bar"></span>
      </a>
      <a
        href="main.html"
        class="logo link-as-icon logo--gold"
      ></a>
      <a
        href="basket.html"
        class="basket-btn"
      >
        <!--{{ sprite('icon-basket') }}-->
      </a>
    </div>

    <div class="header__top--right">
      <nav class="nav nav--header">
        <div class="nav__inner">
          <a
            href="catalog.html"
            class="nav__item link"
          >Каталог</a>
          <a
            href="aboutus.html"
            class="nav__item link"
          >О нас</a>
          <a
            href="purchase.html"
            class="nav__item link"
          >Покупка</a>
          <a
            href="contacts.html"
            class="nav__item link"
          >Контакты</a>
          <a
            href="personalCabinetMyOrders.html"
            class="nav__item link"
          >Личный кабинет</a>
          <a
            href="personalCabinetFavorites.html"
            class="nav__item link"
          >Избранное</a>
          <a
            href="basket.html"
            class="nav__item link"
          >Корзина</a>
        </div>
      </nav>

      <div
        data-controller="lang-switcher"
        class="lang-switcher lang-switcher--center"
      >
        <label class="lang-switcher__list-item">
          <input
            type="radio"
            name="1"
            class="lang-switcher__radio"
            checked="true"
          >
          <span>Ru</span>
        </label>
        <label class="lang-switcher__list-item">
          <input
            type="radio"
            name="1"
            class="lang-switcher__radio"
          >
          <span>Eng</span>
        </label>
      </div>

      <span>
        {{ favourites }}
      </span>

      <!-- {% import 'components/forms/search.njk' as forms %} -->

      <!-- {{ forms.search('search-2') }} -->

    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {};
    },

    computed: {
      ...mapState({
        favourites: state => state.favourites.length,
      }),
    },
  };
</script>

<style>
</style>
