import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Topic = 'Prefixos' | 'Radicais' | 'Sufixos' | 'Composição' | 'Derivação';

export type HistoryItem = {
  id: string;
  studentId: string;
  question: string;
  topic: Topic;
  correct: boolean;
  date: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  classId: string;
};

export type Turma = {
  id: string;
  name: string;
  professorId: string;
  serie: string;
};

type State = {
  currentStudentId: string;
  professorId: string;
  turmas: Turma[];
  students: Student[];
  history: HistoryItem[];
  addTurma: (name: string, serie: string) => void;
  addStudent: (name: string, email: string, classId: string) => void;
  addHistory: (item: Omit<HistoryItem, 'id' | 'date' | 'studentId'>) => void;
};

const seedTurmas: Turma[] = [
  { id: 't1', name: '6º Ano A', professorId: 'p1', serie: '6º Ano' },
  { id: 't2', name: '7º Ano B', professorId: 'p1', serie: '7º Ano' },
];

const seedStudents: Student[] = [
  { id: 's1', name: 'Maria Silva', email: 'maria@escola.com', classId: 't1' },
  { id: 's2', name: 'João Santos', email: 'joao@escola.com', classId: 't1' },
  { id: 's3', name: 'Ana Costa', email: 'ana@escola.com', classId: 't1' },
  { id: 's4', name: 'Pedro Lima', email: 'pedro@escola.com', classId: 't2' },
  { id: 's5', name: 'Júlia Souza', email: 'julia@escola.com', classId: 't2' },
];

const seedHistory: HistoryItem[] = [
  { id: 'h1', studentId: 's1', question: 'Qual é o prefixo de "infeliz"?', topic: 'Prefixos', correct: true, date: '2026-05-20' },
  { id: 'h2', studentId: 's1', question: 'Qual é o radical de "pedreiro"?', topic: 'Radicais', correct: false, date: '2026-05-21' },
  { id: 'h3', studentId: 's1', question: 'Sufixo de "amorzinho"?', topic: 'Sufixos', correct: true, date: '2026-05-22' },
  { id: 'h4', studentId: 's1', question: 'Composição de "guarda-chuva"?', topic: 'Composição', correct: false, date: '2026-05-23' },
  { id: 'h5', studentId: 's1', question: 'Derivação de "felizmente"?', topic: 'Derivação', correct: false, date: '2026-05-24' },
  { id: 'h6', studentId: 's2', question: 'Radical de "casarão"?', topic: 'Radicais', correct: false, date: '2026-05-20' },
  { id: 'h7', studentId: 's2', question: 'Prefixo de "desleal"?', topic: 'Prefixos', correct: true, date: '2026-05-21' },
  { id: 'h8', studentId: 's2', question: 'Composição de "passatempo"?', topic: 'Composição', correct: false, date: '2026-05-22' },
  { id: 'h9', studentId: 's3', question: 'Sufixo de "lindamente"?', topic: 'Sufixos', correct: true, date: '2026-05-21' },
  { id: 'h10', studentId: 's3', question: 'Derivação de "refazer"?', topic: 'Derivação', correct: false, date: '2026-05-22' },
  { id: 'h11', studentId: 's4', question: 'Radical de "florista"?', topic: 'Radicais', correct: false, date: '2026-05-20' },
  { id: 'h12', studentId: 's4', question: 'Composição de "girassol"?', topic: 'Composição', correct: false, date: '2026-05-21' },
  { id: 'h13', studentId: 's5', question: 'Prefixo de "reescrever"?', topic: 'Prefixos', correct: true, date: '2026-05-20' },
  { id: 'h14', studentId: 's5', question: 'Derivação de "cantor"?', topic: 'Derivação', correct: false, date: '2026-05-22' },
];

const Ctx = createContext<State | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [turmas, setTurmas] = useState<Turma[]>(seedTurmas);
  const [students, setStudents] = useState<Student[]>(seedStudents);
  const [history, setHistory] = useState<HistoryItem[]>(seedHistory);
  const currentStudentId = 's1';
  const professorId = 'p1';

  const addTurma = (name: string, serie: string) => {
    setTurmas((t) => [...t, { id: `t${Date.now()}`, name, serie, professorId }]);
  };
  const addStudent = (name: string, email: string, classId: string) => {
    setStudents((s) => [...s, { id: `s${Date.now()}`, name, email, classId }]);
  };
  const addHistory = (item: Omit<HistoryItem, 'id' | 'date' | 'studentId'>) => {
    setHistory((h) => [
      ...h,
      { ...item, id: `h${Date.now()}-${Math.random()}`, studentId: currentStudentId, date: new Date().toISOString().slice(0, 10) },
    ]);
  };

  return (
    <Ctx.Provider value={{ currentStudentId, professorId, turmas, students, history, addTurma, addStudent, addHistory }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAppState() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAppState must be used within AppStateProvider');
  return v;
}
