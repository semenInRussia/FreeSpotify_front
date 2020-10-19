<template>
  <div>
    <!--    Artist info-->
    <messages :response="artist"></messages>
    <v-row align-content="center">
      <v-col cols="6">
        <v-img :src="artist.img_link"
               contain
               max-width="800px"
               class="rounded-lg"
        ></v-img>
      </v-col>

      <v-col cols="6">
        <h1>{{ artist.name }}</h1>
      </v-col>
    </v-row>
    <tracks-top v-if="is_view_top" :tracks="artist.top" :loading="loadingArtistInfo"></tracks-top>

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