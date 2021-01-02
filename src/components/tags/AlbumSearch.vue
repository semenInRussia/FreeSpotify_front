<template>
  <searcher
    :params="params"
    redirect_url_name="album_detail"
  >
    <v-text-field
        label="Artist name:"
        v-model="params.artist_name"
    />
    <v-text-field
        label="Album name:"
        v-model="params.album_name"
    />
  </searcher>
</template>

<script>
import Searcher from "@/components/tags/Searcher";

export default {
  name: "AlbumSearch",
  data() {
    return {
      params: {}
    }
  },

  components: {
    Searcher
  }
}
</script>

<style scoped>

</style>