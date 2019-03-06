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
      <v-toolbar-title>Edit Reflection</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
          <v-btn @click="save">Save</v-btn>
        </v-flex>
        <v-flex>
          <v-btn @click="cancel">Cancel</v-btn>
        </v-flex>

        <v-flex>
            <v-text-field :value="statement"
            v-model="refStatement">
            </v-text-field>
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

    getRef: function () {
      this.$store.dispatch('getReflection', {reflectionId: this.$store.getters.reflectionId})
      this.refStatement = this.$store.state.reflections.refStatement
    },
    save: function () {
      // post
      this.$store.dispatch('updateReflection', this.refStatement)
      this.$router.push({ path: '/reflection' })
    },
    cancel: function () {
      this.$router.push({ path: '/reflection' })
    }
  },
  beforeMount () {
    this.getRef()
  },
  data: () => ({
    drawer: null,
    refStatement: ''
  }),
  props: {
    source: String
  },
  computed: {
      statement() {
        return this.$store.state.reflections.refStatement
      }
  }
}
</script>

<style>

</style>
