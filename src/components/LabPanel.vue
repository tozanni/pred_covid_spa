<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div>
        <h2 class="headline">{{ title }}</h2>
        <span class="subtitle" :class="completed ? '' : 'teal--text'">
          {{
          subtitle
          }}
        </span>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form>
        <template v-for="field in fields">
          <v-text-field
            v-if="field.type === 'text'"
            :key="field.name"
            :label="field.name"
            v-model="field.value"
            :suffix="field.units"
          ></v-text-field>
          <v-text-field
            v-if="field.type === 'number'"
            :key="field.name"
            :label="field.name"
            type="number"
            v-model.number="field.value"
            :suffix="field.units"
          ></v-text-field>
          <v-checkbox
            v-if="field.type === 'boolean'"
            :key="field.name"
            v-model="field.value"
            :label="field.name"
          ></v-checkbox>
          <v-select
            v-if="field.type === 'select'"
            :key="field.name"
            :items="field.options"
            :label="field.name"
            v-model="field.value"
            dense
          ></v-select>
        </template>
      </v-form>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: "Incompleto"
    },
    completed: {
      type: Boolean,
      default: true
    },
    fields: {
      type: Object,
      required: true
    }
  }
};
</script>
