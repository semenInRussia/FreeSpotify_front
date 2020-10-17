<template>
  <div>
    <v-btn @click="fetchArtistInfo(artist_name)" type="primary" outlined>
      Get info!
    </v-btn>

    <v-list>
      <v-list-item>
        <v-list-item-title>{{ artist.name }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list>
      <v-list-item v-for="track in artist.top" :key="track.top_number">
        <v-list-item-title>{{ track.top_number }} | {{ track.name }}</v-list-item-title>
        <v-list-item-subtitle>
          <a :href="track.artist_link">{{ track.artist_name }}</a>
        </v-list-item-subtitle>

        <v-list-item-subtitle>
          <a :href="track.album_link">{{ track.album_name }}</a> {{ track.release_date }}
        </v-list-item-subtitle>

        <v-list-item-avatar tile>
          <img :src="track.album_img_link" alt="ALBUM">
        </v-list-item-avatar>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ArtistDetail",
  data() {
    return {
      artist_name: this.$route.params.artist_name
    }
  },

  methods: mapActions([`fetchArtistInfo`]),
  computed: mapGetters([`artist`])
}
</script>

<style scoped>

</style>