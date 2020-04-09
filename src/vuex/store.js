import Vue from 'vue';
import Vuex from 'vuex';

// import commonActions from './actions/actions';
// import apiRequests from './actions/api-requests'
// import getters from './getters/getters'
// import mutations from './mutations/mutations'

// const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations:{},
  actions:{},
  getters:{},
});

export default store;