<template>
  <div>
    <v-list v-if="pagination && pagination.items.length" two-line>
      <v-subheader>REPORTS</v-subheader>
          <v-divider
            light
          ></v-divider>
      <v-list-item-group multiple>
        <template v-for="(record, index) in pagination.items">
          <v-list-item :key="record.id" :to="{name: 'medicalRecord', params: {uuid: record.id}}">
            <v-list-item-content>
              <Probability
                :uuid="record.id"
                :probability="record.probability"
                :admission-date="record.admission_date"
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider
            :key="index"
            light
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
import RecordStatus from "../components/RecordStatus";
import Probability from "../components/Probability.vue";

export default {
  components: {
    RecordStatus,
    Probability,
  },
  computed: {
    ...mapState("record", ["pagination"]),
  },
  created() {
    this.$store.dispatch("record/loadRecords");
    moment.locale("es");
  },
  methods: {
    ...mapActions("record", ["loadRecords"]),
  },
};
</script>
