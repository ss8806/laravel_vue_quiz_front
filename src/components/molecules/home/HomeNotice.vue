<script setup lang="ts">
import { useInformations } from '@/composables/informations'
const { informations } = useInformations()
</script>

<template>
    <section class="home__notice">
      <h2 class="home__notice-h2">
        <img class="home__notice-h2-logo" src="@/assets/images/news-icon.png" />
        お知らせ情報
      </h2>

      <dl v-for="(info, index) in informations" :key="index"> <!-- ここから編集 -->
      <dt>{{ info.created_at }}</dt> <!-- ハードコーディングしていた日付をinfo.created_atに編集 -->
      <dd>{{ info.information }}</dd> <!-- ハードコーディングしていた日付をinfo.informationに編集  -->
      </dl>

      <dl>
        <dt>2019/08/23</dt>
        <dd>サイトを開設しました。</dd>
      </dl>
    </section>
  </template>
  
  <style lang="scss" scoped>
  .home {
    &__notice {
      padding: 5px 10px;
  
      &-h2 {
        border-bottom: solid;
  
        &-logo {
          width: 10%;
        }
      }
    }
  }
  </style>
  