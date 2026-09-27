"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-gray-400 font-semibold tracking-wider">Directory</p>
        <h1 className="mb-8 text-4xl font-bold tracking-tight">User Directory</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
}