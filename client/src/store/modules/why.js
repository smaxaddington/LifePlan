import Vue from 'vue'

const state = {
  why: '',
  userId: '5a777f0a75f64a1698221d98',
  whyId: ''
}

const getters = {
  why: state => state.why,
  whyId: state => state.whyId
}

const actions = {
  getWhy ({ commit, state, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    Vue.axios.get('/why/user/',
      {headers: { 'userId': state.userId }})
      .then((resp) => {
        let data = resp.data
        // let statement =
        if (data && data.length > 0) {
          commit('why', data)
        }
      })
      .catch((err) => {
        console.log('Darn! There was an error getting why: ' + err)
      })
  },

  saveWhy ({ commit, dispatch, state, rootState }, why) {
    // Add the logged in userId to the transaction payload...
    why.userId = rootState.user.userId

    Vue.axios.post('/why', why)
      .then((resp) => {
        dispatch('getWhy')
      })
      .catch((err) => {
        console.log('Error saving why')
        console.log(err)
      })
  },
  updateWhy ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const whyObj = {
      'statement': payload,
      'userId': state.userId,
      '_id': rootState.why.whyId,
      'createdOn': '03/1/2019'
    }
    console.log(whyObj)
    Vue.axios.put('/why/' + rootState.why.whyId, whyObj)
      .then((resp) => {
        dispatch('getWhy')
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

const mutations = {
  why (state, data) {
    // Start by clearing the array...
    state.why = data[0].statement
    state.whyId = data[0]._id
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
