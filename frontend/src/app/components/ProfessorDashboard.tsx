import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Users, TrendingUp, Award, AlertCircle, LogOut, User, Loader2 } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { Logo } from './Logo';
import { useAppState } from '../state/AppState';
import { api } from '../../lib/api';

// Formato cru vindo do backend (GET /api/professor/relatorio/).
type PalavraErrada = { palavra: string; ocorrencias: number };
type AlunoRelatorio = {
  id: number;
  nome: string;
  email: string;
  respondidas: number;
  acertos: number;
  aproveitamento: number;
};
type Relatorio = {
  total_alunos: number;
  total_tentativas: number;
  acertos: number;
  erros: number;
  taxa_acerto: number;
  palavras_mais_erradas: PalavraErrada[];
  alunos: AlunoRelatorio[];
};

// Classifica o status do aluno a partir do aproveitamento.
function statusDoAluno(respondidas: number, pct: number) {
  if (respondidas === 0) return { status: 'Sem dados', color: 'bg-gray-200 text-gray-700', barColor: 'bg-gray-400' };
  if (pct >= 80) return { status: 'Excelente', color: 'bg-blue-100 text-blue-700', barColor: 'bg-blue-600' };
  if (pct >= 65) return { status: 'Bom', color: 'bg-yellow-100 text-yellow-700', barColor: 'bg-yellow-500' };
  if (pct >= 50) return { status: 'Regular', color: 'bg-orange-100 text-orange-700', barColor: 'bg-orange-500' };
  return { status: 'Precisa Ajuda', color: 'bg-red-100 text-red-700', barColor: 'bg-red-500' };
}

