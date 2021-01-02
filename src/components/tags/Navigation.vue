<template>
  <div id="nav">
    <div class="ma-12 pa-12">

      <v-card>
        <v-navigation-drawer
            permanent
            expand-on-hover
            app
        >
          <v-list>
            <v-list-item link href="/">
              <v-list-item-icon>
                <v-icon>fas fa-music</v-icon>
              </v-list-item-icon>
              <v-list-item-content>FreeSpotify</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>

          <v-list
              nav
              dense
          >
            <v-list-item link href="/search/">
              <v-list-item-icon>
                <v-icon>fab fa-searchengin</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Search</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </div>
</template>

<script>

import Vuetify from "vuetify";

export default {
  name: "HeaderView",
  vuetify: new Vuetify(),
  methods: {
    UpdateTop(artist_name) {
      this.$emit('update-top', artist_name)
    }
  }
}
</script>

<style scoped></style>