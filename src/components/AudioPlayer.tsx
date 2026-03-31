"use client";

import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, X, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  surahName: string;
  onClose: () => void;
}

const AudioPlayer = ({ surahName, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            <Volume2 size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white">{surahName}</h4>
            <p className="text-[10px] text-emerald-600 font-medium uppercase">Reciting...</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full">
          <X size={18} className="text-gray-400" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="relative w-full h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-emerald-600 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <button className="text-gray-400 hover:text-emerald-600 transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-95"
          >
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </button>
          <button className="text-gray-400 hover:text-emerald-600 transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;