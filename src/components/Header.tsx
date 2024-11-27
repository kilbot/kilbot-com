import React from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-slate-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold">The Kilbot Factory</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block hover:text-emerald-400 transition-colors">Services</a>
            <a href="#portfolio" className="block hover:text-emerald-400 transition-colors">Portfolio</a>
            <a href="#contact" className="block hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
