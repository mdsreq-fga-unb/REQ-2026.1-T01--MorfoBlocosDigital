import type { ReactNode } from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router';
import { AppStateProvider, useAppState } from './state/AppState';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
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

export default function App() {
  return (
    <MemoryRouter initialEntries={['/login']}>
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/esqueci-senha" element={<ForgotPassword />} />

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
