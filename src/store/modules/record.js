import { HTTP } from "../../http-common";

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
            console.log({ ...state.record, ...payload });
            state.persisted = true
        },
        FETCH_RECORD(state) {
            state.persisted = true
        },
        CLEAR_RECORD(state) {
            state.record = null,
                state.persisted = false
        },
    },
    actions: {
        setRecord({ commit }, record) {
            commit("SET_RECORD", record);
        },
        clearRecord({ commit }) {
            commit('CLEAR_RECORD');
        },
        updateRecord({ commit }, record) {
            commit('UPDATE_RECORD', record);
        },
        fetchRecord({ commit }, uuid) {
            HTTP.get(`records/${uuid}`)
                .then(res => {
                    commit("SET_RECORD", res.data);
                })
                .catch(error => console.error(error));
        },
    }
};

export default record;
