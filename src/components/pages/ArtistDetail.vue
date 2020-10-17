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
    <tracks-top :tracks="artist.top" :loading="loadingArtistInfo"></tracks-top>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TracksTop from "@/components/tags/TracksTop";

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
  components: {
    TracksTop
  },
  methods: mapActions([`fetchArtistInfo`]),
  computed: mapGetters([`artist`, `loadingArtistInfo`])
}
</script>

<style scoped>

</style>