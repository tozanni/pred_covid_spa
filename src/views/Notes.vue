<template>
<v-container>
  <v-form>
    <v-textarea
      solo
      name="input-7-4"
      label="Añadir notas medicas..."
    ></v-textarea>

    <div class="spacer"></div>
    <div class="input-title text--secondary">Medicamentos Recetados:</div>
    <v-textarea
      solo
      name="input-7-4"
      label="Añadir medicamentos recetados..."
    ></v-textarea>

    <div class="spacer"></div>
    <div class="d-flex justify-center">
      <v-btn color="primary" x-large rounded :to="{ name: 'probability' }">
        <v-icon left large dark>mdi-chevron-right</v-icon>
        Calcular probabilidad rcp
      </v-btn>
    </div>
  </v-form>
</v-container>
</template>