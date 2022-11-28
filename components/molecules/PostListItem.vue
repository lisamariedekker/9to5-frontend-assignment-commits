<template>
  <div>
    <div class="list-post" @click="$emit('open')">
      <BaseImage
        :image="post.featuredMedia"
        :width="96"
        :apply-radius="true"
        class="mr-0-5 ml-0-5"
      />
      <div class="other-post-content">
        <div class="list-title">{{ post.title }}</div>
        <div class="list-date">{{ date() }}</div>
      </div>
    </div>
    <BaseDivider />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Post } from '~/types/graphql/types'

@Component
export default class PostListItem extends Vue {
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
.list-post {
  display: flex;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
}
.list-title {
  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
.list-date {
  font-family: Inter;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.2px;
  color: $subtitle-grey;
}
</style>
