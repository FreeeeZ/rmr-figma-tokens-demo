<template>
  <div class="some-page" :class="`some-page_${theme}`">
    <div class="container">
      <div class="some-page__wrapper">
        <div class="some-page__header">
          <div class="some-page__time">
            <span>{{ SOME_PAGE_TEXTS.time }}</span>
          </div>
          <div class="some-page__bang" />
          <div class="some-page__icons">
            <picture>
              <source type="image/png" :srcset="theme === 'dark' ? HeaderIconsLight : HeaderIconsDark">
              <img :src="theme === 'dark' ? HeaderIconsLight : HeaderIconsDark" alt="Header icons" width="78">
            </picture>
          </div>
        </div>
        <h1 class="some-page__title">{{ SOME_PAGE_TEXTS.title }}</h1>
        <h2 class="some-page__subtitle">{{ SOME_PAGE_TEXTS.subTitle }}</h2>
        <div class="some-page__picture">
          <picture>
            <source type="image/png" srcset="@/components/pages/home/images/image.png">
            <img src="@/components/pages/home/images/image.png" alt="Some pic" width="263">
          </picture>
        </div>
        <div class="some-page__fields">
          <form>
            <fieldset>
              <div v-for="(field, index) in SOME_PAGE_FIELDS" :key="index" class="some-page__field">
                <component
                  :is="field?.tag"
                  class="input input-primary"
                  :type="field?.type"
                  :name="field?.name"
                  :placeholder="field?.placeHolder"
                  :required="field?.required"
                  :max-length="field?.maxLength"
                  @input="changeFieldValue(field, $event)"
                />
              </div>
            </fieldset>
          </form>
        </div>
        <div class="some-page__submit">
          <AppButton button-type="primary" :disabled="isFormProcessing" @click="confirmForm">
            {{ isFormProcessing ? SOME_PAGE_TEXTS.submitButtonProcessingText : SOME_PAGE_TEXTS.submitButtonText }}
          </AppButton>
        </div>
        <div class="some-page__footer">
          <div class="some-page__swipe-bar" :class="`some-page__swipe-bar_${theme}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

import { SOME_PAGE_TEXTS, SOME_PAGE_FIELDS } from "@/contants/some-page";

import AppButton from "@/components/ui/buttons/appButton.vue";
import HeaderIconsDark from "@/components/pages/home/images/bang-dark.png";
import HeaderIconsLight from "@/components/pages/home/images/bang-light.png";

defineProps({
  theme: {
    type: String,
    required: true,
  }
});

const isFormProcessing = ref(false);

function changeFieldValue (field, e) {
  field.value = e.target.value;
}

function confirmForm (e) {
  e.preventDefault();
  isFormProcessing.value = true;
  setTimeout(() => { isFormProcessing.value = false; }, 1000);
}
</script>

<style lang="scss" scoped>
@use './styles/some-page';
</style>
