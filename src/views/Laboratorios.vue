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
      <v-btn color="primary" x-large rounded :to="{ name: 'notas' }">
        <v-icon left large dark>mdi-chevron-right</v-icon>
        Añadir Notas Medicas
      </v-btn>
    </div>
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
  data: () => ({
    labs: [
      {
        title: "Biometria Hematica",
        completed: "Completado hace 2 dias",
        meta: [
          {
            name: "Hematocrito",
            units: "%",
            value: 32,
            type: "text",
          },
          {
            name: "Hemoglobina",
            units: "gr/dL",
            value: 50,
            type: "text",
          },
          {
            name: "Leucocitos",
            units: "cels./uL",
            value: 45,
            type: "text",
          },
          {
            name: "Plaquetas",
            units: "cels./uL",
            value: 30,
            type: "text",
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
            type: "text",
          },
          {
            name: "Urea",
            units: "mg/dL",
            value: null,
            type: "text",
          },
          {
            name: "Creatina",
            units: "mg/dL",
            value: null,
            type: "text",
          },
          {
            name: "Colesterol",
            units: "mg/dL",
            value: null,
            type: "text",
          },
          {
            name: "Trigliceridos",
            units: "mg/dL",
            value: null,
            type: "text",
          },
          {
            name: "Hemoglobina Glicida",
            units: "%",
            value: null,
            type: "text",
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
            type: "text",
          },
          {
            name: "Potasio",
            units: "mEq/L",
            value: null,
            type: "text",
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
            type: "text",
          },
          {
            name: "Alanina Aminotransferasa",
            units: "U/L",
            value: null,
            type: "text",
          },
          {
            name: "BUN Serico (Nitrogeno Ureico)",
            units: "mg/dL",
            value: null,
            type: "text",
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
            type: "text",
          },
          {
            name: "Tromboplastina (TPT)",
            units: "segs.",
            value: null,
            type: "text",
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
            type: "text",
          },
        ],
      },
      {
        title: "Imagenologia",
        meta: [
          {
            name: "Radiografia de Torax",
            value: null,
            type: "boolean",
          },
          {
            name: "Resultado",
            value: null,
            type: "select",
            options: [
              "Normal",
              "Infiltrado",
              "Focos neumónicos Apicales",
              "Focos neumónicos Basales",
              "Focos neumónicos Bilateral",
              "Focos neumónicos Generalizados",
              "Focos neumónicos Mediales",
              "Focos neumónicos Unilateral",
            ],
          },
        ],
      },
    ],
  }),
};
</script>

<style></style>
