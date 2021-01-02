<template>
  <form @submit.prevent="detail()" action="#">
    <div class="text-center">
      <slot/>
      <v-btn
          type="submit"
          color="primary"
      >
        Search!
      </v-btn>
    </div>
  </form>
</template>

<script>
export default {
  name: "Searcher",

  props: {
    params: {},
    redirect_url_name: {}
  },

  methods: {
    detail() {
      this.$router.push({
        name: this.redirect_url_name,
        params: this.params
      })
    }
  }
}
</script>

<style scoped>

</style>