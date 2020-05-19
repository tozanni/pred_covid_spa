<template>
  <v-navigation-drawer app clipped left v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Covid 19
        </v-list-item-title>
        <v-list-item-subtitle>
          Calculadora de Probabilidad RcP
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
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
    <template v-slot:append>
      <div class="pa-2">
        <v-btn color="light-blue darken-4 white--text" block
          ><v-icon left>mdi-exit-to-app</v-icon> cerrar sesion</v-btn
        >
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: {
            required: true
        }
    }
};
</script>

<style></style>
