<template>
  <v-container fluid>
    <v-form>
      <v-textarea solo name="input-7-4" label="Añadir notas medicas..." v-model="form.notes"></v-textarea>

      <div class="spacer"></div>
      <div class="input-title text--secondary">Medicamentos Recetados:</div>
      <v-textarea
        solo
        name="input-7-4"
        label="Añadir medicamentos recetados..."
        v-model="form.prescription_drugs"
      ></v-textarea>

      <div class="spacer"></div>

      <div class="d-flex justify-center mb-4">
        <v-btn
          text
          color="primary"
          x-large
          rounded
          @click="submitNotesAndRedirect('medicalRecord')"
        >Guardar y regresar</v-btn>
      </div>
      <div class="spacer"></div>
      <div class="d-flex justify-center">
        <v-btn color="primary" x-large rounded @click="submitNotesAndRedirect('probability')">
          <v-icon left large dark>mdi-chevron-right</v-icon>Calcular probabilidad rcp
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    medicalNotes() {
      return {
        admission_date: this.record.admission_date,
        status: this.record.status,
        medical_notes: {
          notes: this.form.notes,
          prescription_drugs: this.form.prescription_drugs,
        },
      };
    },
    ...mapState("record", ["record"]),
  },
  data() {
    return {
      form: {
        notes: null,
        prescription_drugs: null,
      },
    };
  },
  methods: {
    submitNotesAndRedirect(route) {
      this.$http.put(`records/${this.record.id}`, this.medicalNotes)
        .then((res) => {
          this.setRecord(res.data);
          this.$router.push({
            name: route,
            params: { uuid: this.record.id },
          });
        })
        .catch((error) => console.error(error));
    },
    ...mapActions("record", [
      "setRecord",
    ]),
  },
  mounted() {
    if (this.record && this.record.medical_notes) {
      this.form = { ...this.record.medical_notes };
    }
  },
};
</script>