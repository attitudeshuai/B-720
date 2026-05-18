import { useState, useEffect } from 'react';

const STORAGE_KEY = 'minimalist-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}
