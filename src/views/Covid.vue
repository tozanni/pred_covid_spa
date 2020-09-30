<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <v-form>
      <v-container>
        <template v-for="field in form.fields">
          <v-text-field
            v-if="field.type === 'number'"
            :key="field.name"
            :label="field.name"
            type="number"
            v-model.number="field.value"
            :suffix="field.units"
          ></v-text-field>
          <v-select
            v-if="field.type === 'select'"
            :key="field.name"
            :items="field.options"
            :label="field.name"
            v-model="field.value"
            dense
          ></v-select>
        </template>
        <div class="d-flex justify-center">
          <v-btn color="primary" x-large rounded @click="submitCovid()" :disabled="invalid">
            <v-icon left large dark>mdi-chevron-right</v-icon>Laboratorios
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    form: {
      title: "Extras para COVID-19",
      fields: {
        pcr: {
          name: "PCR - Prueba COVID",
          value: null,
          type: "select",
          options: [
            {
              value: "positive",
              text: "Positivo",
            },
            {
              value: "negative",
              text: "Negative",
            },
          ],
        },
        ldh: {
          name: "LDH",
          units: "U/L",
          value: null,
          type: "number",
        },
        il_6: {
          name: "IL-6",
          units: "pg/ml",
          value: null,
          type: "number",
        },
        ferritin: {
          name: "Ferritina",
          units: "mcg/L",
          value: null,
          type: "number",
        },
        troponin: {
          name: "Troponina",
          units: "ng/ml",
          value: null,
          type: "number",
        },
        igm: {
          name: "IgM",
          units: "",
          value: null,
          type: "number",
        },
        igg: {
          name: "IgG",
          units: "",
          value: null,
          type: "number",
        },
      },
    },
  }),
  computed: {
    covidObject() {
      return {
        admission_date: this.record.admission_date,
        status: this.record.status,
        covid: {
          pcr: this.form.fields.pcr.value,
          ldh: this.form.fields.ldh.value,
          il_6: this.form.fields.il_6.value,
          ferritin: this.form.fields.ferritin.value,
          troponin: this.form.fields.troponin.value,
          igm: this.form.fields.igm.value,
          igg: this.form.fields.igg.value,
        },
      };
    },
    ...mapState("record", ["record"]),
  },
  methods: {
    submitCovid() {
      this.$http.put(`records/${this.record.id}`, this.covidObject)
        .then((res) => {
          this.setRecord(res.data);
          this.$router.push({
            name: "labs",
            params: { uuid: this.record.id },
          });
        })
        .catch((error) => console.error(error));
    },
    ...mapActions("record", [
      "setRecord",
    ]),
  },
};
</script>

<style>
</style>