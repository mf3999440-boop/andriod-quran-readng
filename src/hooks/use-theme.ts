"use client";

import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'sepia';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('quran_theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove('light', 'dark', 'sepia');
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('quran_theme', newTheme);
    document.documentElement.classList.remove('light', 'dark', 'sepia');
    document.documentElement.classList.add(newTheme);
  };

  return { theme, changeTheme };
};