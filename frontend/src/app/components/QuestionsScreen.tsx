import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Check, X, Trophy, Sparkles } from 'lucide-react';
import { useAppState } from '../state/AppState';
import type { Topic } from '../state/AppState';

type Question = { question: string; topic: Topic; options: string[]; correct: number; explanation: string };

const questionsLevel2: Question[] = [
  {
    question: 'A palavra "infelizmente" é formada por:',
    topic: 'Derivação',
    options: ['Prefixo + Radical', 'Radical + Sufixo', 'Prefixo + Radical + Sufixo', 'Dois Radicais + Sufixo'],
    correct: 2,
    explanation: '"in-" (prefixo) + "feliz" (radical) + "-mente" (sufixo). É derivação prefixal e sufixal.',
  },
  {
    question: 'Qual palavra abaixo é formada por composição por aglutinação?',
    topic: 'Composição',
    options: ['guarda-chuva', 'planalto', 'passatempo', 'beija-flor'],
    correct: 1,
    explanation: '"Planalto" (plano + alto) é aglutinação, pois há fusão e perda fonética. As demais são justaposição.',
  },
  {
    question: 'O morfema "-ável" em "amável" é classificado como:',
    topic: 'Sufixos',
    options: ['Sufixo nominal', 'Sufixo verbal', 'Sufixo adjetival', 'Desinência'],
    correct: 2,
    explanation: 'O sufixo "-ável" forma adjetivos a partir de verbos, indicando possibilidade.',
  },
  {
    question: 'Em "desencanto", quantos morfemas existem?',
    topic: 'Prefixos',
    options: ['1', '2', '3', '4'],
    correct: 2,
    explanation: '"des-" (prefixo) + "en-" (prefixo) + "canto" (radical) = 3 morfemas.',
  },
  {
    question: 'A vogal temática de "cantar" é:',
    topic: 'Radicais',
    options: ['c', 'a', 'n', 'r'],
    correct: 1,
    explanation: 'A vogal temática "a" indica que o verbo pertence à 1ª conjugação.',
  },
];

const questionsLevel1: Question[] = [
  {
    question: 'Qual é o prefixo da palavra "infeliz"?',
    topic: 'Prefixos',
    options: ['in-', 'feliz', '-iz', 'fel-'],
    correct: 0,
    explanation: 'O prefixo "in-" indica negação, transformando "feliz" em "infeliz".',
  },
  {
    question: 'A palavra "amorzinho" possui qual sufixo?',
    topic: 'Sufixos',
    options: ['-or', '-inho', 'amor-', '-zi'],
    correct: 1,
    explanation: 'O sufixo "-inho" indica diminutivo ou afetividade.',
  },
  {
    question: 'Qual é o radical da palavra "pedreiro"?',
    topic: 'Radicais',
    options: ['-eiro', 'pe-', 'pedr-', '-dre'],
    correct: 2,
    explanation: 'O radical "pedr-" é a parte que carrega o significado básico da palavra.',
  },
  {
    question: 'A palavra "desleal" é formada por:',
    topic: 'Derivação',
    options: ['Prefixo + Radical', 'Radical + Sufixo', 'Só Radical', 'Dois Radicais'],
    correct: 0,
    explanation: 'O prefixo "des-" indica negação somado ao radical "leal".',
  },
  {
    question: 'A palavra "guarda-chuva" é um exemplo de:',
    topic: 'Composição',
    options: ['Derivação', 'Composição', 'Prefixação', 'Sufixação'],
    correct: 1,
    explanation: 'A composição une duas palavras independentes para formar uma nova.',
  },
];

