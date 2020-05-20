<template>
  <v-form>
    <v-text-field label="Nombre" solo></v-text-field>
    <v-select
          :items="items"
          label="Asunto"
          solo
        ></v-select>
    <v-text-field label="Correo" solo></v-text-field>
    <v-textarea solo name="input-7-4" label="¿Qué quieres decir?"></v-textarea>

    <v-btn color="primary" x-large rounded>
      <v-icon left large dark>mdi-chevron-right</v-icon>
      Enviar
    </v-btn>
  </v-form>
</template>

<script>
export default {
    data() {
        return {
            items: [
                'Quiero colaborar',
                'Retroalimentacion',
                'Reportar Error',
                'Otro (Escribir)'
            ]
        }
    }
};
</script>

<style></style>
