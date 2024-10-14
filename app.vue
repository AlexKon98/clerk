<template>
  <div class="app">
    <TheHeader />

    <main class="main">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
}

.main {
  flex: 1;
}
</style>
