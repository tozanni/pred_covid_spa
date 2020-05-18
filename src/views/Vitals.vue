<template>
  <v-container fluid>
    <v-form>
      <v-text-field label="Edad:" v-model="edad" suffix="años"></v-text-field>
      <v-radio-group v-model="sexo" label="Sexo:">
        <v-radio label="Masculino" value="M"></v-radio>
        <v-radio label="Femenino" value="F"></v-radio>
      </v-radio-group>
      <v-text-field label="Peso:" v-model="edad" suffix="kg"></v-text-field>
      <v-text-field label="Estatura:" v-model="edad" suffix="cm"></v-text-field>
      <p class="text-center">
        <Span class="font-weight-bold">IMC</Span>
        <span class="amber--text text--darken-3">Sobrepeso</span>
        <span>38.53</span>
      </p>
      <v-text-field
        label="T.A. Diastolica:"
        v-model="diastolica"
        suffix="mmhg"
      ></v-text-field>
      <v-text-field
        label="T.A. Sistolica:"
        v-model="sistolica"
        suffix="mmhg"
      ></v-text-field>
      <v-text-field
        label="Frecuencia Cardiaca:"
        v-model="fc"
        suffix="latidos/min"
      ></v-text-field>
      <v-text-field
        label="Frecuencia Respiratoria:"
        v-model="fr"
        suffix="respiraciones/min"
      ></v-text-field>
      <v-text-field
        label="Temperatura:"
        v-model="temp"
        suffix="°C"
      ></v-text-field>
      <v-text-field
        label="Oximetria:"
        v-model="oximetria"
        suffix="%"
      ></v-text-field>
      <v-text-field
        label="Glucosa Capilar:"
        v-model="glucosaCapilar"
        suffix="mg/dl"
      ></v-text-field>
      <div class="d-flex justify-center">
        <v-btn color="primary" x-large rounded :to="{ name: 'triage' }">
          <v-icon left large dark>mdi-chevron-right</v-icon>
          Triage
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      edad: null,
      sexo: null,
      peso: null,
      estatura: null,
      diastolica: null,
      sistolica: null,
      fc: null,
      fr: null,
      temp: null,
      oximetria: null,
      glucosaCapilar: null,
    };
  },
};
</script>

<style scoped></style>
