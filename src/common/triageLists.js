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
        value: "articulations_pain",
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
        value: "diabetes_1_and_2",
        text: "Diabetes 1 y 2"
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
        value: "immunological",
        text: "Inmunológica"
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
        value: "parkinson_s",
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