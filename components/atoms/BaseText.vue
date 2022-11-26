<template>
  <p><slot /></p>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseText extends Vue {}
</script>

<style lang="scss" scoped>
p {
  @extend %text-style-body;

  white-space: pre-line;
}
.callout {
  @extend %text-style-callout;
}
.subhead {
  @extend %text-style-subhead;
}
.footnote {
  @extend %text-style-footnote;
}
.caption1 {
  @extend %text-style-caption1;
}
.caption2 {
  @extend %text-style-caption2;
}
.logo {
  @extend %text-style-logo;
}
.little-detail {
  @extend %text-style-little-detail;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.grey {
  color: $text-grey;
}
.white {
  color: $white;
}
.red {
  color: $error;
}
.code {
  font-family: monospace;
  white-space: inherit;
  overflow-wrap: break-word;
}
</style>
