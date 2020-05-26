<template>
  <v-app>
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
      <NavigationList/>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="light-blue darken-4 white--text" block>
            <v-icon left>mdi-exit-to-app</v-icon> Cerrar Sesión</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
        <router-view :key="$route.path" />
    </v-content>
  </v-app>
</template>

<script>
import NavigationList from './components/NavigationList'

export default {
  name: "App",
  components: {
    NavigationList
  },
  data: () => ({
      drawer: null
  }),
};
</script>

<style>
.spacer {
  margin: 1em 0;
}
</style>
