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
  deleteHow ({ commit, dispatch, state, rootState },) {
    // Add the logged in userId to the transaction payload...
    Vue.axios.delete('/how/', {headers: {'id': state.howId}})
      .then((resp) => {
        dispatch('getHows')
      })
      .catch((err) => {
        console.log('Error saving how')
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
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
