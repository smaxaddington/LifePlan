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
      <v-toolbar-title>What</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="editWhat">Edit</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="deleteWhat">Delete</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="returnToWhats">Return to whats</v-btn>
        </v-flex>
        <v-flex>
        <v-btn @click="goToReflections">Reflections</v-btn>
        </v-flex>
        

        <v-flex>
          {{what}}
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
  methods: {
    deleteWhat: function () {
      this.$store.dispatch('deleteWhat')
      this.$router.push({ path: '/whats' })
    },
    // getWhat: function () {
    //   //this.$store.dispatch('getWhat',{whatId: this.$store.state.whats.whatId})
    //   //this.what = this.$store.getters.getWhat
    // },
    editWhat: function () {
      this.$router.push({ path: '/editWhat' })
    },
    returnToWhats: function () {
        this.$router.push({path: '/whats'})
    },
    goToReflections: function () {
        this.$store.dispatch('getReflections', {relatedItemType: 'what', relatedItemId: this.$store.state.whats.whatId})
        this.$router.push({path: '/reflections'})
    }
  },
//   beforeMount () {
//     this.getWhat()
//   },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  computed: {
      what() {
        //this.$store.dispatch('getWhat')
        return this.$store.state.whats.whatStatement
      }
  }
}
</script>
