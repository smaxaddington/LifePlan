<template>
  <v-app id="inspire">
    <font size = 6 color = "grey">
      EDIT WHY
    </font>

    <v-content>
      <v-form>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
            <v-flex xs12>
                <v-textarea
                outline
                name="input-7-4"
                label="Statement"
                v-model="why"
                ></v-textarea>
            </v-flex>
            </v-layout>
        </v-container>
    </v-form>
    <v-flex>
        <v-btn @click="save">Save</v-btn>
    </v-flex>
    <v-flex>
        <v-btn @click="cancel">Cancel</v-btn>
    </v-flex>
    </v-content>
  </v-app>

</template>

<script>
export default {
  methods: {

    getWhy: function () {
    //   console.log(this.why)
    //   console.log(this.$store.getters.getWhy)

      this.$store.dispatch('getWhy')
      this.why = this.$store.state.why.why
    },
    save: function () {
      // post
      this.$store.dispatch('updateWhy', this.why)
      console.log(this.why)
      this.$router.push({ path: '/why' })
    },
    cancel: function () {
      this.$router.push({ path: '/why' })
    }
  },
  beforeMount () {
    this.getWhy()
  },
  data: () => ({
    drawer: null,
    why: ''
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
