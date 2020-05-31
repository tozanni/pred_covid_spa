<template>
  <span class="pa-1 green--text">{{ status }}</span>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    span {
        border: 1px solid green;
    }
</style>