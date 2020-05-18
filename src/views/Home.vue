<template>
  <div class="home">
    <div class="main">
      <p>Pagina para calcular sin iniciar sesion</p>
      <p>No guarda los datos del paciente</p>
      <v-btn color="primary" x-large rounded :to="{name: 'medicalRecord'}">
        <v-icon left large dark>mdi-plus</v-icon>
        Calcular Riesgo RcP
      </v-btn>
    </div>
    <div class="login">
      <p>
        Inicia sesion con una cuenta para llevar un historial de los pacientes
      </p>
      <v-btn color="primary" x-large rounded>
        iniciar sesion
      </v-btn>
      <br />
      <br />
      <v-btn color="primary" x-large text>
        registrarme
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template: auto auto / auto;
  grid-template-areas: "main" "." "login";
  text-align: center;
  padding: 0 1em;
  height: 85vh;
}

.main {
  grid-area: main;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
}

.login {
  grid-area: login;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
}
</style>
