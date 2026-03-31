"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  surahName: string;
  onClose: () => void;
}

const AudioPlayer = ({ surahName, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // In a real offline app, these would be local file paths
  // For this demo, we use a placeholder logic
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-4 shadow-2xl z-50 animate-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-bold text-sm text-gray-800 dark:text-white">Now Playing</h4>
          <p className="text-xs text-emerald-600 dark:text-emerald-400">{surahName}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
      </div>

      <div className="space-y-4">
        <Slider 
          value={[progress]} 
          max={100} 
          step={1} 
          onValueChange={(val) => setProgress(val[0])}
          className="cursor-pointer"
        />
        
        <div className="flex items-center justify-center gap-6">
          <button className="text-gray-400 hover:text-emerald-600 transition-colors">
            <SkipBack size={24} />
          </button>
          <button 
            onClick={togglePlay}
            className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-emerald-700 transition-all"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
          <button className="text-gray-400 hover:text-emerald-600 transition-colors">
            <SkipForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;