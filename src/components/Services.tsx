import React from 'react';
import { ShoppingCart, Code, Settings, Headphones } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-emerald-400" />,
      title: 'WooCommerce POS',
      description: 'A powerful point of sale solution that seamlessly integrates with your WooCommerce store.'
    },
    {
      icon: <Code className="h-8 w-8 text-emerald-400" />,
      title: 'Custom Development',
      description: 'Tailored programming solutions to meet your specific business needs and requirements.'
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-400" />,
      title: 'Technical Integration',
      description: 'Seamless integration of various systems and APIs to enhance your business workflow.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-emerald-400" />,
      title: 'Technical Support',
      description: 'Expert support for WooCommerce POS and custom development solutions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}