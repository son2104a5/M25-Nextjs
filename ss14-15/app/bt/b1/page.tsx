export default async function page() {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
  return (
    <div>
        <strong>List of post</strong>
        <div>
            {
                data.posts.map((post:any) => (
                    <div>{post.title}</div>
                ))
            }
        </div>
    </div>
  )
}
