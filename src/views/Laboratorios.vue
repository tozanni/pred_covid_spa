<template>
  <v-form>
    <p class="teal--text text-center">
      LLENE LA MAYOR CANTIDAD DE LABORATORIOS PARA MAYOR PRECISIÓN EN LAS
      PROBABILIDADES DE RCP
    </p>
    <v-expansion-panels multiple>
      <LabPanel
        v-for="lab in labs"
        :key="lab.title"
        :title="lab.title"
        :subtitle="lab.completed"
        :completed="lab.completed ? true : false"
        :metadata="lab.meta"
      />
    </v-expansion-panels>
    <div class="spacer"></div>
    <div class="d-flex justify-center">
      <v-btn color="primary" x-large rounded :to="{ name: 'home' }">
        <v-icon left large dark>mdi-chevron-right</v-icon>
        Calcular probabilidad rcp
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import LabPanel from "../components/LabPanel.vue";

export default {
  components: {
    LabPanel,
  },
  data() {
    return {
      labs: [
        {
          title: "Biometria Hematica",
          completed: "Completado hace 2 dias",
          meta: [
            {
              name: "Hematocrito",
              units: "%",
              value: 32,
            },
            {
              name: "Hemoglobina",
              units: "gr/dL",
              value: 50,
            },
            {
              name: "Leucocitos",
              units: "cels./uL",
              value: 45,
            },
            {
              name: "Plaquetas",
              units: "cels./uL",
              value: 30,
            },
          ],
        },
        {
          title: "Quimica Sanguinea",
          meta: [
            {
              name: "Glucosa",
              units: "mg/dL",
              value: null,
            },
            {
              name: "Urea",
              units: "mg/dL",
              value: null,
            },
            {
              name: "Creatina",
              units: "mg/dL",
              value: null,
            },
            {
              name: "Colesterol",
              units: "mg/dL",
              value: null,
            },
            {
              name: "Trigliceridos",
              units: "mg/dL",
              value: null,
            },
            {
              name: "Hemoglobina Glicida",
              units: "%",
              value: null,
            },
          ],
        },
        {
          title: "Electrolitos Sericos",
          meta: [
            {
              name: "Sodio",
              units: "mEq/L",
              value: null,
            },
            {
              name: "Potasio",
              units: "mEq/L",
              value: null,
            },
          ],
        },
        {
          title: "Funcion Hepatica",
          meta: [
            {
              name: "Aspartato Aminotransferasa",
              units: "U/L",
              value: null,
            },
            {
              name: "Alanina Aminotransferasa",
              units: "U/L",
              value: null,
            },
            {
              name: "BUN Serico (Nitrogeno Ureico)",
              units: "mg/dL",
              value: null,
            },
          ],
        },
        {
          title: "Tiempos de Coagulacion",
          meta: [
            {
              name: "Protrombina (TP)",
              units: "segs.",
              value: null,
            },
            {
              name: "Tromboplastina (TPT)",
              units: "segs.",
              value: null,
            },
          ],
        },
        {
          title: "Inmunologia",
          meta: [
            {
              name: "Proteina C Reactiva",
              units: "Mg/dL",
              value: null,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
