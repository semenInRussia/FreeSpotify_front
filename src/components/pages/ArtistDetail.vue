<template>
  <div>
    <!--    Artist info-->
    <v-row align-content="center">
      <v-col cols="10">
        <v-img :src="artist.img_link" contain max-width="800px"></v-img>
      </v-col>
      <v-col cols="2">
        <h1>{{ artist.name }}</h1>
      </v-col>
    </v-row>
    <h2>Track top:</h2>


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

  mounted() {
    this.fetchArtistInfo(this.artist_name)
  },
  methods: mapActions([`fetchArtistInfo`]),
  computed: mapGetters([`artist`])
}
</script>

<style scoped>

</style>