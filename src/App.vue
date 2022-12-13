<template>
  <AppLayout />
  <AppToast />
</template>

<script lang="ts" setup>
import AppLayout from '@/layouts/app-layout/index.vue';
import AppToast from "@/components/ui/toasts/appToast.vue";
</script>

<style lang="scss">
@import '@/assets/scss/_global/index.scss';
@import '@/assets/scss/_ui/index.scss';
</style>
