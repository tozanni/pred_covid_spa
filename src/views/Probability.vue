<template>
  <div class="d-flex flex-column align-center">
    <v-progress-circular
      :color="colorCode"
      size="120"
      width="10"
      :value="probability"
      :indeterminate="false"
    >{{ probability }}%</v-progress-circular>
    <h2>Probabilidad De Requerir RCP</h2>
    <span class="subtitle-1">(Reanimacion Cardiopulmonar)</span>
    <br />
    <br />
    <strong>#{{ record.id.match(/.{5}/)[0] }}</strong>
    <p class>Ingreso: {{ admissionFromNow }}</p>
    <br />
    <br />
    <p class>{{ record.triage.other_symptoms.map(s => getSymptomName(s)).join(', ') }}</p>
    <p class>{{ record.triage.comorbidities.map(s => getComorbidityName(s)).join(', ') }}</p>
    <p class>
      Temperatura de ingreso:
      <span
        class="font-weight-bold"
      >{{ record.vital_signs.temperature }}&#176;C</span>
    </p>

    <v-btn color="primary" x-large text :to="{name: 'medicalRecord', params: {uuid: record.id}}">
      <v-icon left large dark>mdi-chevron-left</v-icon>Regresar A Expediente
    </v-btn>
    <br>
    <br>
    <br>
    <br>
    <v-btn color="primary" x-large rounded>
      <v-icon left large dark>mdi-plus</v-icon>Nuevo Expediente
    </v-btn>
  </div>
</template>

<script>
import ProbabilityVue from "../components/Probability.vue";
import { mapState, mapActions } from "vuex";
import HTTP from "../http-common";
import moment from "moment/moment";
import { getSymptomName, getComorbidityName } from "../common/triageLists";

export default {
  data() {
    return {};
  },
  computed: {
    admissionFromNow() {
      moment.updateLocale("es");
      const admissionDate = moment(this.admission_date);
      if (moment().diff(admissionDate, "hours") < 21) {
        return "Hoy";
      }
      return moment(this.admission_date).fromNow();
    },
    colorCode() {
      return this.probability <= 30
        ? "#48bb78"
        : this.probability <= 60
        ? "#ecc94b"
        : "#f56565";
    },
    ...mapState("record", ["record", "probability"])
  },
  created() {
    HTTP.get(`records/${this.record.id}/prediction`)
      .then(res => {
        const match = res.data.probability.match(/\d*\.\d*/)[0];
        this.setProbability(Math.round(Number(match) * 100));
      })
      .catch(error => console.error(error));
  },
  methods: {
    getSymptomName,
    getComorbidityName,
    ...mapActions("record", ["setProbability"])
  }
};
</script>

<style>
</style>
