<template>
  <v-container>
    <v-row no-gutters align="center" justify="start">
      <v-col cols="3">
        <v-progress-circular
          color="red"
          size="85"
          width="7"
          :value="probability"
        >
          <span class="title">{{probability}}%</span>
        </v-progress-circular>
      </v-col>
      <v-col>
        <h2 class="headline">Probabilidad que requiera RcP </h2>
        <p class="text--secondary">(Reanimación cardiopulmonar)</p>
      </v-col>
    </v-row>
    <div class="ma-5">
      <h2 class="title">#09290</h2>
      <p class="text--secondary">Ingreso: hace dos dias.</p>
    </div>
    <v-divider></v-divider>
    <div class="ma-5">
      <div>Asthma, Presion Alta</div>
      <div>Temperatura: <span class="red--text">36.23 °C</span></div>
      <div>Tos - <span class="red--text">Dificaultad para respirar</span></div>
    </div>
    <v-row align="center">
      <v-col class="text-center">
        <v-btn class="mb-3" color="primary" text center :to="{name: 'medicalRecord'}"
          >volver al expediente</v-btn
        >
        <v-btn
          class="mb-3"
          color="primary"
          x-large
          rounded
          :to="{ name: 'notes' }"
        >
          <v-icon left large dark>mdi-chevron-left</v-icon>
          Notas Medicas
        </v-btn>
        <v-btn
          class="mb-3"
          color="primary"
          x-large
          rounded
          :to="{ name: 'home' }"
        >
          <v-icon left large dark>mdi-plus</v-icon>
          Nuevo Paciente
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      probability: 75,
    };
  },
};
</script>
