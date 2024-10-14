<template>
  <div class="subscribe">
    <div class="subscribe__heading">{{ subItem.heading }}</div>

    <h4 class="subscribe__title">{{ subItem.title }}</h4>

    <p class="subscribe__text">{{ subItem.text }}</p>

    <ul class="subscribe__list">
      <li v-for="item in subItem.list">
        <img src="@/assets/icons/checkbox.svg" alt="">
        <span>{{ item }}</span>
      </li>
    </ul>

    <picture class="subscribe__picture">
      <source :srcset="subItem.image.mobile" media="(max-width: 1055px)" />
      <img class="subscribe__image" :src="subItem.image.desktop" :alt="subItem.title" />
    </picture>

    <VCheckbox :state="subItem.checkbox.isActive" :title="subItem.checkbox.title" :id="subItem.id" @change="change" />
  </div>
</template>

<script lang="ts" setup>
import type { SubscribeItem } from '~/types';
import VCheckbox from './VCheckbox.vue';

defineProps<{
  subItem: SubscribeItem
}>();

const emits = defineEmits<{
  change: [id: number | string]
}>();

const change = (id: number | string) => {
  emits('change', id);
}
</script>

<style lang="scss" scoped>
.subscribe {
  position: relative;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  &__heading {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: $grey;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 8px;
  }

  &__text {
    max-width: 324px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 16px;
    color: $darkGrey;
  }

  &__image {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 80px;
    height: 80px;
    border-radius: 8px;

    @media (max-width: 1055px) {
      width: 40px;
      height: 40px;
    }
  }
}
</style>