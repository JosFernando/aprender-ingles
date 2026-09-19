export type Level = 'A1-A2' | 'B1-B2' | 'ADVANCED';

export type Category = 
  | 'TENSES' 
  | 'VERBS' 
  | 'PRONOUNS' 
  | 'PREPOSITIONS' 
  | 'STRUCTURES' 
  | 'IDIOMS';

export interface GrammarRule {
  title: string;
  explanation: string;
  formula?: string;
  affirmative?: string;
  negative?: string;
  interrogative?: string;
  image?: string;
  keyPoints?: string[];
}

export interface GrammarExample {
  english: string;
  portuguese: string;
  note?: string;
  image?: string;
}

export interface CommonMistake {
  wrong: string;
  correct: string;
  explanation: string;
}

export type ExerciseType = 'multiple-choice' | 'fill-blank' | 'reorder' | 'true-false' | 'speaking';

export interface Exercise {
  id: string;
  type: ExerciseType;
  instruction: string;
  question?: string;
  options?: string[]; // Para múltipla escolha
  correctAnswer: string; // Resposta certa ou frase completa ordenada
  words?: string[]; // Palavras baralhadas para ordenação
  explanation: string;
  image?: string; // Imagem ilustrativa real para a questão
}

export interface BestPractice {
  title: string;
  category: 'uk-us' | 'formal-informal' | 'nuance' | 'etiquette';
  categoryLabel: string;
  explanation: string;
  comparison?: {
    leftLabel: string;
    leftText: string;
    rightLabel: string;
    rightText: string;
  };
  tip?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  level: Level;
  levelLabel: string;
  category: Category;
  categoryLabel: string;
  icon: string;
  color: string;
  summary: string;
  image?: string;
  rules: GrammarRule[];
  examples: GrammarExample[];
  commonMistakes: CommonMistake[];
  exercises: Exercise[];
  bestPractices?: BestPractice[];
}

export interface UserProgress {
  completedLessons: string[];
  lessonScores: Record<string, number>;
  xp: number;
  streak: number;
  lastActiveDate: string;
  bookmarkedLessons: string[];
}
