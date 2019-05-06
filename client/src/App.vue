<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="black" app>
      <span class="white--text">&copy; Max Addington</span>
    </v-footer>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {Navbar},
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style>
@import 'vuetify/dist/vuetify.min.css';
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
