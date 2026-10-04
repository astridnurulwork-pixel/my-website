"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";

export default function UserDirectoryPage() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-28 text-white min-h-screen">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary">Directory</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">User Directory</h1>
        <p className="mt-2 text-muted-foreground">Browse and search through registered users.</p>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md rounded-lg border border-white/10 bg-foreground/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => {
          const isFav = favorites.some((fav) => fav.id === user.id);
          const initials = user.name.split(" ").map((n) => n[0]).join("").substring(0, 2);

          return (
            <Card key={user.id} className="border border-white/10 bg-foreground/[0.03] p-4 flex flex-col justify-between">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-bold text-sm text-white">
                    {initials}
                  </div>
                  <h2 className="font-semibold text-white">{user.name}</h2>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{user.email}</p>
                <p className="text-xs text-muted-foreground mb-4">{user.company?.catchPhrase || "Romaguera-Crona"}</p>
              </CardContent>

              <div className="flex items-center gap-2 mt-2 pt-3 border-t border-white/10">
                <Link href={`/users/${user.id}`} className="flex-1">
                  <Button variant="outline" className="w-full rounded-full text-xs h-9 bg-transparent border-white/20 hover:bg-white/10 text-white">
                    View Profile
                  </Button>
                </Link>
                <Button
                  onClick={() => toggleFavorite(user)}
                  variant="outline"
                  className="flex-1 rounded-full text-xs h-9 bg-transparent border-white/25 hover:bg-white/10 text-white"
                >
                  {isFav ? "♥ Remove from Favorite" : "♡ Add Favourite"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}