import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Trophy,
  Mic,
  MicOff,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Lesson } from '../types/grammar';
import { speechService } from '../services/speechService';
import { voiceRecognitionService } from '../services/voiceRecognitionService';
import { ExerciseIllustration } from './ExerciseIllustration';

interface ExerciseSessionProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (score: number) => void;
  onNextLesson?: () => void;
}

export const ExerciseSession: React.FC<ExerciseSessionProps> = ({
  lesson,
  onClose,
  onComplete,
  onNextLesson
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [orderedWords, setOrderedWords] = useState<string[]>([]);
  const [remainingWords, setRemainingWords] = useState<string[]>([]);
  
  // Speaking state
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [voiceAccuracy, setVoiceAccuracy] = useState<number | null>(null);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const stopListeningRef = useRef<(() => void) | null>(null);

  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSessionFinished, setIsSessionFinished] = useState(false);

  const currentExercise = lesson.exercises[currentIndex];
  const progressPercent = Math.round(((currentIndex) / lesson.exercises.length) * 100);

  // Reset states on question change
  useEffect(() => {
    if (stopListeningRef.current) {
      stopListeningRef.current();
      stopListeningRef.current = null;
    }
    setIsListening(false);
    setSpokenText('');
    setVoiceAccuracy(null);
    setVoiceError(null);

    if (currentExercise && currentExercise.type === 'reorder' && currentExercise.words) {
      setRemainingWords([...currentExercise.words]);
      setOrderedWords([]);
    } else {
      setRemainingWords([]);
      setOrderedWords([]);
    }
    setSelectedOption(null);
    setTextInput('');
    setIsAnswerChecked(false);
  }, [currentIndex, currentExercise]);

  // Clean up voice on unmount
  useEffect(() => {
    return () => {
      if (stopListeningRef.current) {
        stopListeningRef.current();
      }
    };
  }, []);

  const handleWordClick = (word: string, fromOrdered: boolean) => {
    if (isAnswerChecked) return;
    if (fromOrdered) {
      setOrderedWords(prev => prev.filter((_, i) => i !== prev.lastIndexOf(word)));
      setRemainingWords(prev => [...prev, word]);
    } else {
      setRemainingWords(prev => prev.filter((_, i) => i !== prev.indexOf(word)));
      setOrderedWords(prev => [...prev, word]);
    }
  };

  const toggleVoiceRecording = () => {
    if (isAnswerChecked || !currentExercise) return;

    if (isListening) {
      if (stopListeningRef.current) {
        stopListeningRef.current();
        stopListeningRef.current = null;
      }
      setIsListening(false);
      return;
    }

    setVoiceError(null);
    const target = currentExercise.correctAnswer;

    stopListeningRef.current = voiceRecognitionService.listen(
      target,
      (listening) => setIsListening(listening),
      (result) => {
        setSpokenText(result.transcript);
        setVoiceAccuracy(result.accuracy);
        if (result.accuracy >= 70) {
          setTimeout(() => {
            if (stopListeningRef.current) {
              stopListeningRef.current();
              stopListeningRef.current = null;
            }
          }, 600);
        }
      },
      (error) => {
        setVoiceError(error);
        setIsListening(false);
      }
    );
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || isAnswerChecked) return;

    let answerIsCorrect = false;

    if (currentExercise.type === 'multiple-choice') {
      answerIsCorrect = selectedOption?.trim().toLowerCase() === currentExercise.correctAnswer.trim().toLowerCase();
    } else if (currentExercise.type === 'fill-blank') {
      const cleanInput = textInput.trim().toLowerCase();
      const cleanTarget = currentExercise.correctAnswer.trim().toLowerCase();
      answerIsCorrect = cleanInput === cleanTarget;
    } else if (currentExercise.type === 'reorder') {
      const constructed = orderedWords.join(' ').trim().toLowerCase();
      const cleanTarget = currentExercise.correctAnswer.trim().toLowerCase();
      answerIsCorrect = constructed === cleanTarget;
    } else if (currentExercise.type === 'speaking') {
      answerIsCorrect = (voiceAccuracy !== null && voiceAccuracy >= 65) || 
        voiceRecognitionService.calculateSimilarity(spokenText, currentExercise.correctAnswer) >= 65;
    }

    setIsCorrect(answerIsCorrect);
    setIsAnswerChecked(true);

    if (answerIsCorrect) {
      setCorrectCount(prev => prev + 1);
      const phraseToSpeak = currentExercise.type === 'reorder' 
        ? currentExercise.correctAnswer 
        : (currentExercise.question?.replace('_____', currentExercise.correctAnswer) || currentExercise.correctAnswer);
      speechService.speak(phraseToSpeak);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < lesson.exercises.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      const finalScore = Math.round(((correctCount + (isCorrect ? 1 : 0)) / lesson.exercises.length) * 100);
      setIsSessionFinished(true);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setIsSessionFinished(false);
    setIsAnswerChecked(false);
  };

  if (isSessionFinished) {
    const finalScore = Math.round((correctCount / lesson.exercises.length) * 100);
    const xpEarned = Math.round(finalScore * 1.5) + 30;

    return (
      <div className="h-full min-h-0 bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 pt-[max(env(safe-area-inset-top,0px),1rem)] pb-[max(env(safe-area-inset-bottom,0px),1.5rem)] safe-x-padded overflow-y-auto w-full">
        <div className="max-w-sm w-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xl text-center my-auto space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
            <Trophy className="w-7 h-7 text-white" />
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900 mb-1 tracking-tight">
              {finalScore >= 80 ? 'Excelente!' : finalScore >= 50 ? 'Bom Trabalho!' : 'Prática Concluída!'}
            </h2>
            <p className="text-xs text-slate-500 truncate font-medium">
              {lesson.title}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-50/70 border border-indigo-200/70 rounded-2xl p-3 text-center">
              <span className="text-xl font-black text-indigo-700 block">{finalScore}%</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Acurácia</span>
            </div>
            <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-3 text-center">
              <span className="text-xl font-black text-amber-700 block">+{xpEarned}</span>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">XP Ganho</span>
            </div>
          </div>

          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
            Acertaste <strong className="text-indigo-600 font-bold">{correctCount}</strong> de <strong className="font-bold">{lesson.exercises.length}</strong> exercícios.
          </div>

          <div className="space-y-2 pt-1">
            {onNextLesson && (
              <button
                onClick={onNextLesson}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all active:scale-98"
              >
                <span>Próxima Lição</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all active:scale-98 ${
                onNextLesson 
                  ? 'border border-slate-200 hover:bg-slate-50 text-slate-700' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20'
              }`}
            >
              Concluir
            </button>
            <button
              onClick={handleRestart}
              className="w-full py-2 px-4 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repetir</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isCheckDisabled = 
    (currentExercise.type === 'multiple-choice' && !selectedOption) ||
    (currentExercise.type === 'fill-blank' && !textInput.trim()) ||
    (currentExercise.type === 'reorder' && orderedWords.length === 0) ||
    (currentExercise.type === 'speaking' && !spokenText.trim());

  return (
    <div className="h-full min-h-0 bg-slate-50/60 flex flex-col justify-between w-full overflow-hidden">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200/80 px-4 sm:px-6 pt-[max(env(safe-area-inset-top,0px),0.625rem)] pb-2.5 sticky top-0 z-20 flex-shrink-0 shadow-2xs safe-x-padded">
        <div className="max-w-2xl mx-auto flex items-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors flex-shrink-0"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-300 shadow-xs"
                style={{ width: `${Math.max(4, progressPercent)}%` }}
              />
            </div>
          </div>

          <span className="text-[11px] font-bold text-indigo-700 flex-shrink-0 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
            {currentIndex + 1} / {lesson.exercises.length}
          </span>
        </div>
      </div>

      {/* Main Exercise Area */}
      <div className="flex-1 min-h-0 overflow-y-auto max-w-2xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col justify-center space-y-3.5">
        {/* Real photo or Illustration */}
        {currentExercise.image ? (
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs w-full bg-slate-100 flex items-center justify-center max-h-44 sm:max-h-52">
            <img 
              src={currentExercise.image} 
              alt="Contexto visual do exercício" 
              className="w-full h-36 sm:h-44 object-cover object-center" 
              loading="lazy"
            />
          </div>
        ) : (
          <div className="py-0.5">
            <ExerciseIllustration 
              question={currentExercise.question || currentExercise.instruction} 
              category={lesson.category} 
            />
          </div>
        )}

        {/* Instruction Badge & Title */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            {currentExercise.type === 'speaking' ? (
              <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200/80 px-2 py-0.5 rounded">
                <Mic className="w-2.5 h-2.5" />
                Voz & Fala
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                {currentExercise.type === 'multiple-choice' ? 'Escolha' : currentExercise.type === 'fill-blank' ? 'Preenchimento' : 'Ordem'}
              </span>
            )}
          </div>

          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {currentExercise.instruction}
          </h2>
        </div>

        {/* Question Card */}
        {currentExercise.question && currentExercise.type !== 'speaking' && (
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
            <div className="flex items-start justify-between gap-3">
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed break-words flex-1">
                {currentExercise.question}
              </p>
              <button
                onClick={() => speechService.speak(currentExercise.question ? currentExercise.question.replace('_____', 'blank') : '')}
                className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 border border-slate-200/60 transition-colors flex-shrink-0"
                title="Ouvir"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* INPUT MODE 1: MULTIPLE CHOICE */}
        {currentExercise.type === 'multiple-choice' && currentExercise.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
            {currentExercise.options.map((opt, idx) => {
              const isSelected = selectedOption === opt;
              let btnClass = "bg-white border-slate-200/90 hover:border-indigo-400 text-slate-800 shadow-2xs";
              
              if (isAnswerChecked) {
                if (opt.toLowerCase() === currentExercise.correctAnswer.toLowerCase()) {
                  btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-500/20";
                } else if (isSelected && !isCorrect) {
                  btnClass = "bg-rose-50 border-rose-400 text-rose-800 line-through font-bold";
                } else {
                  btnClass = "opacity-40 bg-white border-slate-200 text-slate-400";
                }
              } else if (isSelected) {
                btnClass = "bg-indigo-50/80 border-indigo-600 text-indigo-900 font-bold ring-2 ring-indigo-500/20";
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswerChecked}
                  onClick={() => setSelectedOption(opt)}
                  className={`p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-2.5 break-words min-h-[48px] ${btnClass}`}
                >
                  <span className="break-words flex-1 leading-snug">{opt}</span>
                  <span className="text-[10px] w-5 h-5 rounded-full border border-current/20 flex items-center justify-center flex-shrink-0 opacity-60">
                    {String.fromCharCode(65 + idx)}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* INPUT MODE 2: FILL IN THE BLANK */}
        {currentExercise.type === 'fill-blank' && (
          <div className="bg-white rounded-2xl border-2 border-slate-200/90 p-4 sm:p-5 focus-within:border-indigo-600 shadow-2xs transition-colors">
            <label className="block text-xs text-slate-500 font-bold mb-1.5">
              Escreve a resposta:
            </label>
            <input
              type="text"
              disabled={isAnswerChecked}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isCheckDisabled && !isAnswerChecked) {
                  handleCheckAnswer();
                }
              }}
              placeholder="Digite aqui..."
              className="w-full text-base sm:text-lg font-bold text-slate-900 outline-none bg-transparent placeholder-slate-300"
              autoFocus
            />
          </div>
        )}

        {/* INPUT MODE 3: REORDER WORDS */}
        {currentExercise.type === 'reorder' && (
          <div className="space-y-2.5 pt-0.5">
            <div className="min-h-[64px] bg-indigo-50/40 border-2 border-dashed border-indigo-200 rounded-2xl p-2.5 flex flex-wrap gap-2 items-center">
              {orderedWords.length === 0 ? (
                <span className="text-xs text-indigo-400 font-medium">Toque nas palavras para ordenar...</span>
              ) : (
                orderedWords.map((word, idx) => (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleWordClick(word, true)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-xs transition-transform active:scale-95 break-words"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-1.5">
              {remainingWords.map((word, idx) => (
                <button
                  key={idx}
                  disabled={isAnswerChecked}
                  onClick={() => handleWordClick(word, false)}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-indigo-500 font-bold text-xs sm:text-sm text-slate-800 transition-all active:scale-95 break-words shadow-2xs"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* INPUT MODE 4: SPEAKING / VOICE EXERCISE */}
        {currentExercise.type === 'speaking' && (
          <div className="space-y-3.5 pt-0.5">
            {/* Target Sentence Card */}
            <div className="bg-white border-2 border-indigo-100 rounded-2xl p-4 sm:p-5 shadow-2xs text-center">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="text-[11px] text-indigo-600 font-bold uppercase tracking-wider">
                  Frase em Inglês
                </span>
                <button
                  onClick={() => speechService.speak(currentExercise.correctAnswer)}
                  className="p-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
                  title="Ouvir"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                "{currentExercise.correctAnswer}"
              </p>

              {currentExercise.question && (
                <p className="text-xs text-slate-500 mt-1.5 font-medium">
                  {currentExercise.question}
                </p>
              )}
            </div>

            {/* Microphone Recording Action Area */}
            <div className="flex flex-col items-center justify-center py-2">
              <button
                type="button"
                disabled={isAnswerChecked}
                onClick={toggleVoiceRecording}
                className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  isListening
                    ? 'bg-rose-600 text-white scale-105 shadow-rose-600/30 animate-pulse ring-6 ring-rose-100'
                    : spokenText
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/30 active:scale-95'
                }`}
                title={isListening ? "Parar" : "Falar"}
              >
                {isListening ? (
                  <MicOff className="w-7 h-7 animate-bounce" />
                ) : (
                  <Mic className="w-7 h-7" />
                )}
              </button>

              <span className="text-[11px] font-bold mt-2 text-slate-600">
                {isListening ? (
                  <span className="text-rose-600 animate-pulse">A ouvir... Fale agora</span>
                ) : spokenText ? (
                  <span className="text-emerald-700">Fala registada</span>
                ) : (
                  <span>Toque para pronunciar</span>
                )}
              </span>
            </div>

            {/* Voice Feedback & Transcript */}
            {spokenText && (
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 text-center space-y-1.5">
                <div className="text-[11px] text-slate-500 font-semibold">
                  Ouvido:
                </div>
                <div className="text-sm font-bold text-slate-800">
                  "{spokenText}"
                </div>
                {voiceAccuracy !== null && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white border border-slate-200">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Acurácia: <strong>{voiceAccuracy}%</strong></span>
                  </div>
                )}
              </div>
            )}

            {/* Error Message with short button */}
            {voiceError && (
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{voiceError}</span>
                  <button
                    onClick={() => {
                      setSpokenText(currentExercise.correctAnswer);
                      setVoiceAccuracy(100);
                      setVoiceError(null);
                    }}
                    className="block mt-1 text-indigo-700 underline font-bold"
                  >
                    Pular voz
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Bar - Short Button "Verificar", "Seguinte" ou "Resultados" */}
      <div className="p-3.5 sm:p-4 pb-[max(env(safe-area-inset-bottom,0px),1.25rem)] bg-white border-t border-slate-200/80 flex-shrink-0 shadow-lg z-30 safe-x-padded">
        <div className="max-w-2xl mx-auto w-full space-y-2.5">
          {isAnswerChecked && (
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="font-extrabold text-xs text-emerald-900">Correto</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span className="font-extrabold text-xs text-rose-900">Incorreto</span>
                  </>
                )}
              </div>

              {!isCorrect && (
                <div className="text-xs text-slate-700 break-words">
                  Resposta: <span className="font-bold text-indigo-700">{currentExercise.correctAnswer}</span>
                </div>
              )}

              <p className="text-xs text-slate-500 leading-relaxed break-words">
                {currentExercise.explanation}
              </p>
            </div>
          )}

          {!isAnswerChecked ? (
            <button
              disabled={isCheckDisabled}
              onClick={handleCheckAnswer}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                isCheckDisabled
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20 active:scale-98'
              }`}
            >
              Verificar
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-98 ${
                isCorrect ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'
              }`}
            >
              <span>{currentIndex + 1 < lesson.exercises.length ? 'Seguinte' : 'Resultados'}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
