export async function getData(targetURL) {
  const res = await fetch(new URL(targetURL))
  const posts = await res.json()
  return posts
}
