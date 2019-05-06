<template>
    <div>
    <font size = 6 color = "grey">
      GOALS
    </font>

    <v-container>
      <v-card flat v-for="goal in goals" :key=goal._id>
        <v-layout row wrap>
          <v-flex xs6 md4>
            <div>{{goal.expectedOutcome}}</div>
          </v-flex>

          <v-flex xs6 md3>
            <div>
              {{isComplete(goal)}}
            </div>
          </v-flex>
          <v-flex xs6 md2>
            <div>{{goal.expectedCompletionDate.substr(0, 10)}}</div>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn @click="goToGoal(goal._id)">Go to Goal</v-btn>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-layout row wrap>

        <v-flex xs12 md6>
          <v-btn v-if="showReturn" @click="addGoal">
              Add Goal
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn v-if="showReturn" @click="returnToHow">
            Return to How
          </v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    // goToHows: function () {
    //   this.$router.push({ path: '/hows' })
    // },
    getGoals: function () {
      console.log(this.$store.state.goals.showReturn)
      if (this.$store.state.goals.showReturn === 1) {
        this.$store.dispatch('getGoals')
      } else {
        this.$store.dispatch('getAllGoals')
      }
    },
    returnToHow: function () {
      this.$router.push({path: '/how'})
    },
    goToGoal: function (id) {
      this.$store.dispatch('getGoal', {goalId: id})
      console.log('id: ' + id)
      this.$store.dispatch('setHowFromGoal', id)
      this.$router.push({path: '/goal'})
    },
    addGoal: function () {
      this.$router.push({path: '/addGoal'})
    },
    isComplete: function (goal) {
      if (goal.actualOutcome === null || goal.actualOutcome === '') {
        return 'Incomplete'
      } else {
        return 'Complete'
      }
    }
  },
  beforeMount () {
    this.getGoals()
  },
  props: {
    source: String
  },
  computed: {
    goals () {
      return this.$store.state.goals.goals
    },
    showReturn () {
      return this.$store.state.goals.showReturn
    }
  }
}
</script>
