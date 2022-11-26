<template>
  <div>
    <NavBar :url="url" :back="true" />
    <Loading v-if="$apollo.queries.post.loading" />
    <div v-else-if="post" class="post-details" @click="$emit('open')">
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
import PostQuery from '@/graphql/queries/PostQuery.gql'
import { Post, PostInput } from '~/types/graphql/types'

@Component({
  apollo: {
    post: {
      query: PostQuery,
      variables() {
        const post: PostInput = {
          id: this.$route.params.post,
          url: this.url,
        }
        const variables = { post }
        return variables
      },
    },
  },
})
export default class PostView extends Vue {
  @Prop({ required: true }) readonly url!: string
  post: Post | null = null

  date(): string {
    if (!this.post?.date) return ''
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
  letter-spacing: -0.2px;
  color: #8e8e93;
}
</style>
