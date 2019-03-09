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
            <v-text-field :value="actualOutcome"
            v-model="expectedOutcome">
            </v-text-field>
        </v-flex>
        <v-date-picker v-model="expectedCompletionDate" :landscape="landscape" :reactive="reactive"></v-date-picker>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {

    getGoal: function () {
      this.$store.dispatch('getGoal', {goalId: this.$store.getters.goalId})
      console.log('exp: ' + this.$store.getters.expectedOutcome)
      console.log('exp d: ' + this.$store.getters.expectedCompletionDate)
      this.expectedOutcome = this.$store.getters.expectedOutcome
      this.expectedCompletionDate = new Date(this.$store.getters.expectedCompletionDate).toISOString().substr(0, 10)
    },
    save: function () {
      // post
      this.$store.dispatch('updateGoal', {expectedOutcome: this.expectedOutcome, expectedCompletionDate: this.expectedCompletionDate})
      this.$router.push({ path: '/goal' })
    },
    cancel: function () {
      this.$router.push({ path: '/goal' })
    }
  },
  beforeMount () {
    this.getGoal()
  },
  data: () => ({
    drawer: null,
    expectedOutcome: '',
    expectedCompletionDate: ''
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
