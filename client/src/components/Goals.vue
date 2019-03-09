<template>
    <div>
    <h1>Goals</h1>
    <v-container>
      <v-card flat v-for="goal in goals" :key=goal._id>
        <v-layout row wrap>
          <v-flex xs6>
            <div>{{goal.expectedOutcome}}</div>
          </v-flex>
          <v-flex xs4>
            <div>{{goal.expectedCompletionDate.substr(0, 10)}}</div>
          </v-flex>
          <v-flex xs2>
            <v-btn @click="goToGoal(goal._id)">Go to Goal</v-btn>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-layout row wrap>
        
        <v-flex xs12 md6>
          <v-btn @click="addGoal">
              Add Goal
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn @click="returnToHow">
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
      this.$store.dispatch('getGoals')
    },
    returnToHow: function () {
      this.$router.push({path: '/how'})
    },
    goToGoal: function (id) {
      this.$store.dispatch('getGoal', {goalId: id})
      this.$router.push({path: '/goal'})
    },
    addGoal: function () {
      this.$router.push({path: '/addGoal'})
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
    }
  }
}
</script>
