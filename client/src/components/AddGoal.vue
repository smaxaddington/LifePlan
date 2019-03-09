<template>
  <v-app id="inspire">
    <v-content>
      <v-form>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
            <v-flex xs6>
                <v-textarea
                outline
                name="input-7-4"
                label="Expected Outcome"
                v-model="expectedOutcome"
                ></v-textarea>
            </v-flex>
            </v-layout>
        </v-container>
    </v-form>
    <v-date-picker v-model="expectedCompletionDate" :landscape="landscape" :reactive="reactive"></v-date-picker>

    <v-flex>
        <v-btn @click="save">Save</v-btn>
    </v-flex>
    <v-flex>
        <v-btn @click="cancel">Cancel</v-btn>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm3>
        <v-checkbox v-model="reactive" hide-details label="Reactive"></v-checkbox>
      </v-flex>
    </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    save: function () {
      this.$store.dispatch('saveGoal', {expectedCompletionDate: this.expectedCompletionDate,
        actualCompletionDate: '',
        expectedOutcome: this.expectedOutcome,
        actualOutcome: ''
      })
      this.$router.push({path: '/goals'})
    },
    cancel: function () {
      this.$router.push({path: '/goals'})
    }

  },
  beforeMount () {
  },
  data: () => ({
    expectedOutcome: '',
    actualOutcome: '',
    drawer: null,
    expectedCompletionDate: new Date().toISOString().substr(0, 10),
    actualCompletionDate: new Date().toISOString().substr(0, 10),
    landscape: false,
    reactive: false
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
