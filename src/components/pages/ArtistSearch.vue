<template>

  <form @submit="detail(artist_name)" action="#">
    <div class="text-center">
      <v-text-field
          label="Band name:"
          v-model="artist_name"
      ></v-text-field>
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
const BASE_URL = 'http://127.0.0.1:8080/detail/';

export default {
  name: "ArtistSearch",
  data() {
    return {
      artist_name: null
    }
  },
  methods: {
    detail(artist_name) {
      this.$router.push({
        name: "artist_detail",
        params: {
          artist_name: artist_name
        }

      })
    }
  }
}
</script>

<style scoped>

</style>