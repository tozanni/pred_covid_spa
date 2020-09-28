<template>
  <v-app>
    <v-navigation-drawer app clipped left v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Covid 19</v-list-item-title>
          <v-list-item-subtitle>Calculadora de Probabilidad RcP</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <NavigationList />
      <template v-slot:append>
        <div class="pa-2" v-if="isAuthenticated">
          <v-btn color="light-blue darken-4 white--text" :href="logoutLink" block>
            <v-icon left>mdi-exit-to-app</v-icon>Cerrar Sesión
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app clipped-right color="primary" dark>
      <router-link
        v-show="$route.meta.back"
        icon
        :to="{name: 'medicalRecord', params: {uuid: $route.params.uuid}}"
      >
        <v-icon x-large>mdi-chevron-left</v-icon>
      </router-link>
      <v-app-bar-nav-icon v-show="!$route.meta.back" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view :key="$route.path" />
      <v-snackbar v-model="snackbar" color="#48bb78">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import NavigationList from "./components/NavigationList";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavigationList,
  },
  data: () => ({
    drawer: null,
    text: '',
    snackbar: false,
    logoutLink: process.env.API_REST+'api/security/logout'
  }),
  methods: {
    openSnackbar(text) {
      this.text = text;
      this.snackbar = true;
    }
  },
  computed: {
    ...mapGetters("security", ["isAuthenticated"])
  },
  watch: {
    $route(to,from) {
      if (!!this.$route.params.snackbar) {
        this.openSnackbar(this.$route.params.snackbar);
      }
    }
  }
};
</script>

<style>
.spacer {
  margin: 1em 0;
}
</style>
