<template>
  <div class="d-flex justify-start align-center">
    <v-progress-circular
      v-if="probability"
      :color="colorCode"
      size="55"
      width="7"
      :value="probability"
    >{{ probability }}</v-progress-circular>
    <v-progress-circular v-else color="grey darken-1" size="55" width="7" :value="probability">NA</v-progress-circular>
    <div class="meta-data" v-if="uuid">
      <span >#{{ uuid.substring(0,6) }}</span>
      <br />
      <span class="font-weight-bold" v-if="id_canonical">Id paciente: {{ id_canonical }}</span>
      <br />
      <span class="text--secondary caption">Ingreso: {{admissionFromNow}}</span>
      <br />
      <span class="text--secondary caption" v-if="probability">Probabilidad que requirea RcP</span>
    </div>
  </div>
</template>

<script>
import moment from "moment/moment";
import "moment/locale/es";
import { integer } from "vee-validate/dist/rules";

export default {
  data() {
    return {};
  },
  props: {
    admissionDate: {
      required: true
    },
    probability: {
      type: Number
    },
    uuid: {
      type: String,
      required: false,
    },
    id_canonical: {
      type: String,
      required: false,
    }
  },
  computed: {
    admissionFromNow() {
      moment.updateLocale("es");
      const admissionDate = moment(this.admissionDate);
      return moment(this.admissionDate).fromNow();
    },
    colorCode() {
      return this.probability <= 30
        ? "#48bb78"
        : this.probability <= 60
        ? "#ecc94b"
        : "#f56565";
    }
  }
};
</script>

<style scoped>
.meta-data {
  padding: 1em;
}
</style>