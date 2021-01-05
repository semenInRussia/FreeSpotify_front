<template>
  <div class="album-head">
    <v-row>
      <v-col>
        <v-img :src="album.link_on_img"
               contain
               max-width="800px"
               class="rounded-lg"
        ></v-img>
      </v-col>

      <v-col>
        <v-row>
          <span class="album-title">
                  {{ album.name }}
          </span>

        </v-row>

        <v-divider/>

        <v-row class="pa-16">
          <v-row>
            <v-btn
                color="yellow"
                class="download-btn"
                :href="album.link"
            >
              Download
            </v-btn>
          </v-row>
          <v-row>
            <v-btn
                @click="redirect()"
                color="primary"
            >
              View artist
            </v-btn>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
const BASE_DETAIL_ARTIST_URL = "/artists/"

export default {
  name: 'album-header',

  methods: {
    redirect() {
      this.album.artist.$entity.redirect(this.$router)
    }
  },

  props: {
    album: {}
  }
}
</script>
<style scoped>

.album-title {
  font-weight: bold;
  font-size: 100px;
}

.download-btn {
  color: black;
}
</style>