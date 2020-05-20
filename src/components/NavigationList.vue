<template>
  <v-list dense>
    <v-list-item to="/" link>
      <v-list-item-action>
        <v-icon>mdi-home-outline</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: 'about' }" link>
      <v-list-item-action>
        <v-icon>mdi-information-outline</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Proyecto</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: 'contact' }" link>
      <v-list-item-action>
        <v-icon>mdi-card-account-mail-outline</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
};
</script>

<style></style>