export function QuestionsScreen() {
  const [level, setLevel] = useState<1 | 2>(1);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();
  const { addHistory } = useAppState();

  const questions = level === 1 ? questionsLevel1 : questionsLevel2;
  const q = questions[current];
  const reset = (nextLevel: 1 | 2) => {
    setLevel(nextLevel);
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  const handleSelect = (idx: number) => {
    if (showResult) return;
    const isCorrect = idx === q.correct;
    setSelected(idx);
    setShowResult(true);
    if (isCorrect) setScore(score + 1);
    addHistory({ question: q.question, topic: q.topic, correct: isCorrect });
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (finished) {
    const pct = (score / questions.length) * 100;
    const unlockedLevel2 = level === 1 && pct >= 80;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl mb-2">Parabéns!</h2>
          <p className="text-muted-foreground mb-6">Você concluiu o Nível {level}</p>
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-6 mb-6">
            <div className="text-5xl text-blue-600 mb-2">{score}/{questions.length}</div>
            <div className="text-muted-foreground">acertos ({pct.toFixed(0)}%)</div>
          </div>
          {unlockedLevel2 && (
            <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-2 border-yellow-400 rounded-2xl p-4 mb-4">
              <div className="text-yellow-700 mb-1">🔓 Nível 2 desbloqueado!</div>
              <div className="text-xs text-muted-foreground">Você atingiu mais de 80% de acertos.</div>
            </div>
          )}
          {level === 1 && !unlockedLevel2 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 text-sm text-muted-foreground">
              Atinja 80% de acertos para desbloquear o Nível 2.
            </div>
          )}
          <div className="flex flex-col gap-3">
            {unlockedLevel2 && (
              <button
                onClick={() => reset(2)}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-xl hover:opacity-90 transition shadow-md"
              >
                Avançar para o Nível 2 →
              </button>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => reset(level)}
                className="flex-1 py-3 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors shadow-md"
              >
                Tentar Novamente
              </button>
              <button
                onClick={() => navigate('/aluno/dashboard')}
                className="flex-1 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-md"
              >
                Voltar
              </button>
            </div>
            {level === 2 && (
              <button
                onClick={() => reset(1)}
                className="w-full py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                Voltar ao Nível 1
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selected === q.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/aluno/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" /> Voltar
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex rounded-full overflow-hidden border border-border bg-white shadow-sm">
              <button
                onClick={() => reset(1)}
                className={`px-3 py-1 transition-colors ${level === 1 ? 'bg-blue-100 text-blue-700' : 'text-muted-foreground hover:bg-blue-50'}`}
              >
                Nível 1
              </button>
              <button
                onClick={() => reset(2)}
                className={`px-3 py-1 transition-colors ${level === 2 ? 'bg-red-100 text-red-700' : 'text-muted-foreground hover:bg-red-50'}`}
              >
                Nível 2
              </button>
            </div>
            <span className="text-muted-foreground">
              Pergunta {current + 1} de {questions.length}
            </span>
          </div>
        </div>

        <div className="bg-white/60 rounded-full h-2 overflow-hidden mb-8 shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-600 to-yellow-400 h-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-700 rounded-full text-sm mb-4">
            {q.topic}
          </div>
          <h2 className="text-2xl mb-8">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const isSel = selected === idx;
              const isAns = idx === q.correct;
              let style = 'border-border hover:border-primary hover:bg-blue-50 hover:-translate-y-0.5';
              if (showResult && isAns) style = 'border-green-500 bg-green-50 shadow-md';
              else if (showResult && isSel && !isAns) style = 'border-red-500 bg-red-50 shadow-md';
              else if (showResult) style = 'border-border opacity-60';

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${style}`}
                >
                  <span>{option}</span>
                  {showResult && isAns && <Check className="w-5 h-5 text-green-600" />}
                  {showResult && isSel && !isAns && <X className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`mt-6 p-5 rounded-2xl border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-green-700">Resposta correta!</div>
                  </>
                ) : (
                  <>
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-red-700">Resposta incorreta</div>
                  </>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4">💡 {q.explanation}</p>
              <button
                onClick={handleNext}
                className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-md"
              >
                {current + 1 >= questions.length ? 'Ver Resultado' : 'Próxima Pergunta →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
