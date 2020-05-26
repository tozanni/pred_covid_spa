<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" cols="12">
        <Probability />
      </v-col>
      <v-col xs="12" sm="6" cols="12">
        <p>
          <span class="font-weight-bold">Estado:</span>
          <span class="amber--text text--darken-3">Cuidados intensivos</span>
          <v-btn icon color="teal">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </p>
        <p>
          <span class="font-weight-bold">Edad:</span> 54 años<br />
          <span class="font-weight-bold">Sexo:</span> Masculino
        </p>
      </v-col>
    </v-row>
    <CardLink title="Signos Vitales" subtitle="Completado hace 2 dias" :to="{name: 'vitals'}"/>
    <CardLink title="Triage" subtitle="Completado hace 2 dias" :to="{name: 'triage'}"/>
    <CardLink title="Laboratorios" subtitle="Completado hace 2 dias" :to="{name: 'laboratorios'}"/>
    <CardLink title="Notas Medicas" subtitle="Incompleto" :completed="false" :to="{name: 'notas'}"/>
  </v-container>
</template>

<script>
import Probability from "../components/Probability.vue";
import CardLink from "../components/CardLink.vue";

export default {
  components: {
    Probability,
    CardLink
  },
  data: () => ({
  })
};
</script>
