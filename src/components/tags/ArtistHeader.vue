<template>
  <v-row align-content="center">
    <v-col>
      <v-img :src="artist.link_on_img"
             contain
             width="500px"
             class="rounded-lg"
      ></v-img>
    </v-col>

    <v-col>
      <h1 class="artist-name">
        {{ artist.name }}
      </h1>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'artist-header',
  props: {
    artist: {}
  }
}
</script>
<style scoped>
.artist-name {
  font-size: 120px;
  font-family: Helvetica, Arial, sans-serif;
}
</style>