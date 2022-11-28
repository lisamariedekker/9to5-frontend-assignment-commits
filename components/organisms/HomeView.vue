<template>
  <div>
    <Loading v-if="$apollo.queries.posts.loading" />
    <div v-else-if="posts">
      <div class="first-post mb-1" @click="openPost(firstPost)">
        <BaseImage
          v-if="firstPost"
          :image="firstPost.featuredMedia"
          :title="firstPost.title"
        />
      </div>
      <BaseDivider />
      <PostListItem
        v-for="post in otherPosts"
        :key="post.id"
        :post="post"
        @open="openPost(post)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PostsQuery from '@/graphql/queries/PostsQuery.gql'
import { baseUrl } from '../../settings'
import { ListPostsInput, Post } from '~/types/graphql/types'

@Component({
  apollo: {
    posts: {
      query: PostsQuery,
      variables() {
        const posts: ListPostsInput = {
          url: baseUrl,
        }
        const variables = { posts }
        return variables
      },
    },
  },
})
export default class HomeView extends Vue {
  posts: Array<Post> | null = null

  openPost(post: Post | null) {
    if (post !== null) {
      this.$router.push({ name: 'post___nl', params: { post: post.id } })
    }
  }

  get firstPost(): Post | null {
    if (this.posts == null || this.posts.length === 0) {
      return null
    }
    return this.posts[0]
  }

  get otherPosts(): Array<Post> | null {
    if (this.posts == null || this.posts.length === 0) {
      return null
    }
    return this.posts.slice(1)
  }
}
</script>

<style lang="scss" scoped>
.first-post {
  position: relative;
  cursor: pointer;
}
</style>
