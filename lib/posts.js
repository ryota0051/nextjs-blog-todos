import { getData } from "./fetchUtil"

export async function getAllPostsData() {
  const posts = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  )
  const filteredPosts = posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
  return filteredPosts
}

export async function getAllPostIds() {
  const posts = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  )
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export async function getPostData(id) {
  const post = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`
  )
  return post
}
