import React from 'react';
import { 
  Sparkles, 
  Clock, 
  Activity, 
  History, 
  Compass, 
  Flame, 
  ShieldCheck, 
  Split, 
  MapPin, 
  Zap, 
  AlertTriangle,
  Check, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Lesson } from '../types/grammar';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  score?: number;
  onSelect: (lesson: Lesson) => void;
  onStartExercises: (lesson: Lesson) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Clock: <Clock className="w-3.5 h-3.5" />,
  Activity: <Activity className="w-3.5 h-3.5" />,
  History: <History className="w-3.5 h-3.5" />,
  Compass: <Compass className="w-3.5 h-3.5" />,
  Flame: <Flame className="w-3.5 h-3.5" />,
  ShieldCheck: <ShieldCheck className="w-3.5 h-3.5" />,
  Split: <Split className="w-3.5 h-3.5" />,
  MapPin: <MapPin className="w-3.5 h-3.5" />,
  Zap: <Zap className="w-3.5 h-3.5" />,
  AlertTriangle: <AlertTriangle className="w-3.5 h-3.5" />
};

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  isCompleted,
  score,
  onSelect,
  onStartExercises
}) => {
  const isBeginner = lesson.level === 'A1-A2';
  const isIntermediate = lesson.level === 'B1-B2';

  const badgeClass = isBeginner 
    ? 'bg-blue-50/90 text-blue-700 border-blue-200/70' 
    : isIntermediate 
    ? 'bg-emerald-50/90 text-emerald-700 border-emerald-200/70' 
    : 'bg-purple-50/90 text-purple-700 border-purple-200/70';

  const iconBg = isBeginner
    ? 'bg-blue-50 text-blue-600 border-blue-100'
    : isIntermediate
    ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
    : 'bg-purple-50 text-purple-600 border-purple-100';

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:border-indigo-300 hover:shadow-xs transition-all flex flex-col justify-between w-full group overflow-hidden">
      <div>
        {/* Real Thumbnail Image */}
        {lesson.image && (
          <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3.5 relative shadow-2xs border border-slate-100/80">
            <img 
              src={lesson.image} 
              alt={lesson.title} 
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <span className={`absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md bg-white/90 ${badgeClass}`}>
              {lesson.levelLabel}
            </span>
          </div>
        )}

        {/* Top Badges & Status */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center flex-shrink-0 ${iconBg}`}>
              {iconMap[lesson.icon] || <BookOpen className="w-3.5 h-3.5" />}
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 block uppercase truncate">
                {lesson.categoryLabel}
              </span>
              {!lesson.image && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border inline-block mt-0.5 ${badgeClass}`}>
                  {lesson.levelLabel}
                </span>
              )}
            </div>
          </div>

          {isCompleted && (
            <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-200/80 flex-shrink-0">
              <Check className="w-3 h-3 text-emerald-600" />
              <span>{score !== undefined ? `${score}%` : 'Feito'}</span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 leading-snug">
          {lesson.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
          {lesson.subtitle}
        </p>

        {/* Info count */}
        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
          <span>{lesson.rules.length} regras</span>
          <span>•</span>
          <span className="text-indigo-600 font-semibold">{lesson.exercises.length} exercícios</span>
        </div>
      </div>

      {/* Buttons - Botões Curtos e Diretos: Teoria em Cima, Praticar em Baixo */}
      <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-2 w-full">
        {/* 1. Teoria */}
        <button
          onClick={() => onSelect(lesson)}
          className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-99"
        >
          <BookOpen className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
          <span>Teoria</span>
        </button>

        {/* 2. Praticar */}
        <button
          onClick={() => onStartExercises(lesson)}
          className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs shadow-indigo-600/20 active:scale-99"
        >
          <span>Praticar</span>
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
};
