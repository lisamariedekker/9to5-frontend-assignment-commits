<template>
  <div>
    <div class="other-post" @click="$emit('open')">
      <img :src="post.featuredMedia" class="other-image" />
      <div class="other-post-content">
        <div class="other-title">{{ post.title }}</div>
        <div class="other-date">{{ date() }}</div>
      </div>
    </div>
    <BaseDivider />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Post } from '~/types/graphql/types'

@Component
export default class OtherPost extends Vue {
  @Prop({ required: true }) readonly post!: Post

  date(): string {
    if (!this.post.date) return ''
    const date = new Date(this.post.date)

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return date.toLocaleDateString(this.$i18n.locale, options)
  }
}
</script>
<style lang="scss" scoped>
.other-post {
  display: flex;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
}
.other-image {
  margin-left: 8px;
  margin-right: 8px;
  width: 96px;
  border-radius: 4px;
  object-fit: contain;
}
.other-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;

  letter-spacing: -0.2px;

  color: #000000;
}
.other-date {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height, or 140% */

  letter-spacing: -0.2px;

  color: #8e8e93;
}
</style>
