<template>
  <div class="catalog-item-wr">
    <div class="catalog-item">
      <a
        href="catalogItemInner.html"
        class="catalog-item__img"
      >
        <img
          :src="require(`@/images/${coin.img.src}`)"
          :alt="coin.img.alt"
        >
      </a>
      <a
        href="catalogItemInner.html"
        class="link catalog-item__heading"
      >{{coin.name}}</a>
      <div class="catalog-item__desc-box">
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Состояние:</span>
          <span class="catalog-item__value">{{coin.condition}}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Год выпуска:</span>
          <span class="catalog-item__value">{{coin.release_date}}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Материал:</span>
          <span class="catalog-item__value">{{coin.material}}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Вес:</span>
          <span class="catalog-item__value">{{weight}}</span>
        </p>
      </div>
      <strong class="catalog-item__price catalog-item__price--old-price">{{price_current}}</strong>
      <a
        href="catalogItemInner.html"
        class="link catalog-item__price catalog-item__price--new-price"
      >59 496 ₽</a>
      <i
        title="Редкая монета"
        class="catalog-item__rare"
      >
        <span class="icon-text">редкая монета</span>
        <!-- {{ sprite('icon-diamond') }} -->
      </i>
      <!-- {{ spriteForLink('icon-favorite') }} -->
      <!-- {{ spriteForLink('icon-basket') }} -->
      <a
        href="#"
        class="icon-cross"
      ></a>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'CatalogItem',

    data() {
      return {};
    },

    props: {
      coin: {
        type: Object,
        required: true,
      },
    },

    computed: {
      weight() {
        return `${this.coin.weight.count} ${this.coin.weight.unit}`;
      },

      price_current() {
        return `${this.coin.price_current} ${this.coin.price_system}`;
      },
    },
  };
</script>

<style>

</style>
