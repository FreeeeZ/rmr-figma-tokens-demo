<template>
  <div class="page-wrapper">
    <SomePage theme="light" />
    <SomePage theme="dark" />
  </div>
</template>

<script lang="ts" setup>
import SomePage from "@/components/pages/home/SomePage.vue";
</script>

<style lang="scss" scoped>
@use './styles/index';
</style>
