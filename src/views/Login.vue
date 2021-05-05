<template>
  <v-container>
    <v-form class="text-center mt-16">
      <v-text-field v-model="login" label="Usuario" outlined></v-text-field>
      <v-text-field v-model="password" label="Contraseña" type="password" outlined></v-text-field>
      <v-btn @click="performLogin" color="primary" x-large rounded>
        iniciar sesion
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters("security", [
      "isLoading",
      "hasError",
      "error",
      "isAuthenticated",
      "isAnonymous",
    ]),
  },
  created() {
    if (this.isAuthenticated && !this.isAnonymous) {
      this.redirect();
    }
  },
  methods: {
    async performLogin() {
      let payload = { login: this.login, password: this.password },
        redirect = this.$route.query.redirect;

      await this.$store.dispatch("security/login", payload);
      if (!this.hasError) {
        this.redirect();
      }
    },
    redirect() {
      let redirect = this.$route.query.redirect;

      if (typeof redirect !== "undefined") {
        this.$router.push({ path: redirect });
      } else {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style></style>
