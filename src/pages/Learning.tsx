"use client";

import React from 'react';
import BottomNav from '../components/BottomNav';
import { GraduationCap, PlayCircle, BookOpen, Star } from 'lucide-react';

const Learning = () => {
  const lessons = [
    { title: "Arabic Alphabet", duration: "15 mins", level: "Beginner", icon: BookOpen, color: "bg-blue-500" },
    { title: "Tajweed Basics", duration: "25 mins", level: "Intermediate", icon: Star, color: "bg-amber-500" },
    { title: "Makharij (Articulation)", duration: "20 mins", level: "Beginner", icon: GraduationCap, color: "bg-emerald-500" },
    { title: "Common Mistakes", duration: "10 mins", level: "All Levels", icon: PlayCircle, color: "bg-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <header className="bg-white px-6 pt-12 pb-6 border-b border-emerald-50">
        <h1 className="text-2xl font-bold text-gray-800">Learning Center</h1>
        <p className="text-gray-500 text-sm">Master the art of Quran recitation</p>
      </header>

      <main className="max-w-md mx-auto px-6 mt-8">
        <div className="bg-emerald-600 rounded-3xl p-6 text-white mb-8 shadow-lg shadow-emerald-200">
          <h3 className="font-bold text-lg mb-2">Daily Progress</h3>
          <p className="text-emerald-100 text-sm mb-4">You've completed 2 lessons this week. Keep it up!</p>
          <div className="w-full bg-emerald-700/50 h-2 rounded-full overflow-hidden">
            <div className="bg-white h-full w-[40%]" />
          </div>
        </div>

        <h2 className="font-bold text-gray-800 mb-4">Recommended Lessons</h2>
        <div className="grid gap-4">
          {lessons.map((lesson, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-emerald-50 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group">
              <div className={`${lesson.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                <lesson.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{lesson.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">{lesson.level}</span>
                  <span className="text-[10px] text-gray-400">• {lesson.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Learning;