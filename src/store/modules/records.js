import HTTP from "@/http-common";

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
      HTTP.get("records")
        .then((res) => {
          commit("SET_RECORDS", res.data);
        })
        .error((error) => console.log(error));
    },
  },
};

export default records;
