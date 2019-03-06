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
      <v-toolbar-title>How</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="goToWhats">Whats</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="goToHows">Hows</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="editHow">Edit</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="deleteHow">Delete</v-btn>
        </v-flex>
        <v-flex>
        <v-btn @click="goToReflections">Reflections</v-btn>
        </v-flex>

        <v-flex>
          {{this.$store.state.hows.statement}}
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
      how() {
        return this.$store.state.hows.statement
      }
  }
}
</script>
