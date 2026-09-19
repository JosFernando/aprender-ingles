import { useState, useMemo } from 'react';
import { Search, BookOpen, X } from 'lucide-react';
import { grammarLessons } from './data/grammarLessons';
import { Lesson, Level, UserProgress } from './types/grammar';
import { storageService } from './services/storageService';
import { Header } from './components/Header';
import { LessonCard } from './components/LessonCard';
import { LessonDetail } from './components/LessonDetail';
import { ExerciseSession } from './components/ExerciseSession';
import { StatsModal } from './components/StatsModal';
import { SimulatorFrame } from './components/SimulatorFrame';

export function App() {
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeExerciseLesson, setActiveExerciseLesson] = useState<Lesson | null>(null);
  const [showStats, setShowStats] = useState(false);
  const [isSimulator, setIsSimulator] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 900;
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | Level>('ALL');

  const filteredLessons = useMemo(() => {
    return grammarLessons.filter(lesson => {
      const matchesLevel = selectedLevel === 'ALL' || lesson.level === selectedLevel;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.subtitle.toLowerCase().includes(q) ||
        lesson.summary.toLowerCase().includes(q) ||
        lesson.rules.some(r => r.title.toLowerCase().includes(q) || r.explanation.toLowerCase().includes(q));
      
      return matchesLevel && matchesQuery;
    });
  }, [searchQuery, selectedLevel]);

  const handleLessonComplete = (lessonId: string, score: number) => {
    const updated = storageService.completeLesson(lessonId, score);
    setProgress({ ...updated });
  };

  const handleResetProgress = () => {
    const reset = storageService.resetProgress();
    setProgress({ ...reset });
    setShowStats(false);
  };

  const handleNextLesson = () => {
    if (!activeExerciseLesson) return;
    const currentIndex = grammarLessons.findIndex(l => l.id === activeExerciseLesson.id);
    if (currentIndex >= 0 && currentIndex + 1 < grammarLessons.length) {
      setActiveExerciseLesson(grammarLessons[currentIndex + 1]);
    } else {
      setActiveExerciseLesson(null);
    }
  };

  if (activeExerciseLesson) {
    const currentIndex = grammarLessons.findIndex(l => l.id === activeExerciseLesson.id);
    const hasNext = currentIndex >= 0 && currentIndex < grammarLessons.length - 1;

    return (
      <SimulatorFrame isSimulator={isSimulator} onToggle={() => setIsSimulator(!isSimulator)}>
        <ExerciseSession
          lesson={activeExerciseLesson}
          onClose={() => setActiveExerciseLesson(null)}
          onComplete={(score) => handleLessonComplete(activeExerciseLesson.id, score)}
          onNextLesson={hasNext ? handleNextLesson : undefined}
        />
      </SimulatorFrame>
    );
  }

  if (selectedLesson) {
    return (
      <SimulatorFrame isSimulator={isSimulator} onToggle={() => setIsSimulator(!isSimulator)}>
        <LessonDetail
          lesson={selectedLesson}
          onBack={() => setSelectedLesson(null)}
          onStartExercises={() => setActiveExerciseLesson(selectedLesson)}
        />
      </SimulatorFrame>
    );
  }

  return (
    <SimulatorFrame isSimulator={isSimulator} onToggle={() => setIsSimulator(!isSimulator)}>
      <div className="h-full min-h-0 flex flex-col bg-slate-50/50 w-full overflow-hidden">
        <Header
          progress={progress}
          onOpenStats={() => setShowStats(true)}
          isSimulatorMode={isSimulator}
          onToggleSimulator={() => setIsSimulator(!isSimulator)}
          onHomeClick={() => {
            setSelectedLesson(null);
            setSelectedLevel('ALL');
            setSearchQuery('');
          }}
        />

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="border-b border-slate-200/80 bg-white px-4 sm:px-6 pt-4 pb-4">
            <div className="max-w-5xl mx-auto w-full">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 flex-wrap gap-1">
                <span className="font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                  Gramática Inglesa
                </span>
                <span className="font-semibold text-slate-400">
                  {progress.completedLessons.length} de {grammarLessons.length} concluídas
                </span>
              </div>

              <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                Regras e Estruturas Gramaticais
              </h1>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-normal">
                Explicações didáticas, diferenças, pronúncia nativa e treino de voz.
              </p>

              <div className="mt-3 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar (ex: To Be, Past, Modais)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-indigo-500 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    title="Limpar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Minimal Short Filter Badges */}
              <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs font-bold w-full">
                <button
                  onClick={() => setSelectedLevel('ALL')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap flex-shrink-0 transition-all ${
                    selectedLevel === 'ALL'
                      ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Todas ({grammarLessons.length})
                </button>

                <button
                  onClick={() => setSelectedLevel('A1-A2')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap flex-shrink-0 transition-all ${
                    selectedLevel === 'A1-A2'
                      ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Iniciante
                </button>

                <button
                  onClick={() => setSelectedLevel('B1-B2')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap flex-shrink-0 transition-all ${
                    selectedLevel === 'B1-B2'
                      ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Intermédio
                </button>

                <button
                  onClick={() => setSelectedLevel('ADVANCED')}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap flex-shrink-0 transition-all ${
                    selectedLevel === 'ADVANCED'
                      ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Avançado
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
            {filteredLessons.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs">
                <BookOpen className="w-9 h-9 text-slate-300 mx-auto mb-2.5" />
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800">Nenhum tópico encontrado</h3>
                <p className="text-xs text-slate-400 mt-0.5">Tente outro termo de pesquisa.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('ALL');
                  }}
                  className="mt-3.5 px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  Limpar
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {filteredLessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={progress.completedLessons.includes(lesson.id)}
                    score={progress.lessonScores[lesson.id]}
                    onSelect={(l) => setSelectedLesson(l)}
                    onStartExercises={(l) => setActiveExerciseLesson(l)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {showStats && (
          <StatsModal
            progress={progress}
            totalLessons={grammarLessons.length}
            onClose={() => setShowStats(false)}
            onReset={handleResetProgress}
          />
        )}
      </div>
    </SimulatorFrame>
  );
}
