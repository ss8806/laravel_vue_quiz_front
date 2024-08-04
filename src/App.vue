<script setup lang="ts">
import SideBarLink from '@/components/atoms/links/SideBarLink.vue'
import Facebook from '@/components/atoms/social/Facebook.vue'
import Line from '@/components/atoms/social/Line.vue'
import Linkedin from '@/components/atoms/social/Linkedin.vue'
import Twitter from '@/components/atoms/social/Twitter.vue'
import H3SideBarText from '@/components/atoms/texts/H3SideBarText.vue'
</script>

<template>
  <div class="container">
    <Facebook />
    <Line />
    <Linkedin />
    <Twitter />
    <SideBarLink href="あ" text="あ" />
    <H3SideBarText text="SNS共有" />
  </div>
</template>
