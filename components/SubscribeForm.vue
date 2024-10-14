<template>
  <form @submit.prevent class="subscribe">
    <label for="email" class="subscribe__label">
      <input type="email" name="email" id="email" placeholder="Электронная почта" v-model="formData.email">
      <button class="subscribe__button">
        <span>Подписаться</span>
        <img src="@/assets/icons/arrow-button.svg" alt="">
      </button>
    </label>

    <VCheckbox :id="'sub'" :is-small="true" :state="formData.isChecked" :title="'Подписаться на все рассылки'" @change="changeState" />
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import VCheckbox from './VCheckbox.vue';

const formData = reactive({
  email: '',
  isChecked: false
});

const emits = defineEmits<{
  checkall: [isChecked: boolean]
}>();

const changeState = () => {
  formData.isChecked = !formData.isChecked;
  emits('checkall', formData.isChecked);
}
</script>

<style lang="scss" scoped>
.subscribe {
  width: 100%;
  padding: 0 24px;
  margin-bottom: 32px;

  @media (max-width: 1055px) {
    margin-bottom: 24px;
    padding: 0;
  }

  &__label {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 16px 100px 100px 16px;
    padding: 16px 170px 16px 16px;
    margin-bottom: 16px;
    background-color: $white;

    @media (max-width: 1055px) {
      border-radius: 4px 100px 100px 4px;
    }

    input {
      flex: 1;
      border: none;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: $black;

      &::placeholder {
        color: $darkGrey;
      }
    }

    button {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 16px 32px;
      border: none;
      border-radius: 100px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: $white;
      background-color: $blue;

      @media (max-width: 1055px) {
        border-radius: 50%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
      }

      img {
        display: none;

        @media (max-width: 1055px) {
          display: block;
        }
      }

      span {
        @media (max-width:  1055px) {
          display: none;
        }
      }
    }
  }
}
</style>