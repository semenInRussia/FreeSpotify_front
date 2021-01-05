<template>
  <div class="download-link">
    <slot @contextmenu="openMenu"/>

    <div class="buttons" v-if="show">
      <v-btn
          :href="object.link"
          color="yellow">
        Download
      </v-btn>

      <v-btn @click="redirect">
        View
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadLink",

  data() {
    return {
      show: false
    }
  },
  methods: {
    openMenu(e) {
      this.show = !(this.show)

      e.preventDefault()
    },

    redirect() {
      this.object.$entity.redirect(this.$router)
    }
  },

  props: {
    object: {}
  }
}
</script>

<style scoped></style>