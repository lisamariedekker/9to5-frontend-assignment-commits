<template>
  <div>
    <img :src="image" :width="width" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseImage extends Vue {
  @Prop({ required: true }) readonly image!: string
  @Prop({ required: false, default: '100%' }) readonly width!: number
}
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
}
</style>
