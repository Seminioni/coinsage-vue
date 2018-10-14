import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */

export default new Vuex.Store({
  state: {
    favourites: [],
    basket: [],
  },
  mutations: {
    addFavourite(state, coin) {
      state.favourites.push(coin)
    },
    removeFavourite(state, id) {

    },
  },
  actions: {
    addFavourite(context, payload) {
      context.commit('addFavourite', payload)
    }
  },
});
