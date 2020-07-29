<template>
  <v-container>
    <ValidationObserver slim v-slot="{ invalid }">
      <v-form>
        <ValidationProvider rules="required" name="name" v-slot="{ errors, valid }">
          <v-text-field
            label="Nombre"
            solo
            v-model="form.name"
            :success="valid"
            :error-messages="errors"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider rules="required" name="subject" v-slot="{ errors, valid }">
          <v-select
            :items="items"
            label="Asunto"
            solo
            v-model="form.subject"
            :success="valid"
            :error-messages="errors"
          ></v-select>
        </ValidationProvider>
        <ValidationProvider rules="required|email" name="email" v-slot="{ errors, valid }">
          <v-text-field
            label="Correo"
            solo
            :success="valid"
            v-model="form.email"
            :error-messages="errors"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider rules="required" name="message" v-slot="{ errors, valid }">
          <v-textarea
            solo
            name="input-7-4"
            label="¿Qué quieres decir?"
            v-model="form.message"
            :success="valid"
            :error-messages="errors"
          ></v-textarea>
        </ValidationProvider>
        <v-btn color="primary" x-large rounded @click="submit()" :disabled="invalid">
          <v-icon left large dark>mdi-chevron-right</v-icon>Enviar
        </v-btn>
      </v-form>
    </ValidationObserver>
  </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../common/validation-rules";
import { HTTP } from "../http-common";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      items: [
        "Quiero colaborar",
        "Retroalimentacion",
        "Reportar Error",
        "Otro (Escribir)",
      ],
    };
  },
  methods: {
    submit() {
      HTTP.post('contact', this.form)
        .then((res) => {
          this.$router.push({
            name: "home",
            params: {
              snackbar: 'Gracias por tu mensaje.'
            }
          });
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style></style>
