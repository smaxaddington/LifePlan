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
      <v-toolbar-title>Add How</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-flex>
            {{this.statement}}
        </v-flex>
      <v-form>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
            <v-flex xs6>
                <v-textarea
                outline
                name="input-7-4"
                label="Statement"
                v-model="statement"
                ></v-textarea>
            </v-flex>
            </v-layout>
        </v-container>
    </v-form>
    <v-flex>
        <v-btn @click="save">Save</v-btn>
    </v-flex>
    <v-flex>
        <v-btn @click="cancel">Cancel</v-btn>
    </v-flex>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    save: function () {
      this.$store.dispatch('saveHow', {statement: this.statement})
      this.$router.push({path: '/hows'})
    },
    cancel: function () {
        this.$router.push({path: '/hows'})
    }

  },
  beforeMount () {
  },
  data: () => ({
    statement: '',
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

<style>

</style>
