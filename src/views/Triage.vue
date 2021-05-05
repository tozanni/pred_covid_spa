<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <v-container fluid>
      <v-form>
        <ValidationProvider
          rules="required|numeric|min:0"
          name="days_before_admission"
          v-slot="{ errors, valid }"
        >
          <v-text-field
            label="Dias enfermo antes de ingreso"
            v-model.number="form.days_before_admission"
            suffix="dias"
            type="number"
            :success="valid"
            :error-messages="errors"
          ></v-text-field>
        </ValidationProvider>
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

        <div class="d-flex justify-center mb-4">
          <v-btn
            color="primary"
            x-large
            rounded
            @click="goToLabs()"
            :disabled="invalid"
          >Laboratorios de COVID-19</v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-btn color="primary" x-large rounded @click="goToPrediction()" :disabled="invalid">
            <v-icon left large dark>mdi-chevron-right</v-icon>Calcular Probabilidad RCP
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { symptomsList, comorbiditiesList } from "../common/triageLists";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
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
        days_before_admission: null, //TODO: quitar dias de enfermo antes de la admission
        difficulty_breathing: false, //TODO: quitar dificultad pararespirar
        chest_pain: false, //TODO: quitar dolor de pecho
        headache: 0, //TODO: quitar dolor de cabeza
        cough: 0, //TODO: quitart tos
        other_symptoms: null,
        comorbidities: null,
        smoker: false, //TODO: quitar
        pregnant: false //TODO: quitar
      },
      sliderLabels: ["No", "Leve", "Moderado", "Grave"],
      symptomsList,
      comorbiditiesList
    };
  },
  methods: {
    submitTriageSigns(route) {
      this.$http.put(`records/${this.record.id}`, this.triageObject)
        .then(res => {
          this.setRecord(res.data);
          this.$router.push({
            name: route,
            params: { uuid: this.record.id }
          });
        })
        .catch(error => console.error(error));
    },
    goToLabs() {
      this.submitTriageSigns("covid")
    },
    goToPrediction() {
      this.submitTriageSigns("probability")
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