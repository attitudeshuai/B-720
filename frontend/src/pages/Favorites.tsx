import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign, ArrowRight } from 'lucide-react';
import { items } from '../data/items';
import { useFavorites } from '../contexts/FavoritesContext';

const Favorites: React.FC = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteItems = items.filter(item => favorites.includes(item.id));

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-[var(--color-primary)]">我的收藏</h1>
        <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
          你珍视的好物都在这里。每一件收藏，都是对品质生活的选择。
        </p>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="text-center py-20 space-y-6 animate-fade-in">
          <Heart size={48} className="mx-auto text-[var(--color-morandi-grey)]" />
          <p className="text-[var(--color-secondary)]">还没有收藏任何好物</p>
          <Link
            to="/good-things"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:opacity-80 transition-opacity"
          >
            去好物清单看看 <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-sm backdrop-blur-sm text-[var(--color-primary)]">
                  {item.category}
                </span>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 left-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
                >
                  <Heart
                    size={18}
                    className={isFavorite(item.id)
                      ? 'fill-[var(--color-morandi-pink)] text-[var(--color-morandi-pink)]'
                      : 'text-[var(--color-secondary)]'
                    }
                  />
                </button>
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
