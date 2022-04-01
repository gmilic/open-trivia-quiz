<template>
  <div class="singleQuestionWrap">
    <h6>{{ index + 1 }}</h6>
    <h5>Category: <span v-html="question.category"></span></h5>

    <h2 v-html="question.question"></h2>
    <div class="answers-wrap">
      <div class="answers-inner" v-for="(answer, i) in answers" :key="i">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleQuestion',
  props: ['question', 'index'],
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex]
        ]
      }
      return array
    }
  },
  computed: {
    answers: function () {
      let allAnswers = [
        ...this.question.incorrect_answers,
        this.question.correct_answer
      ]
      return this.shuffle(allAnswers)
    }
  }
}
</script>

<style>
.singleQuestionWrap {
  padding: 2em;
  margin: 1em;
  border: 1px solid #ccc;
}
.answers-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
.answers-inner {
  background: #ccc;
  border-radius: 12px;
  padding: 2em;
  font-size: 1.2em;
  font-weight: bold;
}
</style>
