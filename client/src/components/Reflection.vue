<template>
  <div>
    <font size = 6 color = "grey">
      REFLECTION
    </font>

    <div>{{reflection}}</div>
    <div>{{createdOn}}</div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 md3>
          <v-btn @click="editReflection">
            Edit
          </v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn @click="goToReflections">
            Reflections
          </v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn @click="deleteReflection">Delete</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="goToItem">
            {{relatedItemType}}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToItem: function () {
      this.$router.push({ path: '/' + this.$store.state.reflections.relatedItemType })
    },
    deleteReflection: function () {
      this.$store.dispatch('deleteReflection')
      this.$router.push({ path: '/reflections' })
    },
    // getHow: function () {
    //   // this.$store.dispatch('getHow')
    // },
    editReflection: function () {
      this.$router.push({ path: '/editReflection' })
    },
    goToReflections: function () {
      this.$store.dispatch('getReflections', {relatedItemType: this.$store.state.reflections.relatedItemType, relatedItemId: this.$store.state.reflections.relatedItemId})
      this.$router.push({path: '/reflections'})
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
    relatedItemType () {
      return this.$store.state.reflections.relatedItemType
    },
    relatedItemId () {
      return this.$store.state.reflections.relatedItemId
    },
    reflection () {
      return this.$store.state.reflections.refStatement
    },
    relatedItemStmt () {
      console.log(this.$store.state.reflections.relatedItemStmt)
      return this.$store.state.reflections.relatedItemStmt
    },
    createdOn () {
      var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      var date = new Date(this.$store.state.reflections.createdOn)
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>
