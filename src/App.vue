<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <PostList />
  </div>
</template>

<script>
import PostList from './components/Post-List'

export default {
  name: 'App',
  components: { PostList }
}
</script>
