"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PageProps {
  errorCode?: number;
  data?: any;
}

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get('https://example.com/invalid-endpoint')
      .then((res) => {
        setData(res.data);
      })
      .catch((error: any) => {
        if (error.response) {
          if (error.response.status === 404) {
            setErrorCode(404);
          } else {
            setErrorCode(500);
          }
        } else {
          setErrorCode(500);
        }
      });
  }, []);

  if (errorCode) {
    return (
      <div>
        {errorCode === 404 ? (
          <h1>404 - Trang không tồn tại</h1>
        ) : (
          <h1>500 - Lỗi máy chủ</h1>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Data from API</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
