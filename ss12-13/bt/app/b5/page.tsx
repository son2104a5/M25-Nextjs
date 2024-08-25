import React from 'react';

export default async function Page() {
  let posts = null;
  let error = null;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    posts = await res.json();
    posts = posts.map((post: any) => ({
      id: post.id,
      title: post.title.length > 100 ? post.title.substring(0, 100) + '...' : post.title,
    }));
  } catch (err: any) {
    error = err.message;
  }

  if (error) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
