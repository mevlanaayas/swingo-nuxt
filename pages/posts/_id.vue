<template>
  <div class="container">
    <article>
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
    </article>
    <aside>
      <p>Related Posts</p>
      <ul>
        <li v-for="related in relatedPosts" :key="related.id">
          <nuxt-link :to="{ name: 'posts-id', params: { id: related.id } }">
            {{ related.title }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find((post) => post.id === this.id)
    },
    relatedPosts() {
      return this.$store.state.posts.all.filter((post) => post.id !== this.id)
    }
  },
  head() {
    return {
      title: this.post.title + ' 📬',
      meta: [
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.content },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
