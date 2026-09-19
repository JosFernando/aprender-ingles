import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Wifi, Battery } from 'lucide-react';

interface SimulatorFrameProps {
  isSimulator: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const SimulatorFrame: React.FC<SimulatorFrameProps> = ({
  isSimulator,
  onToggle,
  children
}) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isSimulator || isMobileScreen) {
    return (
      <div className="h-screen max-h-screen bg-white text-slate-900 flex flex-col w-full overflow-hidden">
        {!isMobileScreen && (
          <div className="bg-slate-50 text-slate-600 px-4 py-2 text-xs flex items-center justify-between border-b border-slate-200 flex-shrink-0 z-40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-700">Modo Ecrã Inteiro</span>
            </div>

            <button
              onClick={onToggle}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-white text-slate-700 font-semibold transition-colors text-xs"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ver Moldura Mobile</span>
            </button>
          </div>
        )}

        <div className="flex-1 min-h-0 w-full max-w-2xl mx-auto flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen max-h-screen bg-slate-100 p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Top Controls Bar */}
      <div className="w-full max-w-[410px] mb-2.5 flex items-center justify-between px-1 text-slate-600 text-xs flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-bold text-slate-700">Simulador Android</span>
        </div>

        <button
          onClick={onToggle}
          className="flex items-center gap-1 hover:text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 transition-colors text-xs font-semibold"
        >
          <Monitor className="w-3.5 h-3.5 text-slate-500" />
          <span>Ecrã Inteiro</span>
        </button>
      </div>

      {/* Android Device Shell */}
      <div className="w-full max-w-[410px] h-[min(844px,92vh)] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border border-slate-800 flex flex-col relative overflow-hidden flex-shrink-0">
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-40 ring-1 ring-slate-800/80" />

        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col relative">
          <div className="h-6 bg-white px-5 flex items-center justify-between text-[11px] font-semibold text-slate-600 border-b border-slate-100 z-30 select-none flex-shrink-0">
            <span>{currentTime}</span>
            <div className="flex items-center gap-2">
              <Wifi className="w-3 h-3 text-slate-500" />
              <Battery className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden relative flex flex-col">
            {children}
          </div>

          <div className="h-3.5 bg-white flex items-center justify-center pb-0.5 flex-shrink-0">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
