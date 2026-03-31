import { Surah } from "../types/quran";

export const surahs: Surah[] = [
  {
    id: 1,
    name: "الفاتحة",
    englishName: "Al-Fatihah",
    englishNameTranslation: "The Opening",
    numberOfAyahs: 7,
    revelationType: "Meccan",
    ayahs: [
      { number: 1, text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
      { number: 2, text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "[All] praise is [due] to Allah, Lord of the worlds -" },
      { number: 3, text: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "The Entirely Merciful, the Especially Merciful," },
      { number: 4, text: "مَالِكِ يَوْمِ الدِّينِ", translation: "Sovereign of the Day of Recompense." },
      { number: 5, text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "It is You we worship and You we ask for help." },
      { number: 6, text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translation: "Guide us to the straight path -" },
      { number: 7, text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray." },
    ]
  },
  {
    id: 112,
    name: "الإخلاص",
    englishName: "Al-Ikhlas",
    englishNameTranslation: "The Sincerity",
    numberOfAyahs: 4,
    revelationType: "Meccan",
    ayahs: [
      { number: 1, text: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "Say, 'He is Allah, [who is] One," },
      { number: 2, text: "اللَّهُ الصَّمَدُ", translation: "Allah, the Eternal Refuge." },
      { number: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translation: "He neither begets nor is born," },
      { number: 4, text: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", translation: "Nor is there to Him any equivalent.'" },
    ]
  },
  {
    id: 113,
    name: "الفلق",
    englishName: "Al-Falaq",
    englishNameTranslation: "The Daybreak",
    numberOfAyahs: 5,
    revelationType: "Meccan",
  },
  {
    id: 114,
    name: "الناس",
    englishName: "An-Nas",
    englishNameTranslation: "Mankind",
    numberOfAyahs: 6,
    revelationType: "Meccan",
  }
];