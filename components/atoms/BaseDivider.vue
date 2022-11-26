<template>
  <div class="divider"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BaseDivider extends Vue {}
</script>

<style lang="scss" scoped>
.divider {
  background-color: #f1f1f1;
  height: 1px;
  width: 100%;
}
</style>
