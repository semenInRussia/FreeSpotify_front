<template>
  <div class="top">
    <div class="top-item" v-for="(track, index) in tracks" :key="index">
      <v-row>
        <v-col cols="1">
          <span class="top-index">{{ index + 1 }}.</span>
        </v-col>

        <v-col>
          <a :href="artist.link" class="artist-link">{{ artist.name }}</a>
        </v-col>

        <v-col cols="5">
          <v-avatar
              rounded
              size="60"
          >
            <img :src="track.album.link_on_img" alt="ALBUM">
          </v-avatar>
        </v-col>
      </v-row>

      <v-divider></v-divider>
        <v-row>
          <v-col cols="1">

          </v-col>
          <v-col>
            <a :href="track.album.link" class="track-name">{{ track.name }}</a>
          </v-col>

          <v-col cols="2">
            <span class="release-date">{{ track.album.release_date }}</span>
          </v-col>
          <v-col cols="3">
            <span class="track-name">
              {{ track.album.name }}
            </span>
          </v-col>
        </v-row>

        <v-divider/>
    </div>
    <skeleton-loader :loading="loading"></skeleton-loader>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/tags/SkeletonLoader";

export default {
  name: "TracksTop",
  props: [
    "tracks",
    "loading",
    "artist"
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
</style>