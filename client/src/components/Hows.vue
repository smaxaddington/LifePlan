<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Hows</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
            <ul id=hows>
                <li v-for="how in hows" :key=how._id @click="goToHow(how._id)">
                    <v-btn>
                        {{how.statement}}
                    </v-btn>
                </li>
            </ul>
            <v-btn @click="returnToWhy">
                Return to Why
            </v-btn>
            <v-btn @click="addHow">
                Add How
            </v-btn>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
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
      hows() {
        return this.$store.state.hows.hows
      }
  }
}
</script>
