<template>
  <div>
    <font size = 6 color = "grey">
      GOAL
    </font>

    <div>Expected Outcome: {{expectedOutcome}}</div>
    <div v-if="isComplete">Actual Outcome: {{actualOutcome}}</div>
    <v-flex>
          Expected Completion Date: {{expectedCompletionDate}}
    </v-flex>
    <v-flex v-if="isComplete">
          Actual Completion Date: {{actualCompletionDate}}
    </v-flex>
    <v-container >
      <v-layout  row wrap>
        <v-flex  xs6 md3>
          <v-btn  @click="goToGoals">Goals</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn @click="goToHow">How</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn @click="deleteGoal">Delete</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn @click="goToReflections">Reflections</v-btn>
        </v-flex>
        <v-flex v-if="!isComplete" xs6>
          <v-btn @click="completeGoal">Mark Complete</v-btn>
        </v-flex>
       <v-flex v-if="!isComplete" xs6>
          <v-btn @click="editGoal">Edit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToHow: function () {
      this.$store.dispatch('setHowFromGoal', this.$store.state.goals.goalId)
      this.$router.push({ path: '/how' })
    },
    deleteGoal: function () {
      if (this.$store.state.goals.showReturn === 1) {
        this.$store.dispatch('deleteGoal', 1)
      } else {
        this.$store.dispatch('deleteGoal', 0)
      }

      this.$router.push({ path: '/goals' })
    },
    // getHow: function () {
    //   // this.$store.dispatch('getHow')
    // },
    editGoal: function () {
      this.$router.push({ path: '/editGoal' })
    },
    completeGoal: function () {
      this.$router.push({ path: '/completeGoal' })
    },
    goToReflections: function () {
      this.$store.dispatch('getReflections', {relatedItemType: 'goal', relatedItemId: this.$store.state.goals.goalId})
      this.$router.push({path: '/reflections'})
    },
    goToGoals: function () {
      if (this.$store.state.goals.showReturn === 1) {
        this.$store.dispatch('getGoals')
      } else {
        this.$store.dispatch('getAllGoals')
      }

      this.$router.push({path: '/goals'})
    },
    getHow: function () {
      this.$store.dispatch('getGoals')
    }
  },
  beforeMount () {
    this.getHow()
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  computed: { // START HERE TOMORROW - add computed properties for goals
    expectedOutcome () {
      return this.$store.state.goals.expectedOutcome
    },
    actualOutcome () {
      return this.$store.state.goals.actualOutcome
    },
    actualCompletionDate () {
      var options = { year: 'numeric', month: 'long', day: 'numeric' }
      var date = new Date(this.$store.state.goals.actualCompletionDate)
      return date.toLocaleDateString('en-US', options)
    },
    expectedCompletionDate () {
      var options = { year: 'numeric', month: 'long', day: 'numeric' }
      var date = new Date(this.$store.state.goals.expectedCompletionDate)
      return date.toLocaleDateString('en-US', options)
    },
    showReturn () {
      return this.$store.state.goals.showReturn
    },
    goalId () {
      return this.$store.state.goals.goalId
    },
    isComplete () {
      if (this.$store.state.goals.actualOutcome === null || this.$store.state.goals.actualOutcome === '') {
        return 0
      } else {
        return 1
      }
    }
  }
}
</script>
