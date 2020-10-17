<template>
  <div class="top">
    <v-list v-if="!tracks.error_name && !loading">
      <v-list-item v-for="track in tracks" :key="track.top_number">
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
    <skeleton-loader :loading="loading"></skeleton-loader>
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

</style>