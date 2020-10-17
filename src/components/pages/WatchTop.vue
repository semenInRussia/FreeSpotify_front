<template>
  <div>
    <messages :response="tracks"></messages>
    <form @submit.prevent="updateTop()">
      <v-text-field v-model="artist_name"></v-text-field>
      <v-btn color="primary" type="submit">Search</v-btn>
    </form>
    <tracks-top :loading="loading" :tracks="tracks">
    </tracks-top>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TracksTop from "@/components/tags/TracksTop";
import Messages from "@/components/tags/Messages";


export default {
  name: "WatchTop",
  data: () => {
    return {
      artist_name: null,
    }
  },
  components: {
    TracksTop,
    Messages
  },
  methods: {
    ...mapActions([`fetchTop`]),

    updateTop() {
      this.fetchTop(this.artist_name)
    },
  },
  computed: mapGetters([`tracks`, `loading`])

}
</script>

<style scoped>

</style>