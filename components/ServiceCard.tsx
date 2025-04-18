import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  children: React.ReactNode;
  icon?: IconType;
}

export default function ServiceCard({ title, children, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        {Icon && <Icon className="text-2xl text-primary" />}
        <h2 className="text-2xl font-semibold text-light">{title}</h2>
      </div>
      <div className="text-gray-300 flex-1">
        {children}
      </div>
    </div>
  );
}