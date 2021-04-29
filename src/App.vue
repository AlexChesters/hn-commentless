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

button:hover {
  cursor: pointer;
}
</style>

<script>
import PostList from './components/Post-List'

export default {
  name: 'App',
  components: { PostList },
  render: function (h) { // eslint-disable-line no-unused-vars
    return (
      <div id="app">
        <PostList />
      </div>
    )
  }
}
</script>
