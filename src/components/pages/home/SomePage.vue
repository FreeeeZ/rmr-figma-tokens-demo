<template>
  <div class="some-page" :class="`some-page__${theme}`">
    <div class="container">
      <div class="some-page__wrapper">
        <h1 class="some-page__title">{{ SOME_PAGE_TEXTS.title }}</h1>
        <h3 class="some-page__subtitle">{{ SOME_PAGE_TEXTS.subTitle }}</h3>
        <div class="some-page__picture">
          <picture>
            <source type="image/png" srcset="@/assets/images/some-page/image.png">
            <img src="@/assets/images/some-page/image.png" alt="Some pic" width="263">
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
          <AppButton v-if="formProcessingValue" button-type="primary" disabled @click="confirmForm">
            {{ SOME_PAGE_TEXTS.submitButtonProcessing }}
          </AppButton>
          <AppButton v-else button-type="primary" @click="confirmForm">
            {{ SOME_PAGE_TEXTS.submitButtonText }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { SOME_PAGE_TEXTS, SOME_PAGE_FIELDS } from "@/contants/some-page";

import AppButton from "@/components/ui/buttons/appButton.vue";

defineProps({
  theme: {
    type: String,
    default: 'light'
  }
});

const formProcessingValue = ref(false);

function changeFieldValue (field, e) {
  field.value = e.target.value;
}

function confirmForm (e) {
  e.preventDefault();
  formProcessingValue.value = true;
  setTimeout(() => { formProcessingValue.value = false; }, 1000);
}
</script>

<style lang="scss" scoped>
@use './styles/some-page';
</style>
