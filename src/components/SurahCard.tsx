"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Surah } from '../types/quran';
import { ChevronRight } from 'lucide-react';

interface SurahCardProps {
  surah: Surah;
}

const SurahCard = ({ surah }: SurahCardProps) => {
  return (
    <Link 
      to={`/surah/${surah.id}`}
      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-emerald-50 hover:border-emerald-200 hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-sm border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          {surah.id}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{surah.englishName}</h3>
          <p className="text-xs text-gray-500">{surah.englishNameTranslation} • {surah.numberOfAyahs} Verses</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl font-arabic text-emerald-800">{surah.name}</span>
        <ChevronRight size={18} className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
      </div>
    </Link>
  );
};

export default SurahCard;