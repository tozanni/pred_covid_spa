<template>
  <div class="div">
    <ValidationObserver v-if="showForm && persisted === false" v-slot="{ invalid }">
      <v-form @submit.prevent>
        <h2>Crear Nuevo Expediente</h2>
        <span>Captura la fecha de ingreso para agregar un nuevo registro</span>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <ValidationProvider
              name="required"
              :rules="{required: true}"
              v-slot="{ errors, valid }"
            >
              <v-text-field
                v-model="date"
                label="Fecha de ingreso"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :error="errors.length > 0"
                :success="valid"
                :error-messages="errors"
              ></v-text-field>
            </ValidationProvider>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancelar</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field label="Estado:" v-model="status" placeholder="Cuidados intensivos"></v-text-field>
        <div class="d-flex justify-center">
          <v-btn color="primary" @click="submitRecord()" :disabled="invalid">
            <v-icon left large dark>mdi-plus</v-icon>Nuevo Registro
          </v-btn>
        </div>
        <div class="spacer"></div>
      </v-form>
    </ValidationObserver>
    <v-row v-else align="center" justify="center">
      <v-col xs="12" sm="6" cols="12">
        <Probability />
      </v-col>
      <v-col xs="12" sm="6" cols="12">
        <p>
          <span class="font-weight-bold">Estado:</span>
          {{ record.status }}
          <!-- <br />
          <span class="font-weight-bold">Edad:</span>
          {{ record.vital_signs.age }}
          <br />
          <span class="font-weight-bold">Sexo:</span>
          {{ record.vital_signs.gender == "name" ? "Masculino" : "Femenino" }} -->
        </p>
      </v-col>
    </v-row>
    <template v-if="persisted">
      <CardLink
        title="Signos Vitales"
        subtitle="Completado hace 2 dias"
        :to="{name: 'vitals'}"
        :disabled="showForm"
      />
      <CardLink
        title="Triage"
        subtitle="Completado hace 2 dias"
        :to="{name: 'triage'}"
        :disabled="showForm"
      />
      <CardLink
        title="Laboratorios"
        subtitle="Completado hace 2 dias"
        :to="{name: 'laboratorios'}"
        :disabled="showForm"
      />
      <CardLink
        title="Notas Medicas"
        subtitle="Incompleto"
        :completed="false"
        :to="{name: 'notas'}"
        :disabled="showForm"
      />
    </template>
  </div>
</template>

<script>
import Probability from "../components/Probability.vue";
import CardLink from "../components/CardLink.vue";
import moment from "moment/moment";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../common/validation-rules";

import { mapState, mapActions } from "vuex";

export default {
  computed: {
    dateFormatted() {
      return this.date ? moment(this.date).format("YYYY-MM-DD HH:mm:ss") : "";
    },
    ...mapState("record", ["record", "persisted"])
  },
  components: {
    Probability,
    CardLink,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    uuid: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      showForm: false,
      menu: false,
      status: "",
      date: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    submitRecord() {
      this.createRecord({ admission_date: this.dateFormatted, status: this.status });
      this.$router.push({ name: 'medicalRecord', params: { uuid: '733ca3c0-8a56-46de-a4e4-3095b57347b3' }})
    },
    ...mapActions("record", ["createRecord"])
  },
  created() {
    if (this.uuid === undefined) {
      this.showForm = true;
    }
  }
};
</script>
