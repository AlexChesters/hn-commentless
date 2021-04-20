<template>
  <section>
    <h1 v-for="post in posts[index]" :key="post.id">
      {{ post.title }}
    </h1>
  </section>
</template>

<script>
import hn from '../clients/hn'

export default {
  name: 'PostList',
  data: function () { return { posts: [], index: 0 } },
  mounted: async function () {
    this.posts = await hn.posts(this.index)

    setInterval(async () => {
      this.index = this.index + 1
      this.posts = await hn.posts(this.index)
    }, 5000)
  }
}
</script>
