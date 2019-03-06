import Vue from 'vue'

const state = {
  goals: [],
  howId: '',
  goalId: '',
  expectedOutcome: '',
  actualOutcome: '',
  expectedCompletionDate: '',
  actualCompletionDate: ''
}

const getters = {
  howId: state => state.howId,
  goals: state => state.goals,
  goalId: state => state.goalId,
  expectedOutcome: state => state.expectedOutcome,
  actualOutcome: state => state.actualOutcome,
  expectedCompletionDate: state => state.expectedCompletionDate,
  actualCompletionDate: state => state.actualCompletionDate
}

const actions = {
  getGoals ({ commit, state, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    this.state.howId = rootState.hows.howId
    Vue.axios.get('/what/how/',
      {headers: {'howId': rootState.hows.howId}})
      .then((resp) => {
        let data = resp.data
        // let whatStatement =

        if (data && data.length > 0) {
          // console.log(data[0])
          commit('whats', data)
        }
        else {
            commit('clearWhatArray')
        }
      })
      .catch((err) => {
        console.log('Darn! There was an error getting whats: ' + err)
      })
  },
  async getWhat ({ commit, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    this.state.whatHowId = rootState.hows.howId
    const whatId = payload.whatId
    const whatStmt = '/what/' + whatId
    Vue.axios.get(whatStmt).then(function (resp) {
      let data = resp.data
      commit('what', data)
    })
      .catch((err) => {
        console.log('Darn! There was an error getting what: ' + err)
      })
  },
  deleteWhat ({ commit, dispatch, state, rootState },) {
    // Add the logged in userId to the transaction payload...
    Vue.axios.delete('/what/', {headers: {'id': state.whatId}})
      .then((resp) => {
        dispatch('getWhats')
      })
      .catch((err) => {
        console.log('Error saving what')
        console.log(err)
      })
  },
  updateWhat ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const whatObj = {
      'statement': payload,
      'howId': state.whatHowId,
      '_id': state.whatId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.put('/what/' + state.whatId, whatObj)
      .then((resp) => {
        dispatch('getWhat', {whatId: state.whatId})
        dispatch('getWhats')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  saveWhat ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password'
    const whatObj = {
      'statement': payload.statement,
      'howId': rootState.hows.howId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.post('/what', whatObj)
      .then((resp) => {
        console.log('we in here?')
        dispatch('getWhats')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  whats (state, data) {
    // Start by clearing the array...
    state.whats = data
  },
  what (state, data) {
    // Start by clearing the array...
    state.whatId = data._id
    state.whatStatement = data.statement
    state.whatHowId = data.howId
  },
  clearWhatArray (state) {
    // Start by clearing the array...
    state.whats = []
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
