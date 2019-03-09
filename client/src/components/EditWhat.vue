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
            v-model="statement">
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

    getWhat: function () {
      this.$store.dispatch('getWhat', {whatId: this.$store.getters.whatId})
      this.statement = this.$store.getters.whatStatement
      console.log('statement: ' + this.statement)
    },
    save: function () {
      // post
      this.$store.dispatch('updateWhat', this.statement)
      this.$router.push({ path: '/what' })
    },
    cancel: function () {
      this.$router.push({ path: '/what' })
    }
  },
  beforeMount () {
    this.getWhat()
  },
  data: () => ({
    drawer: null,
    statement: ''
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
