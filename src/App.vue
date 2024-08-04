<script setup lang="ts">
import QuizSelectAnswer from '@/components/molecules/quiz/QuizSelectAnswer.vue'
import QuizCorrectAnswer from '@/components/molecules/quiz/QuizCorrectAnswer.vue'
import QuizResultModal from '@/components/molecules/quiz/QuizResultModal.vue'
import QuizCommentary from '@/components/molecules/quiz/QuizCommentary.vue'
</script>

<template>
  <div class="container">
    <QuizSelectAnswer />
    <QuizCorrectAnswer />
    <QuizCommentary />
    <QuizResultModal />
  </div>
</template>

<style lang="scss">
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px;
}

main {
  padding-top: 20px;
  background: $gray;
  padding-bottom: 50px;
  min-height: 1000px;
}

article {
  border: solid $gray;
  background: $white;
  width: 60%;
}
</style>
