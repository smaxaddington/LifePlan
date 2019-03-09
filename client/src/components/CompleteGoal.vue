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
            <v-text-field :value="expectedOutcome"
            v-model="actualOutcome">
            </v-text-field>
        </v-flex>
        <v-date-picker v-model="actualCompletionDate" :landscape="landscape" :reactive="reactive"></v-date-picker>
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
      this.actualOutcome = this.$store.getters.expectedOutcome
      this.actualCompletionDate = new Date(this.$store.getters.expectedCompletionDate).toISOString().substr(0, 10)
    },
    save: function () {
      // post
      this.$store.dispatch('completeGoal', {actualOutcome: this.actualOutcome,
        actualCompletionDate: this.actualCompletionDate,
        expectedOutcome: this.$store.getters.expectedOutcome,
        expectedCompletionDate: this.$store.getters.expectedCompletionDate})
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
    actualCompletionDate: '',
    actualOutcome: ''
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
