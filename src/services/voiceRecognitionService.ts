// Speech Recognition Service for Voice / Speaking Exercises

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export interface VoiceResult {
  transcript: string;
  accuracy: number; // 0 - 100
  isMatch: boolean;
}

class VoiceRecognitionService {
  private recognition: any = null;
  public isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.isSupported = true;
      }
    }
  }

  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'!]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  public calculateSimilarity(spoken: string, target: string): number {
    const cleanSpoken = this.normalizeText(spoken);
    const cleanTarget = this.normalizeText(target);

    if (cleanSpoken === cleanTarget) return 100;
    if (!cleanSpoken || !cleanTarget) return 0;

    const spokenWords = cleanSpoken.split(' ');
    const targetWords = cleanTarget.split(' ');

    let matchingWords = 0;
    targetWords.forEach(word => {
      if (spokenWords.includes(word)) {
        matchingWords++;
      }
    });

    const wordAccuracy = Math.round((matchingWords / targetWords.length) * 100);
    return Math.min(100, Math.max(0, wordAccuracy));
  }

  public listen(
    targetSentence: string,
    onListeningChange: (isListening: boolean) => void,
    onResult: (result: VoiceResult) => void,
    onError: (errorMessage: string) => void
  ): () => void {
    if (typeof window === 'undefined') {
      onError('Reconhecimento de voz não disponível.');
      return () => {};
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      onError('O seu navegador não suporta reconhecimento de voz. Recomendamos o Google Chrome.');
      return () => {};
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      let finalTranscript = '';

      this.recognition.onstart = () => {
        onListeningChange(true);
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const currentText = (finalTranscript || interimTranscript).trim();
        if (currentText) {
          const accuracy = this.calculateSimilarity(currentText, targetSentence);
          onResult({
            transcript: currentText,
            accuracy,
            isMatch: accuracy >= 70
          });
        }
      };

      this.recognition.onerror = (event: any) => {
        onListeningChange(false);
        if (event.error === 'not-allowed') {
          onError('Permissão de microfone negada. Por favor, ative o microfone nas permissões.');
        } else if (event.error === 'no-speech') {
          onError('Nenhuma fala detetada. Tente falar um pouco mais perto do microfone.');
        } else {
          onError(`Erro de áudio (${event.error}). Tente novamente.`);
        }
      };

      this.recognition.onend = () => {
        onListeningChange(false);
      };

      this.recognition.start();

      return () => {
        if (this.recognition) {
          try {
            this.recognition.stop();
          } catch (_) {}
        }
      };
    } catch (err: any) {
      onListeningChange(false);
      onError('Não foi possível iniciar o microfone.');
      return () => {};
    }
  }

  public stop() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (_) {}
    }
  }
}

export const voiceRecognitionService = new VoiceRecognitionService();

