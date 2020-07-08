import { HTTP } from "../../http-common";
import moment from "moment/moment";

const record = {
    namespaced: true,
    state: {
        record: null,
        persisted: false
    },
    computed: {
    },
    mutations: {
        SET_RECORD(state, record) {
            state.record = record;
            state.persisted = true;
        },
        UPDATE_RECORD(state, payload) {
            state.record = { ...state.record, ...payload };
            state.persisted = true;
        },
        CLEAR_RECORD(state) {
            state.record = null;
            state.persisted = false;
        },
        APPLY_FORMAT(state) {
            state.record.admission_date = moment(state.admission_date).format("YYYY-MM-DD HH:mm:ss");
            if(state.record.vital_signs) {
                state.record.vital_signs.age = moment().diff(state.record.vital_signs.age, 'years')
            }
        },
    },
    actions: {
        setRecord({ commit }, record) {
            commit("SET_RECORD", record);
            commit("APPLY_FORMAT");
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
                    commit("APPLY_FORMAT");
                })
                .catch(error => console.error(error));
        },
        formatDates({ commit }) {
            commit('FORMAT_DATES');
        },
    }
};

export default record;
