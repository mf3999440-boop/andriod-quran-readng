"use client";

import React from 'react';
import BottomNav from '../components/BottomNav';
import { useTheme, Theme } from '../hooks/use-theme';
import { Moon, Sun, Coffee, Volume2, Bell, Shield, Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  const { theme, changeTheme } = useTheme();

  const themes: { id: Theme; label: string; icon: any; color: string }[] = [
    { id: 'light', label: 'Light', icon: Sun, color: 'bg-white border-gray-200 text-gray-800' },
    { id: 'dark', label: 'Dark', icon: Moon, color: 'bg-slate-900 border-slate-700 text-white' },
    { id: 'sepia', label: 'Sepia', icon: Coffee, color: 'bg-[#f4ecd8] border-[#e4dcc8] text-[#5b4636]' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 transition-colors duration-300">
      <header className="bg-white dark:bg-slate-900 px-6 pt-12 pb-6 border-b border-emerald-50 dark:border-emerald-900">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Personalize your reading experience</p>
      </header>

      <main className="max-w-md mx-auto px-6 mt-8 space-y-8">
        {/* Appearance Section */}
        <section>
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Appearance</h2>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                  theme === t.id ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-transparent'
                } ${t.color}`}
              >
                <t.icon size={20} />
                <span className="text-xs font-medium">{t.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Audio Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Audio & Playback</h2>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-emerald-50 dark:border-emerald-900 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                  <Volume2 size={18} />
                </div>
                <Label htmlFor="auto-play" className="text-sm font-medium dark:text-white">Auto-play Next Ayah</Label>
              </div>
              <Switch id="auto-play" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                  <Bell size={18} />
                </div>
                <Label htmlFor="notifications" className="text-sm font-medium dark:text-white">Prayer Reminders</Label>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </div>
        </section>

        {/* General Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">General</h2>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-emerald-50 dark:border-emerald-900 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-emerald-50 dark:border-emerald-900">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-gray-400" />
                <span className="text-sm font-medium dark:text-white">Privacy Policy</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <Info size={18} className="text-gray-400" />
                <span className="text-sm font-medium dark:text-white">About App</span>
              </div>
              <span className="text-xs text-gray-400">v1.0.0</span>
            </button>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;