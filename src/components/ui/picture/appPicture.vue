<template>
  <picture class="app-picture">
    <source
      :srcset="pictureSrcSet"
      :type="pictureSrcType"
    >
    <img
      :src="pictureBaseUrl"
      :style="pictureStyles"
      :alt="pictureAltText"
      :width="pictureWidth"
      :height="pictureHeight"
    >
  </picture>
</template>

<script lang="ts" setup>
defineProps({
  pictureSrcSet: {
    type: String,
    required: true,
  },
  pictureSrcType: {
    type: String,
    required: true,
  },
  pictureBaseUrl: {
    type: String,
    required: true,
  },
  pictureStyles: {
    type: Object,
    required: false,
    default: undefined
  },
  pictureAltText: {
    type: String,
    required: true,
  },
  pictureWidth: {
    type: [String, Number],
    required: true
  },
  pictureHeight: {
    type: [String, Number],
    required: false,
    default: undefined
  }
});
</script>
