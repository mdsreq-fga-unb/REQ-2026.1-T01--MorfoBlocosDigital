import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff, User, GraduationCap, Loader2 } from 'lucide-react';
import { Logo } from './Logo';
import { useAppState } from '../state/AppState';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'aluno' | 'professor'>('aluno');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAppState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // O "tipo" que decide o redirect vem do backend (/auth/me/),
      // não do seletor Aluno/Professor do formulário.
      const usuario = await login(email, password);
      if (usuario.tipo === 'professor') {
        navigate('/professor/dashboard');
      } else {
        navigate('/aluno/dashboard');
      }
    } catch (err: unknown) {
      // 401 = credenciais inválidas; qualquer outra coisa = falha genérica.
      const status =
        typeof err === 'object' && err !== null && 'response' in err
          ? (err as { response?: { status?: number } }).response?.status
          : undefined;
      if (status === 401) {
        setError('Email ou senha incorretos.');
      } else {
        setError('Não foi possível entrar. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo size="cover" />
            </div>
            <h1 className="text-3xl mb-2">Morfoblocos Digital</h1>
            <p className="text-muted-foreground">Entre para continuar sua aprendizagem</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-3">Tipo de Conta</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('aluno')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    userType === 'aluno'
                      ? 'border-primary bg-blue-50'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <User className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm">Aluno</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('professor')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    userType === 'professor'
                      ? 'border-primary bg-blue-50'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm">Professor</div>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                <span>Lembrar de mim</span>
              </label>
              <Link to="/esqueci-senha" className="text-primary hover:underline">
                Esqueci a senha
              </Link>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Não tem uma conta? </span>
            <Link to="/cadastro" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
