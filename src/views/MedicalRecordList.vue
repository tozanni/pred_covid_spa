<template>
  <div>
    <v-list v-if="pagination && pagination.items.length" two-line>
      <v-text-field
          v-model="search" append-icon="mdi-magnify" label="Buscar"
          single-line hide-details
          @change="searchRecords(search)"></v-text-field>
      <v-subheader>REPORTS</v-subheader>
      <v-divider light></v-divider>
      <v-list-item-group multiple>
        <template v-for="(record, index) in pagination.items">
          <v-list-item
              :key="record.id"
              :to="{ name: 'medicalRecord', params: { uuid: record.id } }"
          >
            <v-list-item-content>
              <Probability
                  :uuid="record.id"
                  :probability="record.probability"
                  :admission-date="record.admission_date"
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="index" light></v-divider>
        </template>
      </v-list-item-group>
      <template>
        <div class="text-center">
          <v-pagination
              v-model="pagination.current_page_number"
              :length="parseInt(this.pagination.total_count / this.pagination.num_items_per_page) + 1"
              @input="loadRecords($event)"
          ></v-pagination>
        </div>
      </template>
    </v-list>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import moment from "moment";
import RecordStatus from "../components/RecordStatus";
import Probability from "../components/Probability.vue";

export default {
  data() {
    return {
      search: '',
      page: 1
    };
  },
  components: {
    RecordStatus,
    Probability,
  },
  computed: {
    ...mapState("record", ["pagination"]),
  },
  created() {
    this.loadRecords(this.page);
    moment.locale("es");
  },
  methods: {
    ...mapActions("record", ["loadRecords"]),
    ...mapActions("record", ["searchRecords"]),
  },
  mounted() {
    this.page = this.pagination.current_page_number;
  },
};
</script>
