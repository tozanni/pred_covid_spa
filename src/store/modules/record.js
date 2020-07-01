import { HTTP }  from "../../http-common";

const record = {
    namespaced: true,
    state: {
        record: null,
        persisted: false
    },
    mutations: {
        SET_RECORD(state, record) {
            state.record = record
            state.persisted = true;
        },
        UPDATE_RECORD(state, payload) {
            state.record = { ...state.record, ...payload };
            state.persisted = true
        },
        FETCH_RECORD(state) {
            state.persisted = true
        },
    },
    actions: {
        createRecord({ commit }, record) {
            HTTP.post("records", record)
                .then(res => {
                    console.log(res);
                    commit("SET_RECORD", res.data);
                })
                .catch(error => console.error(error));
        },
        updateRecord({ commit }, record) {
            commit('setRecord', record);
        },
        fetchRecord({ commit }, uuid) {
            HTTP.get(`records/${uuid}`)
                .then(res => {
                    commit("SET_RECORD", res.data.data);
                })
                .catch(error => console.error(error));
        },
    }
};

export default record;
