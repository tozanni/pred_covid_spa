<template>
  <v-container>
    <v-form>
      <v-text-field label="Hospital" outlined></v-text-field>
      <v-select label="Estado" :items="states" outlined></v-select>
      <v-text-field label="Correo" outlined></v-text-field>
      <v-text-field label="Contraseña" outlined></v-text-field>
      <v-text-field label="Confirmar contraseña" outlined></v-text-field>
      <v-btn :to="{ name: 'home' }" color="primary" x-large rounded>
        iniciar sesion
      </v-btn>
      <br />
      <br />
      <v-btn color="primary" x-large text>
        registrarme
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      states: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Coahuila",
        "Colima",
        "Chiapas",
        "Chihuahua",
        "Distrito Federal",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "México",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas",
      ],
    };
  },
};
</script>
