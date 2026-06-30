import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Check, X, Trophy, Sparkles, Loader2 } from 'lucide-react';
import { api } from '../../lib/api';

type Question = { question: string; topic: string; options: string[]; correct: number; explanation: string };

// Formatos crus vindos do backend.
type AtividadeResumo = { id: number; tipo: string; nivel: number };
type PerguntaApi = {
  id: number;
  enunciado: string;
  alternativas: string[];
  correta: number;
  explicacao: string;
  topico: string;
};
type AtividadeDetalhe = { id: number; perguntas: PerguntaApi[] };

export function QuestionsScreen() {
  const [level, setLevel] = useState<1 | 2>(1);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

  const [atividades, setAtividades] = useState<AtividadeResumo[]>([]);
  const [atividadesProntas, setAtividadesProntas] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  // Nível ao qual o "questions" carregado corresponde (null = nada carregado).
  const [questionsLevel, setQuestionsLevel] = useState<number | null>(null);

  // Lista as atividades do tipo quiz uma vez.
  useEffect(() => {
    let active = true;
    api
      .get<AtividadeResumo[]>('/atividades/?tipo=quiz')
      .then(({ data }) => {
        if (active) setAtividades(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error('Falha ao carregar atividades:', err))
      .finally(() => {
        if (active) setAtividadesProntas(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const atividadeDoNivel = atividades.find((a) => a.nivel === level);

  // Carrega as perguntas da atividade do nível selecionado.
  useEffect(() => {
    if (!atividadeDoNivel) return;
    let active = true;
    api
      .get<AtividadeDetalhe>(`/atividades/${atividadeDoNivel.id}/`)
      .then(({ data }) => {
        if (!active) return;
        setQuestions(
          data.perguntas.map((p) => ({
            question: p.enunciado,
            topic: p.topico,
            options: p.alternativas,
            correct: p.correta,
            explanation: p.explicacao,
          })),
        );
        setQuestionsLevel(level);
      })
      .catch((err) => console.error('Falha ao carregar perguntas:', err));
    return () => {
      active = false;
    };
  }, [level, atividadeDoNivel]);

  // Loading e disponibilidade derivados (sem setState em efeito).
  const carregando = !atividadesProntas || (!!atividadeDoNivel && questionsLevel !== level);
  const semQuiz =
    atividadesProntas &&
    (!atividadeDoNivel || (questionsLevel === level && questions.length === 0));

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
    if (showResult || !q) return;
    const isCorrect = idx === q.correct;
    setSelected(idx);
    setShowResult(true);
    if (isCorrect) setScore(score + 1);
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

  // Estados de carregamento / quiz indisponível para o nível.
  if (!finished && carregando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="w-6 h-6 animate-spin" /> Carregando perguntas...
        </div>
      </div>
    );
  }

  if (!finished && semQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">
          <h2 className="text-xl sm:text-2xl mb-2">Nenhuma pergunta disponível</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Ainda não há um quiz cadastrado para o Nível {level}.
          </p>
          <div className="flex flex-col gap-3">
            {level === 2 && (
              <button onClick={() => reset(1)} className="w-full py-3 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors">
                Voltar ao Nível 1
              </button>
            )}
            <button onClick={() => navigate('/aluno/dashboard')} className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = (score / questions.length) * 100;
    const unlockedLevel2 = level === 1 && pct >= 80;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 max-w-md w-full text-center">
          <div className="w-18 h-18 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl" style={{ width: 'clamp(4.5rem, 15vw, 6rem)', height: 'clamp(4.5rem, 15vw, 6rem)' }}>
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl mb-2">Parabéns!</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Você concluiu o Nível {level}</p>
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="text-4xl sm:text-5xl text-blue-600 mb-2">{score}/{questions.length}</div>
            <div className="text-sm sm:text-base text-muted-foreground">acertos ({pct.toFixed(0)}%)</div>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-3 sm:p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <Link to="/aluno/dashboard" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Voltar</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 text-sm">
            <div className="flex rounded-full overflow-hidden border border-border bg-white shadow-sm">
              <button
                onClick={() => reset(1)}
                className={`px-2 sm:px-3 py-1 transition-colors text-xs sm:text-sm ${level === 1 ? 'bg-blue-100 text-blue-700' : 'text-muted-foreground hover:bg-blue-50'}`}
              >
                Nível 1
              </button>
              <button
                onClick={() => reset(2)}
                className={`px-2 sm:px-3 py-1 transition-colors text-xs sm:text-sm ${level === 2 ? 'bg-red-100 text-red-700' : 'text-muted-foreground hover:bg-red-50'}`}
              >
                Nível 2
              </button>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {current + 1}/{questions.length}
            </span>
          </div>
        </div>

        <div className="bg-white/60 rounded-full h-2 overflow-hidden mb-4 sm:mb-8 shadow-inner">
          <div
            className="bg-gradient-to-r from-blue-600 to-yellow-400 h-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8">
          <div className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-700 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            {q.topic}
          </div>
          <h2 className="text-lg sm:text-2xl mb-4 sm:mb-8">{q.question}</h2>

          <div className="space-y-2 sm:space-y-3">
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
                  className={`w-full p-3 sm:p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between text-sm sm:text-base ${style}`}
                >
                  <span>{option}</span>
                  {showResult && isAns && <Check className="w-5 h-5 text-green-600" />}
                  {showResult && isSel && !isAns && <X className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`mt-4 sm:mt-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
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
