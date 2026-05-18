import React from 'react';
import { Link } from 'react-router-dom';
import { items } from '../data/items';
import { DollarSign, Heart, ArrowRight } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const favoriteItems = items.filter(item => favorites.includes(item.id));

  if (favoriteItems.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20 gap-8">
        <Heart size={64} className="text-[var(--color-morandi-grey)]" />
        <div className="space-y-4">
          <h1 className="text-3xl font-light text-[var(--color-primary)]">暂无收藏</h1>
          <p className="text-[var(--color-secondary)] max-w-md">
            浏览好物清单，点击❤️收藏你喜欢的物品。
            <br />收藏的物品会保存在这里，方便随时查看。
          </p>
        </div>
        <Link to="/good-things" className="bg-[var(--color-morandi-green)] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
          去发现好物 <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-[var(--color-primary)]">我的收藏</h1>
        <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
          这里是你精心挑选的好物收藏。共 {favoriteItems.length} 件。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-sm backdrop-blur-sm text-[var(--color-primary)]">
                {item.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(item.id);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all duration-300"
              >
                <Heart 
                  size={18} 
                  className={isFavorite(item.id) ? 'fill-[var(--color-morandi-pink)] text-[var(--color-morandi-pink)]' : 'text-gray-400'}
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
    </div>
  );
};

export default Favorites;
