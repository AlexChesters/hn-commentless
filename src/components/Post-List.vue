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
  },
  render: function (h) { // eslint-disable-line no-unused-vars
    if (this.loading) {
      return (
        <section>
          <h1>Loading...</h1>
        </section>
      )
    }

    return (
      <section>
        {
          this.posts[this.index].map((post, index) => (
            <h1 key={index}><a href={post.url} target='_blank' rel='noreferrer'>{post.title}</a></h1>
          ))
        }
        <button vOn:click={this.viewMore}>More</button>
      </section>
    )
  }
}
</script>
