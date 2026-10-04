"use client";
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (user) => {
        if (favorites.some((fav) => fav.id === user.id)) {
            setFavorites(favorites.filter((fav) => fav.id !== user.id));
        } else {
            setFavorites([...favorites, user]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}