<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/icons/header-logo.svg" alt="">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 48px;

  .container {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1055px) {
    padding-top: 24px;
  }
}
</style>