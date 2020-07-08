<template>
  <v-container fluid>
    <v-form>
      <v-text-field
        label="Dias enfermo antes de ingreso"
        v-model="form.days_before_admission"
        suffix="dias"
      ></v-text-field>
      <v-checkbox v-model="form.difficulty_breathing" label="Dificultad para respirar"></v-checkbox>
      <v-checkbox v-model="form.chest_pain" label="Dolor Toracico"></v-checkbox>
      <v-checkbox v-model="form.pregnant" label="Embarazo"></v-checkbox>
      <v-checkbox v-model="form.smoker" label="Fumador"></v-checkbox>
      <div class="spacer"></div>
      <div class="input-title">Dolor de cabeza:</div>
      <v-slider
        v-model="form.headache"
        :tick-labels="sliderLabels"
        :color="form.headache === 3 ? 'red' : form.headache ? 'amber darken-3' : ''"
        :max="3"
        step="1"
        ticks
      ></v-slider>
      <div class="spacer"></div>
      <div class="input-title">Tos:</div>
      <v-slider
        v-model="form.cough"
        :tick-labels="sliderLabels"
        :color="form.cough === 3 ? 'red' : form.cough ? 'amber darken-3' : ''"
        :max="3"
        step="1"
        ticks
      ></v-slider>
      <div class="spacer"></div>
      <v-select
        v-model="form.other_symptoms"
        :items="symptomsList"
        label="Otros sintomas:"
        multiple
        chips
      ></v-select>
      <div class="spacer"></div>
      <v-select
        v-model="form.comorbidities"
        :items="comorbiditiesList"
        label="Comorbilidades:"
        multiple
        chips
      ></v-select>
      <div class="spacer"></div>
      <div class="d-flex justify-center">
        <v-btn color="primary" x-large rounded @click="submitTriageSigns">
          <v-icon left large dark>mdi-chevron-right</v-icon>Calcular Probabilidad RCP
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { HTTP } from "../http-common";

export default {
  computed: {
    triageObject() {
      return {
        admission_date: this.record.admission_date,
        status: this.record.status,
        triage: {
          days_before_admission: this.form.days_before_admission,
          difficulty_breathing: this.form.difficulty_breathing,
          chest_pain: this.form.chest_pain,
          headache: this.form.headache,
          cough: this.form.cough,
          other_symptoms: this.form.other_symptoms,
          comorbidities: this.form.comorbidities,
          smoker: this.form.smoker,
          pregnant: this.form.pregnant
        }
      };
    },
    ...mapState("record", ["record"])
  },
  data() {
    return {
      form: {
        days_before_admission: null,
        difficulty_breathing: false,
        chest_pain: false,
        headache: null,
        cough: null,
        other_symptoms: null,
        comorbidities: null,
        smoker: false,
        pregnant: false
      },
      sliderLabels: ["No", "Leve", "Moderado", "Grave"],
      symptomsList: [
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
      ],
      comorbiditiesList: [
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
      ]
    };
  },
  methods: {
    submitTriageSigns() {
      HTTP.put(`records/${this.record.id}`, this.triageObject)
        .then(res => {
          this.setRecord(res.data);
          this.$router.push({
            name: "probability",
            params: { uuid: this.record.id }
          });
        })
        .catch(error => console.error(error));
    },
    ...mapActions("record", [
      "setRecord",
      "clearRecord",
      "updateRecord",
      "formatDates"
    ])
  },
  mounted() {
    if (this.record && this.record.triage) {
      this.form = { ...this.record.triage };
    }
  }
};
</script>