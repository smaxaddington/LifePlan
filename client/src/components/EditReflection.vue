<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="save">Save</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="cancel">Cancel</v-btn>
        </v-flex>

        <v-flex>
            <v-text-field :value="statement"
            v-model="refStatement">
            </v-text-field>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {

    getRef: function () {
      this.$store.dispatch('getReflection', {reflectionId: this.$store.getters.reflectionId})
      this.refStatement = this.$store.state.reflections.refStatement
    },
    save: function () {
      // post
      this.$store.dispatch('updateReflection', this.refStatement)
      this.$router.push({ path: '/reflection' })
    },
    cancel: function () {
      this.$router.push({ path: '/reflection' })
    }
  },
  beforeMount () {
    this.getRef()
  },
  data: () => ({
    drawer: null,
    refStatement: ''
  }),
  props: {
    source: String
  },
  computed: {
    statement () {
      return this.$store.state.reflections.refStatement
    }
  }
}
</script>

<style>

</style>
