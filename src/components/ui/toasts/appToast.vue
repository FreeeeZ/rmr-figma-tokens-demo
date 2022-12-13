<template>
  <div class="toast-wrapper">
    <transition-group name="toast-slide">
      <div
        v-for="(toast, toastId) in toastStore?.openedToasts"
        :key="toastId"
        class="toast-item"
        :class="`toast-item_${toast?.toastType}`"
        role="alert"
        @click="toastStore.closeToast(toastId)"
      >
        <div v-if="toast?.toastTitle" class="toast-item__title">
          {{ toast?.toastTitle }}
        </div>
        <div v-if="toast?.toastText" class="toast-item__text">
          {{ toast?.toastText }}
        </div>
        <div class="toast-item__progress">
          <div :style="`--duration: ${toast?.toastDuration / 1000}`" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { useToastStore } from "@/store/ui/toastStore.ts";

const toastStore = useToastStore();
</script>

<style lang="scss" scoped>
@use './styles/app-toast';
</style>
