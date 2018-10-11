<template>
  <Layout>
    <template slot="content">
      <div class="page__wrapper page__wrapper--catalog-page">

        <header
          data-controller="header"
          class="header header--with-bg header--with-filter"
        >

          <header-top></header-top>

          <div class="header__container header__container--second-variant">

            <h1 class="header__title">Каталог</h1>

            <div class="header__description">

            </div>

          </div>

        </header>
        <main class="main">


          <section class="catalog section-wrapper section-wrapper--pdt">
            <div class="container container--padding-off">
              <div class="catalog__inner">
                <template v-for="{id, characteristics} in coins">
                  <catalog-item
                    :key="id"
                    :coin="characteristics"
                  ></catalog-item>
                </template>

              </div>

            </div>
          </section>
        </main>

      </div>
    </template>


  </Layout>
</template>

<script>
  import Layout from '@/views/Layout.vue';
  import CatalogItem from '@/components/CatalogItem.vue';
  import HeaderTop from '@/components/HeaderTop.vue';

  import coins from '@/assets/coins';

  export default {
    name: 'Catalog',

    components: {
      Layout,
      CatalogItem,
      HeaderTop,
    },

    data() {
      return {
        coins,
      };
    },

  };
</script>

<style>
</style>
