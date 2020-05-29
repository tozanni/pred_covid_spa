import Vue from "vue";
import Vuex from "vuex";
import medicalRecord from "./medicalRecord";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    medicalRecords: [],
    currentRecord: null,
  },
  mutations: {
    setRecords(state, records) {
      state.medicalRecords = records;
    },

    setCurrentMedicalRecord(state, record) {
      state.currentRecord = record;
    },

    setRecords(state, records) {
      state.medicalRecords = records;
    },

    decrementRecordInventory(state, { id }) {
      const record = state.medicalRecords.find((record) => record.id === id);
      record.inventory--;
    },
  },
  actions: {
    getAllMedicalRecords({ commit }) {
      //TODO: fetch records from api
    },
    createMedicalRecord({ commit }) {
      commit("setCurrentMedicalRecord", medicalRecord);
    },
  },
  modules: {},
});
