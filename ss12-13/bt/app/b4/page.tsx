"use client"
export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const trimmedPosts = posts.map((post: any) => ({
    id: post.id,
    title: post.title.length > 100 ? post.title.substring(0, 100) + '...' : post.title,
  }));
  let data: any;
  const refreshPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const newPosts = await res.json();

    const trimmedNewPosts = newPosts.map((post: any) => ({
      id: post.id,
      title: post.title.length > 100 ? post.title.substring(0, 100) + '...' : post.title,
    }));

    data = trimmedNewPosts;
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <button onClick={refreshPosts}>Refresh</button>
      <ul>
        {data && data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
