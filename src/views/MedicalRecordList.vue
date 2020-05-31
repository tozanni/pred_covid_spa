<template>
  <v-list three-line>
    <template v-for="record in records">
      <v-list-item :key="record.id" to="/" link>
        <v-progress-circular color="red" size="50" width="5" value="75"
          >{{ 75 }}%</v-progress-circular
        >
        <v-list-item-content class="ms-2">
          <v-list-item-title v-html="'#123123'"></v-list-item-title>
          <v-list-item-subtitle
            >Ingreso: {{ fromNow(record.created_at) }} <br />
            32 años, Femenino</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <RecordStatus status="completado" />
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="record.id + 'div'"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import RecordStatus from "../components/RecordStatus";

export default {
  components: {
    RecordStatus,
  },
  computed: {
    ...mapState("records", ["records"]),
  },
  created() {
    this.$store.dispatch("records/loadRecords");
    moment.locale("es");
  },
  methods: {
    fromNow: (date) => moment(date).fromNow(),
  },
};
</script>
