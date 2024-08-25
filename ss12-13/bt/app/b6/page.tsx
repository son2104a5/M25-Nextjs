"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Phân Trang với CSR</h1>
      <ul>
        {currentPosts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Quay lại
        </button>
        <span>Trang {currentPage} / {Math.ceil(posts.length / postsPerPage)}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>
          Tiếp
        </button>
      </div>
    </div>
  );
};

export default Page;
