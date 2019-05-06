<template>
  <v-app id="inspire">
    <font size = 6 color = "grey">
      EDIT REFLECTION
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
                    v-model="refStatement"
                    value="statement"
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
