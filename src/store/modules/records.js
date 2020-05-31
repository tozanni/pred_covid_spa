import HTTP from "../../http-common";

import axios from "axios";

const records = {
  namespaced: true,
  state: {
    records: [],
  },
  mutations: {
    SET_RECORDS(state, data) {
      state.records = data;
    },
  },
  actions: {
    loadRecords({ commit }) {
      HTTP.get("records.json")
        .then((res) => {
          commit("SET_RECORDS", res.data);
        })
        .catch((error) => console.log(error));
    },
  },
};

export default records;
