<template>
  <div>
    <h1>How</h1>
    <div>{{this.$store.state.hows.statement}}</div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 md4>
          <v-btn @click="editHow">
            Edit
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="goToWhats">
            Whats
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="goToHows">
            Hows
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="deleteHow">Delete</v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="goToReflections">
            Reflections
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="goToGoals">Goals</v-btn>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToWhats: function () {
      this.$router.push({ path: '/whats' })
    },
    goToHows: function () {
      this.$router.push({ path: '/hows' })
    },
    deleteHow: function () {
      this.$store.dispatch('deleteHow')
      this.$router.push({ path: '/hows' })
    },
    // getHow: function () {
    //   // this.$store.dispatch('getHow')
    // },
    editHow: function () {
      this.$router.push({ path: '/editHow' })
    },
    goToReflections: function () {
      this.$store.dispatch('getReflections', {relatedItemType: 'how', relatedItemId: this.$store.state.hows.howId})
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
  computed: {
    how () {
      return this.$store.state.hows.statement
    }
  }
}
</script>
