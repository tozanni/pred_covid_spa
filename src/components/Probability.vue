<template>
<div class="d-flex justify-start align-center">
  <v-progress-circular color="red" size="55" width="7" :value="probability">{{ 75 }}%</v-progress-circular>
  <div class="meta-data">
    <span class="font-weight-bold">#12345</span><br>
    <span class="text--secondary caption">Ingreso: {{admissionFromNow}}</span><br>
    <span class="text--secondary caption">Probabilidad que requirea RcP</span>
  </div>
</div>
</template>

<script>
import moment from "moment/moment";
import 'moment/locale/es';

export default {
  data() {
    return {
      probability: 75
    }
  },
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  computed: {
    admissionFromNow() {
      moment.updateLocale('es');
      const admissionDate = moment(this.record.admission_date);
      if(moment().diff(admissionDate, 'hours') < 21) {
        return "Hoy";
      }
      return moment(this.record.admission_date).fromNow();
    }
  }
}
</script>

<style scoped>
.meta-data {
  padding: 1em;;
}
</style>