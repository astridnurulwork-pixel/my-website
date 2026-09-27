"use client";
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (user) => {
    const isExist = favorites.find((fav) => fav.id === user.id);
    if (isExist) {
      setFavorites(favorites.filter((fav) => fav.id !== user.id));
    } else {
      setFavorites([...favorites, user]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);