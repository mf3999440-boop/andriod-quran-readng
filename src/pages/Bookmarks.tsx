"use client";

import React from 'react';
import { surahs } from '../data/surahs';
import SurahCard from '../components/SurahCard';
import BottomNav from '../components/BottomNav';
import { useBookmarks } from '../hooks/use-bookmarks';
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();
  const savedSurahs = surahs.filter(s => bookmarks.includes(s.id));

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <header className="bg-white px-6 pt-12 pb-6 border-b border-emerald-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
            <Bookmark size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Saved Surahs</h1>
            <p className="text-gray-500 text-sm">Your offline collection</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 mt-8">
        {savedSurahs.length > 0 ? (
          <div className="space-y-3">
            {savedSurahs.map(surah => (
              <SurahCard key={surah.id} surah={surah} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark size={32} className="text-emerald-200" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">No bookmarks yet</h3>
            <p className="text-gray-500 text-sm px-12">Save your favorite Surahs to access them quickly offline.</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Bookmarks;