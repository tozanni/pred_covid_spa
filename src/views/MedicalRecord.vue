<template>
  <v-container class="div">
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
        <div class="d-flex justify-center">
          <v-btn color="primary" @click="submitRecord()" :disabled="invalid">
            <v-icon left large dark>mdi-plus</v-icon>Nuevo Registro
          </v-btn>
        </div>
        <div class="spacer"></div>
      </v-form>
    </ValidationObserver>
    <v-row v-if="record" v-show="$route.name !== 'probability'" align="center" justify="center">
      <v-col xs="12" sm="6" cols="12">
        <Probability
          :probability="probability"
          :uuid="uuid"
          :admission-date="record.admission_date"
        />
      </v-col>
      <v-col xs="12" sm="6" cols="12">
        <span class="font-weight-bold">Estado:</span>
        {{ record.status }}
        <p v-if="record.vital_signs">
          <span class="font-weight-bold">Edad:</span>
          {{ record.vital_signs.age }}
          <br />
          <span class="font-weight-bold">Sexo:</span>
          {{ record.vital_signs.gender == "name" ? "Masculino" : "Femenino" }}
        </p>
      </v-col>
    </v-row>
    <template v-if="persisted && $route.name === 'medicalRecord'">
      <CardLink
        title="Signos Vitales"
        :subtitle="record.vital_signs ? 'Completado' : ''"
        :to="{name: 'vitals', params: {uuid}}"
        :disabled="showForm"
      />
      <CardLink
        title="Triage"
        :subtitle="record.triage ? 'Completado' : ''"
        :to="{name: 'triage', params: {uuid}}"
        :disabled="!record.vital_signs"
      />
      <CardLink
        title="Laboratorios"
        :subtitle="record.labs ? 'Completado' : ''"
        :to="{name: 'labs', params: {uuid}}"
        :disabled="!record.triage"
      />
      <CardLink
        title="Notas Medicas"
        :subtitle="record.medical_notes ? 'Completado' : ''"
        :to="{name: 'notes', params: {uuid}}"
        :disabled="!record.vital_signs"
      />
      <div v-if="record.triage" class="d-flex justify-center">
        <v-btn color="primary" x-large rounded @click="submitLaboratories()">
          <v-icon left large dark>mdi-chevron-right</v-icon>Calcular probabilidad rcp
        </v-btn>
      </div>
    </template>
    <router-view></router-view>
  </v-container>
</template>

<script>
import Probability from "../components/Probability.vue";
import CardLink from "../components/CardLink.vue";
import moment from "moment/moment";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../common/validation-rules";
import { HTTP } from "../http-common";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    dateFormatted() {
      return this.date ? moment(this.date).format("YYYY-MM-DD HH:mm:ss") : "";
    },
    ...mapState("record", ["record", "persisted", "probability"]),
  },
  components: {
    Probability,
    CardLink,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    uuid: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      showForm: false,
      menu: false,
      date: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    submitRecord() {
      HTTP.post("records", {
        admission_date: this.dateFormatted,
        status: this.status,
      })
        .then((res) => {
          this.setRecord(res.data);
          this.setProbability(0);
          this.$router.push({
            name: "medicalRecord",
            params: { uuid: this.record.id },
          });
        })
        .catch((error) => console.error(error));
    },
    ...mapActions("record", [
      "setRecord",
      "clearRecord",
      "fetchRecord",
      "formatDates",
      "setProbability",
    ]),
  },
  created() {
    if (this.uuid === undefined) {
      this.showForm = true;
      this.clearRecord();
    } else if (this.record === null || this.uuid !== this.record.id) {
      this.fetchRecord(this.uuid);
      this.setProbability(0);
    }
  },
};
</script>
