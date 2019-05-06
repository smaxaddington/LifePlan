<template>
  <div>
    <font size = 6 color = "grey">
      HOWS
    </font>

    <v-container>
      <v-card flat v-for="how in hows" :key="how._id">
        <v-layout row wrap>
          <v-flex xs10>
            <div>{{ how.statement }}</div>
          </v-flex>
          <v-flex xs2>
            <v-btn @click="goToHow(how._id)">Go to How</v-btn>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn @click="addHow">
              Add How
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn @click="returnToWhy">
            Return to Why
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
    getHows: function () {
      this.$store.dispatch('getHows')
    },
    returnToWhy: function () {
      this.$router.push({path: '/why'})
    },
    goToHow: function (id) {
      this.$store.dispatch('getHow', {howId: id})
      this.$router.push({path: '/how'})
    },
    addHow: function () {
      this.$router.push({path: '/addHow'})
    }
  },
  beforeMount () {
    this.getHows()
  },
  props: {
    source: String
  },
  computed: {
    hows () {
      return this.$store.state.hows.hows
    }
  }
}
</script>
