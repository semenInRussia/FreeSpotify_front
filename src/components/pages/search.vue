<template>
  <div class="search">
    <v-tabs v-model="tab">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#artist">
        Artist
      </v-tab>

      <v-tab href="#album">
        Album
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="artist">
        <ArtistSearch/>
      </v-tab-item>

      <v-tab-item value="album">
        <AlbumSearch/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import AlbumSearch from "@/components/tags/AlbumSearch";
import ArtistSearch from "@/components/tags/ArtistSearch";

export default {
  name: "search",

  data() {
    return {
      tab: {},
    }
  },

  components: {
    AlbumSearch,
    ArtistSearch
  }
}
</script>

<style scoped>

</style>