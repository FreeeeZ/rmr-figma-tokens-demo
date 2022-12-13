<template>
  <div class="some-page" :class="`some-page__${theme}`">
    <div class="container">
      <div class="some-page__wrapper">
        <h1 class="some-page__title">{{ HOME_PAGE_TEXTS.title }}</h1>
        <h3 class="some-page__subtitle">{{ HOME_PAGE_TEXTS.subTitle }}</h3>
        <div class="some-page__picture">
          <picture>
            <source type="image/png" srcset="@/assets/images/some-page/image.png">
            <img src="@/assets/images/some-page/image.png" alt="Some pic" width="263">
          </picture>
        </div>
        <div class="some-page__fields">
          <form>
            <fieldset>
              <div v-for="(field, index) in HOME_PAGE_FIELDS" :key="index" class="some-page__field">
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
<!--          <AppButton v-if="formProcessingValue" button-type="primary-with-icon" disabled @click="confirmForm">-->
<!--            <LoadingIcon />-->
<!--            Processing...-->
<!--          </AppButton>-->
          <AppButton button-type="primary">
            {{ HOME_PAGE_TEXTS.submitButtonText }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HOME_PAGE_TEXTS, HOME_PAGE_FIELDS } from "@/contants/home-page";

import AppButton from "@/components/ui/buttons/appButton.vue";

defineProps({
  theme: {
    type: String,
    default: 'light'
  }
});

function changeFieldValue (field, e) {
  field.value = e.target.value;
}
</script>

<style lang="scss" scoped>
@use './styles/some-page';
</style>
