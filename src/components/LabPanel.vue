<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div>
        <h2 class="headline">{{ title }}</h2>
        <span class="subtitle" :class="completed ? 'teal--text' : ''">
          {{
          subtitle
          }}
        </span>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
          <template v-for="(field, index) in fields">
            <ValidationProvider
              :key="field.key"
              :rules="field.rules"
              :vid="index"
              :name="index"
              v-slot="{ errors }"
            >
              <v-text-field
                v-if="field.type === 'text'"
                :label="field.name"
                v-model="field.value"
                :suffix="field.units"
                :error-messages="errors"
              ></v-text-field>
              <v-text-field
                v-if="field.type === 'number'"
                :label="field.name"
                type="number"
                v-model.number="field.value"
                :suffix="field.units"
                :error-messages="errors"
              ></v-text-field>
              <v-checkbox
                v-if="field.type === 'boolean'"
                v-model="field.value"
                :label="field.name"
                :error-messages="errors"
              ></v-checkbox>
              <v-select
                v-if="field.type === 'select'"
                :items="field.options"
                :label="field.name"
                v-model="field.value"
                :error-messages="errors"
                dense
              ></v-select>
            </ValidationProvider>
          </template>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import "../common/validation-rules";

export default {
  components: {
    ValidationProvider
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "Incompleto",
    },
    completed: {
      type: Boolean,
      default: true,
    },
    fields: {
      type: Object,
      required: true,
    },
  },
};
</script>
