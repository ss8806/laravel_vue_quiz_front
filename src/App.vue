<script setup lang="ts">
import RegisterForm from '@/components/organisms/form/RegisterForm.vue'
</script>

<template>
  <div class="container">
    <RegisterForm />
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
