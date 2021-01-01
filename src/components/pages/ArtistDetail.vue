<template>
  <div>
    <!--    Artist info-->
    <messages :response="artist"></messages>
    <v-row align-content="center">
      <v-col cols="4">
        <v-img :src="artist.link_on_img"
               contain
               max-width="800px"
               class="rounded-lg"
        ></v-img>
      </v-col>

      <v-col cols="8">
        <h1>{{ artist.name }}</h1>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <tracks-top v-if="is_view_top" :tracks="artist.top" :artist="artist" :loading="loadingArtistInfo"></tracks-top>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TracksTop from "@/components/tags/TracksTop";
import Messages from "@/components/tags/Messages";

export default {
  name: "ArtistDetail",
  data() {
    return {
      artist_name: this.$route.params.artist_name,
      is_view_top: false
    }
  },

  mounted() {
    this.fetchArtistInfo(this.$route.params.artist_name)
    this.is_view_top = true
  },
  components: {
    TracksTop,
    Messages
  },
  methods: mapActions([`fetchArtistInfo`]),
  computed: mapGetters([`artist`, `loadingArtistInfo`])
}
</script>

<style scoped>

</style>