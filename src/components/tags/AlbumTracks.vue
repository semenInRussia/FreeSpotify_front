
<template>
  <div class="album-tracks">
    <div v-for="(track, index) in album.tracks">
      <albums-tracks-item :track="track" :album="album" :index="index"/>
    </div>
  </div>
</template>

<script>
import AlbumsTracksItem from "@/components/tags/AlbumsTracksItem";

export default {
  name: 'album-tracks',
  components: {AlbumsTracksItem},
  props: {
    album: {}
  }
}
</script>