<template>
  <div>
    <font size = 6 color = "grey">
      REFLECTIONS
    </font>

    <v-container>
      <v-card flat v-for="ref in reflections" :key="ref._id">
        <v-layout row wrap>
          <v-flex xs6>
            <div>{{ ref.statement.substr(0,30) }}</div>
          </v-flex>
          <v-flex xs4>
            <div>{{ dateFormatter(ref.createdOn) }}</div>
          </v-flex>
          <v-flex xs2>
            <v-btn @click="goToReflection(ref._id)">Go</v-btn>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn @click="addReflection">
              Add Reflection
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn @click="returnToItem">
            Return to {{relatedItemType}}
          </v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    goToReflection: function (id) {
      this.$store.dispatch('getReflection', {reflectionId: id})
      this.$router.push({path: '/reflection'})
    },
    returnToItem: function () {
      this.$router.push({path: '/' + this.relatedItemType})
    },
    addReflection: function () {
      this.$router.push({path: '/addReflection'})
    },
    dateFormatter: function (d) {
      var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      var date = new Date(d)
      return date.toLocaleDateString('en-US', options)
    }
  },
  computed: {
    reflections () {
      return this.$store.state.reflections.reflections
    },
    relatedItemType () {
      return this.$store.state.reflections.relatedItemType
    },
    relatedItemId () {
      return this.$store.state.reflections.relatedItemId
    }
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style>

</style>
