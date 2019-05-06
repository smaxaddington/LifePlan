<template>
  <nav>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Life Plan</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" @click="goToCalendar(link.text)">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  methods: {
    goToCalendar: function (text) {
      if (text === 'Calendar') {
        window.open(
          'https://calendar.google.com',
          '_blank' // <- This is what makes it open in a new window.
        )
      } else if (text === 'Goals') {
        this.$store.dispatch('getAllGoals')
      }
    }
  },
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'whatshot', text: 'Why', route: '/why' },
        { icon: 'waves', text: 'Hows', route: '/hows' },
        { icon: 'calendar_today', text: 'Calendar', route: '/why' },
        { icon: 'ballot', text: 'Goals', route: '/goals' }
      ]
    }
  }
}
</script>

<style>

</style>
