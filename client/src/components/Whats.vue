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
      <v-toolbar-title>Whats</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
            <ul id=hows>
                <li v-for="what in whats" :key=what._id @click="goToWhat(what._id)">
                    <v-btn>
                        {{what.statement}}
                    </v-btn>
                </li>
            </ul>
            <v-btn @click="returnToHow">
                Return to How
            </v-btn>
            <v-btn @click="addWhat">
                Add What
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
    getWhats: function () {
      this.$store.dispatch('getWhats')
      //this.hows = this.$store.state.hows.hows
    },
    returnToHow: function () {
      this.$router.push({path: '/how'}) //add howId to path
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
      whats() {
        return this.$store.state.whats.whats
      }
  }
}
</script>
