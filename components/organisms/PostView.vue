<template>
  <div>
    <div class="post-details" @click="$emit('open')">
      <img :src="post.featuredMedia" class="detail-image" />
      <div class="detail-post">
        <div class="detail-title">{{ post.title }}</div>
        <div class="detail-date">{{ date() }}</div>
        <div class="detail-content mt-1">{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Post } from '~/types/graphql/types'

@Component
export default class PostView extends Vue {
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
.detail-image {
  width: 100%;
}
.detail-post {
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 8px;
}
.detail-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */

  letter-spacing: -0.3px;

  color: #000000;
}
.detail-content {
  overflow: hidden;
  width: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;

  letter-spacing: -0.2px;

  color: #000000;
}
.detail-date {
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
