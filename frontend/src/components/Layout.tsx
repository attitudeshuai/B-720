import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, Trash2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-[var(--color-healing-bg)]">
      <header className="py-8 px-6 md:px-12 flex justify-between items-center max-w-5xl mx-auto w-full">
        <Link to="/" className="text-2xl font-light tracking-widest text-[var(--color-primary)] hover:opacity-80 transition-opacity">
          极简生活
        </Link>
        <nav className="flex gap-8">
          <NavLink to="/" icon={<Home size={18} />} label="首页" active={isActive('/')} />
          <NavLink to="/good-things" icon={<Sparkles size={18} />} label="好物清单" active={isActive('/good-things')} />
          <NavLink to="/declutter" icon={<Trash2 size={18} />} label="断舍离" active={isActive('/declutter')} />
        </nav>
      </header>

      <main className="flex-grow px-6 md:px-12 py-8 max-w-5xl mx-auto w-full animate-fade-in">
        {children}
      </main>

      <footer className="py-8 text-center text-[var(--color-morandi-grey)] text-sm">
        <p>© 2024 极简生活. 少即是多.</p>
      </footer>
    </div>
  );
};

const NavLink = ({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors duration-300
      ${active ? 'text-[var(--color-primary)] font-medium border-b border-[var(--color-primary)] pb-0.5' : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'}
    `}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </Link>
);

export default Layout;
