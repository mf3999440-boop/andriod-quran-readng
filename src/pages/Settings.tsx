"use client";

import React from 'react';
import BottomNav from '../components/BottomNav';
import { useSettings, ThemeType } from '../hooks/use-settings';
import { Moon, Sun, Palette, Volume2, Info, ShieldCheck } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const Settings = () => {
  const { theme, updateTheme, autoNext, toggleAutoNext } = useSettings();

  const themes: { id: ThemeType; label: string; color: string }[] = [
    { id: 'emerald', label: 'Emerald', color: 'bg-emerald-600' },
    { id: 'midnight', label: 'Midnight', color: 'bg-blue-900' },
    { id: 'sepia', label: 'Sepia', color: 'bg-[#f4ecd8]' },
    { id: 'dark', label: 'Dark', color: 'bg-slate-950' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <header className="bg-white dark:bg-slate-900 px-6 pt-12 pb-6 border-b border-emerald-50 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
        <p className="text-gray-500 text-sm">Personalize your reading experience</p>
      </header>

      <main className="max-w-md mx-auto px-6 mt-8 space-y-6">
        {/* Appearance Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-emerald-600">
            <Palette size={18} />
            <h2 className="font-bold text-sm uppercase tracking-wider">Appearance</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-emerald-50 dark:border-slate-800">
            <div className="grid grid-cols-4 gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => updateTheme(t.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-2 rounded-xl transition-all",
                    theme === t.id ? "bg-emerald-50 dark:bg-emerald-900/20 ring-2 ring-emerald-500" : "hover:bg-gray-50 dark:hover:bg-slate-800"
                  )}
                >
                  <div className={cn("w-10 h-10 rounded-full shadow-inner", t.color)} />
                  <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Audio Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-emerald-600">
            <Volume2 size={18} />
            <h2 className="font-bold text-sm uppercase tracking-wider">Audio Settings</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-emerald-50 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm">Auto-play Next Ayah</h4>
                <p className="text-xs text-gray-500">Continue playing automatically</p>
              </div>
              <Switch checked={autoNext} onCheckedChange={toggleAutoNext} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-emerald-600">
            <Info size={18} />
            <h2 className="font-bold text-sm uppercase tracking-wider">About</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-emerald-50 dark:border-slate-800 divide-y divide-emerald-50 dark:divide-slate-800">
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Version</span>
              <span className="text-sm font-bold text-gray-800 dark:text-white">1.0.0 (Offline)</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Privacy Policy</span>
              <ShieldCheck size={18} className="text-emerald-600" />
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;