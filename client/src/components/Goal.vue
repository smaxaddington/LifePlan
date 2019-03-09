<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="goToGoals">Goals</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="goToHow">How</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="editGoal">Edit</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="completeGoal">Mark Complete</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="deleteGoal">Delete</v-btn>
        </v-flex>
        <v-flex>
        <v-btn @click="goToReflections">Reflections</v-btn>
        </v-flex>

        <v-flex>
          {{expectedCompletionDate}}
        </v-flex>
        <v-flex>
          {{actualCompletionDate}}
        </v-flex>
        <v-flex>
          {{expectedOutcome}}
        </v-flex>
        <v-flex>
          {{actualOutcome}}
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToHow: function () {
      this.$router.push({ path: '/how' })
    },
    deleteGoal: function () {
      this.$store.dispatch('deleteGoal')
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
      this.$store.dispatch('getGoals')
      this.$router.push({path: '/goals'})
    }
  },
  //   beforeMount () {
  //     this.getHow()
  //   },
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
      return this.$store.state.goals.actualCompletionDate
    },
    expectedCompletionDate () {
      return this.$store.state.goals.expectedCompletionDate
    }
  }
}
</script>
