<template>
  <div class="app-layout">
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '@/layouts/app-layout/components/footer/index.vue';
import Content from '@/layouts/app-layout/components/content/index.vue';
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
