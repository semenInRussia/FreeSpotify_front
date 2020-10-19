<template>
  <div class="top">
    <div>
      <div class="top-item" v-for="track in tracks">
        <a :href="track.artist_link" class="artist-link">{{ track.artist_name }}</a>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <a :href="track.album_link" class="album-link">{{ track.album_name }}</a>
          </v-col>

          <v-col cols="3">
            <span class="release-date">{{ track.release_date }}</span>
          </v-col>
        </v-row>

        <v-divider/>
      </div>
      <skeleton-loader :loading="loading"></skeleton-loader>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/tags/SkeletonLoader";

export default {
  name: "TracksTop",
  props: [
    "tracks",
    "loading"
  ],
  components: {
    SkeletonLoader
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

.top-item {
  padding: 10px;
}

.release-date {

}
</style>