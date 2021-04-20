import chunk from '../utils/chunk'

export default {
  posts: async () => {
    const res = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const data = await res.json()

    const posts = chunk(data, 30)

    // https://hacker-news.firebaseio.com/v0/item/26871558.json

    const promises = posts[0].map(async (post) => {
      console.log('p', post)
      const postRes = await window.fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
      return postRes.json()
    })

    posts[0] = await Promise.all(promises)

    return posts
  }
}
