<template>
  <div class="top-item">
    <v-row>
      <v-col cols="1">
        <div class="top-index">
          {{ index + 1 }}
        </div>
      </v-col>

      <v-divider vertical/>

      <v-col cols="7">
        <v-row class="artist">
          <a :href="artist.link" class="artist-link">
            {{ artist.name }}
          </a>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col>
            <div class="track-name">
              {{ track.name }}
            </div>
          </v-col>
          <v-col>
            <download-link :object="track.album">
              <a :href="track.album.link" class="album-link">
                {{ track.album.name }}
              </a>
            </download-link>
          </v-col>
          <v-col>
            <div class="release-date">
              {{ track.album.release_date }}
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-divider vertical/>

      <v-col cols="3">
        <v-avatar rounded size="88">
          <img :src="track.album.link_on_img" alt="album">
        </v-avatar>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DownloadLink from "@/components/tags/DownloadLink";

export default {
  name: 'TopItem',
  props: {
    artist: {},
    index: {},
    track: {}
  },

  components: {
    DownloadLink
  }
}
</script>
<style scoped>
.artist-link {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: large;
}

.top-index {
  font-weight: bold;
  color: white;
  font-size: 30px;
}

.top-item {
  padding: 10px;
}

.release-date {
  font-size: 19px;
}

.track-name {
  font-size: 20px;
}

.album-link {
  text-decoration-line: underline;
  color: white;
  font-weight: bold;
}

.artist {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 5px;
}
</style>