export function ProfessorDashboard() {
  const { usuario } = useAppState();
  const [relatorio, setRelatorio] = useState<Relatorio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    api
      .get<Relatorio>('/professor/relatorio/')
      .then(({ data }) => {
        if (active) setRelatorio(data);
      })
      .catch((err) => {
        console.error('Falha ao carregar relatório:', err);
        if (active) setError('Não foi possível carregar o relatório. Tente novamente.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const alunos = relatorio?.alunos ?? [];
  const palavrasErradas = relatorio?.palavras_mais_erradas ?? [];
  const altoDesempenho = alunos.filter((a) => a.respondidas >= 3 && a.aproveitamento >= 80).length;
  const precisamAjuda = alunos.filter((a) => a.respondidas > 0 && a.aproveitamento < 50).length;
  const maxOcorrencias = Math.max(...palavrasErradas.map((p) => p.ocorrencias), 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">
      <header className="bg-white/90 backdrop-blur border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Logo size="sm" />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl truncate">Morfoblocos Digital</h1>
              <div className="text-xs sm:text-sm text-muted-foreground">Painel do Professor</div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-sm text-muted-foreground">Prof.</div>
              <div>{usuario?.first_name?.trim() || usuario?.username}</div>
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
        {loading && (
          <div className="flex items-center justify-center gap-2 py-20 text-muted-foreground">
            <Loader2 className="w-6 h-6 animate-spin" /> Carregando relatório...
          </div>
        )}

        {!loading && error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && relatorio && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
              {[
                { icon: Users, label: 'Alunos', value: String(relatorio.total_alunos), bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
                { icon: TrendingUp, label: 'Taxa de Acerto', value: `${relatorio.taxa_acerto}%`, bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-400' },
                { icon: Award, label: 'Alto Desempenho', value: String(altoDesempenho), bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500' },
                { icon: AlertCircle, label: 'Precisam Ajuda', value: String(precisamAjuda), bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500' },
              ].map((stat, i) => (
                <div key={i} className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border-l-4 ${stat.border} hover:shadow-xl transition-shadow`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1 truncate">{stat.label}</div>
                      <div className="text-xl sm:text-3xl">{stat.value}</div>
                    </div>
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 ${stat.bg} rounded-full flex items-center justify-center shrink-0`}>
                      <stat.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${stat.text}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gráfico + Resumo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
              {/* Palavras mais erradas (US25) */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div>
                    <h3 className="text-base sm:text-xl">Palavras que os alunos mais erram</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Combinações inválidas mais submetidas</p>
                  </div>
                  <div className="px-2 sm:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                    Foco em revisão
                  </div>
                </div>
                {palavrasErradas.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12 text-sm">
                    Os alunos ainda não submeteram combinações inválidas.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={palavrasErradas} layout="vertical" margin={{ left: 0, right: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" allowDecimals={false} />
                      <YAxis type="category" dataKey="palavra" width={100} />
                      <Tooltip />
                      <Bar dataKey="ocorrencias" name="Ocorrências" radius={[0, 8, 8, 0]}>
                        {palavrasErradas.map((entry, idx) => {
                          const intensity = entry.ocorrencias / maxOcorrencias;
                          const color = intensity > 0.7 ? '#ef4444' : intensity > 0.4 ? '#fbbf24' : '#3b82f6';
                          return <Cell key={idx} fill={color} />;
                        })}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              {/* Resumo geral */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-base sm:text-xl mb-3 sm:mb-4">Resumo Geral</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1"><span>Tentativas registradas</span><span>{relatorio.total_tentativas}</span></div>
                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-400 h-full" style={{ width: `${Math.min(100, relatorio.total_tentativas * 5)}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><span>Taxa de acerto</span><span>{relatorio.taxa_acerto}%</span></div>
                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-400 h-full" style={{ width: `${relatorio.taxa_acerto}%` }} />
                    </div>
                  </div>
                  <div className="pt-2 text-sm opacity-90">
                    {palavrasErradas[0]
                      ? `📌 A palavra "${palavrasErradas[0].palavra}" é a que mais gera erros.`
                      : '📌 Aguardando submissões dos alunos.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de alunos (US24) */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6">
              <h3 className="text-base sm:text-xl mb-3 sm:mb-4">Acompanhamento dos Alunos</h3>
              {alunos.length === 0 ? (
                <div className="text-center text-muted-foreground py-6 sm:py-8 text-sm">
                  Nenhum aluno cadastrado ainda.
                </div>
              ) : (
                <>
                  {/* Mobile: cards */}
                  <div className="sm:hidden space-y-3">
                    {alunos.map((a) => {
                      const { status, color, barColor } = statusDoAluno(a.respondidas, a.aproveitamento);
                      return (
                        <div key={a.id} className="border border-border rounded-xl p-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-9 h-9 ${barColor} rounded-full flex items-center justify-center text-white text-sm`}>
                              {a.nome.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm truncate">{a.nome}</div>
                              <div className="text-xs text-muted-foreground truncate">{a.email}</div>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${color}`}>{status}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{a.respondidas} resp.</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                              <div className={`${barColor} h-full`} style={{ width: `${a.aproveitamento}%` }} />
                            </div>
                            <span>{a.aproveitamento}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Desktop: tabela */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border text-left text-sm text-muted-foreground">
                          <th className="pb-3">Aluno</th>
                          <th className="pb-3">Respondidas</th>
                          <th className="pb-3">Aproveitamento</th>
                          <th className="pb-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alunos.map((a) => {
                          const { status, color, barColor } = statusDoAluno(a.respondidas, a.aproveitamento);
                          return (
                            <tr key={a.id} className="border-b border-border last:border-0">
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 ${barColor} rounded-full flex items-center justify-center text-white`}>
                                    {a.nome.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div>{a.nome}</div>
                                    <div className="text-xs text-muted-foreground">{a.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">{a.respondidas}</td>
                              <td className="py-4">
                                <div className="flex items-center gap-3 min-w-40">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div className={`${barColor} h-full`} style={{ width: `${a.aproveitamento}%` }} />
                                  </div>
                                  <span className="text-sm w-10">{a.aproveitamento}%</span>
                                </div>
                              </td>
                              <td className="py-4">
                                <span className={`text-xs px-3 py-1 rounded-full ${color}`}>{status}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
