<template>
  <searcher
      :params="params"
      redirect_url_name="artist_detail"
  >
    <v-text-field
        label="Band name:"
        v-model="params.artist_name"
    ></v-text-field>
  </searcher>

</template>

<script>
import Searcher from "@/components/tags/Searcher";


export default {
  name: "ArtistSearch",

  components: {
    Searcher
  },

  data() {
    return {
      params: {},
      artist_name: null
    }
  }
}
</script>

<style scoped>

</style>