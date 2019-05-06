<template>
  <v-app id="inspire">
    <font size = 6 color = "grey">
      EDIT HOW
    </font>

    <v-content>
      <v-layout row wrap>
        <v-flex xs12 md12>
          <v-form >
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                <v-flex>
                    <v-textarea
                    outline
                    name="input-7-4"
                    label="Statement"
                    v-model="statement"
                    ></v-textarea>
                </v-flex>
                </v-layout>
            </v-container>
        </v-form>
      </v-flex>
      <v-flex xs6 md6>
        <v-btn @click="save">Save</v-btn>
      </v-flex>
      <v-flex xs6 md6>
          <v-btn @click="cancel">Cancel</v-btn>
      </v-flex>
    </v-layout>

    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {

    getHow: function () {
      this.$store.dispatch('getHow', {howId: this.$store.getters.howId})
      this.statement = this.$store.getters.statement
    },
    save: function () {
      // post
      this.$store.dispatch('updateHow', this.statement)
      this.$router.push({ path: '/how' })
    },
    cancel: function () {
      this.$router.push({ path: '/how' })
    }
  },
  beforeMount () {
    this.getHow()
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
