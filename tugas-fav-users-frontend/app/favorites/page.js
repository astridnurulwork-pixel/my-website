"use client";
import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <div className="bg-[#0a0a0a] min-h-screen p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-gray-400 font-semibold tracking-wider">Favorite</p>
        <h1 className="mb-2 text-4xl font-bold tracking-tight">My Favorite Users</h1>
        <p className="mb-8 text-gray-400">Data ini diambil langsung dari FavoriteContext.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <p className="text-gray-500">Belum ada user yang difavoritkan.</p>
          )}
        </div>
      </div>
    </div>
  );
}