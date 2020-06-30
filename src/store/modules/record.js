import { HTTP }  from "../../http-common";

const record = {
    namespaced: true,
    state: {
        record: {
            "admission_date": "2020-06-26T06:40:35.543Z",
            "id_canonical": "string",
            "status": "Cuidados intensivos",
            "egress_date": "2020-06-26T06:40:35.543Z",
            "egress_type": "fallecio",
            "rcp_required": true,
            "treatment": "lorem ipsum dorlor si amet",
            "egress_notes": "lorem ipsum dorlor si amet",
            "vital_signs": {
                "age": "54",
                "gender": "male",
                "weight": 88,
                "height": 188,
                "diastolic_blood_pressure": 80,
                "systolic_blood_pressure": 120,
                "heart_rate": 60,
                "breathing_frequency": 15,
                "temperature": 36.5,
                "oximetry": 96,
                "capillary_glucose": 80,
                "created_at": "2020-06-26T06:40:35.543Z",
                "updated_at": "2020-06-26T06:40:35.543Z"
            },
            "triage": {
                "days_before_admission": 3,
                "difficulty_breathing": true,
                "chest_pain": true,
                "headache": 0,
                "cough": 2,
                "smoker": true,
                "pregnant": true,
                "created_at": "2020-06-26T06:40:35.543Z",
                "updated_at": "2020-06-26T06:40:35.543Z"
            },
            "hematic_biometry": {
                "hematocrit": 32.76,
                "hemoglobin": 10.71,
                "leukocytes": 9.48,
                "platelets": 512.71,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "blood_chemistry": {
                "glucose": 76,
                "urea": 33.8,
                "creatinine": 0.99,
                "cholesterol": 200,
                "triglycerides": 150,
                "glycated_hemoglobin": 5.7,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "serum_electrolytes": {
                "sodium": 142,
                "potassium": 4.0,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "medical_notes": {
                "notes": "lorem ipsum dorlor si amet",
                "prescription_drugs": "string",
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "liver_function": {
                "aspartate_aminotransferase": 72,
                "alanine_transaminase": 62,
                "blood_urea_nitrogen": 15.2,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "clotting_time": {
                "prothrombin": 26.7,
                "thromboplastin": 31.1,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "immunological": {
                "reactive_protein_c": 0.36,
                "created_at": "2020-06-26T06:40:35.544Z",
                "updated_at": "2020-06-26T06:40:35.544Z"
            },
            "created_at": "2020-06-26T06:40:35.544Z",
            "updated_at": "2020-06-26T06:40:35.544Z"
        },
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
                    commit("SET_RECORD", res.data.data);
                })
                .catch(error => console.error(error));
        },
        updateRecord({ commit }, record) {
            commit('setRecord', record);
        },
    }
};

export default record;
