<template>
  <div>
    <img :src="image" :width="width" :class="{ radius: applyRadius }" />
    <div v-if="title" class="title headline">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseImage extends Vue {
  @Prop({ required: true }) readonly image!: string
  @Prop({ required: false, default: '100%' }) readonly width!: number
  @Prop({ required: false }) readonly title!: string
  @Prop({ required: false }) readonly applyRadius!: string
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/globals.scss';
img {
  object-fit: contain;
}
.title {
  position: absolute;
  left: 16px;
  bottom: 8px;
  right: 16px;
  color: #ffffff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.32);
  word-wrap: break-word;
}
.radius {
  border-radius: 4px;
}
</style>
