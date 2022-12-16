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
.page-wrapper {
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  justify-content: center;
}
</style>
