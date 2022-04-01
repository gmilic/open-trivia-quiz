<template>
  <section>
    <h2>Welcome to Open Trivia Quiz</h2>
    <h4>Please select options</h4>
    <div class="selectField">
      <label for="numberOfQuestions">Number of Questions</label>
      <select
        v-model="noOfQuestions"
        name="numberOfQuestions"
        id="numberOfQuestions"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
    <div class="selectField">
      <label for="selectDifficulty"> Select Difficulty</label>
      <select v-model="dificulty" name="selectDifficulty" id="selectDifficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <button @click="startQuiz" class="btn-start">Start Quiz</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ChooseQuiz',
  data() {
    return {
      noOfQuestions: 10,
      dificulty: 'easy'
    }
  },
  methods: {
    ...mapMutations([
      'toggleStart',
      'setNumberOfQuestions',
      'setSelectedDifficulty'
    ]),
    startQuiz: function () {
      this.setNumberOfQuestions(this.noOfQuestions)
      this.setSelectedDifficulty(this.dificulty)
      this.toggleStart()
    }
  }
}
</script>

<style scoped lang="scss">
.selectField {
  padding: 1em;
}
.btn-start {
  background-color: #000;
  color: rgb(0, 210, 0);
  border: 3px solid rgb(0, 210, 0);
  padding: 1em;
  border-radius: 12px;
  font-size: 1.2em;
  line-height: 1.2;
  font-weight: 700;
  margin-top: 4em;
  transition: all 0.3s fade-out;
  cursor: pointer;
}
.btn-start:hover {
  border: 8px solid rgb(0, 210, 0);
  transform: translateY(-5px);
}
</style>
