<template>
  <v-app>
    <Navigation :drawer="drawer" />
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.spacer {
  margin: 1em 0;
}
</style>
