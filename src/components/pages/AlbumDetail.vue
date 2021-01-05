<template>
  <div class="album-detail">
    <album-header :album="album"/>

    <v-divider/>

    <album-tracks :album="album"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AlbumHeader from "@/components/tags/AlbumHeader";
import AlbumTracks from "@/components/tags/AlbumTracks";

export default {
  name: "AlbumDetail",
  components: {AlbumTracks, AlbumHeader},
  methods: mapActions([`fetchAlbum`]),
  computed: mapGetters([`album`]),

  mounted() {
    const artist_model = {
      artist: {
        name: this.$route.params.artist_name
      },
      name: this.$route.params.album_name
    }

    this.fetchAlbum(artist_model)
  }
}
</script>

