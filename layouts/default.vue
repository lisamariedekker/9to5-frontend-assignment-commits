<template>
  <div class="default">
    <NavBar url="https://district8.net" />
    <BaseDivider />
    <Nuxt class="layout" />
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: $font-default;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.default {
  background-color: white;
  height: 100%;
}
</style>
