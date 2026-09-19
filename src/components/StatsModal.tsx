import React from 'react';
import { X, Flame, Check, RotateCcw, BarChart3 } from 'lucide-react';
import { UserProgress } from '../types/grammar';

interface StatsModalProps {
  progress: UserProgress;
  totalLessons: number;
  onClose: () => void;
  onReset: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  progress,
  totalLessons,
  onClose,
  onReset
}) => {
  const completedCount = progress.completedLessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  let rankTitle = 'Nível 1 • Inicial';
  let nextRankXp = 200;
  if (progress.xp >= 1000) {
    rankTitle = 'Nível 4 • Fluência';
    nextRankXp = 2000;
  } else if (progress.xp >= 500) {
    rankTitle = 'Nível 3 • Avançado';
    nextRankXp = 1000;
  } else if (progress.xp >= 200) {
    rankTitle = 'Nível 2 • Intermédio';
    nextRankXp = 500;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 pt-[max(env(safe-area-inset-top,0px),1rem)] pb-[max(env(safe-area-inset-bottom,0px),1rem)] safe-x-padded overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-sm w-full p-4 sm:p-5 border border-slate-200 shadow-xl max-h-[90vh] overflow-y-auto my-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <h3 className="font-bold text-sm text-slate-900 truncate">Progresso Geral</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
          <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider block">Classificação</span>
          <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{rankTitle}</div>
          <div className="mt-2 text-[11px] text-slate-500 font-medium">
            {progress.xp} / {nextRankXp} XP
          </div>
          <div className="mt-1 h-2 w-full bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (progress.xp / nextRankXp) * 100)}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-2.5">
          <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 mx-auto mb-1 flex-shrink-0" />
            <span className="text-sm sm:text-base font-black text-slate-900 block">{progress.streak} dias</span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Sequência</span>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
            <Check className="w-4 h-4 text-emerald-600 mx-auto mb-1 flex-shrink-0" />
            <span className="text-sm sm:text-base font-black text-slate-900 block">{completedCount} / {totalLessons}</span>
            <span className="text-[10px] uppercase font-bold text-slate-400">Concluídas</span>
          </div>
        </div>

        <div className="mt-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
            <span>Conclusão do Conteúdo</span>
            <span className="font-bold text-indigo-700">{completionPercentage}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-5 flex flex-col gap-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            Continuar a Aprender
          </button>
          
          <button
            onClick={() => {
              if (window.confirm('Tem a certeza que deseja reiniciar o seu progresso?')) {
                onReset();
              }
            }}
            className="text-[11px] text-slate-400 hover:text-rose-600 font-medium py-1 transition-colors flex items-center justify-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reiniciar progresso</span>
          </button>
        </div>
      </div>
    </div>
  );
};
