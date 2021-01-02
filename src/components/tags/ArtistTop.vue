<template>
  <div class="top">
    <div v-for="(track, index) in tracks" :key="index">
      <TopItem :artist="artist" :index="index" :track="track"/>
    </div>

    <skeleton-loader :loading="loading"></skeleton-loader>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/tags/SkeletonLoader";
import TopItem from "@/components/tags/TopItem";

export default {
  name: "ArtistTop",
  props: [
    "tracks",
    "loading",
    "artist"
  ],
  components: {
    TopItem,
    SkeletonLoader
  }
}
</script>

