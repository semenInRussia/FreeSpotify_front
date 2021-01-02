<template>
  <div class="albums-tracks-item">
    <v-row>
      <v-col cols="1">
        <div class="tracks-index">
          {{ index + 1 }}
        </div>
      </v-col>

      <v-divider vertical/>

      <v-col cols="10">
        <div class="track-name">
          {{ track.name }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'albums-tracks-item',
  props: {
    album: {},
    track: {},
    index: {}
  }
}
</script>

<style>
.track-name {
  font-weight: bold;
  font-size: 30px;
}

.tracks-index {
  font-size: 35px;
}

.albums-tracks-item {
  padding: 5px;
}

.albums-tracks-item:hover {
  background-color: #f4ffa1;
  color: gray;
}
</style>