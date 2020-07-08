<template>
  <div>
      <v-progress-circular :color="colorCode" size="55" width="7" :value="probability">{{ probability }}%</v-progress-circular>
  </div>
</template>

<script>
import ProbabilityVue from '../components/Probability.vue';
import { HTTP } from "../http-common";

export default {
    data() {
        return {
            probability: 100
        }
    },
    computed: {
        colorCode() {
            return this.probability <= 30
                ? 'green'
                : this.probability <= 60
                ? 'yellow'
                : 'red';
        }
    },
    created() {

    }
}
</script>

<style>

</style>