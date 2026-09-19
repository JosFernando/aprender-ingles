import React from 'react';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Plane, 
  Compass, 
  Sparkles, 
  MessageSquare, 
  BookOpen, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface ExerciseIllustrationProps {
  question: string;
  category: string;
}

export const ExerciseIllustration: React.FC<ExerciseIllustrationProps> = ({ question, category }) => {
  const q = question.toLowerCase();

  let Icon = Sparkles;
  let bgClass = "bg-indigo-50 text-indigo-700 border-indigo-200";
  let label = "Contexto Gramatical";

  if (q.includes('yesterday') || q.includes('night') || q.includes('past') || q.includes('ago')) {
    Icon = Clock;
    bgClass = "bg-rose-50 text-rose-700 border-rose-200";
    label = "Ação no Passado";
  } else if (q.includes('flight') || q.includes('travel') || q.includes('canada') || q.includes('london') || q.includes('new york')) {
    Icon = Plane;
    bgClass = "bg-sky-50 text-sky-700 border-sky-200";
    label = "Viagens & Lugares";
  } else if (q.includes('monday') || q.includes('july') || q.includes('birthday') || q.includes('summer')) {
    Icon = Calendar;
    bgClass = "bg-indigo-50 text-indigo-700 border-indigo-200";
    label = "Tempo & Datas";
  } else if (q.includes('doctor') || q.includes('hospital') || q.includes('sick')) {
    Icon = AlertCircle;
    bgClass = "bg-amber-50 text-amber-700 border-amber-200";
    label = "Saúde & Conselhos";
  } else if (category === 'PREPOSITIONS' || q.includes('station') || q.includes('avenue') || q.includes('in') || q.includes('on') || q.includes('at')) {
    Icon = MapPin;
    bgClass = "bg-teal-50 text-teal-700 border-teal-200";
    label = "Localização ou Horário";
  } else if (category === 'IDIOMS' || q.includes('actually') || q.includes('parents') || q.includes('push')) {
    Icon = MessageSquare;
    bgClass = "bg-purple-50 text-purple-700 border-purple-200";
    label = "Vocabulário & Expressões";
  } else {
    Icon = BookOpen;
    bgClass = "bg-blue-50 text-blue-700 border-blue-200";
    label = "Gramática Prática";
  }

  return (
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${bgClass}`}>
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

