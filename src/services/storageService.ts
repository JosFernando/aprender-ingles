import { UserProgress } from '../types/grammar';

const STORAGE_KEY = 'aprender_ingles_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: [],
  lessonScores: {},
  xp: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  bookmarkedLessons: []
};

export const storageService = {
  getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return defaultProgress;
      const parsed: UserProgress = JSON.parse(data);
      
      // Calculate streak
      const today = new Date().toISOString().split('T')[0];
      const lastDate = parsed.lastActiveDate;
      
      if (lastDate && lastDate !== today) {
        const diffDays = Math.floor((new Date(today).getTime() - new Date(lastDate).getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          parsed.streak = (parsed.streak || 0) + 1;
        } else if (diffDays > 1) {
          parsed.streak = 1;
        }
        parsed.lastActiveDate = today;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }

      return { ...defaultProgress, ...parsed };
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
      return defaultProgress;
    }
  },

  saveProgress(progress: UserProgress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  },

  addXp(amount: number): UserProgress {
    const progress = this.getProgress();
    progress.xp += amount;
    this.saveProgress(progress);
    return progress;
  },

  completeLesson(lessonId: string, score: number): UserProgress {
    const progress = this.getProgress();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }
    // Update best score
    const currentScore = progress.lessonScores[lessonId] || 0;
    if (score > currentScore) {
      progress.lessonScores[lessonId] = score;
    }
    // Award XP (e.g. score * 1.5 + 20)
    const earnedXp = Math.round(score * 1.2) + 25;
    progress.xp += earnedXp;
    this.saveProgress(progress);
    return progress;
  },

  toggleBookmark(lessonId: string): UserProgress {
    const progress = this.getProgress();
    if (progress.bookmarkedLessons.includes(lessonId)) {
      progress.bookmarkedLessons = progress.bookmarkedLessons.filter(id => id !== lessonId);
    } else {
      progress.bookmarkedLessons.push(lessonId);
    }
    this.saveProgress(progress);
    return progress;
  },

  resetProgress(): UserProgress {
    localStorage.removeItem(STORAGE_KEY);
    return defaultProgress;
  }
};

