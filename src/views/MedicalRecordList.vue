<template>
    <div>
        <ul v-if="medicalRecords && medicalRecords.length">
            <li v-for="record of medicalRecords" :key="record.id">
                <p><strong>{{record.id}}</strong></p>
                <p>{{record.status}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error">
                {{error.message}}
            </li>
        </ul>
    </div>
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
