<template>
  <div id="search-artist">
    <v-text-field v-model="artist_name"></v-text-field>
    <v-btn :href="getUrlOnDetailArtist(artist_name)">
      <v-icon>fab fa-searchengin</v-icon>
    </v-btn>
  </div>
</template>
<script>
import ArtistDetail from "@/components/pages/ArtistDetail";

const base_detail_artist_url = "http://127.0.0.1:8080/artists/"

export default {
  name: "SearchArtist",
  components: {
    ArtistDetail
  },
  data() {
    return {
      artist_name: null
    }
  },
  methods: {
    getUrlOnDetailArtist(artist_name) {
      return base_detail_artist_url + artist_name
    }
  }
}

</script>