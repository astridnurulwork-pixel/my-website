"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <section className="mx-auto max-w-6xl px-6 py-28 text-white min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">My Favorite Users</h1>
            </div>

            {favorites.length === 0 ? (
                <p className="text-muted-foreground">Belum ada user favorite.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((user) => {
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
            )}
        </section>
    );
}