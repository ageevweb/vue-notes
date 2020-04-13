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
    message: null,
    grid: true
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
    },

    REMOVE_NOTE: (state, index) => {
      let notesLs = JSON.parse(localStorage.getItem('notes'));
      notesLs.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notesLs));
      state.notes = notesLs
    },

    SET_MESSAGE: (state, message) => {
      state.message = message
    },

    SWITCH_GRID: (state, position) => {
      state.grid = position
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
    },

    REMOVE_NOTE({commit}, index) {
      commit('REMOVE_NOTE', index);
    },

    SET_MESSAGE({commit}, message) {
      commit('SET_MESSAGE', message);
    },
    SWITCH_GRID({commit}, position) {
      commit('SWITCH_GRID', position);
    }
  },

  getters:{
    NOTES(state) {
      return state.notes;
    },
    MESSAGE(state) {
      return state.message;
    },
    GRID(state) {
      return state.grid;
    },
  },
});

export default store;