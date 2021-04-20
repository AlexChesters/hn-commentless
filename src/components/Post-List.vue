<template>
  <section>
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
  data: function () { return { posts: [], index: 0 } },
  mounted: async function () {
    this.posts = await hn.posts(this.index)
  },
  methods: {
    viewMore: async function () {
      this.index = this.index + 1
      this.posts = await hn.posts(this.index)
    }
  }
}
</script>
