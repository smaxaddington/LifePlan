import Vue from 'vue'

const state = {
  hows: [],
  howWhyId: '',
  howId: '',
  statement: ''
}

const getters = {
  statement: state => state.statement,
  hows: state => state.hows,
  howWhyId: state => state.whyId,
  howId: state => state.howId
}

const actions = {
  getHows ({ commit, state, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    this.state.howWhyId = rootState.why.whyId
    Vue.axios.get('/how/why/',
      {headers: {'whyId': rootState.why.whyId}})
      .then((resp) => {
        let data = resp.data
        // let statement =

        if (data && data.length > 0) {
          // console.log(data[0])
          commit('hows', data)
        } else {
          commit('clearHowArray')
        }
      })
      .catch((err) => {
        console.log('Darn! There was an error getting how: ' + err)
      })
  },
  async getHow ({ commit, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    this.state.howWhyId = rootState.why.whyId
    const howId = payload.howId
    const howStmt = '/how/' + howId
    Vue.axios.get(howStmt).then(function (resp) {
      let data = resp.data
      commit('how', data)
    })
      .catch((err) => {
        console.log('Darn! There was an error getting how: ' + err)
      })
  },
  async setHowFromGoal ({ commit, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    const goalId = payload
    const goalStmt = '/goal/' + goalId
    console.log(goalId)
    Vue.axios.get(goalStmt).then(function (resp) {
      let data = resp.data
      console.log(data)
      const howStmt = '/how/' + data.relatedItemId
      Vue.axios.get(howStmt).then(function (resp) {
        let data = resp.data
        commit('how', data)
      })
        .catch((err) => {
          console.log('Darn! There was an error getting how: ' + err)
        })
    })
      .catch((err) => {
        console.log('Darn! There was an error getting goal: ' + err)
      })
  },
  deleteHow ({ commit, dispatch, state, rootState }) {
    // Add the logged in userId to the transaction payload...
    Vue.axios.get('/goal/how/',
      {headers: {'howId': state.howId}})
      .then((resp) => {
        let data = resp.data
        // let whatStatement =

        if (data && data.length > 0) {
          // console.log(data[0])
          var i
          for (i = 0; i < data.length; i++) {
            Vue.axios.delete('/goal/', {headers: {'id': data[i]._id}})
              .then((resp) => {
                dispatch('getGoals')
              })
              .catch((err) => {
                console.log('Error deleting goal')
                console.log(err)
              })
          }
        }
      })
      .catch((err) => {
        console.log('Darn! There was an error getting goals: ' + err)
      })
    Vue.axios.delete('/how/', {headers: {'id': state.howId}})
      .then((resp) => {
        dispatch('getHows')
      })
      .catch((err) => {
        console.log('Error deleting how')
        console.log(err)
      })
  },
  updateHow ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const howObj = {
      'statement': payload,
      'whyId': state.howWhyId,
      '_id': state.howId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.put('/how/' + state.howId, howObj)
      .then((resp) => {
        dispatch('getHow', {howId: state.howId})
        dispatch('getHows')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  saveHow ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const howObj = {
      'statement': payload.statement,
      'whyId': state.howWhyId,
      'createdOn': '03/1/2019'
    }
    console.log(howObj)
    Vue.axios.post('/how', howObj)
      .then((resp) => {
        dispatch('getHows')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  hows (state, data) {
    // Start by clearing the array...
    state.hows = data
  },
  how (state, data) {
    // Start by clearing the array...
    state.howId = data._id
    state.statement = data.statement
    state.howWhyId = data.whyId
  },
  clearHowArray (state) {
    // Start by clearing the array...
    state.hows = []
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
