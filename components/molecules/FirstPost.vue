<template>
  <div class="first-post" @click="$emit('open')">
    <img :src="post.featuredMedia" class="first-image" />
    <div class="first-title">{{ post.title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Post } from '~/types/graphql/types'

@Component
export default class FirstPost extends Vue {
  @Prop({ required: true }) readonly post!: Post
}
</script>
<style lang="scss" scoped>
.first-image {
  margin-left: 8px;
  margin-right: 8px;
  width: calc(100% - 16px);
  border-radius: 6px;
  object-fit: contain;
}
.first-post {
  position: relative;
  cursor: pointer;
}
.first-title {
  position: absolute;
  left: 16px;
  bottom: 8px;
  right: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */

  letter-spacing: -0.3px;

  color: #ffffff;

  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.32);
}
</style>
