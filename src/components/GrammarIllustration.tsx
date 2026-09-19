import React from 'react';

interface GrammarIllustrationProps {
  type: string;
  className?: string;
}

export const GrammarIllustration: React.FC<GrammarIllustrationProps> = ({ type, className = "w-full max-w-sm mx-auto my-3" }) => {
  // Prepositions In / On / At Pyramid Diagram
  if (type === 'prepositions-pyramid') {
    return (
      <div className={`${className} bg-slate-50/80 rounded-2xl p-4 border border-blue-100 shadow-2xs`}>
        <div className="text-center mb-3">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
            Pirâmide das Preposições (Tempo & Lugar)
          </span>
          <span className="text-[11px] text-slate-500">Do mais geral e amplo ao mais específico</span>
        </div>

        <div className="space-y-1.5 max-w-xs mx-auto text-center font-semibold text-xs">
          {/* IN - Broadest (top / biggest tier) */}
          <div className="bg-blue-100/90 border border-blue-200 text-blue-900 py-2.5 px-3 rounded-xl shadow-2xs">
            <div className="font-extrabold text-sm text-blue-800">IN (Geral & Amplo)</div>
            <div className="text-[11px] text-blue-700 font-normal mt-0.5">
              Anos, Meses, Séculos • Países, Cidades
            </div>
            <div className="text-[10px] text-blue-600/90 mt-1 font-mono bg-white/60 py-0.5 px-2 rounded-md inline-block">
              in 2025 • in July • in London
            </div>
          </div>

          {/* ON - Middle tier */}
          <div className="bg-indigo-100/90 border border-indigo-200 text-indigo-900 py-2.5 px-3 rounded-xl shadow-2xs w-[88%] mx-auto">
            <div className="font-extrabold text-sm text-indigo-800">ON (Mais Específico)</div>
            <div className="text-[11px] text-indigo-700 font-normal mt-0.5">
              Dias da semana, Datas com dia • Ruas, Avenidas
            </div>
            <div className="text-[10px] text-indigo-600/90 mt-1 font-mono bg-white/60 py-0.5 px-2 rounded-md inline-block">
              on Monday • on June 15th • on Oxford St.
            </div>
          </div>

          {/* AT - Narrowest pinpoint tier */}
          <div className="bg-emerald-100/90 border border-emerald-200 text-emerald-900 py-2.5 px-3 rounded-xl shadow-2xs w-[72%] mx-auto">
            <div className="font-extrabold text-sm text-emerald-800">AT (Ponto Exato)</div>
            <div className="text-[11px] text-emerald-700 font-normal mt-0.5">
              Horas exatas, Momentos pontuais • Endereço com número
            </div>
            <div className="text-[10px] text-emerald-700 font-mono bg-white/60 py-0.5 px-2 rounded-md inline-block">
              at 8:30 PM • at 221B Baker St.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Routine vs Now Diagram (Present Simple vs Continuous)
  if (type === 'present-vs-continuous') {
    return (
      <div className={`${className} bg-slate-50/80 rounded-2xl p-4 border border-indigo-100 shadow-2xs`}>
        <div className="text-center mb-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Comparação Visual: Rotina vs. Agora
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          {/* Routine */}
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span className="font-bold text-slate-900 block text-xs">Present Simple</span>
            <span className="text-[10px] text-slate-500 block">Hábitos frequentes</span>
            <span className="mt-2 text-[11px] font-medium text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded block">
              I drink coffee every day
            </span>
          </div>

          {/* Action now */}
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="font-bold text-slate-900 block text-xs">Continuous (-ing)</span>
            <span className="text-[10px] text-slate-500 block">Neste momento</span>
            <span className="mt-2 text-[11px] font-medium text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded block">
              I am drinking coffee now
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Timeline: Past Simple vs Present Perfect vs Future
  if (type === 'timeline-tense') {
    return (
      <div className={`${className} bg-slate-50/80 rounded-2xl p-4 border border-indigo-100 shadow-2xs`}>
        <div className="text-center mb-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Linha do Tempo Gramatical
          </span>
          <span className="text-[11px] text-slate-500">Como os tempos se conectam</span>
        </div>

        {/* Visual Line */}
        <div className="relative py-4 px-2">
          <div className="h-1.5 bg-slate-200 rounded-full w-full relative">
            <div className="absolute -top-1 left-[15%] w-3.5 h-3.5 rounded-full bg-rose-500 ring-2 ring-white" />
            <div className="absolute -top-1 left-[50%] w-3.5 h-3.5 rounded-full bg-indigo-600 ring-2 ring-white" />
            <div className="absolute -top-1 left-[85%] w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div className="grid grid-cols-3 gap-1 mt-3 text-center">
            <div>
              <span className="text-[10px] font-bold text-rose-700 block uppercase">Passado</span>
              <span className="text-xs font-semibold text-slate-800 block">Past Simple</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Tempo fechado (yesterday)</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-indigo-700 block uppercase">Ponte / Experiência</span>
              <span className="text-xs font-semibold text-slate-800 block">Present Perfect</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Sem tempo exato (have visited)</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-700 block uppercase">Futuro</span>
              <span className="text-xs font-semibold text-slate-800 block">Will / Going to</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Decisões & Planos</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Modals Scale (Can -> Should -> Must)
  if (type === 'modal-scale') {
    return (
      <div className={`${className} bg-slate-50/80 rounded-2xl p-4 border border-indigo-100 shadow-2xs`}>
        <div className="text-center mb-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Escala de Força dos Verbos Modais
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-200">
            <span className="w-16 font-bold text-blue-700">CAN</span>
            <span className="text-[11px] text-slate-500 flex-1">Capacidade ou permissão simples ("I can swim")</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Habilidade</span>
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-200">
            <span className="w-16 font-bold text-amber-700">SHOULD</span>
            <span className="text-[11px] text-slate-500 flex-1">Conselho ou recomendação amiga ("You should rest")</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-medium">Conselho</span>
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-200">
            <span className="w-16 font-bold text-rose-700">MUST</span>
            <span className="text-[11px] text-slate-500 flex-1">Obrigação forte ou lei mandatória ("You must stop")</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-medium">Obrigatório</span>
          </div>
        </div>
      </div>
    );
  }

  // Phrasal Verbs Formula (Verb + Particle = New meaning)
  if (type === 'phrasal-verbs-visual') {
    return (
      <div className={`${className} bg-slate-50/80 rounded-2xl p-4 border border-indigo-100 shadow-2xs text-center`}>
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
          A Equação dos Phrasal Verbs
        </span>
        <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm">
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-bold">
            Give (Dar)
          </span>
          <span className="text-slate-400 font-bold">+</span>
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-bold">
            Up (Cima)
          </span>
          <span className="text-indigo-600 font-bold">=</span>
          <span className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg font-bold">
            Desistir!
          </span>
        </div>
      </div>
    );
  }

  return null;
};

