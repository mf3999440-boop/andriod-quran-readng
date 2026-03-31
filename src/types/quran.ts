export interface Ayah {
  number: number;
  text: string;
  translation: string;
}

export interface Surah {
  id: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: "Meccan" | "Medinan";
  ayahs?: Ayah[];
}