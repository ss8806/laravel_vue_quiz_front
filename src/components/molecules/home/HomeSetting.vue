<script setup lang="ts">
import { useCategories } from '@/composables/categories'

const { categories, checkbox, checkAll, checkAllOff, goQuiz } = useCategories()
</script>

<template>
    <section class="home-quiz__setting">
      <h2 class="home-quiz__setting-h2">
        <img class="home-quiz__setting-h2-logo" src="@/assets/images/directory-icon.png" />
        出題設定
      </h2>
      <form>
      <label v-for="(category, index) in categories" :key="index"><!-- ハードコーディングしていたlabelをv-forに編集 -->
        <input type="checkbox" v-model="checkbox" :value="category.id" checked /> <!-- ハードコーディングしていたチェックボックスを編集 -->
        {{ category.name }}&ensp; <!-- ハードコーディングしていたカテゴリ名を編集 -->
      </label>
      <div>
        全項目チェック
        <button type="button" @click="checkAll">ON</button> <!-- @click="checkAllを追加 -->
        <button type="button" @click="checkAllOff">OFF</button> <!-- @click="checkAllOff"を追加 -->
      </div>
      <button type="button" class="btn btn-primary" @click="goQuiz">出題開始</button> <!-- @click="goQuiz"を追加 -->
    </form>
    </section>
  </template>
  
  <style lang="scss" scoped>
  .home {
    &-quiz {
      &__setting {
        padding: 5px 10px;
  
        &-h2 {
          border-bottom: solid;
  
          &-logo {
            width: 10%;
          }
        }
      }
    }
  }
  </style>
  