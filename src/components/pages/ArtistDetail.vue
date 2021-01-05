<template>
  <div>
    <messages :response="artist"></messages>

    <artist-header :artist="artist"/>

    <v-divider></v-divider>

    <tracks-top v-if="is_view_top" :tracks="artist.top" :artist="artist" :loading="loadingArtistInfo"></tracks-top>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TracksTop from "@/components/tags/ArtistTop";
import Messages from "@/components/tags/Messages";
import ArtistHeader from "@/components/tags/ArtistHeader";

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
    ArtistHeader,
    TracksTop,
    Messages
  },
  methods: mapActions([`fetchArtistInfo`]),
  computed: mapGetters([`artist`, `loadingArtistInfo`])
}
</script>

