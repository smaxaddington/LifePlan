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
      <v-toolbar-title>Why</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="goToHows">Hows</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="editWhy">Edit</v-btn>
        </v-flex>
        <v-flex>
        <v-btn @click="goToReflections">Reflections</v-btn>
        </v-flex>

        <v-flex>
          {{why}}
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
    drawer: null//,
    //why: ''
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
