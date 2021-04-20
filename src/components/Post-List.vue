<template>
  <section>
    <h1 v-for="post in posts[index]" :key="post">
      {{ post }}
    </h1>
  </section>
</template>

<script>
import chunk from '../utils/chunk'

export default {
  name: 'PostList',
  data: function () { return { posts: [], index: 0 } },
  mounted: async function () {
    const res = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const data = await res.json()

    this.posts = chunk(data, 30)
  }
}
</script>
