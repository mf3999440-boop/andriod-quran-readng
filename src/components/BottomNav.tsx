"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, Bookmark, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: BookOpen, label: 'Read', path: '/' },
    { icon: GraduationCap, label: 'Learn', path: '/learn' },
    { icon: Bookmark, label: 'Saved', path: '/bookmarks' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-100 px-6 py-3 flex justify-between items-center z-50 md:max-w-md md:mx-auto md:rounded-t-2xl shadow-lg">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors duration-200",
              isActive ? "text-emerald-600" : "text-gray-400 hover:text-emerald-400"
            )}
          >
            <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;