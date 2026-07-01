import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Plus, Trash2, Loader2 } from 'lucide-react';
import { api } from '../../lib/api';

type Tab = 'morfemas' | 'palavras' | 'atividades';

type Morfema = { id: number; texto: string; tipo: 'prefixo' | 'radical' | 'sufixo'; cor: string };
type Palavra = { id: number; texto: string; processo_morfologico: string };
type Atividade = { id: number; titulo: string; tipo: string; nivel: number };
type PerguntaForm = { enunciado: string; alternativas: string[]; correta: number; explicacao: string; topico: string };

const COR_POR_TIPO: Record<Morfema['tipo'], string> = {
  prefixo: 'bg-red-500',
  radical: 'bg-blue-600',
  sufixo: 'bg-yellow-500',
};

const perguntaVazia = (): PerguntaForm => ({
  enunciado: '',
  alternativas: ['', '', '', ''],
  correta: 0,
  explicacao: '',
  topico: '',
});

export function ManageContent() {
  const [tab, setTab] = useState<Tab>('morfemas');
  const [reloadTick, setReloadTick] = useState(0);
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);

  const [morfemas, setMorfemas] = useState<Morfema[]>([]);
  const [palavras, setPalavras] = useState<Palavra[]>([]);
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Formulário Morfema
  const [mTexto, setMTexto] = useState('');
  const [mTipo, setMTipo] = useState<Morfema['tipo']>('prefixo');
  // Formulário Palavra
  const [pTexto, setPTexto] = useState('');
  const [pProcesso, setPProcesso] = useState('');
  // Formulário Atividade
  const [aTitulo, setATitulo] = useState('');
  const [aTipo, setATipo] = useState<'quiz' | 'montagem'>('quiz');
  const [aNivel, setANivel] = useState(1);
  const [aPerguntas, setAPerguntas] = useState<PerguntaForm[]>([perguntaVazia()]);

  useEffect(() => {
    let active = true;
    const url = tab === 'morfemas' ? '/morfemas/' : tab === 'palavras' ? '/palavras/' : '/atividades/';
    api
      .get(url)
      .then(({ data }) => {
        if (!active) return;
        const lista = Array.isArray(data) ? data : (data?.results ?? []);
        if (tab === 'morfemas') setMorfemas(lista);
        else if (tab === 'palavras') setPalavras(lista);
        else setAtividades(lista);
      })
      .catch((err) => {
        console.error('Falha ao carregar:', err);
        if (active) setErro('Não foi possível carregar a lista.');
      })
      .finally(() => {
        if (active) setCarregando(false);
      });
    return () => {
      active = false;
    };
  }, [tab, reloadTick]);

  const trocarTab = (t: Tab) => {
    setTab(t);
    setErro(null);
    setCarregando(true);
  };

  const recarregar = () => setReloadTick((t) => t + 1);

  const remover = async (url: string) => {
    if (!window.confirm('Tem certeza que deseja excluir? Esta ação não pode ser desfeita.')) return;
    try {
      await api.delete(url);
      recarregar();
    } catch (err) {
      console.error('Falha ao excluir:', err);
      setErro('Não foi possível excluir. Tente novamente.');
    }
  };

  const addMorfema = async () => {
    if (!mTexto.trim()) return;
    setSalvando(true);
    setErro(null);
    try {
      await api.post('/morfemas/', { texto: mTexto.trim(), tipo: mTipo, cor: COR_POR_TIPO[mTipo] });
      setMTexto('');
      recarregar();
    } catch {
      setErro('Não foi possível adicionar o morfema.');
    } finally {
      setSalvando(false);
    }
  };

  const addPalavra = async () => {
    if (!pTexto.trim() || !pProcesso.trim()) return;
    setSalvando(true);
    setErro(null);
    try {
      await api.post('/palavras/', { texto: pTexto.trim().toLowerCase(), processo_morfologico: pProcesso.trim() });
      setPTexto('');
      setPProcesso('');
      recarregar();
    } catch {
      setErro('Não foi possível adicionar a palavra (talvez já exista).');
    } finally {
      setSalvando(false);
    }
  };

  const addAtividade = async () => {
    if (!aTitulo.trim()) return;
    const perguntas = aTipo === 'quiz'
      ? aPerguntas
          .filter((p) => p.enunciado.trim() && p.alternativas.every((a) => a.trim()))
          .map((p) => ({ ...p, enunciado: p.enunciado.trim() }))
      : [];
    if (aTipo === 'quiz' && perguntas.length === 0) {
      setErro('Adicione pelo menos uma pergunta completa (enunciado + 4 alternativas).');
      return;
    }
    setSalvando(true);
    setErro(null);
    try {
      await api.post('/atividades/', { titulo: aTitulo.trim(), tipo: aTipo, nivel: aNivel, perguntas });
      setATitulo('');
      setANivel(1);
      setAPerguntas([perguntaVazia()]);
      recarregar();
    } catch {
      setErro('Não foi possível adicionar a atividade.');
    } finally {
      setSalvando(false);
    }
  };

  // Helpers do builder de perguntas
  const setPergunta = (i: number, patch: Partial<PerguntaForm>) =>
    setAPerguntas((ps) => ps.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));
  const setAlternativa = (i: number, j: number, valor: string) =>
    setAPerguntas((ps) => ps.map((p, idx) => (idx === i ? { ...p, alternativas: p.alternativas.map((a, k) => (k === j ? valor : a)) } : p)));

  const inputCls = 'w-full px-3 py-2 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-3 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <Link to="/professor/dashboard" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Voltar</span>
          </Link>
          <h1 className="text-lg sm:text-2xl text-center">Gerenciar Conteúdo</h1>
          <div className="w-8 sm:w-20" />
        </div>

        {/* Abas */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {([['morfemas', 'Morfemas'], ['palavras', 'Palavras'], ['atividades', 'Atividades']] as [Tab, string][]).map(([t, label]) => (
            <button
              key={t}
              onClick={() => trocarTab(t)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm transition-all ${
                tab === t ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' : 'bg-white hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {erro && (
          <div className="p-3 mb-4 bg-red-50 border-l-4 border-red-500 rounded-lg text-sm text-red-700">{erro}</div>
        )}

        {/* ---------- MORFEMAS ---------- */}
        {tab === 'morfemas' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-lg mb-3">Adicionar Morfema</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <input value={mTexto} onChange={(e) => setMTexto(e.target.value)} placeholder="Texto (ex: in)" className={inputCls} />
                <select value={mTipo} onChange={(e) => setMTipo(e.target.value as Morfema['tipo'])} className={`${inputCls} sm:w-48`}>
                  <option value="prefixo">Prefixo</option>
                  <option value="radical">Radical</option>
                  <option value="sufixo">Sufixo</option>
                </select>
                <button onClick={addMorfema} disabled={salvando || !mTexto.trim()} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2 shrink-0">
                  {salvando ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />} Adicionar
                </button>
              </div>
            </div>
            <ListaCard carregando={carregando} vazio={morfemas.length === 0} vazioMsg="Nenhum morfema cadastrado.">
              {morfemas.map((m) => (
                <li key={m.id} className="flex items-center gap-3 p-3 border-b border-border last:border-0">
                  <span className={`${m.cor} text-white px-3 py-1 rounded-md text-sm`}>{m.texto}</span>
                  <span className="text-sm text-muted-foreground flex-1 capitalize">{m.tipo}</span>
                  <button onClick={() => remover(`/morfemas/${m.id}/`)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                </li>
              ))}
            </ListaCard>
          </div>
        )}

        {/* ---------- PALAVRAS ---------- */}
        {tab === 'palavras' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-lg mb-3">Adicionar Palavra Válida</h2>
              <div className="space-y-3">
                <input value={pTexto} onChange={(e) => setPTexto(e.target.value)} placeholder="Palavra (ex: infelizmente)" className={inputCls} />
                <input value={pProcesso} onChange={(e) => setPProcesso(e.target.value)} placeholder="Processo morfológico (ex: in + feliz + mente)" className={inputCls} />
                <button onClick={addPalavra} disabled={salvando || !pTexto.trim() || !pProcesso.trim()} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2">
                  {salvando ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />} Adicionar
                </button>
              </div>
            </div>
            <ListaCard carregando={carregando} vazio={palavras.length === 0} vazioMsg="Nenhuma palavra cadastrada.">
              {palavras.map((p) => (
                <li key={p.id} className="flex items-center gap-3 p-3 border-b border-border last:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">{p.texto}</div>
                    <div className="text-xs text-muted-foreground truncate">{p.processo_morfologico}</div>
                  </div>
                  <button onClick={() => remover(`/palavras/${p.id}/`)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                </li>
              ))}
            </ListaCard>
          </div>
        )}

        {/* ---------- ATIVIDADES ---------- */}
        {tab === 'atividades' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-base sm:text-lg mb-3">Adicionar Atividade</h2>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input value={aTitulo} onChange={(e) => setATitulo(e.target.value)} placeholder="Título" className={inputCls} />
                <select value={aTipo} onChange={(e) => setATipo(e.target.value as 'quiz' | 'montagem')} className={`${inputCls} sm:w-40`}>
                  <option value="quiz">Quiz</option>
                  <option value="montagem">Montagem</option>
                </select>
                <select value={aNivel} onChange={(e) => setANivel(Number(e.target.value))} className={`${inputCls} sm:w-32`}>
                  <option value={1}>Nível 1</option>
                  <option value={2}>Nível 2</option>
                  <option value={3}>Nível 3</option>
                </select>
              </div>

              {aTipo === 'quiz' && (
                <div className="space-y-3">
                  {aPerguntas.map((p, i) => (
                    <div key={i} className="border border-border rounded-xl p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Pergunta {i + 1}</span>
                        {aPerguntas.length > 1 && (
                          <button onClick={() => setAPerguntas((ps) => ps.filter((_, idx) => idx !== i))} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        )}
                      </div>
                      <input value={p.enunciado} onChange={(e) => setPergunta(i, { enunciado: e.target.value })} placeholder="Enunciado" className={inputCls} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.alternativas.map((alt, j) => (
                          <label key={j} className="flex items-center gap-2">
                            <input type="radio" name={`correta-${i}`} checked={p.correta === j} onChange={() => setPergunta(i, { correta: j })} className="shrink-0" />
                            <input value={alt} onChange={(e) => setAlternativa(i, j, e.target.value)} placeholder={`Alternativa ${j + 1}`} className={inputCls} />
                          </label>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">Marque o círculo da alternativa correta.</p>
                      <input value={p.topico} onChange={(e) => setPergunta(i, { topico: e.target.value })} placeholder="Tópico (ex: Prefixos)" className={inputCls} />
                      <input value={p.explicacao} onChange={(e) => setPergunta(i, { explicacao: e.target.value })} placeholder="Explicação (opcional)" className={inputCls} />
                    </div>
                  ))}
                  <button onClick={() => setAPerguntas((ps) => [...ps, perguntaVazia()])} className="text-sm text-primary hover:underline flex items-center gap-1">
                    <Plus className="w-4 h-4" /> Adicionar pergunta
                  </button>
                </div>
              )}

              <button onClick={addAtividade} disabled={salvando || !aTitulo.trim()} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2">
                {salvando ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />} Criar Atividade
              </button>
            </div>
            <ListaCard carregando={carregando} vazio={atividades.length === 0} vazioMsg="Nenhuma atividade cadastrada.">
              {atividades.map((a) => (
                <li key={a.id} className="flex items-center gap-3 p-3 border-b border-border last:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm truncate">{a.titulo}</div>
                    <div className="text-xs text-muted-foreground capitalize">{a.tipo} · Nível {a.nivel}</div>
                  </div>
                  <button onClick={() => remover(`/atividades/${a.id}/`)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                </li>
              ))}
            </ListaCard>
          </div>
        )}
      </div>
    </div>
  );
}

function ListaCard({ carregando, vazio, vazioMsg, children }: { carregando: boolean; vazio: boolean; vazioMsg: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {carregando ? (
        <div className="flex items-center justify-center gap-2 py-10 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin" /> Carregando...
        </div>
      ) : vazio ? (
        <div className="text-center text-muted-foreground py-10 text-sm">{vazioMsg}</div>
      ) : (
        <ul>{children}</ul>
      )}
    </div>
  );
}
