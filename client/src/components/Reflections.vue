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
      <v-toolbar-title>Reflections</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <v-flex>
            <ul id=hows>
                <li v-for="reflection in reflections" :key=reflection._id @click="goToReflection(reflection._id)">
                    <v-btn>
                        {{reflection.statement}}
                    </v-btn>
                </li>
            </ul>
            <v-btn @click="returnToItem">
                Return to {{relatedItemType}}
            </v-btn>
           
        </v-flex>
        <v-btn @click="addReflection">
                Add Reflection
            </v-btn>
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
      reflections() {
        return this.$store.state.reflections.reflections
      },
      relatedItemType() {
          return this.$store.state.reflections.relatedItemType
      },
      relatedItemId() {
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
