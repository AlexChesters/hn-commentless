<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
