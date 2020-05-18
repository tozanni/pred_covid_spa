<template>
<div class="d-flex justify-start align-center">
  <v-progress-circular color="red" size="55" width="7" :value="probability">{{ 75 }}%</v-progress-circular>
  <div class="meta-data">
    <span class="font-weight-bold">#12345</span><br>
    <span class="text--secondary caption">Ingreso: Hace dos dias</span><br>
    <span class="text--secondary caption">Probabilidad que requirea RcP</span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      probability: 75
    }
  }
}
</script>

<style scoped>
.meta-data {
  padding: 1em;;
}
</style>