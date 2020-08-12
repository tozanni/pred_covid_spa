export const symptomsList = [
    {
        value: "conjunctivitis",
        text: "Conjuntivitis"
    },
    {
        value: "diarrhea",
        text: "Diarrea"
    },
    {
        value: "myalgia",
        text: "Dolor de articulaciones"
    },
    {
        value: "muscle_pain",
        text: "Dolor muscular"
    },
    {
        value: "sore_throat_or_pain",
        text: "Dolor o ardor de garganta"
    },
    {
        value: "shaking_chills",
        text: "Escalofríos"
    },
    {
        value: "fatigue_and_weakness",
        text: "Fatiga y debilidad"
    },
    {
        value: "nausea",
        text: "Náusea"
    },
    {
        value: "sweating",
        text: "Sudoración"
    },
    {
        value: "threw_up",
        text: "Vómito"
    },
    {
        value: "nasal_congestion",
        text: "Congestión nasal"
    },
    {
        value: "dyspnoea",
        text: "Dificultad respiratoria o falta de aire"
    },
    {
        value: "rhinorrhea",
        text: "Rinorrea"
    }
];
export const comorbiditiesList = [
    {
        value: "anemia",
        text: "Anemia"
    },
    {
        value: "coronary_atherosclerosis",
        text: "Aterosclerosis coronaria"
    },
    {
        value: "cancer",
        text: "Cáncer"
    },
    {
        value: "cardiovascular",
        text: "Cardiovascular"
    },
    {
        value: "type_1_diabetes",
        text: "Diabetes tipo 1"
    },
    {
        value: "type_2_diabetes",
        text: "Diabetes tipo 2"
    },
    {
        value: "gestational_diabetes",
        text: "Diabetes gestacional"
    },
    {
        value: "cardiac_arrhythmias",
        text: "Arritmias cardíacas"
    },
    {
        value: "seizures_or_epilepsy",
        text: "Convulsiones o Epilepsia"
    },
    {
        value: "glaucoma",
        text: "Glaucoma"
    },
    {
        value: "hepatic_cirrhosis",
        text: "Cirrosis Hepática"
    },
    {
        value: "hypertension",
        text: "Hipertensión"
    },
    {
        value: "Immunosuppression",
        text: "Inmunosupresión"
    },
    {
        value: "leukemia",
        text: "Leucemia"
    },
    {
        value: "neurological",
        text: "Neurológica"
    },
    {
        value: "osteoporosis",
        text: "Osteoporosis"
    },
    {
        value: "parkinsons",
        text: "Parkinson"
    },
    {
        value: "high_pressure",
        text: "Presion Alta"
    },
    {
        value: "pulmonary",
        text: "Pulmonar"
    },
    {
        value: "chronic_kidney",
        text: "Renal crónica"
    },
    {
        value: "immunosuppressive_treatment",
        text: "Tratamiento inmunosupresor"
    },
    {
        value: "hiv",
        text: "VIH"
    }
];

export function getSymptomName(value) {
    return symptomsList.find(symptom => symptom.value === value).text
}
export function getComorbidityName(value) {
    return comorbiditiesList.find(comorbidity => comorbidity.value === value).text
}