<template>
  <v-container>
    <v-row no-gutters align="center" justify="start">
      <v-col cols="3">
        <v-progress-circular
          color="green"
          size="85"
          width="7"
          :value="probability"
        >
          <v-icon color="green" large center>mdi-thumb-up</v-icon>
        </v-progress-circular>
      </v-col>
      <v-col>
        <h2 class="headline">No es caso sospechoso</h2>
        <p class="text--secondary">Revisar sintomas cada 48 horas.</p>
      </v-col>
    </v-row>
    <div class="ma-5">
      <h2 class="title">#09290</h2>
      <p class="text--secondary">No es necesario llenar mas datos.</p>
    </div>
    <v-divider></v-divider>
    <div class="ma-5">
      <div>Fecha: Lunes 4 de Mayo, 2020</div>
      <div>No hay dificultad para respirar</div>
      <div>Temperatura: 36.23 °C - <span class="green--text">Normal</span></div>
      <div>No hay dolor de cabeza</div>
      <div>Tos - <span class="green--text">Leve</span></div>
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
          :to="{ name: 'laboratorios' }"
        >
          <v-icon left large dark>mdi-chevron-right</v-icon>
          Laboratorios (opcional)
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
      probability: 100,
    };
  },
};
</script>
