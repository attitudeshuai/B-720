import React, { useState } from 'react';
import { items, categories, type Category } from '../data/items';
import { DollarSign, Heart } from 'lucide-react';

const GoodThings: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | '全部'>('全部');

  const filteredItems = activeCategory === '全部' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-[var(--color-primary)]">精选极简好物</h1>
        <p className="text-[var(--color-secondary)] max-w-2xl mx-auto">
          这里收集了能带来价值、喜悦和简单的物品。
          每一件好物都经过精挑细选，兼顾耐用性、实用性与美学价值。
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setActiveCategory('全部')}
          className={`px-6 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer
            ${activeCategory === '全部' 
              ? 'bg-[var(--color-primary)] text-white shadow-md' 
              : 'bg-white text-[var(--color-secondary)] hover:bg-gray-100'}
          `}
        >
          全部
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer
              ${activeCategory === category 
                ? 'bg-[var(--color-primary)] text-white shadow-md' 
                : 'bg-white text-[var(--color-secondary)] hover:bg-gray-100'}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
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

export default GoodThings;
