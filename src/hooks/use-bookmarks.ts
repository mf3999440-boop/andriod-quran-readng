"use client";

import { useState, useEffect } from 'react';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('quran_bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (surahId: number) => {
    const newBookmarks = bookmarks.includes(surahId)
      ? bookmarks.filter(id => id !== surahId)
      : [...bookmarks, surahId];
    
    setBookmarks(newBookmarks);
    localStorage.setItem('quran_bookmarks', JSON.stringify(newBookmarks));
  };

  const isBookmarked = (surahId: number) => bookmarks.includes(surahId);

  return { bookmarks, toggleBookmark, isBookmarked };
};