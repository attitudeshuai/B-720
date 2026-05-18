import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 gap-8">
      <h1 className="text-4xl md:text-5xl font-light text-[var(--color-primary)] leading-tight">
        极简生活，<br />
        丰盈内心。
      </h1>
      <p className="text-lg text-[var(--color-secondary)] max-w-2xl font-light">
        发现低欲望生活的必备好物，学习断舍离的艺术。<br/>
        拥抱极简，在简单中寻找宁静。
      </p>
      
      <div className="flex gap-6 mt-8">
        <Link to="/good-things" className="bg-[var(--color-morandi-green)] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
          探索好物 <ArrowRight size={16} />
        </Link>
        <Link to="/declutter" className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all">
          开始断舍离
        </Link>
      </div>
    </div>
  );
};

export default Home;
