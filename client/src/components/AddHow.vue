<template>
  <v-app id="inspire">
    <font size = 6 color = "grey">
      ADD HOW
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
    save: function () {
      this.$store.dispatch('saveHow', {statement: this.statement})
      this.$router.push({path: '/hows'})
    },
    cancel: function () {
      this.$router.push({path: '/hows'})
    }

  },
  beforeMount () {
  },
  data: () => ({
    statement: '',
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
