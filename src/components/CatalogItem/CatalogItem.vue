<template>
  <div
    :class="['catalog-item-wr', { isHovered: isHovered }]"
    @mouseenter="onHover()"
    @mouseleave="onHover()"
  >
    <div class="catalog-item">
      <a
        href="catalogItemInner.html"
        class="catalog-item__img"
      >
        <img
          :src="require(`@/images/${characteristics.img.src}`)"
          :alt="characteristics.img.alt"
        >
      </a>
      <a
        href="#"
        class="link catalog-item__heading"
      >{{ characteristics.name }}</a>
      <div class="catalog-item__desc-box">
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Состояние:</span>
          <span class="catalog-item__value">{{ characteristics.condition }}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Год выпуска:</span>
          <span class="catalog-item__value">{{ characteristics.release_date }}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Материал:</span>
          <span class="catalog-item__value">{{ characteristics.material }}</span>
        </p>
        <p class="catalog-item__desc-field">
          <span class="catalog-item__prop">Вес:</span>
          <span class="catalog-item__value">{{ weight }}</span>
        </p>
      </div>
      <strong
        class="catalog-item__price catalog-item__price--old-price">{{ price_current }}</strong>
      <a
        href="#"
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
      />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CatalogItem',

    props: {
      characteristics: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        isHovered: true,
      };
    },

    computed: {
      weight() {
        return `${this.characteristics.weight.count} ${this.characteristics.weight.unit}`;
      },

      price_current() {
        return `${this.characteristics.price_current} ${this.characteristics.price_system}`;
      },
    },

    methods: {
      onHover() {
        this.isHovered = !this.isHovered;
        console.log(this.isHovered);
      },
    },
  };
</script>
