import React from 'react';
import { Terminal, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-emerald-400" />
            <span className="text-lg font-bold">The Kilbot Factory</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/kilbot" className="hover:text-emerald-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/kilbot" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} The Kilbot Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
