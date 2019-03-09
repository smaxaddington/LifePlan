import Vue from 'vue'

const state = {
  reflections: [],
  relatedItemType: '',
  relatedItemId: '',
  reflectionId: '',
  createdOn: null,
  refStatement: ''
}

const getters = {
  refStatement: state => state.statement,
  reflections: state => state.reflections,
  relatedItemType: state => state.relatedItemType,
  relatedItemStmt: state => state.relatedItemStmt,
  relatedItemId: state => state.relatedItemId,
  reflectionId: state => state.reflectionId,
  createdOn: state => state.createdOn
}

const actions = {
  getReflections ({ commit, state, rootState }, payload) {
    // vues need to pass item type and item id through the payload
    if (payload.relatedItemType === 'what') {
      Vue.axios.get('/reflection/what',
        {headers: {'whatId': payload.relatedItemId}})
        .then((resp) => {
          let data = resp.data
          state.relatedItemId = payload.relatedItemId
          // let statement =
          if (data && data.length > 0) {
            commit('reflections', data, payload.relatedItemType)
          } else {
            commit('clearReflections', payload.relatedItemType)
          }
        })
        .catch((err) => {
          console.log('Darn! There was an error getting what: ' + err)
        })
    } else if (payload.relatedItemType === 'how') {
      Vue.axios.get('/reflection/how',
        {headers: {'howId': payload.relatedItemId}})
        .then((resp) => {
          let data = resp.data
          // let statement =
          state.relatedItemId = payload.relatedItemId
          if (data && data.length > 0) {
            // console.log(data[0])
            commit('reflections', data)
          } else {
            commit('clearReflections', payload.relatedItemType)
          }
        })
        .catch((err) => {
          console.log('Darn! There was an error getting how: ' + err)
        })
    } else if (payload.relatedItemType === 'why') {
      Vue.axios.get('/reflection/why',
        {headers: {'whyId': payload.relatedItemId}})
        .then((resp) => {
          let data = resp.data
          state.relatedItemId = payload.relatedItemId
          // let statement =
          if (data && data.length > 0) {
            // console.log(data[0])
            commit('reflections', data)
          } else {
            commit('clearReflections', payload.relatedItemType)
          }
        })
        .catch((err) => {
          console.log('Darn! There was an error getting why: ' + err)
        })
    } else if (payload.relatedItemType === 'goal') {
      Vue.axios.get('/reflection/goal',
        {headers: {'goalId': payload.relatedItemId}})
        .then((resp) => {
          let data = resp.data
          state.relatedItemId = payload.relatedItemId
          // let statement =
          if (data && data.length > 0) {
            // console.log(data[0])
            commit('reflections', data)
          } else {
            commit('clearReflections', payload.relatedItemType)
          }
        })
        .catch((err) => {
          console.log('Darn! There was an error getting why: ' + err)
        })
    }
  },
  async getReflection ({ commit, rootState }, payload) {
    const reflectionId = payload.reflectionId
    const stmt = '/reflection/' + reflectionId
    Vue.axios.get(stmt).then(function (resp) {
      let data = resp.data
      commit('reflection', data)
    })
      .catch((err) => {
        console.log('Darn! There was an error getting how: ' + err)
      })
  },
  deleteReflection ({ commit, dispatch, state, rootState }) {
    // Add the logged in userId to the transaction payload...
    Vue.axios.delete('/reflection/', {headers: {'id': state.reflectionId}})
      .then((resp) => {
        dispatch('getReflections', {relatedItemType: state.relatedItemType, relatedItemId: state.relatedItemId})
      })
      .catch((err) => {
        console.log('Error deleting reflection')
        console.log(err)
      })
  },
  updateReflection ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const refObj = {
      'statement': payload,
      'relatedItemType': state.relatedItemType,
      '_id': state.reflectionId,
      'relatedItemId': state.relatedItemId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.put('/reflection/' + state.reflectionId, refObj)
      .then((resp) => {
        dispatch('getReflection', {reflectionId: state.reflectionId})
        dispatch('getReflections', resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  saveReflection ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const refObj = {
      'statement': payload.statement,
      'relatedItemType': state.relatedItemType,
      'relatedItemId': state.relatedItemId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.post('/reflection', refObj)
      .then((resp) => {
        dispatch('getReflections', resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  reflections (state, data, relatedItemId) {
    // Start by clearing the array...
    // state.relatedItemId = data[0].relatedItemId
    state.relatedItemType = data[0].relatedItemType
    console.log(state.relatedItemType)
    // need to figure out how to get the related item statement into the reflection state
    // if(state.relatedItemType === 'how')
    // {
    //     state.relatedItemStmt = this.$store.state.hows.statement
    // }
    // else if(state.relatedItemType === 'what')
    // {
    //     state.relatedItemStmt = this.$store.state.whats.whatStatement
    // }
    // else if(state.relatedItemType === 'why')
    // {
    //     //console.log(this.$store.state.why.why)
    //     state.relatedItemStmt = this.$store.state.why.why
    // }
    state.reflections = data
  },
  reflection (state, data) {
    // Start by clearing the array...
    state.reflectionId = data._id
    state.refStatement = data.statement
  },
  clearReflections (state, rit) {
    state.relatedItemType = rit
    state.reflections = []
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
