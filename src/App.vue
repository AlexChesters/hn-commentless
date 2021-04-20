<style>
body {
  background-color: #f7f7f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

a {
  color: inherit;
}

button {
  height: 35px;
  width: 90px;
  font-size: larger;
  border-radius: 10%;
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
