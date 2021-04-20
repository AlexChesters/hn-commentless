import chunk from '../utils/chunk'

let data

export default {
  posts: async (index) => {
    if (!data) {
      const res = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      data = await res.json()
    }

    const posts = chunk(data, 30)

    const promises = posts[index]
      .map(async (post) => {
        const postRes = await window.fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
        return postRes.json()
      })

    posts[index] = await Promise.all(promises)
    posts[index] = posts[index].filter(({ url }) => url)

    return posts
  }
}
