<template>
  <div class="download-link">
    <div v-bind="$attrs">
      <a
        :href="object.link"
        @contextmenu="openMenu"
    >
      {{ object.name }}
    </a>
    </div>

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
  inheritAttrs: false,

  data() {
    return {
      show: false
    }
  },
  methods: {
    openMenu() {
      console.log(this.$attrs)
      this.show = !(this.show)
    },

    redirect() {
      this.object.$entity.redirect(this.$router)
    }
  },

  props: {
    object: {},
  },
}
</script>

<style scoped></style>