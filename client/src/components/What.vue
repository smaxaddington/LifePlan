<template>
  <v-app id="inspire">
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
        <a @click="goToCalendar"> calendar! </a>
        <v-flex>
          {{what}}
        </v-flex>
        <div>
        <add-to-calendar title=what
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
    </div>
        </v-layout>
      </v-container>
    </v-content>
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
    goToCalendar: function () {
      window.open(
        'https://calendar.google.com',
        '_blank' // <- This is what makes it open in a new window.
      )
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
