"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { surahs } from '../data/surahs';
import { ChevronLeft, Bookmark, Share2, Play } from 'lucide-react';
import { useBookmarks } from '../hooks/use-bookmarks';
import { cn } from '@/lib/utils';

const SurahDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const surah = surahs.find(s => s.id === Number(id));
  const { toggleBookmark, isBookmarked } = useBookmarks();

  if (!surah) return <div className="p-8 text-center">Surah not found</div>;

  const saved = isBookmarked(surah.id);

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-emerald-50 px-4 py-4 flex items-center justify-between z-50">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-emerald-50 rounded-full transition-colors">
          <ChevronLeft size={24} className="text-emerald-700" />
        </button>
        <div className="text-center">
          <h1 className="font-bold text-gray-800">{surah.englishName}</h1>
          <p className="text-[10px] text-emerald-600 font-medium uppercase tracking-widest">{surah.revelationType}</p>
        </div>
        <button 
          onClick={() => toggleBookmark(surah.id)}
          className={cn(
            "p-2 rounded-full transition-colors",
            saved ? "bg-emerald-50 text-emerald-700" : "hover:bg-emerald-50 text-gray-400"
          )}
        >
          <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
        </button>
      </header>

      {/* Surah Banner */}
      <div className="mx-4 mt-4 p-8 rounded-[32px] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white text-center relative overflow-hidden shadow-lg">
        <div className="relative z-10">
          <h2 className="text-3xl font-arabic mb-2">{surah.name}</h2>
          <p className="text-emerald-100 text-sm mb-4">{surah.englishNameTranslation}</p>
          <div className="h-[1px] w-24 bg-emerald-400/50 mx-auto mb-4" />
          <p className="text-xs font-medium tracking-widest uppercase">{surah.numberOfAyahs} VERSES</p>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>

      {/* Bismillah */}
      {surah.id !== 1 && surah.id !== 9 && (
        <div className="py-12 text-center">
          <p className="text-3xl font-arabic text-emerald-900">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        </div>
      )}

      {/* Ayahs */}
      <div className="px-6 space-y-8 mt-8">
        {surah.ayahs?.map((ayah) => (
          <div key={ayah.number} className="group">
            <div className="flex items-center justify-between mb-4 bg-emerald-50/50 p-2 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                {ayah.number}
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors">
                  <Play size={16} fill="currentColor" />
                </button>
                <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-right text-3xl font-arabic leading-[2.5] text-gray-800 mb-4" dir="rtl">
              {ayah.text}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-emerald-100 pl-4 italic">
              {ayah.translation}
            </p>
          </div>
        ))}
        
        {!surah.ayahs && (
          <div className="text-center py-20 text-gray-400">
            <p>Full text for this Surah is coming soon in the next update.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurahDetail;