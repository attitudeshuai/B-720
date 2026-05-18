import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { items } from '../data/items';
import { DollarSign, Heart } from 'lucide-react';

const STORAGE_KEY = 'minimalist-favorites';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id)
      ? favorites.filter((fid) => fid !== id)
      : [...favorites, id];
    setFavorites(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const favoriteItems = items.filter((item) => favorites.includes(item.id));

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-[var(--color-primary)]">我的收藏</h1>
        <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
          这里汇集了你心仪的好物。收藏它们，是为了在纷繁之中，找到真正属于你的那一份珍视。
        </p>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="text-center py-20 space-y-6">
          <Heart size={64} className="mx-auto text-[var(--color-morandi-pink)] opacity-40" />
          <p className="text-[var(--color-secondary)]">还没有收藏任何物品</p>
          <Link
            to="/good-things"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            去好物清单看看
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:scale-110 transition-transform"
                  aria-label="取消收藏"
                >
                  <Heart size={18} className="text-[var(--color-morandi-pink)] fill-[var(--color-morandi-pink)]" />
                </button>
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-sm backdrop-blur-sm text-[var(--color-primary)]">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-[var(--color-primary)]">{item.name}</h3>
                  <span className="text-sm font-semibold text-[var(--color-secondary)]">{item.price}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <Heart size={16} className="text-[var(--color-morandi-pink)] mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <DollarSign size={16} className="text-[var(--color-morandi-green)] mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-500 italic leading-relaxed">{item.analysis}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
