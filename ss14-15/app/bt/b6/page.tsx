"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
}

export default function Page() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getData();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <strong>Thông tin users:</strong>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Tên: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Địa chỉ: {user.address.street}, {user.address.city}</li>
        </ul>
      ))}
    </div>
  );
}

