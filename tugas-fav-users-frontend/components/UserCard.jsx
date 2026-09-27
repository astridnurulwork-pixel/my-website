"use client";
import { useFavorite } from "@/context/FavoriteContext";

export default function UserCard({ user }) {
  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.some((fav) => fav.id === user.id);
  const initials = user.name.split(" ").map((n) => n[0]).join("").substring(0, 2);

  return (
    <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-5 shadow-sm text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-sm font-bold text-gray-200">
          {initials}
        </div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400">{user.email}</p>
        <p className="mt-1 text-sm text-gray-500">{user.company?.name}</p>
      </div>
      <div className="mt-6 flex gap-2">
        <button className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition">
          View Profile
        </button>
        <button 
          onClick={() => toggleFavorite(user)}
          className="flex-1 rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          {isFavorite ? "♥ Favourite" : "♡ Add Favourite"}
        </button>
      </div>
    </div>
  );
}