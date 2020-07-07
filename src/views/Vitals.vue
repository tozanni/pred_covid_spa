<template>
  <v-container fluid>
    <ValidationProvider name="edad" rules="between:1,120" v-slot="{ errors }">
      <v-text-field id="edad" label="Edad:" v-model.number="form.age" suffix="años" type="number" :error-messages="errors" :error="errors.length > 0"></v-text-field>
    </ValidationProvider>
    <v-radio-group v-model="form.gender" label="Sexo:">
      <v-radio label="Masculino" value="M"></v-radio>
      <v-radio label="Femenino" value="F"></v-radio>
    </v-radio-group>
    <v-text-field label="Peso:" v-model.number="form.weight" suffix="kg"></v-text-field>
    <v-text-field label="Estatura:" v-model.number="form.height" suffix="cm"></v-text-field>
    <p class="text-center" v-show="form.weight !== null && form.height !== null">
      <Span class="font-weight-bold">IMC</Span>
      <!-- <span class="amber--text text--darken-3">Sobrepeso</span> -->
      <span>{{(form.weight / (form.height / 100 * form.height / 100)).toFixed(2) }}</span>
    </p>
    <v-text-field label="T.A. Diastolica:" v-model.number="form.diastolic_blood_pressure" suffix="mmhg"></v-text-field>
    <v-text-field label="T.A. Sistolica:" v-model.number="form.systolic_blood_pressure" suffix="mmhg"></v-text-field>
    <v-text-field label="Frecuencia Cardiaca:" v-model.number="form.heart_rate" suffix="latidos/min"></v-text-field>
    <v-text-field
      label="Frecuencia Respiratoria:"
      v-model.number="form.breathing_frequency"
      suffix="respiraciones/min"
    ></v-text-field>
    <v-text-field label="Temperatura:" v-model.number="form.temperature" suffix="°C"></v-text-field>
    <v-text-field label="Oximetria:" v-model.number="form.oximetry" suffix="%"></v-text-field>
    <v-text-field label="Glucosa Capilar:" v-model.number="form.capillary_glucose" suffix="mg/dl"></v-text-field>
    <div class="d-flex justify-center">
      <v-btn color="primary" x-large rounded @click="submitVitalSigns()">
        <v-icon left large dark>mdi-chevron-right</v-icon>Triage
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { HTTP } from "../http-common";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../common/validation-rules";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    ...mapState("record", ["record"])
  },
  data() {
    return {
      form: {
        age: null,
        gender: null,
        weight: null,
        height: null,
        diastolic_blood_pressure: null,
        systolic_blood_pressure: null,
        heart_rate: null,
        breathing_frequency: null,
        temperature: null,
        oximetry: null,
        capillary_glucose: null
      }
    };
  },
  methods: {
    submitVitalSigns() {
      this.updateRecord({ vital_signs: this.form });
      HTTP.put(`records/${this.record.id}`, {
        admission_date: this.record.admission_date,
        status: this.record.status,
        vital_signs: this.form
      })
        .then(res => {
          this.setRecord(res.data);
          this.$router.push({
            name: "triage",
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
  created() {
    if (!this.record.vital_signs) {
      this.updateRecord({ vital_signs: this.form });
    }
  }
};
</script>
