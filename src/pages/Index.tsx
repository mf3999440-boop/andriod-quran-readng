"use client";

import React, { useState } from 'react';
import { surahs } from '../data/surahs';
import SurahCard from '../components/SurahCard';
import BottomNav from '../components/BottomNav';
import { Search, Book } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSurahs = surahs.filter(s => 
    s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.name.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <header className="bg-emerald-700 text-white pt-12 pb-8 px-6 rounded-b-[40px] shadow-xl">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Quran Reading</h1>
              <p className="text-emerald-100 text-sm">Learn and recite the Holy Quran</p>
            </div>
            <div className="w-12 h-12 bg-emerald-600/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Book className="text-white" size={24} />
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-200" size={18} />
            <Input 
              placeholder="Search Surah..." 
              className="pl-10 bg-emerald-600/30 border-emerald-500/50 text-white placeholder:text-emerald-200 focus-visible:ring-emerald-400 rounded-xl h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800">Surah Index</h2>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            {filteredSurahs.length} Surahs
          </span>
        </div>

        <div className="space-y-3">
          {filteredSurahs.map(surah => (
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;