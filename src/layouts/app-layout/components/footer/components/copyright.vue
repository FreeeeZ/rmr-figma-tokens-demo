<template>
  <div class="main-footer__copyright">
    {{ OTHER_TEXTS.copyrightText }} © {{currentYear}}
  </div>
</template>

<script lang="ts" setup>
import { OTHER_TEXTS } from "@/contants/other-texts";

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use '../styles/copyright';
</style>
