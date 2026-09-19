import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  BookOpen, 
  AlertCircle, 
  Check, 
  X,
  Play,
  Lightbulb,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { Lesson } from '../types/grammar';
import { speechService } from '../services/speechService';
import { GrammarIllustration } from './GrammarIllustration';

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
  onStartExercises: () => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  onBack,
  onStartExercises
}) => {
  const [activeTab, setActiveTab] = useState<'rules' | 'examples' | 'mistakes' | 'practices'>('rules');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    setSpeakingText(text);
    speechService.speak(text).then(() => {
      setSpeakingText(null);
    });
  };

  let illustrationType: 'to-be-persons' | 'present-simple-s' | 'timeline-tense' | 'modal-scale' | 'phrasal-verbs-visual' | undefined;
  if (lesson.id === 'to-be-present') {
    illustrationType = 'to-be-persons';
  } else if (lesson.id === 'present-simple') {
    illustrationType = 'present-simple-s';
  } else if (lesson.id === 'past-simple' || lesson.id === 'present-perfect' || lesson.id === 'future-forms') {
    illustrationType = 'timeline-tense';
  } else if (lesson.id === 'modal-verbs') {
    illustrationType = 'modal-scale';
  } else if (lesson.id === 'phrasal-verbs') {
    illustrationType = 'phrasal-verbs-visual';
  }

  return (
    <div className="h-full min-h-0 flex flex-col w-full bg-slate-50/50 overflow-hidden">
      {/* 
        MENU E TEMA FIXOS NO TOPO
        Permanece sempre visível durante a rolagem de todo o resto do conteúdo
      */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs flex-shrink-0 pt-[max(env(safe-area-inset-top,0px),0.625rem)] safe-x-padded">
        {/* Linha 1: Voltar + Tema da Lição + Praticar rápido */}
        <div className="px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 max-w-4xl mx-auto w-full">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors active:scale-95 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 flex-shrink-0"
            title="Voltar à lista"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          {/* Tema e Nível da Lição (Fixo no Topo) */}
          <div className="flex-1 min-w-0 text-center px-2">
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-md flex-shrink-0">
                {lesson.levelLabel.split(' ')[0]}
              </span>
              <h1 className="text-xs sm:text-sm md:text-base font-black text-slate-900 truncate">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* Botão Praticar rápido */}
          <button
            onClick={onStartExercises}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-3 sm:px-4 py-1.5 rounded-xl transition-all shadow-xs shadow-indigo-600/20 active:scale-95 flex-shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Praticar</span>
          </button>
        </div>

        {/* Linha 2: Menu de Navegação por Abas (Fixo no Topo) */}
        <div className="border-t border-slate-100 bg-white">
          <div className="flex px-2 sm:px-4 max-w-4xl mx-auto w-full">
            <button
              onClick={() => setActiveTab('rules')}
              className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'rules'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Regras</span>
            </button>

            <button
              onClick={() => setActiveTab('examples')}
              className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'examples'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Exemplos</span>
            </button>

            <button
              onClick={() => setActiveTab('mistakes')}
              className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'mistakes'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Erros</span>
            </button>

            <button
              onClick={() => setActiveTab('practices')}
              className={`flex-1 py-2.5 text-xs font-bold text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'practices'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Dicas</span>
            </button>
          </div>
        </div>
      </header>

      {/* 
        CORPO DE LEITURA ROLÁVEL
        Desliza suavemente permitindo total espaço visual e conforto de leitura
      */}
      <div className="flex-1 min-h-0 overflow-y-auto w-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
          {/* Banner Fotográfico e Introdução (Deslizam naturalmente na rolagem) */}
          {lesson.image && (
            <div className="w-full h-36 sm:h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs relative flex-shrink-0">
              <img 
                src={lesson.image} 
                alt={lesson.title} 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur px-2.5 py-0.5 rounded-md inline-block mb-1 border border-white/20">
                  {lesson.levelLabel} • {lesson.categoryLabel}
                </span>
                <h2 className="text-base sm:text-lg md:text-xl font-black leading-tight drop-shadow-sm">
                  {lesson.title}
                </h2>
              </div>
            </div>
          )}

          {/* Cartão de Contexto e Síntese Didática */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-1">
              Visão Geral do Tópico
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              {lesson.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {lesson.summary}
            </p>
          </div>

          {/* Ilustração Visual se disponível */}
          {illustrationType && activeTab === 'rules' && (
            <GrammarIllustration type={illustrationType} />
          )}

          {/* TAB 1: REGRAS E EXPLICAÇÕES TEÓRICAS COMPLETAS */}
          {activeTab === 'rules' && (
            <div className="space-y-3.5">
              {lesson.rules.map((rule, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-5 h-5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {rule.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 whitespace-pre-line">
                    {rule.explanation}
                  </p>

                  {/* Pontos Chave Didáticos se houver */}
                  {rule.keyPoints && rule.keyPoints.length > 0 && (
                    <div className="mb-3 space-y-1.5 bg-indigo-50/40 border border-indigo-100 rounded-xl p-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 block">
                        Destaques e Atenção:
                      </span>
                      {rule.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Fórmula de Estrutura Gramatical */}
                  {rule.formula && (
                    <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 mb-3 text-xs font-mono text-indigo-900 font-semibold break-words">
                      <span className="text-[10px] uppercase font-bold text-indigo-500 block mb-1 font-sans">
                        Fórmula Sintática:
                      </span>
                      {rule.formula}
                    </div>
                  )}

                  {/* Padrões Afirmativo, Negativo e Interrogativo */}
                  {(rule.affirmative || rule.negative || rule.interrogative) && (
                    <div className="space-y-2 text-xs bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
                      {rule.affirmative && (
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                            Afirmativa
                          </span>
                          <span className="text-slate-800 font-medium break-words leading-relaxed">{rule.affirmative}</span>
                        </div>
                      )}
                      {rule.negative && (
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] font-extrabold uppercase text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                            Negativa
                          </span>
                          <span className="text-slate-800 font-medium break-words leading-relaxed">{rule.negative}</span>
                        </div>
                      )}
                      {rule.interrogative && (
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] font-extrabold uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                            Pergunta
                          </span>
                          <span className="text-slate-800 font-medium break-words leading-relaxed">{rule.interrogative}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: EXEMPLOS */}
          {activeTab === 'examples' && (
            <div className="space-y-2.5">
              <div className="bg-indigo-50/70 border border-indigo-200/70 rounded-xl p-3 text-xs text-indigo-800 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Toque no ícone de áudio para escutar a pronúncia nativa e treinar o ouvido.</span>
              </div>

              {lesson.examples.map((eg, idx) => (
                <div key={idx} className="border border-slate-200/80 rounded-2xl p-3.5 bg-white hover:border-indigo-200 shadow-2xs transition-colors">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    {eg.image && (
                      <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-2xs">
                        <img 
                          src={eg.image} 
                          alt={eg.english} 
                          className="w-full h-full object-cover" 
                          loading="lazy" 
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-bold text-slate-900 break-words leading-snug">
                            {eg.english}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 break-words font-medium">
                            {eg.portuguese}
                          </p>
                        </div>

                        <button
                          onClick={() => handleSpeak(eg.english)}
                          className={`p-2 rounded-xl border transition-all flex-shrink-0 ${
                            speakingText === eg.english
                              ? 'bg-indigo-600 text-white border-indigo-600 animate-pulse'
                              : 'border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 text-slate-700 hover:text-indigo-600'
                          }`}
                          title="Ouvir pronúncia"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {eg.note && (
                        <p className="mt-1.5 text-[11px] text-indigo-700 bg-indigo-50/80 border border-indigo-100 px-2 py-0.5 rounded-lg inline-block font-medium break-words">
                          Nota: {eg.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: ERROS COMUNS */}
          {activeTab === 'mistakes' && (
            <div className="space-y-3">
              {lesson.commonMistakes.map((cm, idx) => (
                <div key={idx} className="border border-slate-200/80 rounded-2xl p-4 bg-white shadow-2xs">
                  {/* Incorreto */}
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/70 mb-2">
                    <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold uppercase text-rose-700 block">Incorreto</span>
                      <span className="text-xs sm:text-sm font-semibold text-rose-950 line-through break-words block">
                        {cm.wrong}
                      </span>
                    </div>
                  </div>

                  {/* Correto */}
                  <div className="flex items-start justify-between gap-2.5 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 mb-2">
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-extrabold uppercase text-emerald-700 block">Correto</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-950 break-words block">
                          {cm.correct}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSpeak(cm.correct)}
                      className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs flex-shrink-0"
                      title="Ouvir"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Explicação */}
                  <p className="text-xs text-slate-600 leading-relaxed px-1 mt-1.5 break-words">
                    <span className="font-bold text-slate-700">Por que está errado: </span>
                    {cm.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DICAS, DIFERENÇAS E BOAS PRÁTICAS */}
          {activeTab === 'practices' && (
            <div className="space-y-3">
              {lesson.bestPractices && lesson.bestPractices.length > 0 ? (
                lesson.bestPractices.map((bp, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${
                        bp.category === 'uk-us'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : bp.category === 'formal-informal'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : bp.category === 'nuance'
                          ? 'bg-purple-50 text-purple-800 border-purple-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}>
                        {bp.categoryLabel}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {bp.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {bp.explanation}
                    </p>

                    {bp.comparison && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5 text-xs">
                        <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">
                            {bp.comparison.leftLabel}
                          </span>
                          <span className="font-semibold text-slate-800 break-words">
                            {bp.comparison.leftText}
                          </span>
                        </div>
                        <div className="bg-indigo-50/50 border border-indigo-200/70 p-2.5 rounded-xl">
                          <span className="text-[10px] font-bold text-indigo-500 uppercase block mb-0.5">
                            {bp.comparison.rightLabel}
                          </span>
                          <span className="font-semibold text-indigo-950 break-words">
                            {bp.comparison.rightText}
                          </span>
                        </div>
                      </div>
                    )}

                    {bp.tip && (
                      <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-start gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Dica prática:</strong> {bp.tip}</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-white rounded-2xl border border-slate-200/80 p-6">
                  <Globe2 className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-slate-800">Dicas da Língua</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Mantenha uma comunicação simples, direta e pratique diariamente para desenvolver fluência natural.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Chamada para Ação ao Final da Leitura */}
          <div className="pt-2 pb-[max(env(safe-area-inset-bottom,0px),1.75rem)] safe-x-padded">
            <button
              onClick={onStartExercises}
              className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20 active:scale-98 min-h-[46px]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Praticar ({lesson.exercises.length})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
