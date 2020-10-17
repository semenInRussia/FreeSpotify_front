<template>
    <v-alert
        color="red"
        outlined
        prominent
        dismissible
        text
        type="error"

        v-if="response.error_name"
    >
      {{ response.error_description }}
    </v-alert>
</template>

<script>
export default {
  name: "Messages",
  props: [
      "response"
  ]
}
</script>

<style scoped>

</style>