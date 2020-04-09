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
      let notesLS = []
      let firstNote = {
        title: 'First Note',
        descr: 'Descr for first note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'normal',
      }
      notesLS.push(firstNote)
      localStorage.setItem('notes', JSON.stringify(notesLS));
      state.notes = notesLS
    },

    SET_NOTES: (state, notes) => {
      state.notes = notes;
    },

    ADD_NEW_NOTE: (state, newNote) => {
      let notesLs = JSON.parse(localStorage.getItem('notes'));
      notesLs.push(newNote);
      localStorage.setItem('notes', JSON.stringify(notesLs));
      state.notes = notesLs
    }
  },


  actions:{
    GET_NOTES_FROM_LS({ commit }) {
      if(localStorage.getItem('notes') == null) {
        commit('SET_THE_FIRST_NOTE');
      } else {
        commit('SET_NOTES', JSON.parse(localStorage.getItem('notes')));
      }
    },

    ADD_NEW_NOTE({ commit }, note) {
      commit('ADD_NEW_NOTE', note);
    }
  },

  getters:{
    NOTES(state) {
      return state.notes;
    },
  },
});

export default store;