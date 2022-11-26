<template>
  <div ref="appExample" class="app-example">
    <NavBar :url="url" />
    <Loading v-if="$apollo.queries.posts.loading" />
    <div v-else-if="posts" class="posts">
      <BaseDivider class="mt-0-5" />
      <FirstPost
        v-if="firstPost"
        :post="firstPost"
        class="mt-1"
        @open="openPost(firstPost)"
      />
      <BaseDivider class="mt-1" />
      <OtherPost
        v-for="post in otherPosts"
        :key="post.id"
        :post="post"
        @open="openPost(post)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import PostsQuery from '@/graphql/queries/PostsQuery.gql'
import { ListPostsInput, Post } from '~/types/graphql/types'

@Component({
  apollo: {
    posts: {
      query: PostsQuery,
      variables() {
        const posts: ListPostsInput = {
          url: this.url,
        }
        const variables = { posts }
        return variables
      },
    },
  },
})
export default class AppExample extends Vue {
  @Prop({ required: true }) readonly url!: string
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
    // TODO slice first item from array, since this is already shown in FirstPost
    return this.posts
  }
}
</script>

<style lang="scss" scoped>
.app-example {
  background-color: white;
  overflow-y: scroll;
  height: 100%;
}
.posts {
  height: 100%;
  width: 100%;
}
</style>
