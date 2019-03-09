import Vue from 'vue'

const state = {
  goals: [],
  goalHowId: '',
  goalId: '',
  expectedOutcome: '',
  actualOutcome: '',
  expectedCompletionDate: '',
  actualCompletionDate: ''
}

const getters = {
  goalHowId: state => state.goalHowId,
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
    this.state.goalHowId = rootState.hows.howId
    console.log('getting goals')
    Vue.axios.get('/goal/how/',
      {headers: {'howId': rootState.hows.howId}})
      .then((resp) => {
        let data = resp.data
        // let whatStatement =

        if (data && data.length > 0) {
          // console.log(data[0])
          commit('goals', data)
        } else {
          commit('clearGoalArray')
        }
      })
      .catch((err) => {
        console.log('Darn! There was an error getting goals: ' + err)
      })
  },
  async getGoal ({ commit, rootState }, payload) {
    // Make API call... Pass in selected Month and Year + UserId in hearder...
    // Once transaction data is retrieved... commit the mutation to update state...
    const goalId = payload.goalId
    const goalStmt = '/goal/' + goalId
    Vue.axios.get(goalStmt).then(function (resp) {
      let data = resp.data
      commit('goal', data)
    })
      .catch((err) => {
        console.log('Darn! There was an error getting goal: ' + err)
      })
  },
  deleteGoal ({ commit, dispatch, state, rootState }) {
    // Add the logged in userId to the transaction payload...
    Vue.axios.delete('/goal/', {headers: {'id': state.goalId}})
      .then((resp) => {
        dispatch('getGoals')
      })
      .catch((err) => {
        console.log('Error deleting goal')
        console.log(err)
      })
  },
  updateGoal ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const goalObj = {
      'expectedOutcome': payload.expectedOutcome,
      'actualOutcome': payload.actualOutcome,
      'expectedCompletionDate': payload.expectedCompletionDate,
      'actualCompletionDate': payload.actualCompletionDate,
      'relatedItemId': rootState.hows.howId,
      'relatedItemType': 'how',
      '_id': state.goalId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.put('/goal/' + state.goalId, goalObj)
      .then((resp) => {
        dispatch('getGoal', {goalId: state.goalId})
        dispatch('getGoals')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  completeGoal ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password
    const goalObj = {
      'expectedOutcome': payload.expectedOutcome,
      'actualOutcome': payload.actualOutcome,
      'expectedCompletionDate': payload.expectedCompletionDate,
      'actualCompletionDate': payload.actualCompletionDate,
      'relatedItemId': rootState.hows.howId,
      'relatedItemType': 'how',
      '_id': state.goalId,
      'createdOn': '03/1/2019'
    }
    Vue.axios.put('/goal/' + state.goalId, goalObj)
      .then((resp) => {
        dispatch('getGoal', {goalId: state.goalId})
        dispatch('getGoals')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  saveGoal ({ commit, dispatch, state, rootState }, payload) {
    // TODO: encrypt the user's password'
    const goalObj = {
      'expectedOutcome': payload.expectedOutcome,
      'actualOutcome': payload.actualOutcome,
      'expectedCompletionDate': payload.expectedCompletionDate,
      'actualCompletionDate': payload.actualCompletionDate,
      'relatedItemId': rootState.hows.howId,
      'relatedItemType': 'how',
      'createdOn': '03/1/2019'
    }
    console.log(goalObj)
    Vue.axios.post('/goal', goalObj)
      .then((resp) => {
        dispatch('getGoals')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  goals (state, data) {
    // Start by clearing the array...
    state.goals = data
  },
  goal (state, data) {
    // Start by clearing the array...
    state.goalId = data._id
    state.expectedOutcome = data.expectedOutcome
    state.actualOutcome = data.actualOutcome
    state.expectedCompletionDate = data.expectedCompletionDate
    state.actualCompletionDate = data.actualCompletionDate
    state.goalHowId = data.howId
  },
  clearGoalArray (state) {
    // Start by clearing the array...
    state.goals = []
  }

}

// Helper functions section ------------------------------

export default {
  state,
  getters,
  actions,
  mutations
}
