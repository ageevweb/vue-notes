import Vue from 'vue';
import Vuex from 'vuex';

// import commonActions from './actions/actions';
// import apiRequests from './actions/api-requests'
// import getters from './getters/getters'
// import mutations from './mutations/mutations'

// const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
  },


  mutations: {
    SET_THE_FIRST_NOTE: (state) => {
      let firstNote = {
        title: 'First Note',
        descr: 'Descr for first note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'normal',
      }

      state.notes.push(firstNote)
    },
    SET_NOTES: (state, notes) => {
      state.notes = notes;
    },
  },


  actions:{
    GET_NOTES_FROM_LS({ commit }) {
      if(localStorage.getItem('notes') === null) {
        commit('SET_THE_FIRST_NOTE');
      } else {
        commit('SET_NOTES', JSON.parse(localStorage.getItem('notes')));
      }
    },
  },

  getters:{
    NOTES(state) {
      return state.notes;
    },
  },
});

export default store;