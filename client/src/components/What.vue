<template>
  <div>

    <font size = 6 color = "grey">
      WHAT
    </font>

    <br>
    <font size = 6>{{what}}</font>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 md4>
          <v-btn @click="editWhat">
            Edit
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="goToReflections">
            Reflections
          </v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="deleteWhat">Delete</v-btn>
        </v-flex>
        <v-flex xs6 md4>
          <v-btn @click="returnToWhats">
            Whats
          </v-btn>
        </v-flex>

        <v-flex>
          <add-to-calendar
                 location=""
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                 details=""
                 inline-template>
        <div>

            <google-calendar id="google-calendar">
            <i class="fa fa-google"></i> Add to Google calendar
            </google-calendar>
        </div>
        </add-to-calendar>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
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
    goToCalendar: function () {
      window.open(
        'https://calendar.google.com',
        '_blank' // <- This is what makes it open in a new window.
      )
    },
    goToReflections: function () {
      this.$store.dispatch('getReflections', {relatedItemType: 'what', relatedItemId: this.$store.state.whats.whatId})
      this.$router.push({path: '/reflections'})
    },
    getWhat: function () {
      this.statement = this.$store.state.whats.whatStatement
    }
  },
  beforeMount () {
    this.getWhat()
  },
  data: () => ({
    statement: ''
  }),
  props: {
    source: String
  },
  computed: {
    what () {
      // this.$store.dispatch('getWhat')
      return this.$store.state.whats.whatStatement
    }
  }
}
</script>
