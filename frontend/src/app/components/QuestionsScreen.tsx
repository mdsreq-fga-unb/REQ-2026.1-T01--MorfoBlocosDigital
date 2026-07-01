import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowLeft, Check, X, Trophy, Sparkles, Loader2, BookOpen } from 'lucide-react';
import { api } from '../../lib/api';

type Question = { question: string; topic: string; options: string[]; correct: number; explanation: string };

// Formatos crus vindos do backend.
type AtividadeResumo = { id: number; titulo: string; tipo: string; nivel: number };
type PerguntaApi = {
  id: number;
  enunciado: string;
  alternativas: string[];
  correta: number;
  explicacao: string;
  topico: string;
};
type AtividadeDetalhe = { id: number; titulo: string; perguntas: PerguntaApi[] };

export function QuestionsScreen() {
  const navigate = useNavigate();

  const [atividades, setAtividades] = useState<AtividadeResumo[]>([]);
  const [atividadesProntas, setAtividadesProntas] = useState(false);

  // Quiz selecionado (null = tela de seleção).
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  // Id da atividade à qual "questions" corresponde (null = nada carregado).
  const [questionsFor, setQuestionsFor] = useState<number | null>(null);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

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

  // Carrega as perguntas do quiz selecionado.
  useEffect(() => {
    if (selectedId === null) return;
    let active = true;
    api
      .get<AtividadeDetalhe>(`/atividades/${selectedId}/`)
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
        setQuestionsFor(selectedId);
      })
      .catch((err) => console.error('Falha ao carregar perguntas:', err));
    return () => {
      active = false;
    };
  }, [selectedId]);

  const escolherQuiz = (id: number) => {
    setSelectedId(id);
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  const voltarSelecao = () => {
    setSelectedId(null);
    setFinished(false);
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  const tentarNovamente = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  const q = questions[current];
  const quizAtual = atividades.find((a) => a.id === selectedId);
  const carregandoPerguntas = selectedId !== null && questionsFor !== selectedId;
  const quizVazio = selectedId !== null && questionsFor === selectedId && questions.length === 0;

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

  // -------- Tela de seleção de quiz --------
  if (selectedId === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-3 sm:p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
            <Link to="/aluno/dashboard" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground shrink-0">
              <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Voltar</span>
            </Link>
            <h1 className="text-lg sm:text-2xl text-center">Escolha um Quiz</h1>
            <div className="w-8 sm:w-20" />
          </div>

          {!atividadesProntas ? (
            <div className="flex items-center justify-center gap-2 py-20 text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin" /> Carregando quizzes...
            </div>
          ) : atividades.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">Nenhum quiz cadastrado ainda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {atividades.map((a) => (
                <button
                  key={a.id}
                  onClick={() => escolherQuiz(a.id)}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-left border-2 border-transparent hover:border-blue-600 flex items-center gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg truncate">{a.titulo}</h2>
                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">Nível {a.nivel}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // -------- Carregando perguntas do quiz escolhido --------
  if (!finished && carregandoPerguntas) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="w-6 h-6 animate-spin" /> Carregando perguntas...
        </div>
      </div>
    );
  }

  // -------- Quiz sem perguntas --------
  if (!finished && quizVazio) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">
          <h2 className="text-xl sm:text-2xl mb-2">Quiz sem perguntas</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Este quiz ainda não tem perguntas cadastradas.
          </p>
          <button onClick={voltarSelecao} className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
            Escolher outro quiz
          </button>
        </div>
      </div>
    );
  }

  // -------- Tela de resultado --------
  if (finished) {
    const pct = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 max-w-md w-full text-center">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl" style={{ width: 'clamp(4.5rem, 15vw, 6rem)', height: 'clamp(4.5rem, 15vw, 6rem)' }}>
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl mb-2">Parabéns!</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Você concluiu "{quizAtual?.titulo}"</p>
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="text-4xl sm:text-5xl text-blue-600 mb-2">{score}/{questions.length}</div>
            <div className="text-sm sm:text-base text-muted-foreground">acertos ({pct.toFixed(0)}%)</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <button
                onClick={tentarNovamente}
                className="flex-1 py-3 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors shadow-md"
              >
                Tentar Novamente
              </button>
              <button
                onClick={voltarSelecao}
                className="flex-1 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-md"
              >
                Outro Quiz
              </button>
            </div>
            <button
              onClick={() => navigate('/aluno/dashboard')}
              className="w-full py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Voltar ao início
            </button>
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
          <button onClick={voltarSelecao} className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Quizzes</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-3 text-sm min-w-0">
            <span className="text-xs sm:text-sm text-muted-foreground truncate hidden sm:inline">{quizAtual?.titulo}</span>
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
