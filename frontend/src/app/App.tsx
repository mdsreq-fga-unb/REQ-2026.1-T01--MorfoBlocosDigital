import type { ReactNode } from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router';
import { AppStateProvider, useAppState } from './state/AppState';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/ResetPassword';
import { StudentDashboard } from './components/StudentDashboard';
import { QuestionsScreen } from './components/QuestionsScreen';
import { BlockJoining } from './components/BlockJoining';
import { LearningScreen } from './components/LearningScreen';
import { ProfessorDashboard } from './components/ProfessorDashboard';

// Guarda de rota: só renderiza o conteúdo se houver sessão (token).
// Quando a sessão expira, o AppState (que ouve AUTH_EXPIRED_EVENT) zera o
// token; isso re-renderiza este componente e dispara o redirect para /login.
function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAppState();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

// Como usamos MemoryRouter (não lê a URL do navegador), o link de redefinição
// enviado por email vem como hash-route (ex.: "/#/reset-senha?uid=..&token=..").
// Aqui lemos esse hash no boot para que o app já abra na tela de reset.
function getInitialEntries(): string[] {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash; // "#/reset-senha?uid=..&token=.."
    if (hash.startsWith('#/reset-senha')) {
      return [hash.slice(1)];
    }
  }
  return ['/login'];
}

export default function App() {
  return (
    <MemoryRouter initialEntries={getInitialEntries()}>
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/esqueci-senha" element={<ForgotPassword />} />
          <Route path="/reset-senha" element={<ResetPassword />} />

          {/* Rotas do aluno (protegidas) */}
          <Route
            path="/aluno/dashboard"
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/aluno/perguntas"
            element={
              <PrivateRoute>
                <QuestionsScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/aluno/blocos"
            element={
              <PrivateRoute>
                <BlockJoining />
              </PrivateRoute>
            }
          />
          <Route
            path="/aluno/aprendizagem"
            element={
              <PrivateRoute>
                <LearningScreen />
              </PrivateRoute>
            }
          />

          {/* Rotas do professor (protegidas) */}
          <Route
            path="/professor/dashboard"
            element={
              <PrivateRoute>
                <ProfessorDashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AppStateProvider>
    </MemoryRouter>
  );
}
