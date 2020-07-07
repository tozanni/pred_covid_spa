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
        FETCH_RECORD(state) {
            state.persisted = true;
        },
        CLEAR_RECORD(state) {
            state.record = null;
            state.persisted = false;
        },
        FORMAT_DATES(state) {
            console.log('format dates');
            state.record.admission_date = moment(state.admission_date).format("YYYY-MM-DD HH:mm:ss");
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
                    commit("FORMAT_DATES");
                })
                .catch(error => console.error(error));
        },
        formatDates({ commit }) {
            commit('FORMAT_DATES');
        },
    }
};

export default record;
