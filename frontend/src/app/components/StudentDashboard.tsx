import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, Puzzle, Trophy, Brain, LogOut, User, Check, X, History } from 'lucide-react';
import { Logo } from './Logo';
import { useAppState } from '../state/AppState';
import { api } from '../../lib/api';

// Formato cru vindo do backend (GET /api/historico/).
type Tentativa = { id: number; palavra: string; acertou: boolean; data: string };
type Historico = { total: number; acertos: number; itens: Tentativa[] };

export function StudentDashboard() {
  const { usuario } = useAppState();
  // Exibe o nome real (first_name); cai para username/email só se vazio.
  const studentName = usuario?.first_name?.trim() || usuario?.username || 'Aluno';

  const [historico, setHistorico] = useState<Historico | null>(null);

  useEffect(() => {
    let active = true;
    api
      .get<Historico>('/historico/')
      .then(({ data }) => {
        if (active) setHistorico(data);
      })
      .catch((err) => {
        console.error('Falha ao carregar histórico:', err);
      });
    return () => {
      active = false;
    };
  }, []);

  const totalAnswered = historico?.total ?? 0;
  const correct = historico?.acertos ?? 0;
  const progress = totalAnswered ? Math.round((correct / totalAnswered) * 100) : 0;
  const points = correct * 50;
  const level = Math.max(1, Math.floor(correct / 3) + 1);
  const recent = (historico?.itens ?? []).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">
      <header className="bg-white/90 backdrop-blur border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Logo size="sm" />
            <h1 className="text-lg sm:text-2xl truncate">Morfoblocos Digital</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-sm text-muted-foreground">Olá,</div>
              <div>{studentName}</div>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <Link to="/login" className="text-muted-foreground hover:text-foreground">
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Nível Atual</div>
                <div className="text-2xl sm:text-3xl">Nível {level}</div>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Pontos</div>
                <div className="text-2xl sm:text-3xl">{points}</div>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Aproveitamento</div>
                <div className="text-2xl sm:text-3xl">{progress}%</div>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-100 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" />
              </div>
            </div>
            <div className="mt-3 sm:mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-yellow-400 h-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            <Link
              to="/aluno/perguntas"
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group border-2 border-transparent hover:border-blue-600"
            >
              <div className="flex sm:block items-center gap-3">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center sm:mb-4 group-hover:scale-110 transition-transform shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl mb-0.5 sm:mb-2">Responder Perguntas</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm">Teste seus conhecimentos sobre morfologia</p>
                </div>
              </div>
            </Link>

            <Link
              to="/aluno/blocos"
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group border-2 border-transparent hover:border-yellow-500"
            >
              <div className="flex sm:block items-center gap-3">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center sm:mb-4 group-hover:scale-110 transition-transform shrink-0">
                  <Puzzle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl mb-0.5 sm:mb-2">Junção de Blocos</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm">Monte palavras combinando blocos morfológicos</p>
                </div>
              </div>
            </Link>

            <Link
              to="/aluno/aprendizagem"
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group border-2 border-transparent hover:border-red-500 sm:col-span-2"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-xl mb-0.5 sm:mb-1">Área de Aprendizagem</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm">Estude conceitos e revise conteúdos</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-5 flex items-center gap-3">
              <History className="w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="text-base sm:text-lg">Histórico de Tentativas</h3>
                <div className="text-xs opacity-90">Seu desempenho recente</div>
              </div>
            </div>
            <div className="p-3 sm:p-4 max-h-72 sm:max-h-96 overflow-y-auto">
              {recent.length === 0 ? (
                <div className="text-center text-muted-foreground py-8 text-sm">
                  Você ainda não fez nenhuma tentativa.
                </div>
              ) : (
                <ul className="space-y-2">
                  {recent.map((h) => (
                    <li key={h.id} className={`p-3 rounded-lg border-l-4 ${h.acertou ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                      <div className="flex items-start gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${h.acertou ? 'bg-green-500' : 'bg-red-500'}`}>
                          {h.acertou ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm truncate">{h.palavra}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 bg-white rounded-full text-muted-foreground">
                              {h.acertou ? 'Válida' : 'Inválida'}
                            </span>
                            <span className="text-xs text-muted-foreground">{h.data.slice(0, 10)}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
