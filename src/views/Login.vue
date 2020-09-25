<template>
<v-container>
  <v-form class="text-center mt-16">
    <v-text-field label="Correo" outlined></v-text-field>
    <v-text-field label="Contraseña" outlined></v-text-field>
    <v-btn :to="{ name: 'home' }" color="primary" x-large rounded>
      iniciar sesion
    </v-btn>
  </v-form>
</v-container>
</template>

<script>
export default {};
</script>

<style></style>
