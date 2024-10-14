<template>
  <ul class="breadcrumbs">
    <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
      <NuxtLink v-if="breadcrumb.link" :to="breadcrumb.link">{{ breadcrumb.name }}</NuxtLink>
      <span v-else>{{ breadcrumb.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Breadcrumb } from '~/types';

defineProps<{
  breadcrumbs: Breadcrumb[]
}>();
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 1055px) {
    margin-bottom: 8px;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;

    a, span {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      border-bottom: 1px solid $lightBlue2;
      color: $grey;
    }

    &::after {
      display: block;
      padding: 0 8px;
      margin-top: -3px;
      margin-bottom: 3px;
      content: url('@/assets/icons/arrow-breadcrumbs.svg');
    }

    &:last-child::after {
      content: none;
    }
  }
}
</style>