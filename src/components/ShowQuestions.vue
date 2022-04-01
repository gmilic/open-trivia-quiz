<template>
  <div class="questions">
    <SingleQuestion
      v-for="(question, i) in allQuestions"
      :key="i"
      :question="question"
      :index="i"
      class="question"
    >
      <h3 v-html="question.question"></h3>
    </SingleQuestion>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleQuestion from './SingleQuestion.vue'

export default {
  name: 'ShowQuestions',
  components: { SingleQuestion },
  methods: {
    ...mapActions(['fetchQuestions'])
  },
  computed: mapGetters(['allQuestions']),
  created() {
    this.fetchQuestions()
  }
}
</script>

<style></style>
