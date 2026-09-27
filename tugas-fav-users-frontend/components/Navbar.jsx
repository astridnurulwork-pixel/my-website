"use client";
import Link from "next/link";
import { useFavorite } from "@/context/FavoriteContext";

export default function Navbar() {
  const { favorites } = useFavorite();

  return (
    <nav className="flex items-center justify-between p-4 bg-[#0a0a0a] text-white border-b border-gray-800">
      <div className="font-bold">MyWebsite</div>
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/services" className="hover:text-gray-300">Services</Link>
        <Link href="/profile" className="hover:text-gray-300">Profile</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        <Link href="/favorites" className="rounded-full border border-gray-700 px-3 py-1 hover:bg-gray-800">
          Favorite ({favorites.length})
        </Link>
      </div>
    </nav>
  );
}