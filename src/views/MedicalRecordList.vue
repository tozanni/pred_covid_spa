<template>
  <v-container>
    <ul v-if="medicalRecords && medicalRecords.length">
      <li v-for="record of medicalRecords" :key="record.id">
        <p>
          <strong>{{ record.id }}</strong>
        </p>
        <p>{{ record.status }}</p>
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState('records', ['records'])
  },
  created() {
    this.$store.dipatch('records/loadRecords');
  },
};
</script>
