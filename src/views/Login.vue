<template>
  <v-form>
    <v-text-field
      label="Correo"
      outlined
      readonly
    ></v-text-field>
    <v-text-field
      label="Contraseña"
      outlined
      readonly
    ></v-text-field>
    <v-btn :to="{name: 'home'}" color="primary" x-large rounded>
        iniciar sesion
      </v-btn>
      <br />
      <br />
      <v-btn :to="{name: 'registration'}" color="primary" x-large text>
        registrarme
      </v-btn>
  </v-form>
</template>

<script>
export default {};
</script>

<style></style>
