import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, BookOpen, CheckCircle, PlayCircle } from 'lucide-react';

type Lesson = { titulo: string; conteudo: string };
type Module = {
  id: number;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  color: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    id: 1,
    title: 'Introdução à Morfologia',
    description: 'Aprenda os conceitos básicos de morfologia e estrutura das palavras.',
    duration: '15 min',
    completed: true,
    color: 'bg-blue-600',
    lessons: [
      {
        titulo: 'O que é morfologia?',
        conteudo:
          'A morfologia é a parte da gramática que estuda a estrutura e a formação das palavras. Ela analisa as menores unidades que carregam significado, chamadas morfemas, e a maneira como elas se combinam para formar palavras.',
      },
      {
        titulo: 'Estrutura das palavras',
        conteudo:
          'Uma palavra pode ser dividida em partes menores. Em "infeliz", por exemplo, temos o prefixo "in-" (que indica negação) e o radical "feliz". Reconhecer essas partes ajuda a entender o significado e a escrita das palavras.',
      },
      {
        titulo: 'Tipos de morfemas',
        conteudo:
          'Os principais morfemas são: o radical (parte central que carrega o significado), o prefixo (vem antes do radical) e o sufixo (vem depois do radical). Existem ainda as desinências, que indicam gênero, número e flexão dos verbos.',
      },
    ],
  },
  {
    id: 2,
    title: 'Prefixos',
    description: 'Entenda como os prefixos modificam o significado das palavras.',
    duration: '20 min',
    completed: true,
    color: 'bg-red-500',
    lessons: [
      {
        titulo: 'Definição de prefixo',
        conteudo:
          'Prefixo é o morfema que se coloca antes do radical para formar uma nova palavra, alterando seu significado. Exemplo: "des-" + "fazer" = "desfazer".',
      },
      {
        titulo: 'Prefixos de negação',
        conteudo:
          'Alguns prefixos indicam negação ou oposição, como "in-" (infeliz), "des-" (desleal) e "a-" (amoral). Eles invertem ou negam o sentido do radical.',
      },
      {
        titulo: 'Prefixos de origem latina e grega',
        conteudo:
          'Muitos prefixos vêm do latim e do grego: "bi-" (dois), "tri-" (três), "re-" (de novo, como em refazer) e "pré-" (antes). Conhecê-los ajuda a deduzir o significado de palavras novas.',
      },
    ],
  },
  {
    id: 3,
    title: 'Radicais',
    description: 'Descubra a parte central que carrega o significado das palavras.',
    duration: '25 min',
    completed: false,
    color: 'bg-blue-600',
    lessons: [
      {
        titulo: 'O que é radical',
        conteudo:
          'Radical é a parte da palavra que carrega o significado principal e é comum a toda uma família de palavras. Em "pedra", "pedreiro" e "pedregulho", o radical é "pedr-".',
      },
      {
        titulo: 'Família de palavras',
        conteudo:
          'Família de palavras é o conjunto de palavras formadas a partir do mesmo radical. Do radical "flor-", por exemplo, temos florista, floreira, florescer e floricultura.',
      },
      {
        titulo: 'Radicais cultos',
        conteudo:
          'Radicais cultos vêm do grego e do latim e formam muitas palavras técnicas: "bio-" (vida), "geo-" (terra) e "tele-" (distância), como em biologia, geografia e telefone.',
      },
    ],
  },
  {
    id: 4,
    title: 'Sufixos',
    description: 'Saiba como os sufixos formam novas palavras a partir de radicais.',
    duration: '20 min',
    completed: false,
    color: 'bg-yellow-500',
    lessons: [
      {
        titulo: 'Sufixos nominais',
        conteudo:
          'Sufixos nominais formam substantivos e adjetivos a partir de outras palavras. Exemplos: "-eiro" (pedreiro), "-dade" (felicidade) e "-oso" (amoroso).',
      },
      {
        titulo: 'Sufixos verbais',
        conteudo:
          'Sufixos verbais formam verbos. Exemplos: "-izar" (realizar), "-ear" (passear) e "-ecer" (anoitecer).',
      },
      {
        titulo: 'Sufixos diminutivos e aumentativos',
        conteudo:
          'O sufixo "-inho/-zinho" forma o diminutivo (amorzinho, casinha) e pode indicar afeto. Já o sufixo "-ão/-zão" forma o aumentativo (casarão, livrão).',
      },
    ],
  },
  {
    id: 5,
    title: 'Formação de Palavras',
    description: 'Domine os processos de derivação e composição de palavras.',
    duration: '30 min',
    completed: false,
    color: 'bg-red-500',
    lessons: [
      {
        titulo: 'Derivação prefixal',
        conteudo:
          'Na derivação prefixal, uma nova palavra é formada acrescentando um prefixo ao radical. Exemplo: "in-" + "feliz" = "infeliz".',
      },
      {
        titulo: 'Derivação sufixal',
        conteudo:
          'Na derivação sufixal, a nova palavra é formada acrescentando um sufixo ao radical. Exemplo: "feliz" + "-mente" = "felizmente".',
      },
      {
        titulo: 'Composição',
        conteudo:
          'Na composição, duas ou mais palavras se unem para formar uma nova. Pode ser por justaposição (guarda-chuva) ou por aglutinação (planalto = plano + alto).',
      },
    ],
  },
];

export function LearningScreen() {
  const [expanded, setExpanded] = useState<number | null>(1);
  // Aula aberta dentro de um módulo, identificada por "moduloId-indice".
  const [openLesson, setOpenLesson] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-3 sm:p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <Link to="/aluno/dashboard" className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground shrink-0">
            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Voltar</span>
          </Link>
          <h1 className="text-lg sm:text-2xl text-center">Área de Aprendizagem</h1>
          <div className="w-8 sm:w-20" />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-xl">
          <h2 className="text-xl sm:text-2xl mb-2">Trilha de Aprendizagem</h2>
          <p className="text-sm sm:text-base opacity-90 mb-3 sm:mb-4">Domine a morfologia em 5 módulos completos</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
              <div className="bg-yellow-400 h-full" style={{ width: '40%' }} />
            </div>
            <span>2/5 módulos</span>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === mod.id ? null : mod.id)}
                className="w-full p-3 sm:p-6 flex items-center gap-3 sm:gap-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${mod.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {mod.completed ? (
                    <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  ) : (
                    <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                    <span className="text-xs sm:text-sm text-muted-foreground">Módulo {mod.id}</span>
                    {mod.completed && (
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                        Concluído
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-xl mb-0.5 sm:mb-1">{mod.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{mod.description}</p>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-sm text-muted-foreground">{mod.duration}</div>
                </div>
              </button>

              {expanded === mod.id && (
                <div className="border-t border-border p-3 sm:p-6 bg-gray-50">
                  <h4 className="text-sm sm:text-base mb-2 sm:mb-3">Aulas deste módulo:</h4>
                  <div className="space-y-2">
                    {mod.lessons.map((lesson, idx) => {
                      const key = `${mod.id}-${idx}`;
                      const isOpen = openLesson === key;
                      return (
                        <div key={idx} className="bg-white rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenLesson(isOpen ? null : key)}
                            className="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 text-left hover:bg-gray-50 transition-colors"
                          >
                            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                            <span className="flex-1 text-sm sm:text-base">{lesson.titulo}</span>
                            <span className="text-xs sm:text-sm text-primary">{isOpen ? 'Fechar' : 'Ler'}</span>
                          </button>
                          {isOpen && (
                            <p className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {lesson.conteudo}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
