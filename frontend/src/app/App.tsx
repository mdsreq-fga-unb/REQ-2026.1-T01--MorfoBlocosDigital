import { MemoryRouter, Routes, Route, Navigate } from 'react-router';
import { AppStateProvider } from './state/AppState';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { StudentDashboard } from './components/StudentDashboard';
import { QuestionsScreen } from './components/QuestionsScreen';
import { BlockJoining } from './components/BlockJoining';
import { LearningScreen } from './components/LearningScreen';
import { ProfessorDashboard } from './components/ProfessorDashboard';

export default function App() {
  return (
    <MemoryRouter initialEntries={['/login']}>
      <AppStateProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/esqueci-senha" element={<ForgotPassword />} />
        <Route path="/aluno/dashboard" element={<StudentDashboard />} />
        <Route path="/aluno/perguntas" element={<QuestionsScreen />} />
        <Route path="/aluno/blocos" element={<BlockJoining />} />
        <Route path="/aluno/aprendizagem" element={<LearningScreen />} />
        <Route path="/professor/dashboard" element={<ProfessorDashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      </AppStateProvider>
    </MemoryRouter>
  );
}
