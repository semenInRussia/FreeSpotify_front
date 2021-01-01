<template>
  <div class="album-detail">
    <div class="album-head">
      <v-row>
        <v-col cols="9">
          <v-col cols="6">
            <v-img :src="album.link_on_img"
                   contain
                   max-width="800px"
                   class="rounded-lg"
            ></v-img>
          </v-col>
        </v-col>

        <v-col>
          <span class="album-title">
            {{ album.name }}
          </span>
        </v-col>
      </v-row>
    </div>

    <div class="album-tracks">
      <ol>
        <li v-for="track in album.tracks">
          {{ track.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AlbumDetail",
  methods: mapActions([`fetchAlbum`]),
  computed: mapGetters([`album`]),

  mounted() {
    this.fetchAlbum({
          artist_name: this.$route.params.artist_name,
          album_name: this.$route.params.album_name
        }
    )
  }
}
</script>

<style scoped>

.album-title {
  font-weight: bold;
  font-size: 100px;
}
</style>