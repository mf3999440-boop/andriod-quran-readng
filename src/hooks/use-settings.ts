"use client";

import { useState, useEffect } from 'react';

export type ThemeType = 'emerald' | 'midnight' | 'sepia' | 'dark';

export const useSettings = () => {
  const [theme, setTheme] = useState<ThemeType>('emerald');
  const [autoNext, setAutoNext] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('quran_theme') as ThemeType;
    const savedAutoNext = localStorage.getItem('quran_auto_next');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedAutoNext !== null) setAutoNext(JSON.parse(savedAutoNext));
  }, []);

  const updateTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem('quran_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleAutoNext = () => {
    const newValue = !autoNext;
    setAutoNext(newValue);
    localStorage.setItem('quran_auto_next', JSON.stringify(newValue));
  };

  return { theme, updateTheme, autoNext, toggleAutoNext };
};