import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Users, TrendingUp, Award, AlertCircle, LogOut, User, Plus, GraduationCap, X } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, Cell,
} from 'recharts';
import { Logo } from './Logo';
import { useAppState } from '../state/AppState';
import type { Topic } from '../state/AppState';

const TOPICS: Topic[] = ['Prefixos', 'Radicais', 'Sufixos', 'Composição', 'Derivação'];

export function ProfessorDashboard() {
  const { turmas, students, history, professorId, addTurma, addStudent, usuario } = useAppState();
  const myTurmas = turmas.filter((t) => t.professorId === professorId);
  const [selectedClassId, setSelectedClassId] = useState<string>(myTurmas[0]?.id ?? '');
  const [showTurmaModal, setShowTurmaModal] = useState(false);
  const [showAlunoModal, setShowAlunoModal] = useState(false);

  const [turmaName, setTurmaName] = useState('');
  const [turmaSerie, setTurmaSerie] = useState('');
  const [alunoName, setAlunoName] = useState('');
  const [alunoEmail, setAlunoEmail] = useState('');
  const [alunoClassId, setAlunoClassId] = useState(selectedClassId);

  const classStudents = useMemo(
    () => students.filter((s) => s.classId === selectedClassId),
    [students, selectedClassId]
  );
  const classStudentIds = classStudents.map((s) => s.id);
  const classHistory = useMemo(
    () => history.filter((h) => classStudentIds.includes(h.studentId)),
    [history, classStudentIds]
  );

  // Métricas
  const totalStudents = classStudents.length;
  const totalAnswers = classHistory.length;
  const correctAnswers = classHistory.filter((h) => h.correct).length;
  const avgPct = totalAnswers ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
  const concluidos = classStudents.filter((s) => {
    const sh = classHistory.filter((h) => h.studentId === s.id);
    return sh.length >= 3 && sh.filter((h) => h.correct).length / sh.length >= 0.8;
  }).length;
  const precisamAjuda = classStudents.filter((s) => {
    const sh = classHistory.filter((h) => h.studentId === s.id);
    return sh.length > 0 && sh.filter((h) => h.correct).length / sh.length < 0.5;
  }).length;

  // Gráfico de erros (ordenado decrescente)
  const errorsByTopic = TOPICS.map((topic) => {
    const items = classHistory.filter((h) => h.topic === topic);
    const erros = items.filter((h) => !h.correct).length;
    const acertos = items.filter((h) => h.correct).length;
    return { topico: topic, erros, acertos, total: items.length };
  })
    .filter((t) => t.total > 0)
    .sort((a, b) => b.erros - a.erros);

  const maxErros = Math.max(...errorsByTopic.map((e) => e.erros), 1);

  // Evolução semanal (mock baseado em datas)
  const evolutionData = (() => {
    const sorted = [...classHistory].sort((a, b) => a.date.localeCompare(b.date));
    const buckets: Record<string, { acertos: number; erros: number }> = {};
    sorted.forEach((h) => {
      buckets[h.date] = buckets[h.date] ?? { acertos: 0, erros: 0 };
      if (h.correct) buckets[h.date].acertos++;
      else buckets[h.date].erros++;
    });
    return Object.entries(buckets).map(([date, v]) => ({ date: date.slice(5), ...v }));
  })();

  const handleCreateTurma = () => {
    if (!turmaName.trim()) return;
    addTurma(turmaName, turmaSerie || 'Não definido');
    setTurmaName(''); setTurmaSerie(''); setShowTurmaModal(false);
  };

  const handleCreateAluno = () => {
    if (!alunoName.trim() || !alunoClassId) return;
    addStudent(alunoName, alunoEmail, alunoClassId);
    setAlunoName(''); setAlunoEmail(''); setShowAlunoModal(false);
  };

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
              <div>{usuario?.username}</div>
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
        {/* Seletor de Turma + Ações */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <span className="text-sm sm:text-base text-muted-foreground">Turma selecionada:</span>
            {myTurmas.length === 0 ? (
              <span className="text-muted-foreground italic">Nenhuma turma criada</span>
            ) : (
              <div className="flex flex-wrap gap-2">
                {myTurmas.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedClassId(t.id)}
                    className={`px-4 py-2 rounded-xl transition-all ${
                      selectedClassId === t.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowTurmaModal(true)}
              className="px-3 sm:px-4 py-2 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors flex items-center gap-1.5 sm:gap-2 shadow-md text-sm sm:text-base"
            >
              <Plus className="w-4 h-4" /> <span className="hidden xs:inline">Nova</span> Turma
            </button>
            <button
              onClick={() => { setAlunoClassId(selectedClassId); setShowAlunoModal(true); }}
              disabled={myTurmas.length === 0}
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-1.5 sm:gap-2 shadow-md disabled:opacity-50 text-sm sm:text-base"
            >
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Cadastrar</span> Aluno
            </button>
          </div>
        </div>

        {selectedClassId ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
              {[
                { icon: Users, label: 'Alunos na Turma', value: String(totalStudents), bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
                { icon: TrendingUp, label: 'Média da Turma', value: `${avgPct}%`, bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-400' },
                { icon: Award, label: 'Alto Desempenho', value: String(concluidos), bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500' },
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

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
              {/* Gráfico de erros — destaque para o que mais erram */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div>
                    <h3 className="text-base sm:text-xl">Onde os alunos mais erram</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Tópicos ordenados pelo número de erros</p>
                  </div>
                  <div className="px-2 sm:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                    Foco em revisão
                  </div>
                </div>
                {errorsByTopic.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12">
                    Esta turma ainda não respondeu nenhuma questão.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={errorsByTopic} layout="vertical" margin={{ left: 0, right: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="topico" width={100} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="erros" name="Erros" radius={[0, 8, 8, 0]}>
                        {errorsByTopic.map((entry, idx) => {
                          const intensity = entry.erros / maxErros;
                          const color = intensity > 0.7 ? '#ef4444' : intensity > 0.4 ? '#fbbf24' : '#3b82f6';
                          return <Cell key={idx} fill={color} />;
                        })}
                      </Bar>
                      <Bar dataKey="acertos" name="Acertos" fill="#86efac" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg">
                <h3 className="text-base sm:text-xl mb-3 sm:mb-4">Evolução por Data</h3>
                {evolutionData.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8 sm:py-12 text-sm">Sem dados ainda</div>
                ) : (
                  <ResponsiveContainer width="100%" height={220}>
                    <LineChart data={evolutionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="acertos" stroke="#2563eb" strokeWidth={3} name="Acertos" />
                      <Line type="monotone" dataKey="erros" stroke="#ef4444" strokeWidth={3} name="Erros" />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-base sm:text-xl mb-3 sm:mb-4">Resumo da Turma</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1"><span>Questões respondidas</span><span>{totalAnswers}</span></div>
                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-400 h-full" style={{ width: `${Math.min(100, totalAnswers * 5)}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1"><span>Taxa de acerto</span><span>{avgPct}%</span></div>
                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-400 h-full" style={{ width: `${avgPct}%` }} />
                    </div>
                  </div>
                  <div className="pt-2 text-sm opacity-90">
                    {errorsByTopic[0]
                      ? `📌 O tópico "${errorsByTopic[0].topico}" é o que mais precisa de atenção.`
                      : '📌 Aguardando respostas dos alunos.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de alunos */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6">
              <h3 className="text-base sm:text-xl mb-3 sm:mb-4">Acompanhamento dos Alunos</h3>
              {classStudents.length === 0 ? (
                <div className="text-center text-muted-foreground py-6 sm:py-8 text-sm">
                  Nenhum aluno cadastrado nesta turma. Use o botão "Cadastrar Aluno".
                </div>
              ) : (
                <>
                  {/* Mobile: cards */}
                  <div className="sm:hidden space-y-3">
                    {classStudents.map((s) => {
                      const sh = classHistory.filter((h) => h.studentId === s.id);
                      const total = sh.length;
                      const c = sh.filter((h) => h.correct).length;
                      const pct = total ? Math.round((c / total) * 100) : 0;
                      let status = 'Sem dados', color = 'bg-gray-200 text-gray-700', barColor = 'bg-gray-400';
                      if (total > 0) {
                        if (pct >= 80) { status = 'Excelente'; color = 'bg-blue-100 text-blue-700'; barColor = 'bg-blue-600'; }
                        else if (pct >= 65) { status = 'Bom'; color = 'bg-yellow-100 text-yellow-700'; barColor = 'bg-yellow-500'; }
                        else if (pct >= 50) { status = 'Regular'; color = 'bg-orange-100 text-orange-700'; barColor = 'bg-orange-500'; }
                        else { status = 'Precisa Ajuda'; color = 'bg-red-100 text-red-700'; barColor = 'bg-red-500'; }
                      }
                      return (
                        <div key={s.id} className="border border-border rounded-xl p-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-9 h-9 ${barColor} rounded-full flex items-center justify-center text-white text-sm`}>
                              {s.name.charAt(0)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm truncate">{s.name}</div>
                              <div className="text-xs text-muted-foreground truncate">{s.email}</div>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${color}`}>{status}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{total} resp.</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                              <div className={`${barColor} h-full`} style={{ width: `${pct}%` }} />
                            </div>
                            <span>{pct}%</span>
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
                        {classStudents.map((s) => {
                          const sh = classHistory.filter((h) => h.studentId === s.id);
                          const total = sh.length;
                          const c = sh.filter((h) => h.correct).length;
                          const pct = total ? Math.round((c / total) * 100) : 0;
                          let status = 'Sem dados', color = 'bg-gray-200 text-gray-700', barColor = 'bg-gray-400';
                          if (total > 0) {
                            if (pct >= 80) { status = 'Excelente'; color = 'bg-blue-100 text-blue-700'; barColor = 'bg-blue-600'; }
                            else if (pct >= 65) { status = 'Bom'; color = 'bg-yellow-100 text-yellow-700'; barColor = 'bg-yellow-500'; }
                            else if (pct >= 50) { status = 'Regular'; color = 'bg-orange-100 text-orange-700'; barColor = 'bg-orange-500'; }
                            else { status = 'Precisa Ajuda'; color = 'bg-red-100 text-red-700'; barColor = 'bg-red-500'; }
                          }
                          return (
                            <tr key={s.id} className="border-b border-border last:border-0">
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 ${barColor} rounded-full flex items-center justify-center text-white`}>
                                    {s.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div>{s.name}</div>
                                    <div className="text-xs text-muted-foreground">{s.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">{total}</td>
                              <td className="py-4">
                                <div className="flex items-center gap-3 min-w-40">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div className={`${barColor} h-full`} style={{ width: `${pct}%` }} />
                                  </div>
                                  <span className="text-sm w-10">{pct}%</span>
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
        ) : (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl mb-2">Crie sua primeira turma</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Você ainda não tem turmas. Clique em "Nova Turma" para começar.
            </p>
            <button
              onClick={() => setShowTurmaModal(true)}
              className="px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Plus className="w-5 h-5" /> Criar Turma
            </button>
          </div>
        )}
      </main>

      {/* Modal Nova Turma */}
      {showTurmaModal && (
        <Modal title="Criar Nova Turma" onClose={() => setShowTurmaModal(false)}>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Nome da Turma</label>
              <input
                value={turmaName}
                onChange={(e) => setTurmaName(e.target.value)}
                placeholder="Ex: 8º Ano C"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Série</label>
              <input
                value={turmaSerie}
                onChange={(e) => setTurmaSerie(e.target.value)}
                placeholder="Ex: 8º Ano"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              onClick={handleCreateTurma}
              className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              Criar Turma
            </button>
          </div>
        </Modal>
      )}

      {/* Modal Cadastrar Aluno */}
      {showAlunoModal && (
        <Modal title="Cadastrar Aluno" onClose={() => setShowAlunoModal(false)}>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Nome Completo</label>
              <input
                value={alunoName}
                onChange={(e) => setAlunoName(e.target.value)}
                placeholder="Nome do aluno"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                value={alunoEmail}
                onChange={(e) => setAlunoEmail(e.target.value)}
                placeholder="aluno@email.com"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Turma</label>
              <select
                value={alunoClassId}
                onChange={(e) => setAlunoClassId(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {myTurmas.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleCreateAluno}
              className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              Cadastrar Aluno
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center sm:p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
