import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const posts = [
  { id: 1, title: "shbaujklcjh", thumbnailURL: 'https://i.pinimg.com/736x/df/b3/3a/dfb33a36630789f9e5f536f2cae2a3b1.jpg' },
  { id: 2, title: "asdasdasdasd", thumbnailURL: 'https://i.pinimg.com/564x/5c/39/1b/5c391b3d0c6426c256d04bd6caf7ee7b.jpg' },
  { id: 3, title: "egrdsve", thumbnailURL: 'https://i.pinimg.com/564x/e3/90/5a/e3905ad439cc65f167208b4deec80432.jpg' },
  { id: 4, title: "sdvxgverf", thumbnailURL: 'https://i.pinimg.com/564x/05/f3/93/05f393c8ae2643e31d1cc3b6856f90e8.jpg' },
  { id: 5, title: "vnbhnsdmjbkv", thumbnailURL: 'https://i.pinimg.com/564x/3d/fc/25/3dfc2511e2dbb9f1a4cf1e3c6eb616fd.jpg' },
  { id: 6, title: "joiuhkjlsajcn", thumbnailURL: 'https://i.pinimg.com/564x/0f/6a/ae/0f6aae60b875ef11375b8144258ace25.jpg' },
];

export default function Page() {
  return (
    <div className="text-center">
      <Head>
        <title>Danh sách bài viết</title>
        <meta name="description" content="This page contains a list of posts." />
        <meta name="keywords" content="posts, blog, danh sách bài viết" />
      </Head>
      <div className="font-medium">Danh sách bài viết</div>
      <div className="flex items-center justify-center gap-5">
        {posts.map((post, index) => (
          <div key={index} className="border-[1px]">
            <Image
              src={post.thumbnailURL}
              alt='150 x 150'
              width={250}
              height={250}
            >
            </Image>
            <h3 className="p-2 text-left font-semibold">{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
