import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, BookOpen, CheckCircle, PlayCircle } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: 'Introdução à Morfologia',
    description: 'Aprenda os conceitos básicos de morfologia e estrutura das palavras.',
    duration: '15 min',
    completed: true,
    color: 'bg-blue-600',
    lessons: ['O que é morfologia?', 'Estrutura das palavras', 'Tipos de morfemas'],
  },
  {
    id: 2,
    title: 'Prefixos',
    description: 'Entenda como os prefixos modificam o significado das palavras.',
    duration: '20 min',
    completed: true,
    color: 'bg-red-500',
    lessons: ['Definição de prefixo', 'Prefixos de negação', 'Prefixos de origem latina e grega'],
  },
  {
    id: 3,
    title: 'Radicais',
    description: 'Descubra a parte central que carrega o significado das palavras.',
    duration: '25 min',
    completed: false,
    color: 'bg-blue-600',
    lessons: ['O que é radical', 'Família de palavras', 'Radicais cultos'],
  },
  {
    id: 4,
    title: 'Sufixos',
    description: 'Saiba como os sufixos formam novas palavras a partir de radicais.',
    duration: '20 min',
    completed: false,
    color: 'bg-yellow-500',
    lessons: ['Sufixos nominais', 'Sufixos verbais', 'Sufixos diminutivos e aumentativos'],
  },
  {
    id: 5,
    title: 'Formação de Palavras',
    description: 'Domine os processos de derivação e composição de palavras.',
    duration: '30 min',
    completed: false,
    color: 'bg-red-500',
    lessons: ['Derivação prefixal', 'Derivação sufixal', 'Composição'],
  },
];

export function LearningScreen() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/aluno/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-5 h-5" /> Voltar
          </Link>
          <h1 className="text-2xl">Área de Aprendizagem</h1>
          <div className="w-20" />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 mb-6 shadow-xl">
          <h2 className="text-2xl mb-2">Trilha de Aprendizagem</h2>
          <p className="opacity-90 mb-4">Domine a morfologia em 5 módulos completos</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-yellow-400 h-full" style={{ width: '40%' }} />
            </div>
            <span>2/5 módulos</span>
          </div>
        </div>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === mod.id ? null : mod.id)}
                className="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className={`w-14 h-14 ${mod.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {mod.completed ? (
                    <CheckCircle className="w-7 h-7 text-white" />
                  ) : (
                    <BookOpen className="w-7 h-7 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">Módulo {mod.id}</span>
                    {mod.completed && (
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                        Concluído
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl mb-1">{mod.title}</h3>
                  <p className="text-muted-foreground text-sm">{mod.description}</p>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-sm text-muted-foreground">{mod.duration}</div>
                </div>
              </button>

              {expanded === mod.id && (
                <div className="border-t border-border p-6 bg-gray-50">
                  <h4 className="mb-3">Aulas deste módulo:</h4>
                  <div className="space-y-2 mb-4">
                    {mod.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <PlayCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="flex-1">{lesson}</span>
                        <span className="text-sm text-muted-foreground">~5 min</span>
                      </div>
                    ))}
                  </div>
                  <button className={`px-6 py-3 ${mod.color} text-white rounded-lg hover:opacity-90 transition-opacity`}>
                    {mod.completed ? 'Revisar Módulo' : 'Iniciar Módulo'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
