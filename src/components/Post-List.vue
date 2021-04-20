<template>
  <section>
    <h1 v-for="post in posts" :key="post">
      {{ post }}
    </h1>
  </section>
</template>

<script>
export default {
  name: 'PostList',
  data: function () { return { posts: [] } },
  mounted: async function () {
    const res = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const data = await res.json()

    this.posts = data
  }
}
</script>
