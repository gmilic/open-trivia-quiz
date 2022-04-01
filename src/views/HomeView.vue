<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ChooseQuiz v-if="!showQuestions" />
    <ShowQuestions v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseQuiz from '@/components/ChooseQuiz.vue'
import ShowQuestions from '@/components/ShowQuestions.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {}
  },
  components: {
    ChooseQuiz,
    ShowQuestions
  },
  methods: {},
  computed: {
    ...mapGetters(['showQuestions'])
  }
}
</script>
