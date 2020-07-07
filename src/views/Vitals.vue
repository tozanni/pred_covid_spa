<template>
  <v-container fluid>
    <v-text-field label="Edad:" v-model="form.age" suffix="años" type="number"></v-text-field>
    <v-radio-group v-model="form.gender" label="Sexo:">
      <v-radio label="Masculino" value="M"></v-radio>
      <v-radio label="Femenino" value="F"></v-radio>
    </v-radio-group>
    <v-text-field label="Peso:" v-model="form.weight" suffix="kg"></v-text-field>
    <v-text-field label="Estatura:" v-model="form.height" suffix="cm"></v-text-field>
    <p class="text-center">
      <Span class="font-weight-bold">IMC</Span>
      <span class="amber--text text--darken-3">Sobrepeso</span>
      <span>38.53</span>
    </p>
    <v-text-field label="T.A. Diastolica:" v-model="form.diastolic_blood_pressure" suffix="mmhg"></v-text-field>
    <v-text-field label="T.A. Sistolica:" v-model="form.systolic_blood_pressure" suffix="mmhg"></v-text-field>
    <v-text-field label="Frecuencia Cardiaca:" v-model="form.heart_rate" suffix="latidos/min"></v-text-field>
    <v-text-field label="Frecuencia Respiratoria:" v-model="form.breathing_frequency" suffix="respiraciones/min"></v-text-field>
    <v-text-field label="Temperatura:" v-model="form.temperature" suffix="°C"></v-text-field>
    <v-text-field label="Oximetria:" v-model="form.oximetry" suffix="%"></v-text-field>
    <v-text-field label="Glucosa Capilar:" v-model="form.capillary_glucose" suffix="mg/dl"></v-text-field>
    <div class="d-flex justify-center">
      <v-btn color="primary" x-large rounded @click="submitVitalSigns()">
        <v-icon left large dark>mdi-chevron-right</v-icon>Triage
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
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
      HTTP.put("record", this.form)
        .then(res => {
          this.setRecord(res.data);
          this.$router.push({
            name: "medicalRecord",
            params: { uuid: this.record.id }
          });
        })
        .catch(error => console.error(error));
    },
    ...mapActions("record", ["updateRecord"])
  },
  created() {
    if(!this.record.vital_signs) {
      this.updateRecord({"vital_signs": this.form});
    } else {

    }
  }
};
</script>
