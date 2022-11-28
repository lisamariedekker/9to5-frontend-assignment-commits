<template>
  <div>
    <Loading v-if="$apollo.queries.post.loading" />
    <div v-else-if="post">
      <BaseImage :image="post.featuredMedia" />
      <div class="mt-1-5 mr-1 ml-1">
        <div class="headline">{{ post.title }}</div>
        <div class="subtitle mt-0-25">{{ author }} - {{ date() }}</div>
        <div class="content mt-1">{{ post.content }}</div>
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

  get author(): string | null {
    if (!this.post?.author && !this.post?.author?.name) {
      return null
    }
    return this.post.author.name || ''
  }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/globals.scss';
</style>
