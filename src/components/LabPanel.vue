<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div>
        <h2 class="headline">{{ title }}</h2>
        <span class="subtitle" :class="completed ? '' : 'teal--text'">{{
          subtitle
        }}</span>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form>
        <v-text-field v-for="meta in metadata" :key="meta.name"
          :label="meta.name"
          v-model="meta.value"
          :suffix="meta.units"
        ></v-text-field>
      </v-form>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
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
    metadata: {
      type: Array,
      required: true,
    },
  },
};
</script>
