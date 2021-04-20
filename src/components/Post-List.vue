<template>
  <section v-if="loading">
    <h1>Loading...</h1>
  </section>
  <section v-else>
    <h1 v-for="post in posts[index]" :key="post.id">
      <a :href="post.url" target="_blank" rel="noreferrer">{{ post.title }}</a>
    </h1>
    <button v-on:click="viewMore">More</button>
  </section>
</template>

<script>
import hn from '../clients/hn'

export default {
  name: 'PostList',
  data: function () {
    return {
      loading: true,
      posts: [],
      index: 0
    }
  },
  mounted: async function () {
    this.posts = await hn.posts(this.index)
    this.loading = false
  },
  methods: {
    viewMore: async function () {
      this.loading = true
      this.index = this.index + 1
      this.posts = await hn.posts(this.index)
      this.loading = false
    }
  }
}
</script>
