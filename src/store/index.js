import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    questions: [],
    numberOfQuestions: 10,
    selectedDifficulty: 'easy',
    quizStarted: false
  },
  getters: {
    allQuestions: (state) => state.questions,
    showQuestions: (state) => state.quizStarted,
    getNumberOfQuestions: (state) => state.numberOfQuestions,
    getSelectedDifficulty: (state) => state.selectedDifficulty
  },
  mutations: {
    setQuestions: (state, questions) => (state.questions = questions),
    toggleStart: (state) => (state.quizStarted = !state.quizStarted),
    setNumberOfQuestions: (state, selectedNumberOfQuestions) =>
      (state.numberOfQuestions = selectedNumberOfQuestions),
    setSelectedDifficulty: (state, userSelectedDifficulty) =>
      (state.selectedDifficulty = userSelectedDifficulty)
  },
  actions: {
    async fetchQuestions({ commit, state }) {
      const url = `https://opentdb.com/api.php?amount=${state.numberOfQuestions}&difficulty=${state.selectedDifficulty}&type=multiple`
      const res = await axios.get(url)

      commit('setQuestions', res.data.results)
    }
  },
  modules: {}
})
