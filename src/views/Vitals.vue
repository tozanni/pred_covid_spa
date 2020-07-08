<template>
  <v-container fluid>
    <ValidationProvider
      name="edad"
      rules="required|numeric|between:1,120"
      v-slot="{ errors, valid }"
    >
      <v-text-field
        :success="valid"
        id="edad"
        label="Edad:"
        v-model.number="form.age"
        suffix="años"
        type="number"
        :error-messages="errors"
        :error="errors.length > 0"
      ></v-text-field>
    </ValidationProvider>
    <ValidationProvider rules="required" name="gender" v-slot="{ errors, valid }">
      <v-radio-group
        id="gender"
        v-model="form.gender"
        label="Sexo:"
        :success="valid"
        :error-messages="errors"
      >
        <v-radio label="Masculino" value="M"></v-radio>
        <v-radio label="Femenino" value="F"></v-radio>
      </v-radio-group>
    </ValidationProvider>
    <ValidationProvider rules="required|between:1,500" name="weight" v-slot="{ errors, valid }">
      <v-text-field
        id="weight"
        label="Peso:"
        v-model.number="form.weight"
        suffix="kg"
        :success="valid"
        :error-messages="errors"
      ></v-text-field>
    </ValidationProvider>
    <ValidationProvider rules="required|between:40,250" name="height" v-slot="{ errors, valid }">
      <v-text-field
        id="height"
        label="Estatura:"
        v-model.number="form.height"
        suffix="cm"
        :success="valid"
        :error-messages="errors"
      ></v-text-field>
    </ValidationProvider>
    <p class="text-center" v-show="form.weight !== null && form.height !== null">
      <Span class="font-weight-bold">IMC</Span>
      <!-- <span class="amber--text text--darken-3">Sobrepeso</span> -->
      <span>{{(form.weight / (form.height / 100 * form.height / 100)).toFixed(2) }}</span>
    </p>
    <v-text-field
      label="T.A. Diastolica:"
      v-model.number="form.diastolic_blood_pressure"
      suffix="mmhg"
    ></v-text-field>
    <v-text-field
      label="T.A. Sistolica:"
      v-model.number="form.systolic_blood_pressure"
      suffix="mmhg"
    ></v-text-field>
    <v-text-field
      label="Frecuencia Cardiaca:"
      v-model.number="form.heart_rate"
      suffix="latidos/min"
    ></v-text-field>
    <v-text-field
      label="Frecuencia Respiratoria:"
      v-model.number="form.breathing_frequency"
      suffix="respiraciones/min"
    ></v-text-field>
    <v-text-field label="Temperatura:" v-model.number="form.temperature" suffix="°C"></v-text-field>
    <ValidationProvider rules="required|between:10,99" name="oximetry" v-slot="{ errors, valid }">
      <v-text-field
        id="oximetry"
        label="Oximetria:"
        v-model.number="form.oximetry"
        suffix="%"
        :success="valid"
        :error-messages="errors"
      ></v-text-field>
    </ValidationProvider>
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
import moment from "moment/moment";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../common/validation-rules";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    vitalsObject() {
      return {
        admission_date: this.record.admission_date,
        status: this.record.status,
        vital_signs: {
          age: moment().subtract(this.form.age, 'years').format("YYYY-MM-DD HH:mm:ss"),
          gender: this.form.gender,
          weight: this.form.weight,
          height: this.form.height,
          diastolic_blood_pressure: this.form.diastolic_blood_pressure,
          systolic_blood_pressure: this.form.systolic_blood_pressure,
          heart_rate: this.form.heart_rate,
          breathing_frequency: this.form.breathing_frequency,
          temperature: this.form.temperature,
          oximetry: this.form.oximetry,
          capillary_glucose: this.form.capillary_glucose
        }
      };
    },
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
      HTTP.put(`records/${this.record.id}`, this.vitalsObject)
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
  mounted() {
    if (this.record && this.record.vital_signs) {
      this.form = {...this.record.vital_signs};
    }
  }
};
</script>
