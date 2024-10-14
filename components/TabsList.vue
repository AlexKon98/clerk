<template>
  <ul class="tabs">
    <li v-for="tab in tabs" :key="tab.id" :class="{active: tab.isActive}" @click="changeIsActive(tab.id)">
      {{ tab.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Tab } from '~/types';

defineProps<{
  tabs: Tab[]
}>();

const emits =defineEmits<{
  changeActive: [id: number]
}>();

const changeIsActive = (id: number) => {
  emits('changeActive', id);
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  gap: 0 24px;
  align-items: center;

  li {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid transparent;
    color: $darkGrey;

    @media (max-width: 1055px) {
      font-weight: 500;
      padding-bottom: 14px;
    }

    &.active {
      color: $lightBlue;
      border-color: $lightBlue;
    }
  }
}
</style>