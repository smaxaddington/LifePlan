<template>
  <div>
    <h1>Reflections</h1>
    <v-container>
      <v-card flat v-for="ref in reflections" :key="ref._id">
        <v-layout row wrap>
          <v-flex xs8>
            <div>{{ ref.statement }}</div>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="goToReflection(ref._id)">Go to Reflection</v-btn>
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
