<template>
  <v-container fluid>
    <v-form>
      <v-text-field
        label="Dias enfermo antes de ingreso"
        v-model="daysSick"
        suffix="dias"
      ></v-text-field>
      <v-checkbox
        v-model="shortnessOfBreath"
        label="Dificultad para respirar"
      ></v-checkbox>
      <v-checkbox v-model="chestPain" label="Dolor Toracico"></v-checkbox>

      <div class="spacer"></div>
      <div class="input-title">Dolor de cabeza:</div>
      <v-slider
        v-model="headache"
        :tick-labels="sliderLabels"
        :color="headache === 3 ? 'red' : headache ? 'amber darken-3' : ''"
        :max="3"
        step="1"
        ticks
      ></v-slider>
      <div class="spacer"></div>
      <div class="input-title">Tos:</div>
      <v-slider
        v-model="cough"
        :tick-labels="sliderLabels"
        :color="cough === 3 ? 'red' : cough ? 'amber darken-3' : ''"
        :max="3"
        step="1"
        ticks
      ></v-slider>
      <div class="spacer"></div>
      <v-select
        v-model="symptoms"
        :items="symptomsList"
        label="Otros sintomas:"
        multiple
        chips
      ></v-select>
      <div class="spacer"></div>
      <v-select
        v-model="comorbidities"
        :items="comorbiditiesList"
        label="Comorbilidades:"
        multiple
        chips
      ></v-select>
      <div class="spacer"></div>
      <div class="d-flex justify-center">
        <v-btn color="primary" x-large rounded :to="{ name: 'laboratorios' }">
          <v-icon left large dark>mdi-chevron-right</v-icon>
          Laboratorios
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      daysSick: null,
      shortnessOfBreath: null,
      chestPain: null,
      headache: null,
      cough: null,
      sliderLabels: ["No", "Leve", "Moderado", "Grave"],
      symptoms: null,
      symptomsList: [
        "Conjuntivitis",
        "Diarrea",
        "Dolor de articulaciones",
        "Dolor muscular",
        "Dolor o ardor de garganta",
        "Escalofríos",
        "Fatiga y debilidad",
        "Náusea",
        "Sudoración",
        "Vómito"
      ],
      comorbidities: null,
      comorbiditiesList: [
        "Anemia",
        "Aterosclerosis coronaria",
        "Cáncer",
        "Cardiovascular",
        "Diabetes 1 y 2",
        "Diabetes gestacional",
        "Arritmias cardíacas",
        "Convulsiones o Epilepsia",
        "Glaucoma",
        "Cirrosis Hepática",
        "Hipertensión",
        "Inmunológica",
        "Leucemia",
        "Neurológica",
        "Osteoporosis",
        "Parkinson",
        "Presion Alta",
        "Pulmonar",
        "Renal crónica",
        "Tratamiento inmunosupresor",
        "VIH"
      ],
    };
  },
};
</script>

<style scoped>
.spacer {
  margin: 1em 0;
}
</style>
