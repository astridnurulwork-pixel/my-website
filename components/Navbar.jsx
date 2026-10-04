"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext"; // <-- Import context

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
  { href: "/messages", label: "Messages" },
  { href: "/users", label: "User Directory" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites(); // <-- Ambil data favorites

  return (
    <header className="absolute inset-x-0 top-4 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link href="/" className="shrink-0 text-sm font-bold tracking-tight">
          Svarati
        </Link>

        <div className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  isActive && "bg-foreground/10 text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Tampilkan jumlah favorit dinamis */}
          <Link href="/favorites" className="text-sm font-medium hover:text-primary">
            Favorite ({favorites.length})
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}