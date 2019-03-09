<template>
  <div>
    <h1>{{why}}</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <v-btn @click="editWhy">
            Edit
          </v-btn>
        </v-flex>
        <v-flex xs12 md4>
          <v-btn @click="goToHows">
            Hows
          </v-btn>
        </v-flex>
        <v-flex xs12 md4>
          <v-btn @click="goToReflections">
            Reflections
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToHows: function () {
      this.$router.push({ path: '/hows' })
    },
    // getWhy: function () {
    //   this.$store.dispatch('getWhy')
    //   this.why = this.$store.getters.getWhy
    // },
    editWhy: function () {
      this.$router.push({ path: '/editWhy' })
    },
    goToReflections: function () {
      this.$store.dispatch('getReflections', {relatedItemType: 'why', relatedItemId: this.$store.state.why.whyId})
      this.$router.push({path: '/reflections'})
    }
  },
  // beforeMount () {
  //   this.getWhy()
  // },
  data: () => ({
    drawer: null
    // why: ''
  }),
  props: {
    source: String
  },
  computed: {
    why: function () {
      this.$store.dispatch('getWhy')
      return this.$store.state.why.why
    }
  }
}
</script>
