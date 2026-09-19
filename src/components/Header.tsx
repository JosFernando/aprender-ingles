import React from 'react';
import { BookOpen, Flame, Zap, BarChart2, Smartphone, Monitor } from 'lucide-react';
import { UserProgress } from '../types/grammar';

interface HeaderProps {
  progress: UserProgress;
  onOpenStats: () => void;
  isSimulatorMode: boolean;
  onToggleSimulator: () => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  onOpenStats,
  isSimulatorMode,
  onToggleSimulator,
  onHomeClick,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-3 sm:px-4 py-2.5 flex-shrink-0 shadow-2xs">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Brand */}
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 text-left group min-w-0 flex-shrink transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-xs shadow-indigo-600/20">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-900 block truncate">
              Inglês <span className="text-indigo-600 font-bold">& Gramática</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium hidden xs:block">
              Teoria & Prática
            </span>
          </div>
        </button>

        {/* Metrics & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Streak */}
          <div 
            title="Dias consecutivos de estudo"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-[11px] font-bold"
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0" />
            <span>{progress.streak}d</span>
          </div>

          {/* XP */}
          <div 
            title="Pontos de experiência"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-[11px] font-bold"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600 flex-shrink-0" />
            <span>{progress.xp}</span>
          </div>

          {/* Stats Button */}
          <button
            onClick={onOpenStats}
            title="Ver estatísticas"
            className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors flex-shrink-0"
          >
            <BarChart2 className="w-4 h-4" />
          </button>

          {/* Simulator Toggle (Desktop only) */}
          <button
            onClick={onToggleSimulator}
            title={isSimulatorMode ? "Mudar para ecrã inteiro" : "Mudar para modo telemóvel"}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors flex-shrink-0"
          >
            {isSimulatorMode ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                <span>Web</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mobile</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
