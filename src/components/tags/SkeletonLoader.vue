<template>
  <div class="loader">
    <v-row>
      <v-col>
        <v-skeleton-loader elevation="24" type="card" v-if="loading"></v-skeleton-loader>
      </v-col>
      <v-col>
        <v-skeleton-loader elevation="24" type="actions@2, text@2" v-if="loading"></v-skeleton-loader>
      </v-col>
      <v-col>
        <v-skeleton-loader elevation="24" type="card" v-if="loading"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-skeleton-loader elevation="24" type="article@2" v-if="loading"></v-skeleton-loader>
      </v-col>
      <v-col>
        <v-skeleton-loader elevation="24" type="card" v-if="loading"></v-skeleton-loader>
      </v-col>
      <v-col>
        <v-skeleton-loader elevation="24" type="paragraph@3" v-if="loading"></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: [
    "loading"
  ]
}
</script>

<style scoped>

</style>