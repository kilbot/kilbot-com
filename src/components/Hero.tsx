import React from 'react';
import { ShoppingCart, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforming WooCommerce with Advanced POS Solutions
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Expert WooCommerce POS development and custom programming solutions to streamline your business operations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wcpos.com/"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Get WooCommerce POS
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
