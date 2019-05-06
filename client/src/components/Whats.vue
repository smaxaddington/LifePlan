<template>
  <div>
    <font size = 6 color = "grey">
      WHATS
    </font>
    <v-container>
      <v-card flat v-for="what in whats" :key="what._id">
        <v-layout row wrap>
          <v-flex xs10>
            <div>{{ what.statement }}</div>
          </v-flex>
          <v-flex xs2>
            <v-btn @click="goToWhat(what._id)">Go to What</v-btn>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn @click="addWhat">
              Add What
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
    getWhats: function () {
      this.$store.dispatch('getWhats')
      // this.hows = this.$store.state.hows.hows
    },
    returnToHow: function () {
      this.$router.push({path: '/how'}) // add howId to path
    },
    goToWhat: function (id) {
      this.$store.dispatch('getWhat', {whatId: id})
      this.$router.push({path: '/what'})
    },
    addWhat: function () {
      this.$router.push({path: '/addWhat'})
    }
  },
  beforeMount () {
    this.getWhats()
  },
  props: {
    source: String
  },
  computed: {
    whats () {
      return this.$store.state.whats.whats
    }
  }
}
</script>
