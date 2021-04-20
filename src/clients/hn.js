import chunk from '../utils/chunk'

export default {
  posts: async () => {
    const res = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const data = await res.json()

    const posts = chunk(data, 30)

    return posts
  }
}
